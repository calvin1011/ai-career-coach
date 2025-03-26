## 🤖 GitHub Copilot Usage Log

This document outlines how GitHub Copilot was used during the development of **AI Career Coach**, submitted to the Azure AI Hackathon.

---

## 🧠 Overview

GitHub Copilot was actively used to:
- Accelerate the development of Azure Functions
- Generate and refactor API input/output handling
- Suggest OpenAI prompt formats
- Create helper logic and improve code clarity
+ - Assist in parsing LLM responses using regular expressions

---

## ✨ Areas Where Copilot Helped

...

### 3. **Feedback Evaluation Function**

**File:** `evaluateAnswer/index.js`  
When typing a user question and answer evaluation structure, Copilot suggested breaking the feedback into:
- Relevance
- Tone
- Suggestions

This structure was adopted directly and used in the final prompt to Azure OpenAI.

+ Copilot also suggested using regular expressions like:
+ ```js
+ rawFeedback.match(/Relevance:\s*(.*)/i)
+ ```
+ to extract structured data from LLM responses into a clean JSON format.

...

---

## ✅ Summary

GitHub Copilot helped reduce our development time and gave us a creative edge during prompt engineering, endpoint design, feedback parsing, and documentation. This allowed us to focus on integrating Azure services effectively and improving the user experience of the app.
