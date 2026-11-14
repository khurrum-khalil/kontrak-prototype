@echo off
REM Kontrak prototype: install dependencies (first run only) and start the server.
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 18 or newer is required. Install it from https://nodejs.org, then run start.bat again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing dependencies, first run only...
  call npm install
)
echo Starting Kontrak at http://localhost:3000
call npm start
pause
