# Repository Context Documentation: kaushikraina/Learning

**Repository ID:** 126281981  
**Primary Language:** JavaScript (83%)  
**Secondary Languages:** CSS (8.7%), HTML (8.3%)  
**Type:** Full-Stack Web Development Learning Projects

---

## Language Composition

| Language   | Share  |
|-----------|--------|
| JavaScript | 83%   |
| CSS       | 8.7%   |
| HTML      | 8.3%   |

---

## Repository Structure

The Learning repository contains **4 main projects**.

### 1. SmartBrain (Frontend)

| Aspect | Details |
|--------|---------|
| **Type** | React-based frontend application |
| **Purpose** | Face detection web application |
| **Technologies** | React.js, CSS3, HTML5, JavaScript ES6+ |

**Features:**

- Image upload and processing
- AI-powered face detection
- User authentication integration
- Real-time face tracking
- Responsive UI design

**Components:** Navigation, Logo, ImageLinkForm, FaceRecognition, Signin  
**State Management:** React Hooks or Context API  
**HTTP Client:** Axios or Fetch API

---

### 2. SmartBrain API (Backend)

| Aspect | Details |
|--------|---------|
| **Type** | Express.js REST API server |
| **Purpose** | Backend services for SmartBrain frontend |
| **Technologies** | Node.js, Express.js, JWT, Database (MongoDB/PostgreSQL) |

**Key Endpoints:**

- `POST /signin` — User authentication
- `POST /register` — User registration
- `POST /imageurl` — Image processing
- `PUT /image` — Update image count
- `GET /profile/:id` — User profile retrieval

**Features:** User management, authentication/authorization, database CRUD, image processing integration, error handling, validation, CORS configuration  
**Architecture:** RESTful microservices

---

### 3. Blockchain Backend

| Aspect | Details |
|--------|---------|
| **Type** | Blockchain services layer |
| **Purpose** | Web3 and smart contract integration |
| **Technologies** | Node.js, Web3.js, Ethereum, Solidity |

**Features:**

- Smart contract deployment and interaction
- Blockchain transaction management
- Ethereum network integration
- Wallet management
- Data immutability and security

**Use Cases:** Decentralized app backend, cryptocurrency transactions, digital asset management, transparent record keeping  
**Key Operations:** Transaction signing, contract calls, event listening

---

### 4. DrugTrace (Supply Chain)

| Aspect | Details |
|--------|---------|
| **Type** | Blockchain-based supply chain application |
| **Purpose** | Drug authenticity and supply chain traceability |
| **Technologies** | JavaScript, HTML, CSS, Node.js, Express.js, Ethereum Smart Contracts |

**Features:**

- Drug batch tracking from manufacturer to consumer
- Immutable ledger entries
- Supply chain transparency
- Authenticity verification
- QR code integration
- Audit trail generation

**Benefits:** Prevent counterfeit medicines, track distribution channels, regulatory compliance, supply chain visibility  
**Stakeholders:** Manufacturers, Distributors, Pharmacies, Consumers  
**Data Storage:** Blockchain (Ethereum)

---

## Technology Stack

### Frontend

- **UI Framework:** React.js (component-based)
- **Styling:** CSS3 (responsive)
- **Markup:** HTML5
- **Language:** JavaScript ES6+
- **State:** React Hooks / Context API
- **HTTP:** Axios / Fetch API
- **Build:** Webpack or Create React App

### Backend

- **Runtime:** Node.js (v12+)
- **Framework:** Express.js
- **Auth:** JWT
- **Passwords:** Bcrypt
- **Database:** MongoDB / PostgreSQL
- **API:** RESTful
- **Middleware:** CORS, Body Parser, Error Handler
- **Config:** dotenv

### Blockchain

- **Network:** Ethereum (Mainnet / Testnet)
- **Library:** Web3.js
- **Contracts:** Solidity
- **Deployment:** Truffle / Hardhat (likely)
- **Gas:** Efficient contract design
- **Transactions:** Nonce handling, gas estimation

### Development Tools

- **Package Manager:** npm
- **Version Control:** Git
- **Process Manager:** PM2 (production)
- **Containers:** Docker (possible)
- **Testing:** Jest / Mocha (likely)
- **Linting:** ESLint

---

## Architecture Overview

### System Architecture

```
+---------------------------------------------+
|           Client Tier (Top)                 |
|  SmartBrain Frontend (React Application)    |
|  - Face Detection UI                        |
|  - User Authentication Forms                |
|  - Image Upload Interface                   |
|  - Real-time Results Display                |
+-----+----------------------------------+-----+
      |
      | HTTP/HTTPS Request/Response
      |
+-----v----------------------------------+-----+
|    API/Application Tier (Middle)           |
|  SmartBrain API (Express.js Server)        |
|  - User Management Routes                  |
|  - Authentication Middleware               |
|  - Image Processing Logic                  |
|  - Database Interface                      |
|  - Blockchain Integration Interface        |
+-----+----------+----------+----------+-----+
      |          |          |
      v          v          v
+--------+ +--------+ +---------------+
|Database| |External| |  Blockchain   |
|(SQL)   | |APIs    | |  Services     |
+--------+ +--------+ +---------------+
                           |
+---------------------------v-----------+
|  Blockchain/Smart Contract Tier      |
|  Blockchain Backend (Web3.js)        |
|  DrugTrace Smart Contracts           |
|  Ethereum Network                     |
+--------------------------------------+
```

