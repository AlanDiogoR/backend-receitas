import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createRevenues } from './app/useCases/Revenues/createRevenues';
import { listRevenues } from './app/useCases/Revenues/listRevenues';
import { createUsers } from './app/useCases/Users/createRevenues';
import { listUsers } from './app/useCases/Users/listUsers';
import { deleteUsers } from './app/useCases/Users/deleteUsers';
import { createCategories } from './app/useCases/Categories/createCategories';
import { listCategories } from './app/useCases/Categories/listCategories';
import { deleteCategories } from './app/useCases/Categories/deleteCategories';



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

// list likes
router.get('/likes', (req, res) =>  {
  res.send('Ok');
});

//list users
router.get('/users', listUsers);

//list categories
router.get('/categories', listCategories);

//get revenue by category
router.get('/categories/:categoryId/revenues', (req, res) =>  {
  res.send('Ok');
});


// create revenues
router.post('/revenues', upload.single('image'), createRevenues);

//create users
router.post('/users', createUsers);

//create categories
router.post('/categories', createCategories);


// change revenues
router.patch('/revenues/:revenueId', (req, res) =>  {
  res.send('Ok');
});

// change user
router.patch('/user/:userId', (req, res) =>  {
  res.send('Ok');
});

// change categories
router.patch('/categories/:categoriesId', (req, res) =>  {
  res.send('Ok');
});


//delete revenues
router.delete('/revenues/:revenueId', (req, res) =>  {
  res.send('Ok');
});

// delete user
router.delete('/users/:userId', deleteUsers );

//delete categories
router.delete('/categories/:categorieId', deleteCategories);

