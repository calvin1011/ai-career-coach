const axios = require('axios');

module.exports = async function (context, req) {
    const resumeText = req.body?.resumeText;

    if (!resumeText) {
        context.res = {
            status: 400,
            body: { error: "Missing resumeText in request body." }
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
                        content: "You are a helpful career coach that asks insightful and tailored technical interview questions."
                    },
                    {
                        role: "user",
                        content: `Based on this resume or job title, generate 3 mock technical interview questions:\n\n${resumeText}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500,
                n: 1
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": apiKey
                }
            }
        );

        const questions = response.data.choices[0].message.content
            .trim()
            .split('\n')
            .filter(q => q.trim());  // remove empty strings

        context.res = {
            status: 200,
            body: { questions }
        };
    } catch (err) {
        context.log.error("OpenAI API error:", err.message);
        context.res = {
            status: 500,
            body: { error: "Failed to generate interview questions." }
        };
    }
};
