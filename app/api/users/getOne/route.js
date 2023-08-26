import { mongoConnectionDB } from "@/lib/mongoConnection";
import Users from "@/schemas/usersModule";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  let email = req.nextUrl.searchParams
    .get("email")
    .filter((element) => element != "");
  await mongoConnectionDB();
  const user = await Users.find().where("email").in(email);
  return NextResponse.json(user);
}
