import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';
import connectDB from './db/connect.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

const allowedOrigins = [
  'http://localhost:5173',
  'https://id.broide.my.id'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Block by CORS'));
    }
  }, methods: 'GET,POST,PUT,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(process.env.API_ROUTES, routes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});