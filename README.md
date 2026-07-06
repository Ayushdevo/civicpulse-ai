# CivicPulse AI 🏙️

**Smart Community Issue Intelligence — from complaint to decision, instantly.**

Submitted for: Gen AI Academy APAC Edition — "AI for Better Living and Smarter Communities"

## Problem
Municipal bodies receive hundreds of citizen complaints (potholes, garbage, water leaks, broken streetlights) with no way to tell which ones are urgent. Reports pile up in the order they arrive, not the order they matter — a burst water pipe near a hospital waits behind a routine paint request.

## Solution
CivicPulse AI is a lightweight civic-reporting tool where citizens describe an issue in plain language. An AI triage layer:
1. **Classifies** the report into a department queue (Road, Sanitation, Water, Electrical, Safety)
2. **Scores urgency** (0–100) based on risk signals in the description (proximity to schools/hospitals, safety keywords, scale of impact)
3. **Re-ranks the live queue** in real time, so municipal staff always see the most urgent issue first

This turns unstructured citizen complaints into an actionable, prioritized decision feed — faster response to what actually matters.

## How it works
- Citizen submits a short description + location
- Text is analyzed against category and urgency signal sets
- Issue is scored, tagged, and inserted into the ranked public queue
- Staff/dashboard viewers filter by department and act top-down

## Tech
- Frontend: HTML/CSS/JS (single-page, framework-free for fast deployment)
- Classification logic: rule + keyword-weighted scoring engine (designed as a stand-in for a Vertex AI / Gemini text-classification + scoring pipeline in production)
- Production path: swap the local `classify()` function for a Gemini API call (structured JSON output: category, urgency, score) via Vertex AI, with BigQuery logging historical reports for trend analysis across a city/ward

## Run locally
Just open `index.html` in a browser — no build step, no dependencies.

## Team
Ayush Tiwari
