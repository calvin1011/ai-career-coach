# 🧠 AI Career Coach

**AI Career Coach** is an AI-powered mock interview assistant that helps job seekers practice for technical interviews by generating personalized questions and offering instant, intelligent feedback on their answers. Built with **GitHub Copilot** and powered by **Azure OpenAI** and **Azure Functions**, this tool simulates a real interview experience to help users boost confidence and readiness.

---

##  Features

- Generate tailored technical interview questions from a resume or job title  
- Provide real-time feedback on candidate answers — relevance, tone, and suggestions  
- Built with GitHub Copilot, using modern serverless infrastructure  
- Designed with responsible AI practices in mind  

---

##  Use Case

Preparing for interviews is hard. Most job seekers don’t get enough practice or feedback.  
**AI Career Coach** simulates a mock interviewer, instantly generating custom technical questions and feedback — like having a coach in your pocket.

---

##  Tech Stack

| Tech                      | Purpose                                            |
|---------------------------|----------------------------------------------------|
| **Azure OpenAI**          | Generate interview questions and analyze responses |
| **Azure Functions**       | Host serverless endpoints                          |
| **Azure Text Analytics**  | Detect tone and sentiment                          |
| **GitHub Copilot**        | Accelerate development with AI-powered coding      |
| **Node.js** + **VS Code** | Backend logic & local dev                          |

---

##  API Endpoints

### 🔹 `POST /api/generateQuestions`

Generates 3 technical interview questions based on resume/job title.

**Request Body:**
```json
{
  "resumeText": "Experienced backend developer with expertise in Azure and Python..."
}
```

**Response:**
```json
{
  "questions": [
    "1. Describe a time you used Azure Functions in production.",
    "2. How do you manage API scalability?",
    "3. Explain your experience with CI/CD pipelines."
  ]
}
```

---

### 🔹 `POST /api/evaluateAnswer`

Evaluates an answer to an interview question based on relevance, tone, and quality.

**Request Body:**
```json
{
  "question": "How do you handle errors in a distributed system?",
  "answer": "I use centralized logging and monitoring tools like Azure Monitor..."
}
```

**Response:**
```json
{
  "feedback": "Relevance: High\nTone: Confident\nSuggestions: Include a specific example of a time you used Azure Monitor."
}
```

---

## 🛠️ Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/ai-career-coach.git
   cd ai-career-coach
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in the root:
   ```
   AZURE_OPENAI_API_KEY=your-openai-key
   AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
   AZURE_OPENAI_DEPLOYMENT_ID=your-deployment-id
   AZURE_OPENAI_API_VERSION=2023-12-01-preview
   ```

4. **Run locally with Azure Functions Core Tools:**
   ```bash
   func start
   ```

---

## 🤖 GitHub Copilot Usage

GitHub Copilot significantly accelerated development by:
- Generating function boilerplate for Azure Functions
- Designing API input/output formats
- Suggesting OpenAI prompts
- Refactoring logic and error handling

See [`copilot_log.md`](./copilot_log.md) for specific examples of Copilot suggestions used.

---

##  Responsible AI

We used Microsoft's Responsible AI best practices by:
- Prompting OpenAI to avoid biased, harmful, or non-inclusive content
- Monitoring outputs for safety and professionalism
- Avoiding collection or storage of sensitive user data

---

##  Demo Video

 **[Watch the Demo (YouTube/Vimeo link here)]**  
A short 3-minute walkthrough of the application, endpoints, and AI feedback in action.

---

##  Submission Details

Built for the [Azure AI Hackathon](https://azureaidev.devpost.com/)  
Created by: [Calvin Ssendawula]  
GitHub Repo: [https://github.com/calvin1011/ai-career-coach](https://github.com/calvin1011/ai-career-coach)

---

##  License

MIT License — free to use and build upon.

```

