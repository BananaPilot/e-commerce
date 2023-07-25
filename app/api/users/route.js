import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Users from "@/app/models/usersModule";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoConnectionDB()
    const users = await Users.find()
    return NextResponse.json(users)
}


export async function POST(req, res){
    const {username, password} = await req.json()
    try {
        await mongoConnectionDB()
        const post = {username, password}
        const newUserSchema = new Users({
            username: post.username,
            password: post.password
        })
        const newUser = await newUserSchema.save()
        return NextResponse.json(newUser)
    } catch (error) {
        console.error(error);
    }
}