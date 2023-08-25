import { mongoConnectionDB } from "@/lib/mongoConnection";
import Users from "@/schemas/usersModule";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await mongoConnectionDB();
  const id = res.params.id;
  const user = await Users.findById(id);
  return NextResponse.json(user);
}

export async function POST(req, res) {
  await mongoConnectionDB()
  await findUser(req, res)
  console.log(req, res);
}

async function findUser(req, res) {
  await mongoConnectionDB()
  const id = res.params.id
  const user = await Users.findById(id)
  res.user = user
}
