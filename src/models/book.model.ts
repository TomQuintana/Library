import { Schema, model } from 'mongoose';

interface IBook{
  title: string;
  author: string;
  wasRead: boolean;
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
});

export default model('Library', BookSchema);
