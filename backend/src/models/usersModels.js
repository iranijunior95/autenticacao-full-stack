import mongoose from 'mongoose';

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    accessLevel: String
});

export default User;