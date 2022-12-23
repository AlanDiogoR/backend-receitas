import { model, Schema } from 'mongoose';

export const Revenues = model('Revenue', new Schema({
  name: {
    type: String,
    required: true,
  },
  ImagePath: {
    type: String,
    required: true,
  },
  ingredients: {
    required: true,
    type: [{
      quantity: {
        type: Number,
        required: true,
      },
      ingredient: {
        type: String,
        required: true,
      },
    }]
  },
  waydOfDoing: {
    type: String,
    required: true,
  },
}));

