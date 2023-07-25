import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
    gender: {
        type: String,
        required : true,
    },
    typeOfProduct:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    }
})

const productsDB = mongoose.connection.useDb('products')

const Products = productsDB.model.Products || productsDB.model('products', productsSchema)

export default Products