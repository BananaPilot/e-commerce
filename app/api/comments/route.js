import { mongoConnectionDB } from "@/app/lib/mongoConnection";
import Comments from "@/app/models/commentsModule";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoConnectionDB()
    const comments = await Comments.find()
    return NextResponse.json(comments)
}