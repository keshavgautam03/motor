# More Torque API

This is the backend API for the "More Torque" taxi service company. It supports managing organizations and vehicles, with VIN decoding using the NHTSA API.

## Features

- Organization management (create, update, view)
- Vehicle management (add, view)
- VIN decoding and caching
- Rate limiting
- JWT-based authentication

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Redis

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following variables:
   - `MONGO_URI`
   - `REDIS_URL`
   - `JWT_SECRET`
4. Start the server: `npm start`

### Endpoints

- **Organization Routes**

  - `POST /api/orgs`: Create a new organization.
  - `PATCH /api/orgs/:id`: Update an organization.
  - `GET /api/orgs`: Get all organizations.

- **Vehicle Routes**
  - `POST /api/vehicles`: Add a new vehicle.
  - `GET /api/vehicles/:vin`: Get vehicle details by VIN.

### License

MIT License
