# Beyond Farming - AI Export Compliance Advisory Platform

A polished, hackathon-ready web prototype for export readiness and compliance advisory for farmers and agricultural vendors.

## Project Vision

Beyond Farming bridges the gap between local farming practices and global export buyer requirements. It predicts compliance risks before produce gets rejected in export markets, focusing on residue compliance, traceability, and certification readiness.

**Key Statement:** "Compliance Failure, Not Crop Failure"

## Features

- 🌍 **Export Risk Prediction** - AI-driven analysis of residue compliance and market-specific regulations
- 📊 **Traceability Summary** - Complete documentation of crop history and farming practices
- 🗣️ **Local Language Guidance** - Actionable recommendations in English and Telugu (and extensible to other languages)
- ✅ **Buyer Confidence Indicators** - Clear assessment of traceability, residue risk, and certification readiness

## Tech Stack

### Frontend
- React 18 with Vite
- JavaScript with modern ES modules
- Tailwind CSS for premium dark-themed UI
- Responsive, desktop-first design

### Backend
- FastAPI (Python)
- Single POST endpoint for analysis
- Mock AI engine (ready for real LLM integration)
- CORS-enabled for frontend communication

### Deployment
- Local state only
- No database required for MVP
- Easy to deploy on any cloud platform

## Project Structure

```
farming/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StepIndicator.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Assessment.jsx
│   │   │   └── Results.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── index.html
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env.example
└── README.md
```

## Setup Instructions

### Prerequisites
- **Node.js** (v18+) - for frontend
- **Python** (v3.8+) - for backend
- **pip** - Python package manager

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment (optional but recommended):**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server:**
   ```bash
   python app.py
   ```
   
   The backend will start at `http://localhost:8000`

   **API Documentation available at:**
   - Swagger UI: `http://localhost:8000/docs`
   - ReDoc: `http://localhost:8000/redoc`

### Frontend Setup

1. **In a new terminal, navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

### Running Together

1. Start the backend (from `backend/` directory):
   ```bash
   python app.py
   ```

2. In another terminal, start the frontend (from `frontend/` directory):
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## User Flow

### Page 1: Landing Page
- Project introduction and value proposition
- Feature highlights (3 core capabilities)
- Call-to-action buttons
- Demo workflow visualization

### Page 2: Assessment Form
- Data entry for crop and farming details
- Fields for:
  - Crop name
  - Target export market
  - Farm location
  - Last chemical/input used
  - Spray and harvest dates
  - Farming method
  - Traceability status
  - Additional context
- Load demo data option for testing

### Page 3: Results Dashboard
- Export readiness status (Ready / At Risk / Not Ready)
- Readiness score (0-100)
- Compliance status explanation
- Risk alerts
- Recommended actions
- Traceability summary
- Timeline visualization
- Local language guidance (English + Telugu)
- Buyer confidence indicators

## Backend API

### Endpoint: `POST /analyze-export-readiness`

**Request:**
```json
{
  "crop": "Grapes",
  "country": "EU",
  "location": "Andhra Pradesh",
  "lastChemical": "Carbendazim",
  "sprayDate": "2026-03-10",
  "harvestDate": "2026-03-15",
  "farmingMethod": "Conventional",
  "notes": "Standard vineyard management",
  "traceabilityAvailable": true,
  "certificationGoal": ""
}
```

**Response:**
```json
{
  "status": "At Risk",
  "score": 68,
  "alerts": [
    "Recent spray timing may create residue compliance risk for export markets.",
    "Traceability records are incomplete."
  ],
  "recommendations": [
    "Delay harvest by 7 days.",
    "Switch to safer alternatives for export batches.",
    "Maintain digital spray logs for certification review."
  ],
  "traceabilitySummary": {
    "crop": "Grapes",
    "market": "EU",
    "lastInput": "Carbendazim",
    "sprayDate": "2026-03-10",
    "harvestDate": "2026-03-15",
    "farmingMethod": "Conventional",
    "documentationStatus": "Partial"
  },
  "guidanceEnglish": "Your crop is currently at risk for export rejection due to timing and documentation issues.",
  "guidanceTelugu": "మీ పంట ఎగుమతి తిరస్కరణకు గురయ్యే ప్రమాదంలో ఉంది.",
  "buyerConfidence": {
    "traceability": "Partial",
    "residueRisk": "High",
    "certificationReadiness": "Basic"
  }
}
```

## Demo Data

Pre-loaded sample for testing:
- **Crop:** Grapes
- **Market:** EU
- **Location:** Andhra Pradesh
- **Last Input:** Carbendazim
- **Spray Date:** 2026-03-10
- **Harvest Date:** 2026-03-15
- **Expected Result:** At Risk (Score: 68)

Click "Load Sample Demo Data" on the assessment form to populate these values.

## Design System

The UI follows a premium, dark-themed design:
- **Primary Color:** Neon Green (#00ff88)
- **Background:** Deep Charcoal (#0a1a0f, #050f0a)
- **Cards:** Dark Green (#1a2a1f)
- **Text:** Light Gray (#e0e6e0)
- **Borders:** Muted Green (#2a3a2f)

### Components
- Modern rounded cards with soft shadows
- Smooth transitions and hover effects
- Mobile-responsive design
- Accessibility-focused

## Future Enhancements

- Integration with real LLM APIs for AI analysis
- Database integration for historical data tracking
- Multi-language support expansion
- Export report generation (PDF)
- Real-time market compliance database integration
- Farmer mobile app
- Analytics dashboard for aggregators

## License

This project is created for the Beyond Farming global competition (March 2026).

## Support

For issues or questions, refer to the backend API documentation at `http://localhost:8000/docs` when running the application.

---

**Built with ❤️ for global food security and farmer empowerment**
