// app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import createTables from './src/config/pgDb.js';
import loginRoutes from './src/routes/login-routes.js';
import postRoutes from './src/routes/posts-routes.js';
import profileRoutes from './src/routes/profile-routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

const allowedOrigins = ['http://localhost:5173'];
 
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Existing middlewares
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Initialize DB tables
createTables();

// Routes
app.use('/api/auth', loginRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/profile', profileRoutes);
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
