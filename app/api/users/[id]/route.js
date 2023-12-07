import { mongoConnectionDB } from "@/lib/mongoConnection";
import Users from "@/schemas/usersModule";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await mongoConnectionDB();
  const id = res.params.id;
  const user = await Users.findById(id);
  return NextResponse.json(user);
}

export async function PUT(req, res) {
  await mongoConnectionDB();
  await findUser(res);
  const { name, surname, email, password, cart } = await req.json();
  if (name != undefined) {
    res.user.name = name;
  }
  if (surname != undefined) {
    res.user.surname = surname;
  }
  if (cart != undefined) {
    res.user.cart.push(cart);
  }
  if (email != undefined) {
    res.user.email = email;
  }
  if (password != null) {
    res.user.password = password;
  }
  const updatedUser = await res.user.save();
  return NextResponse.json(updatedUser);
}

export async function PATCH(req, res) {
  const IDToRemove = req.nextUrl.searchParams
    .get("productID")
  await findUser(res)
  await mongoConnectionDB()
  res.user.cart.filter((value, index) => {
    if(value.data._id === IDToRemove){
      if (index === 0) {
        res.user.cart.splice(0,1)
      }
      else{
        res.user.cart.splice(index, 1)
      }
    }
  })
  const updatedUser = res.user.save()
  return NextResponse.json(updatedUser)
}

export async function findUser(res) {
  await mongoConnectionDB();
  const id = res.params.id;
  const user = await Users.findById(id);
  res.user = user;
}

