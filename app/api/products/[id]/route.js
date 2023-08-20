import { mongoConnectionDB } from "@/lib/mongoConnection";
import Products from "@/models/productsModule";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await mongoConnectionDB()
    const id = res.params.id
    const user = await Products.findById(id)
    return NextResponse.json(user)
}