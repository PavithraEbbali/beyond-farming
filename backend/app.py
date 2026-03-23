from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from datetime import datetime, timedelta
import json

app = FastAPI(
    title="Beyond Farming - Export Compliance API",
    description="AI-powered export readiness and compliance advisory platform",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://YOUR-FRONTEND-VERCEL-URL.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalysisRequest(BaseModel):
    crop: str
    country: str
    location: str
    lastChemical: str
    sprayDate: str
    harvestDate: str
    farmingMethod: str
    notes: str = ""
    traceabilityAvailable: bool = False
    certificationGoal: str = ""


class AnalysisResponse(BaseModel):
    status: str
    score: int
    summary: str
    riskLevel: str
    timeline: int
    documentationScore: int
    nextAction: str
    alerts: list
    recommendations: list
    traceabilitySummary: dict
    guidanceEnglish: str
    guidanceTelugu: str
    buyerConfidence: dict


def analyze_export_readiness(request: AnalysisRequest) -> dict:
    """
    Mock AI analysis engine for export readiness assessment.
    In production, this would integrate with real AI/ML models and compliance databases.
    """
    
    # Parse dates
    spray_date = datetime.strptime(request.sprayDate, "%Y-%m-%d")
    harvest_date = datetime.strptime(request.harvestDate, "%Y-%m-%d")
    today = datetime.now()
    
    # Calculate days since spray and days to harvest
    days_since_spray = (today - spray_date).days
    days_to_harvest = (harvest_date - today).days
    
    # Initialize assessment variables
    alerts = []
    recommendations = []
    score = 85  # Start with baseline score
    status = "Ready"
    documentation_score = 85
    overall_risk_level = "Low"
    next_action = "Monitor residue breakdown and prepare buyer documentation"
    summary = ""
    
    # Risk Assessment Logic
    
    # 1. Spray Timing Risk
    if days_since_spray < 21:
        alerts.append("Recent spray timing may create residue compliance risk for export markets.")
        score -= 15
        documentation_score -= 10
        if status == "Ready":
            status = "At Risk"
        overall_risk_level = "High"
        next_action = "Extend waiting period to meet minimum residue breakdown timeline"
    
    if days_to_harvest < 14 and days_since_spray < 35:
        alerts.append("Short interval between spray and harvest may violate residue limits.")
        score -= 10
        status = "At Risk"
        overall_risk_level = "High"
    
    # 2. Traceability Assessment
    documentation_status = "Complete" if request.traceabilityAvailable else "Partial"
    if not request.traceabilityAvailable:
        alerts.append("Traceability records are incomplete or unavailable.")
        score -= 12
        documentation_score -= 20
        documentation_status = "Partial"
        if overall_risk_level == "Low":
            overall_risk_level = "Medium"
        if next_action == "Monitor residue breakdown and prepare buyer documentation":
            next_action = "Compile complete traceability documentation for spray history"
    
    # 3. Market-Specific Risk (EU is more stringent)
    if request.country.upper() in ["EU", "EUROPE"]:
        if request.lastChemical.lower() in ["carbendazim", "carbofuran", "monocrotophos"]:
            alerts.append("Selected chemical has stricter residue limits in EU markets.")
            score -= 8
            overall_risk_level = "High" if overall_risk_level != "High" else "High"
    
    # 4. Farming Method Assessment
    if request.farmingMethod == "Conventional":
        if request.lastChemical and "neem" not in request.lastChemical.lower():
            pass  # Conventional is acceptable
    elif request.farmingMethod == "Organic":
        score += 10  # Bonus for organic
        documentation_score += 5
    
    # Generate Recommendations
    if status == "At Risk" or status == "Not Ready":
        recommendations.append("Delay harvest to allow proper residue breakdown and compliance assurance.")
        recommendations.append("Maintain detailed digital spray logs for each chemical application.")
        recommendations.append("Consider switching to safer alternatives approved for your target market.")
    
    recommendations.append("Prepare buyer documentation including farm certification details.")
    recommendations.append("Schedule pre-export verification testing through accredited labs.")
    
    if not request.traceabilityAvailable:
        recommendations.append("Establish digital traceability system for future export cycles.")
    
    # Risk Levels for Buyer Confidence
    residue_risk = "Low" if score >= 75 else "Medium" if score >= 50 else "High"
    certification_readiness = "Good" if score >= 80 else "Moderate" if score >= 60 else "Basic"
    traceability_level = "Strong" if request.traceabilityAvailable else "Partial"
    
    # Generate Guidance
    if status == "Ready":
        guidance_english = f"Your {request.crop} is ready for export to {request.country}. All compliance requirements are met. Proceed with confidence for market entry."
        guidance_telugu = f"మీ {request.crop} విశ్వసनీయంగా {request.country}కు ఎగుమతికి సిద్ధంగా ఉంది. అన్ని సమ్మతి డేటా సంపూర్ణం. విశ్వాసంగా ముందుకు సాగండి."
    elif status == "At Risk":
        guidance_english = f"Your {request.crop} shows compliance risks for {request.country} export. Review the highlighted alerts and follow recommended actions before export."
        guidance_telugu = f"మీ {request.crop} {request.country} ఎగుమతికి సమ్మతి ప్రమాదాలను చూపుతుంది. హైలైట్ చేసిన హెచ్చరికలను సమీక్షించండి మరియు సిఫారసు చేసిన చర్యలను అనుసరించండి."
    else:
        guidance_english = f"Your {request.crop} is not ready for {request.country} export. Significant compliance gaps exist. Address recommendations before attempting export."
        guidance_telugu = f"మీ {request.crop} {request.country}కు ఎగుమతికి సిద్ధంగా లేదు. గణనీయమైన సమ్మతి అంతరాలు ఉన్నాయి. ఎగుమతిని ప్రయత్నించే ముందు సిఫారసులను పరిష్కరించండి."
    
    # Final score adjustment
    score = max(0, min(100, score))
    
    # Calculate estimated timeline to export readiness
    if status == "Ready":
        timeline_days = max(0, days_to_harvest)
        summary = f"{request.crop} export to {request.country} is approved pending documentation verification."
    elif status == "At Risk":
        timeline_days = days_to_harvest + 14
        summary = f"{request.crop} export is at risk due to residue compliance concerns. Address alerts before proceeding."
    else:
        timeline_days = days_to_harvest + 30
        summary = f"{request.crop} export to {request.country} is not ready. Significant compliance gaps require resolution."
        status = "Not Ready"
    
    documentation_score = max(0, min(100, documentation_score))
    
    return {
        "status": status,
        "score": score,
        "summary": summary,
        "riskLevel": overall_risk_level,
        "timeline": timeline_days,
        "documentationScore": documentation_score,
        "nextAction": next_action,
        "alerts": alerts,
        "recommendations": recommendations,
        "traceabilitySummary": {
            "crop": request.crop,
            "market": request.country,
            "lastInput": request.lastChemical,
            "sprayDate": request.sprayDate,
            "harvestDate": request.harvestDate,
            "farmingMethod": request.farmingMethod,
            "documentationStatus": documentation_status,
        },
        "guidanceEnglish": guidance_english,
        "guidanceTelugu": guidance_telugu,
        "buyerConfidence": {
            "traceability": traceability_level,
            "residueRisk": residue_risk,
            "certificationReadiness": certification_readiness,
        },
    }


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "Beyond Farming - Export Compliance API",
        "status": "operational",
        "version": "1.0.0"
    }


@app.post("/analyze-export-readiness")
async def analyze_export_readiness_endpoint(request: AnalysisRequest):
    """
    Main analysis endpoint for export readiness assessment.
    
    Accepts:
    - crop: str - Name of the crop
    - country: str - Target export country/market
    - location: str - Farm location
    - lastChemical: str - Last chemical/input used
    - sprayDate: str - Date of spray (YYYY-MM-DD format)
    - harvestDate: str - Expected harvest date (YYYY-MM-DD format)
    - farmingMethod: str - Farming method (Conventional/Organic/Natural/Mixed)
    - notes: str - Additional context (optional)
    - traceabilityAvailable: bool - Whether traceability records exist
    - certificationGoal: str - Target certification (optional)
    
    Returns:
    - Compliance status and readiness score
    - Risk alerts and recommendations
    - Traceability summary
    - Local language guidance
    - Buyer confidence indicators
    """
    try:
        results = analyze_export_readiness(request)
        return results
    except Exception as e:
        return JSONResponse(
            status_code=400,
            content={"error": str(e), "message": "Failed to analyze export readiness"}
        )


@app.options("/{full_path:path}")
async def options_handler(full_path: str):
    """Handle CORS preflight requests"""
    return {}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
