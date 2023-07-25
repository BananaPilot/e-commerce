import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Users from "@/app/models/usersModule";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoConnectionDB()
    const users = await Users.find()
    return NextResponse.json(users)
}