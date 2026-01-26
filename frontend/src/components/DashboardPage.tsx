import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Threat {
    id: string;
    type: string;
    source: string;
    date: string;
    score: number;
    description: string;
}

const getScoreColor = (score: number) => {
    if (score >= 7) return 'danger';
    if (score >= 4) return 'warning';
    return 'success';
};

const DashboardPage: React.FC = () => {
    const [threats, setThreats] = useState<Threat[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchThreats = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/api/threats', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setThreats(response.data);
            } catch (error) {
                console.error('Error fetching threats', error);
                // Handle error, e.g., redirect to login if unauthorized
            } finally {
                setLoading(false);
            }
        };

        fetchThreats();
    }, []);
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };


    if (loading) {
        return <div className="container text-center mt-5"><h2>Loading...</h2></div>;
    }

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Threat Dashboard</h1>
            </div>
            <div className="row">
                {threats.map(threat => (
                    <div key={threat.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="card-title">{threat.type}</h5>
                                    <small>{threat.date}</small>
                                </div>
                                <p className="card-text">{threat.description}</p>
                                <small className="text-muted">Source: {threat.source}</small>
                                <div className="progress mt-auto">
                                    <div
                                        className={`progress-bar bg-${getScoreColor(threat.score)}`}
                                        role="progressbar"
                                        style={{ width: `${threat.score * 10}%` }}
                                        aria-valuenow={threat.score}
                                        aria-valuemin={0}
                                        aria-valuemax={10}
                                    >
                                        Score: {threat.score}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
