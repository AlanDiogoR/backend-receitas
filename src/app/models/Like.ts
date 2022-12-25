import { model, Schema } from 'mongoose';

export const Like = model('Like', new Schema({
  revenue: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Revenue',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}));

