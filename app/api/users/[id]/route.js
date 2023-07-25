import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Users from "@/app/models/usersModule";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await mongoConnectionDB()
    const id = res.params.id
    const user = await Users.findById(id)
    return NextResponse.json(user)
}