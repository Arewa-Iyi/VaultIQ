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

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

```
VaultIQ/
├── backend/
│   ├── .venv/                      # Python virtual environment
│   ├── main.py                     # FastAPI application entry point
│   ├── requirements.txt            # (Optional) List of Python dependencies
│   └── ...                         # Other backend-related files
├── frontend/
│   ├── node_modules/               # Frontend dependencies
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── assets/                 # Images or other assets
│   │   ├── components/             # React components
│   │   │   ├── AboutPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── PrivateRoute.tsx
│   │   ├── App.css                 # Main application CSS
│   │   ├── App.tsx                 # Main React application component (routing)
│   │   ├── index.css               # Global CSS
│   │   └── main.tsx                # Entry point for the React application
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── ...                         # Other frontend-related files
└── AGENTS.md                       # This documentation file
```
## Rules of Engagement for Cybersecurity Applications (Technical Details)

This section outlines the standard rules of engagement for developing, testing, and deploying cybersecurity applications, adhering to industry best practices and ethical guidelines, with a focus on technical implementation details.

### 1. Data Handling and Privacy
*   **Confidentiality (Technical):**
    *   Implement Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) to restrict data access based on user roles and specific attributes.
    *   Utilize secure data storage solutions (e.g., encrypted databases, secure cloud storage buckets with fine-grained access policies).
    *   Ensure all data access is logged and audited for suspicious activity.
*   **Data Minimization (Technical):**
    *   Design database schemas to only store essential information. Avoid collecting extraneous personal identifiable information (PII).
    *   Regularly review data retention policies and implement automated data purging mechanisms for expired data.
*   **Anonymization/Pseudonymization (Technical):**
    *   Employ techniques like hashing, tokenization, or differential privacy for sensitive data where full PII is not required for analysis.
*   **Compliance (Technical):**
    *   Implement data residency controls to ensure data is stored and processed within specified geographic boundaries to meet regulatory requirements.
    *   Utilize data loss prevention (DLP) tools to monitor and prevent unauthorized exfiltration of sensitive data.

### 2. Security Best Practices
*   **Secure Coding (Technical):**
    *   **Input Validation:** Implement strict input validation on all user-supplied data to prevent injection attacks (SQLi, XSS, Command Injection). Use parameterized queries, output encoding, and allow-listing for input.
    *   **Error Handling:** Implement robust error handling that avoids revealing sensitive system information (e.g., stack traces) in error messages.
    *   **Dependency Management:** Regularly audit and update third-party libraries and frameworks to mitigate known vulnerabilities. Utilize tools like Dependabot or Snyk.
    *   **API Security:** Enforce API rate limiting, use API keys/tokens securely, and validate all API requests.
*   **Authentication and Authorization (Technical):**
    *   **Authentication:** Implement strong password policies (complexity, length, rotation), use bcrypt or Argon2 for password hashing, and support multi-factor authentication (MFA) via TOTP, FIDO2, or OAuth/OpenID Connect.
    *   **Authorization:** Implement server-side authorization checks for every sensitive action. Never rely solely on client-side authorization. Use JWTs with proper validation and short expiry times.
*   **Encryption (Technical):**
    *   **In Transit:** Enforce HTTPS/TLS 1.2+ for all network communication, using strong cipher suites. Implement HTTP Strict Transport Security (HSTS).
    *   **At Rest:** Encrypt sensitive data stored in databases, file systems, and cloud storage using AES-256 or stronger algorithms. Manage encryption keys securely (e.g., using a Key Management System - KMS).
*   **Vulnerability Management (Technical):**
    *   **SAST/DAST:** Integrate Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) into CI/CD pipelines.
    *   **Penetration Testing:** Conduct regular penetration tests by independent third parties to identify exploitable vulnerabilities.
    *   **Bug Bounty Programs:** Consider establishing bug bounty programs to leverage the security research community.
*   **Incident Response (Technical):**
    *   Develop automated alerting and logging mechanisms for security events (e.g., failed logins, access to sensitive data, anomalous activity).
    *   Integrate with Security Information and Event Management (SIEM) systems for centralized logging and analysis.

### 3. Ethical Conduct (Technical Aspects)
*   **Transparency:** Clearly document all security measures, data handling practices, and incident response plans.
*   **Accountability:** Implement comprehensive audit trails for all system actions, especially those involving sensitive data or administrative privileges.

### 4. Testing and Quality Assurance (Technical Details)
*   **Security Testing:**
    *   **Unit Tests:** Include security-focused assertions in unit tests (e.g., testing input validation, authorization logic).
    *   **Integration Tests:** Verify secure communication between microservices/components.
    *   **Fuzz Testing:** Employ fuzzing techniques to uncover unexpected behavior and vulnerabilities from malformed inputs.
*   **Threat Modeling (Technical):**
    *   Utilize methodologies like STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) during the design phase to proactively identify and mitigate threats.

### 5. Deployment and Operations (Technical Details)
*   **Secure Configuration:**
    *   **Infrastructure as Code (IaC):** Manage infrastructure configurations through IaC tools (Terraform, Ansible) and enforce security best practices (e.g., least privilege, network segmentation).
    *   **Hardening:** Apply security hardening guidelines (e.g., CIS Benchmarks) to operating systems, databases, and application servers.
*   **Monitoring and Logging:**
    *   **Centralized Logging:** Aggregate logs from all application components, infrastructure, and security devices into a centralized logging solution.
    *   **Intrusion Detection/Prevention Systems (IDS/IPS):** Deploy IDS/IPS solutions to monitor network traffic for malicious activity.
    *   **Application Performance Monitoring (APM):** Use APM tools to detect unusual application behavior that could indicate a security incident.
*   **Patch Management:**
    *   Automate patch deployment processes where feasible.
    *   Subscribe to security advisories for all technologies used in the stack.