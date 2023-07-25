import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    username: {
        type: String,
        required : true,
    },
    password:{
        type: String,
        required: true
    },
})

const usersDB = mongoose.connection.useDb('users')

const Users = usersDB.model.Products || usersDB.model('users', usersSchema)

export default Users