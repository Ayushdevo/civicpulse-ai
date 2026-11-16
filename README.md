# 🏙️ CivicPulse AI

> **Smart Community Issue Intelligence — from complaint to decision, instantly.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://funny-kitsune-85a1df.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge)](https://github.com/Ayushdevo/civicpulse-ai)

### 🌐 Live Application

**https://funny-kitsune-85a1df.netlify.app/**

---

## 📖 Overview

**Prototype:** Reports and the example queue exist only in the current browser page. They are not transmitted to municipal authorities or saved after a reload. The scores are heuristic demonstrations, not validated emergency assessments.

CivicPulse AI is an intelligent civic issue triage platform that helps municipalities prioritize citizen complaints based on urgency, risk, and public impact.

Traditional complaint systems process reports in the order they are received, causing critical issues to wait behind routine requests. CivicPulse AI introduces an AI-powered prioritization layer that automatically classifies complaints, scores urgency, and creates a ranked action queue for faster decision-making.

Built for **Gen AI Academy APAC Edition — AI for Better Living and Smarter Communities**.

---

## 🚨 The Challenge

Every day, municipal authorities receive complaints such as:

* Potholes damaging vehicles
* Water leakages
* Broken streetlights
* Garbage accumulation
* Public safety hazards

Most systems suffer from:

❌ First-come-first-served processing

❌ No urgency assessment

❌ Manual categorization

❌ Delayed response to critical incidents

❌ Inefficient allocation of municipal resources

A burst water pipeline near a hospital should never be treated the same as a routine maintenance request.

---

## 💡 The Solution

CivicPulse AI transforms unstructured citizen reports into actionable intelligence.

Citizens simply describe an issue in natural language.

The AI system automatically:

✅ Identifies the responsible department

✅ Detects risk signals

✅ Calculates urgency scores

✅ Prioritizes reports

✅ Generates a ranked civic action queue

This enables authorities to focus on issues that have the greatest impact on public safety and community well-being.

---

## ✨ Core Features

### 🧠 Intelligent Issue Classification

Automatically categorizes complaints into:

| Department    | Examples                     |
| ------------- | ---------------------------- |
| Roads         | Potholes, road damage        |
| Water         | Leaks, pipe bursts           |
| Electrical    | Streetlights, exposed wiring |
| Sanitation    | Garbage, waste management    |
| Public Safety | Dangerous hazards            |

---

### ⚡ AI-Powered Urgency Scoring

Each complaint receives a priority score from **0–100**.

The scoring engine evaluates:

* Safety risks
* Impact severity
* Scale of disruption
* Sensitive locations
* Emergency indicators

---

### 📍 Context-Aware Prioritization

Location-sensitive scoring increases accuracy.

Example:

| Complaint                            | Priority |
| ------------------------------------ | -------- |
| Small pothole on side street         | Medium   |
| Large pothole near school entrance   | High     |
| Water leak near hospital access road | Critical |

---

### 📊 Dynamic Priority Queue

Issues are automatically ranked so decision-makers always see:

1. Highest impact issue
2. Highest risk issue
3. Most urgent issue

at the top of the queue.

---

### 🔍 Department-Based Filtering

Municipal staff can quickly filter reports by:

* Roads
* Water
* Electrical
* Sanitation
* Public Safety

for faster operational response.

---

## 🏗️ How It Works

```text
Citizen Reports Issue
          │
          ▼
Natural Language Input
          │
          ▼
AI Classification Engine
          │
 ┌────────┼────────┐
 │        │        │
 ▼        ▼        ▼
Category Risk   Urgency
Detection Score Detection
          │
          ▼
Priority Calculation
          │
          ▼
Ranked Civic Queue
          │
          ▼
Municipal Action
```

---

## 🎯 Example Scenario

### Citizen Report

> "Large pothole near the school gate. Vehicles are swerving into the bicycle lane to avoid it."

### AI Analysis

**Category:** Roads

**Risk Signals Detected:**

* School proximity
* Traffic disruption
* Vehicle safety risk

**Urgency Score:** 91/100

**Priority:** High

### Outcome

Issue is immediately moved near the top of the municipal action queue.

---

## 🛠️ Technology Stack

| Component                 | Technology           |
| ------------------------- | -------------------- |
| Frontend                  | HTML5                |
| Styling                   | CSS3                 |
| Logic                     | Vanilla JavaScript   |
| Deployment                | Netlify              |
| Classification            | Rule-Based AI Engine |
| Future AI Upgrade         | Gemini API           |
| Future Analytics          | BigQuery             |
| Future Intelligence Layer | Vertex AI            |

---

## 🤖 AI Architecture

### Current Prototype

The project uses a lightweight rule-based scoring engine that:

* Detects keywords
* Identifies departments
* Assigns urgency scores
* Prioritizes reports

This approach enables fast execution without external dependencies.

---

### Production-Scale Architecture

```text
Citizen Complaint
        │
        ▼
Gemini API
        │
        ▼
Structured Response

{
  "category": "Road",
  "urgency": "High",
  "score": 92
}

        │
        ▼
BigQuery Storage
        │
        ▼
City-Wide Analytics
        │
        ▼
Municipal Dashboard
```

---

## 📈 Potential Impact

### Citizens

* Faster issue resolution
* Increased transparency
* Better quality of life

### Municipal Authorities

* Smarter resource allocation
* Reduced response times
* Better operational efficiency

### Communities

* Safer public spaces
* Cleaner neighborhoods
* Stronger civic trust

---

## 🌍 Real-World Applications

### Road Infrastructure

* Potholes
* Road collapses
* Traffic hazards

### Water Management

* Pipe bursts
* Water shortages
* Leak detection

### Electrical Maintenance

* Broken streetlights
* Exposed wiring
* Power hazards

### Sanitation

* Overflowing bins
* Illegal dumping
* Health-risk waste

### Public Safety

* Fallen poles
* Dangerous structures
* Community hazards

---

## 🔮 Future Enhancements

### Phase 1

* Gemini-powered classification
* Image uploads
* Better urgency prediction

### Phase 2

* Interactive city maps
* GIS integration
* Complaint tracking

### Phase 3

* Predictive maintenance analytics
* Duplicate complaint detection
* Infrastructure risk forecasting

### Phase 4

* Mobile application
* Multi-language support
* Smart city integration

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/Ayushdevo/civicpulse-ai.git
```

Navigate to the project:

```bash
cd civicpulse-ai
```

Open:

```bash
index.html
```

No installation required.

No dependencies required.

Runs directly in any modern browser.

---

## 📷 Demo

### Live Project

🌐 https://funny-kitsune-85a1df.netlify.app/

Try submitting sample complaints and watch the queue dynamically prioritize civic issues based on urgency.

---

## 🏆 Why CivicPulse AI?

Most civic platforms collect complaints.

**CivicPulse AI helps governments decide what to fix first.**

By combining intelligent classification, urgency detection, and dynamic prioritization, CivicPulse AI transforms raw citizen reports into actionable decisions that improve urban living and public service delivery.

---

## 👨‍💻 Developer

**Ayush Tiwari**

B.Tech Electronics & Communication Engineering

AI • Machine Learning • Data Science • Smart Cities

GitHub: https://github.com/Ayushdevo

---

## 📜 License

MIT License

This project is open-source and available for educational, research, and community-impact initiatives.

---

### ⭐ If you found this project interesting, please consider starring the repository.

