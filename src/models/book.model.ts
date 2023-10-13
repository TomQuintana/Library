import { Schema, model } from 'mongoose';

interface IBook{
  title: string;
  author: string;
  wasRead: boolean;
  review: string;
  bookCover: string;
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
  },
  bookCover: {
    type: String,
    default: 'https://res.cloudinary.com/dmg3cl9dc/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696685923/feynman-leyendo_xw0ibl.jpg',
    required: false
  }
});

export default model('Library', BookSchema);
