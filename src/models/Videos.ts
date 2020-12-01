import { Schema, model } from 'mongoose';

const videosSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true,
      trim: true,
    },
    description: {
      type: 'string',
      required: false,
      trim: true,
    },
    url: {
      type: 'string',
      required: true,
      trim: true, 
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('Videos', videosSchema);
