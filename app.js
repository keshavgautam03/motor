// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');
// const orgRoutes = require('./routes/orgRoutes');
// const vehicleRoutes = require('./routes/vehicleRoutes');
// const { errorHandler } = require('./middlewares/errorMiddleware');
// const rateLimit = require('./middlewares/rateLimitMiddleware');
// const { authMiddleware } = require('./middlewares/authMiddleware');

// const app = express();

// connectDB();

// app.use(express.json());
// app.use(authMiddleware); // Optional authentication middleware
// app.use(rateLimit);

// app.use('/api/orgs', orgRoutes);
// app.use('/api/vehicles', vehicleRoutes);

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const redisClient = require('./config/redis');
const orgRoutes = require('./routes/orgRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
const rateLimit = require('./middlewares/rateLimitMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// Connect to MongoDB and Redis
connectDB();
redisClient.connect();

app.use(express.json());
app.use(authMiddleware); // Optional authentication middleware
app.use(rateLimit);

app.use('/api/orgs', orgRoutes);
app.use('/api/vehicles', vehicleRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
