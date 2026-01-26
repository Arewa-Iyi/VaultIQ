from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random
import uuid

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:5173",  # React frontend's default port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class Threat(BaseModel):
    id: str
    type: str
    source: str
    date: str
    score: float
    description: str

@app.post("/api/login", response_model=Token)
async def login(user: UserLogin):
    # This is a mock login. In a real app, you'd check against a database.
    if user.username == "user" and user.password == "password":
        # Generate a dummy token
        access_token = str(uuid.uuid4())
        return {"access_token": access_token}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/api/threats", response_model=list[Threat])
async def get_threats():
    mock_threats = []
    threat_types = ["Phishing", "Malware", "DDoS", "Ransomware", "Insider Threat"]
    sources = ["Email", "Network", "Web", "USB", "Cloud"]
    descriptions = [
        "Suspicious email with malicious link detected.",
        "System infected with unknown malware.",
        "High volume of traffic impacting server availability.",
        "Critical files encrypted, ransom demanded.",
        "Unauthorized data access from internal network."
    ]

    for _ in range(10):
        threat_id = str(uuid.uuid4())
        threat_type = random.choice(threat_types)
        source = random.choice(sources)
        date = f"2026-01-{random.randint(1, 26):02d}"
        score = round(random.uniform(0.1, 9.9), 1) # ML-based score
        description = random.choice(descriptions)

        mock_threats.append(
            Threat(
                id=threat_id,
                type=threat_type,
                source=source,
                date=date,
                score=score,
                description=description
            )
        )
    return mock_threats
