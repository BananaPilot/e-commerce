import { mongoConnectionDB } from "@/lib/mongoConnection";
import Products from "@/schemas/productsModule";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoConnectionDB()
    const products = await Products.find()
    return NextResponse.json(products)
}
