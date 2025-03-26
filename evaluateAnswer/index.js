const axios = require('axios');

module.exports = async function (context, req) {
    const question = req.body?.question;
    const answer = req.body?.answer;

    if (!question || !answer) {
        context.res = {
            status: 400,
            body: { error: "Missing 'question' or 'answer' in request body." }
        };
        return;
    }

    try {
        const openaiEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
        const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_ID;
        const apiVersion = process.env.AZURE_OPENAI_API_VERSION;
        const apiKey = process.env.AZURE_OPENAI_API_KEY;

        const response = await axios.post(
            `${openaiEndpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`,
            {
                messages: [
                    {
                        role: "system",
                        content: "You are an expert interview coach providing detailed feedback on technical interview answers."
                    },
                    {
                        role: "user",
                        content: `Interview Question: "${question}"\n\nCandidate's Answer: "${answer}"\n\nPlease provide:
1. Relevance (High/Medium/Low),
2. Tone (Confident/Nervous/Neutral/etc.),
3. Suggestions for improvement.`
                    }
                ],
                temperature: 0.6,
                max_tokens: 500
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": apiKey
                }
            }
        );

        const rawFeedback = response.data.choices[0].message.content.trim();

        const feedback = {
            relevance: rawFeedback.match(/Relevance:\s*(.*)/i)?.[1]?.trim() || "Unknown",
            tone: rawFeedback.match(/Tone:\s*(.*)/i)?.[1]?.trim() || "Unknown",
            suggestions: rawFeedback.match(/Suggestions?:\s*([\s\S]*)/i)?.[1]?.trim() || "No suggestions provided"
        };

        context.res = {
            status: 200,
            body: { feedback }
        };
    } catch (err) {
        context.log.error("Error evaluating answer:", err.message);
        context.res = {
            status: 500,
            body: { error: "Failed to evaluate the answer." }
        };
    }
};
