import { Schema, model } from 'mongoose';
const BookSchema = new Schema({
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
//# sourceMappingURL=book.model.js.map