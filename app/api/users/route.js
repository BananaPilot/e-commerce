import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Users from "@/app/models/usersModule";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoConnectionDB()
    const users = await Users.find()
    return NextResponse.json(users)
}


export async function POST(req, res){
    const {name, surname, email, password} = await req.json()
    try {
        await mongoConnectionDB()
        const post = {name, surname, email, password}
        const newUserSchema = new Users({
            name: post.name,
            surname: post.surname,
            email: post.email,
            password: post.password
        })
        const newUser = await newUserSchema.save()
        return NextResponse.json(newUser)
    } catch (error) {
        console.error(error);
    }
}