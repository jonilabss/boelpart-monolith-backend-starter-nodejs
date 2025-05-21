// src/app.ts

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import mongoSanitize from 'express-mongo-sanitize';

//import router from './routes';
//import { errorHandler } from './middleware/errorHandler';

const app = express();

/**
 * Middleware keamanan dan performa produksi
 */

// Mengatur header HTTP untuk keamanan
app.use(helmet());

// Mengizinkan akses CORS hanya dari domain terpercaya
app.use(
  cors({
    origin: ['https://yourdomain.com'], // sesuaikan untuk produksi
    credentials: true,
  }),
);

// Kompresi respons untuk efisiensi bandwidth
app.use(compression());

// Logging permintaan (gunakan format 'combined' untuk produksi)
app.use(morgan('combined'));

// Parsing body JSON
app.use(express.json());

// Limit request
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Cegah HPP
app.use(hpp());

// Sanitasi query untuk Mongo
app.use(mongoSanitize());

/**
 * Routing utama aplikasi
 */
//app.use('/', router);

/**
 * Global error handler (diletakkan setelah route)
 */
//app.use(errorHandler);

export default app;
