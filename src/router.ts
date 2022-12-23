import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createRevenues } from './app/useCases/Revenues/createRevenues';
import { listRevenues } from './app/useCases/Revenues/listRevenues';



export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// list revenues
router.get('/revenues', listRevenues);

// create revenues
router.post('/revenues', upload.single('image'), createRevenues);

// change revenues
router.patch('/revenues', (req, res) =>  {
  res.send('Ok');
});

//delete revenues
router.delete('/revenues', (req, res) =>  {
  res.send('Ok');
});
