import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const productsDB = mongoose.connection.useDb('products')

const Products = productsDB.model.Products || productsDB.model('products', productsSchema)

export default Products