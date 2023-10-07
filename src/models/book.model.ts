import { Schema, model } from 'mongoose';

interface IBook{
  title: string;
  author: string;
  wasRead: boolean;
  review: string;
}

const BookSchema = new Schema<IBook>({
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  wasRead: {
    type: Boolean,
    default: false
  },
  review: {
    type: String,
    default: '',
    required: false
  }
});

export default model('Library', BookSchema);
