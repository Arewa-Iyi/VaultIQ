# How to Start the VaultIQ Application

This document outlines the steps to start both the frontend and backend components of the VaultIQ application.

## 1. Start the Backend

The backend is a FastAPI application.

1.  Open a new terminal.
2.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
3.  Activate the Python virtual environment (assuming PowerShell on Windows):
    ```bash
    ./.venv/Scripts/activate.ps1
    ```
    (If using Git Bash or a Unix-like shell on Windows, or a Linux/macOS system, use: `source ./.venv/bin/activate`)
4.  Install the required Python packages (FastAPI and Uvicorn) if you haven't already:
    ```bash
    pip install uvicorn fastapi
    ```
5.  Start the FastAPI application using Uvicorn:
    ```bash
    uvicorn main:app --reload
    ```
    The backend server should now be running, typically on `http://127.0.0.1:8000`.

## 2. Start the Frontend

The frontend is a React application.

1.  Open another new terminal (keep the backend terminal running).
2.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
3.  Install the frontend dependencies if you haven't already:
    ```bash
    npm install
    ```
4.  Start the React development server:
    ```bash
    npm run dev
    ```
    The frontend application should now be running, typically on `http://localhost:5173`.

Once both the backend and frontend are running, you can access the application in your web browser.
