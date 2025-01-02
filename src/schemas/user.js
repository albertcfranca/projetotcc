import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String,
    created_at: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);
