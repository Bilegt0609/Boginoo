import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}, { versionKey: false });

const Usermodel = model("User", UserSchema);

export default Usermodel;