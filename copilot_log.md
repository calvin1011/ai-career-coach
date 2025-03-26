# 🤖 GitHub Copilot Usage Log

This document outlines how GitHub Copilot was used during the development of **AI Career Coach**, submitted to the Azure AI Hackathon.

---

## 🧠 Overview

GitHub Copilot was actively used to:
- Accelerate the development of Azure Functions
- Generate and refactor API input/output handling
- Suggest OpenAI prompt formats
- Create helper logic and improve code clarity
- Assist in parsing LLM responses using regular expressions

---

## ✨ Areas Where Copilot Helped

### 1. Azure Function Scaffolding
**File:** `generateQuestions/index.js`  
Copilot auto-completed:
- The base structure of the HTTP-triggered function
- Input validation for `req.body.resumeText`
- Try-catch blocks and HTTP status handling

### 2. OpenAI Prompt Design
**File:** `generateQuestions/index.js`  
When prompted to create a request body for Azure OpenAI, Copilot helped refine the prompt:
```js
"You are a helpful career coach that asks insightful and tailored technical interview questions."
```

### 3. Feedback Evaluation Logic
**File:** `evaluateAnswer/index.js`  
Copilot:
- Suggested structuring feedback into `"Relevance"`, `"Tone"`, and `"Suggestions"`
- Helped craft the OpenAI prompt format
- Auto-completed regex patterns to extract feedback from raw LLM output:
```js
rawFeedback.match(/Relevance:\s*(.*)/i)
```

### 4. Error Handling & Debugging
Throughout both functions, Copilot assisted with:
- Logging OpenAI request errors
- Wrapping HTTP logic in try/catch blocks
- Cleaning output formatting

### 5. Documentation
Copilot helped write:
- Markdown formatting for `README.md`
- Tables and instructional steps for setup

---

## ✅ Summary

GitHub Copilot enabled rapid development and helped maintain flow by automating repetitive logic and formatting. It provided meaningful assistance in prompt crafting, code generation, and refining user input/output behavior, making this project production-ready in just two days.

```
