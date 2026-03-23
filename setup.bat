@echo off
REM Beyond Farming - Quick Start Script for Windows

echo.
echo 🌱 Beyond Farming - Quick Start Setup
echo ======================================
echo.

REM Check for Node.js
echo Checking Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v18+ from https://nodejs.org
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%
echo.

REM Check for Python
echo Checking Python...
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Python is not installed. Please install Python v3.8+ from https://www.python.org
    exit /b 1
)
for /f "tokens=*" %%i in ('python --version') do set PYTHON_VERSION=%%i
echo ✅ Python found: %PYTHON_VERSION%
echo.

REM Setup Backend
echo Setting up backend...
cd backend
python -m pip install -r requirements.txt >nul 2>&1
echo ✅ Backend dependencies installed
cd ..
echo.

REM Setup Frontend
echo Setting up frontend...
cd frontend
npm install >nul 2>&1
echo ✅ Frontend dependencies installed
cd ..
echo.

echo ======================================
echo ✨ Setup complete!
echo.
echo To start the application:
echo.
echo Command Prompt 1 - Backend:
echo   cd backend
echo   python app.py
echo.
echo Command Prompt 2 - Frontend:
echo   cd frontend
echo   npm run dev
echo.
echo Then open: http://localhost:5173
echo API Docs: http://localhost:8000/docs
echo.
pause