### Connection Flow

```
+---------------------------+
|    USER BROWSER           |
|  (React Application)      |
|  smartbrain/              |
+--------+---------+--------+
         |
         | HTTP/HTTPS
         v
+--------v---------+--------+
|  EXPRESS.JS API  |
|  smartbrainAPI/  |
|  POST /signin    |
|  POST /register  |
|  POST /imageurl  |
|  PUT /image      |
|  GET /profile    |
+--------+---------+--------+
         |
+--------+--------+--------+
|        |        |        |
v        v        v        v
DATABASE  FACE API  BLOCKCHAIN  JWT
(MongoDB  (External) (Web3.js)  (Auth)
 or SQL)   (ML API)
```

---

## Data Flow

### SmartBrain Application Flow

1. User selects image → uploads file
2. Frontend validates (file type, size)
3. User clicks Detect → HTTP POST to `/api/imageurl`
4. Backend receives request → JWT token check
5. If valid: get image URL → send to Face API
6. Face API returns results → extract face data
7. Save to database, increment counter
8. Response JSON → send to frontend
9. Frontend updates state → display boxes on image, show face count
10. Task complete

### DrugTrace Supply Chain Flow

**Manufacturer:** Create batch → generate batch ID & QR → sign tx → broadcast to Ethereum → validation → block confirmed → record immutable.

**Distributor:** Receive batch → scan QR → query blockchain → verify source → create update tx → broadcast → record on chain.

**Pharmacy:** Receive batch → scan QR → query history → verify authenticity → update possession → record confirmed.

**Consumer:** Purchase → scan QR → view full supply chain → verify all records → authenticity confirmed.

---

## Development Patterns

### API Design

- **REST:** GET, POST, PUT, DELETE, PATCH; resource-oriented; JSON; proper status codes
- **Errors:** Consistent format; 400, 401, 403, 404, 500
- **Auth:** JWT in `Authorization: Bearer <token>`; Bcrypt for passwords

### Security

| Layer      | Measures |
|-----------|----------|
| Frontend  | Input validation, XSS/CSRF prevention, secure headers |
| Backend   | JWT validation, rate limiting, parameterized queries, CORS |
| Blockchain| Digital signatures, nonce management, gas limits, access control |

### Performance

- **Frontend:** Code splitting, image optimization, tree shaking, React.memo
- **Backend:** Query optimization, indexing, connection pooling, caching (e.g. Redis), pagination
- **Blockchain:** Batch transactions, gas optimization, event-based updates

### Testing

- **Unit:** Jest, mocks, ~80%+ coverage
- **Integration:** API + DB + contract tests
- **E2E:** Full workflows (e.g. Playwright/Cypress)

---

## Repository Navigation

```
LEARNING REPOSITORY (ROOT)
|
+-- README.md
+-- REPOSITORY_CONTEXT.md
|
+-- smartbrain/                 (React Frontend)
|   +-- public/
|   +-- src/
|   |   +-- components/
|   |   |   +-- Navigation.js
|   |   |   +-- Logo.js
|   |   |   +-- ImageLinkForm.js
|   |   |   +-- FaceRecognition.js
|   |   |   +-- Signin.js
|   |   +-- App.js
|   |   +-- index.js
|   |   +-- index.css
|   +-- package.json
|
+-- smartbrainAPI/              (Express Backend)
|   +-- routes/
|   +-- controllers/
|   +-- models/
|   +-- middleware/
|   +-- server.js
|   +-- package.json
|   +-- .env
|
+-- blockchainBackend/          (Web3 Integration)
|   +-- contracts/
|   +-- services/
|   +-- config/
|   +-- index.js
|   +-- package.json
|
+-- drugtrace/                  (Supply Chain App)
    +-- contracts/
    +-- frontend/
    +-- backend/
    +-- package.json
```

---

## Dependencies Summary

**Core:** react, express, mongoose/pg, jsonwebtoken, bcryptjs, web3, dotenv, cors, axios  

**Dev:** jest, eslint, prettier, nodemon, webpack (if not CRA)

---

## Quick Reference

| Aspect            | Details                          |
|-------------------|----------------------------------|
| Frontend          | React.js                         |
| Backend           | Express.js                       |
| Runtime           | Node.js                          |
| Blockchain        | Ethereum (Web3.js)               |
| Authentication    | JWT                              |
| Database          | MongoDB/PostgreSQL               |
| Main Projects     | SmartBrain, DrugTrace            |
| Architecture      | Microservices + Blockchain       |

---

*Documentation Version: 1.0*  
*Last Updated: 2026-02-23*  
*Repository Owner: kaushikraina | Repository ID: 126281981*
