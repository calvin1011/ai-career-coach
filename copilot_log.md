# 🤖 GitHub Copilot Usage Log

This document outlines how GitHub Copilot was used during the development of **AI Career Coach**, submitted to the Azure AI Hackathon.

---

##  Overview

GitHub Copilot was actively used to:
- Accelerate the development of Azure Functions
- Generate and refactor API input/output handling
- Suggest OpenAI prompt formats
- Create helper logic and improve code clarity

---

##  Areas Where Copilot Helped

### 1. **Azure Function Scaffolding**

**File:** `generateQuestions/index.js`  
Copilot auto-completed the boilerplate for the Azure Function including:
- `module.exports = async function (context, req) {...}`
- Basic validation for `req.body.resumeText`
- Try-catch block with error logging

### 2. **OpenAI Prompt Design**

**File:** `generateQuestions/index.js`  
Prompt inside the POST body to Azure OpenAI was inspired by Copilot suggestions.  
We typed:  
```javascript
content: "Based on this resume, generate 3 mock technical interview questions:"
```
Copilot auto-completed:
```javascript
"You are a helpful career coach that asks insightful and tailored technical interview questions."
```

This helped ensure better quality AI output.

### 3. **Feedback Evaluation Function**

**File:** `evaluateAnswer/index.js`  
When typing a user question and answer evaluation structure, Copilot suggested breaking the feedback into:
- Relevance
- Tone
- Suggestions

This structure was adopted directly and used in the final prompt to Azure OpenAI.

### 4. **Error Handling & Logging**

Throughout the code, Copilot suggested:
- Try-catch blocks
- Context-based response logging
- Status codes for missing inputs

### 5. **README.md Drafting**

Copilot provided suggestions for:
- Section formatting
- Markdown tables
- Instructional text

---

##  Copilot Saved Time By...

- Speeding up repetitive boilerplate writing (~40% faster)
- Helping explore OpenAI prompt variations
- Reducing the need to look up syntax or SDK methods
- Keeping flow state while building APIs

---

##  Summary

GitHub Copilot helped reduce our development time and gave us a creative edge during prompt engineering, endpoint design, and documentation. This allowed us to focus on integrating Azure services effectively and improving the quality of user interaction.

```
