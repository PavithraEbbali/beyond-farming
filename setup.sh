#!/bin/bash
# Beyond Farming - Quick Start Script

echo "🌱 Beyond Farming - Quick Start Setup"
echo "======================================"
echo ""

# Check for Node.js
echo "Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ from https://nodejs.org"
    exit 1
fi
echo "✅ Node.js found: $(node --version)"
echo ""

# Check for Python
echo "Checking Python..."
if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
    echo "❌ Python is not installed. Please install Python v3.8+ from https://www.python.org"
    exit 1
fi
PYTHON_CMD=$(command -v python3 || command -v python)
echo "✅ Python found: $($PYTHON_CMD --version)"
echo ""

# Setup Backend
echo "Setting up backend..." 
cd backend
$PYTHON_CMD -m pip install -r requirements.txt --quiet
echo "✅ Backend dependencies installed"
echo ""

# Setup Frontend
echo "Setting up frontend..."
cd ../frontend
npm install --silent
echo "✅ Frontend dependencies installed"
echo ""

echo "======================================"
echo "✨ Setup complete!"
echo ""
echo "To start the application:"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd backend"
echo "  python app.py"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "Then open: http://localhost:5173"
echo "API Docs: http://localhost:8000/docs"
echo ""
