# Beyond Farming - Quick Start Guide

## 🚀 The Fastest Way to Get Started

### **Option 1: Automated Setup (Recommended)**

#### Windows:
```bash
setup.bat
```

#### macOS/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

This will automatically check dependencies and install everything.

---

### **Option 2: Manual Setup (5 minutes)

**Step 1: Backend Setup**
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
python app.py
```

Backend will run at: **http://localhost:8000**

**Step 2: Frontend Setup (in a new terminal)**
```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: **http://localhost:5173**

**Step 3: Open Your Browser**
Navigate to: **http://localhost:5173**

---

## ✨ Once Running

**Homepage:**
- View project overview
- See feature highlights
- Click "Check Export Readiness"

**Assessment Form:**
- Enter crop and farming details
- Try "Load Sample Demo Data" to test
- Click "Analyze Export Readiness"

**Results Dashboard:**
- See readiness score and status
- Review risk alerts
- Read recommendations
- Check buyer confidence indicators

---

## 📊 Demo Data

Pre-loaded sample values:
- **Crop:** Grapes
- **Market:** EU
- **Location:** Andhra Pradesh
- **Input:** Carbendazim
- **Spray Date:** 2026-03-10
- **Harvest Date:** 2026-03-15
- **Expected Result:** At Risk (68/100)

---

## 🔗 Useful Links

- **Frontend Home:** http://localhost:5173
- **Backend Health:** http://localhost:8000/
- **API Docs:** http://localhost:8000/docs (Swagger)
- **API ReDoc:** http://localhost:8000/redoc

---

## 🆘 Troubleshooting

### Port 5173 Already in Use?
```bash
# Frontend will automatically try another port (5174, 5175, etc)
# Check terminal output for the actual URL
```

### Port 8000 Already in Use?
```bash
# Edit backend/app.py, change port parameter:
uvicorn.run(app, host="0.0.0.0", port=8001)
```

### Dependencies Failed to Install?
```bash
# Backend:
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall

# Frontend:
rm -rf node_modules
npm install --legacy-peer-deps
```

### CORS Errors in Browser?
- Make sure backend is running on http://localhost:8000
- Check that frontend is accessing /api endpoint correctly
- Backend is already configured for CORS

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `frontend/src/App.jsx` | Main React app with routing |
| `frontend/src/pages/Landing.jsx` | Homepage |
| `frontend/src/pages/Assessment.jsx` | Form page |
| `frontend/src/pages/Results.jsx` | Results dashboard |
| `backend/app.py` | FastAPI backend |
| `frontend/vite.config.js` | Frontend proxy config |
| `frontend/tailwind.config.js` | Dark theme colors |

---

## 🎨 Theme Colors

- **Primary:** Neon Green (#00ff88)
- **Background:** Deep Charcoal (#0a1a0f)
- **Cards:** Dark Green (#1a2a1f)
- **Text:** Light Gray (#e0e6e0)

---

## 🚀 Deployment

### Build Frontend for Production
```bash
cd frontend
npm run build
# Output: frontend/dist/
```

### Deploy Anywhere
- **Frontend:** Any static hosting (Vercel, Netlify, GitHub Pages)
- **Backend:** Any Python hosting (Heroku, Railway, DigitalOcean)

---

## 📝 Next Steps

1. Try different crop and market combinations
2. Review API responses in browser DevTools
3. Modify mock analysis logic in `backend/app.py`
4. Connect to real LLM API when ready
5. Add prettier styling or animations
6. Add export/PDF generation

---

**Happy farming! 🌾 Let's help farmers reach global markets. 🌍**
