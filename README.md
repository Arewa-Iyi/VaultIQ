# VaultIQ Application Documentation

## Project Overview
This project implements a mobile-friendly web application for VaultIQ, a cybersecurity insurance company. The application provides user login functionality and a threat analysis dashboard with ML-based threat scoring.

**Key Features:**
*   **User Authentication:** Secure login for users.
*   **Threat Dashboard:** Displays simulated cybersecurity threats with ML-generated risk scores.
*   **Responsive UI:** Designed to be mobile-friendly and accessible across various devices.
*   **Informational Pages:** "About Us" and "Services" pages to provide company information.

## Project Environment

### Backend
*   **Language:** Python
*   **Framework:** FastAPI
*   **Package Manager:** uv

### Frontend
*   **Language:** TypeScript
*   **Framework:** React
*   **Build Tool:** Vite
*   **Package Manager:** npm

## Dependencies

### Backend (Python)
*   `fastapi`: Web framework for building APIs.
*   `uvicorn`: ASGI server for FastAPI.
*   `pydantic`: Data validation and settings management using Python type hints.
*   `python-multipart`: For parsing form data.
*   `Jinja2`: Templating engine (FastAPI can use it for server-side rendering, though not directly used in this API-only setup).
*   `uv`: Python package manager and installer.

### Frontend (JavaScript/TypeScript)
*   `react`: JavaScript library for building user interfaces.
*   `react-dom`: Entry point to the DOM and server renderers for React.
*   `@types/react`, `@types/react-dom`: TypeScript type definitions for React.
*   `vite`: Next-generation frontend tooling.
*   `@vitejs/plugin-react`: Vite plugin for React.
*   `typescript`: JavaScript with syntax for types.
*   `bootstrap`: CSS framework for responsive design.
*   `react-router-dom`: DOM bindings for React Router.
*   `axios`: Promise-based HTTP client for the browser and Node.js.