import React from 'react';

const ServicesPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1>Our Services</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Cybersecurity Insurance</h3>
                    <p>Comprehensive insurance policies to cover financial losses resulting from cyber incidents, including data breaches, ransomware attacks, and business interruption.</p>
                </div>
                <div className="col-md-6">
                    <h3>Threat Analysis</h3>
                    <p>Our proprietary ML-powered platform provides real-time threat scoring and analysis, helping you identify and mitigate vulnerabilities before they are exploited.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
