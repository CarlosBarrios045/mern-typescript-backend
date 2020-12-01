import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import videosRoutes from './routes/videos.routes';

const app = express();

(async () => {
  // Port
  await app.set('port', process.env.PORT || 4000);

  // Express config
  await app.use(morgan('dev'));
  await app.use(cors());

  await app.use(express.json());
  await app.use(express.urlencoded({ extended: false }));

  // Route
  await app.use(videosRoutes);
})();

export default app;
