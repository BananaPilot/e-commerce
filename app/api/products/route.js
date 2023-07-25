import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Products from "@/app/models/productsModule";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoConnectionDB()
    const products = await Products.find()
    return NextResponse.json(products)
}
