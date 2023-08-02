import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    email: {
        type: String,
        required : true,
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    image: {
        type : String,
        required : true,
        default: "https://www.svgrepo.com/show/164688/blank-user.svg"
    }
})

const usersDB = mongoose.connection.useDb('users')

const Users = usersDB.model.Products || usersDB.model('users', usersSchema)

export default Users