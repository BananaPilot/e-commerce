import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Products from "@/app/models/productsModule";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await mongoConnectionDB()
    const id = res.params.id
    const user = await Products.findById(id)
    return NextResponse.json(user)
}