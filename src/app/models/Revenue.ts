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
        type: String,
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
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}));

