import { mongoConnectionDB } from "@/lib/mongoConnection";
import Products from "@/schemas/productsModule";
import { NextResponse} from "next/server"



export async function GET(req, res){
  let ids = req.nextUrl.searchParams.get("ids").split(",").filter((element) => element != "")
  await mongoConnectionDB()
  const products = await Products.find().where('_id').in(ids)
  return NextResponse.json(products)
}