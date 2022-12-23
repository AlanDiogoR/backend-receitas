import express from 'express';
import path from 'node:path';

import mongoose from 'mongoose';

import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
  .then( () => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });

    app.listen(3001, () => {
      console.log('Server is running in http://localhost:3001 🚀');
    });
  })
  .catch( () => console.log('🛑 Erro ao conectar com o banco!'));


