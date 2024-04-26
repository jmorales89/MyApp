import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// Get an internal user by email
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams.get("email");
  console.log('hello' ,params)
  try {
    const client = await clientPromise;
    const db = client.db("ABAI");
    const internalUserCollection = await db.collection("InternalUsers");
    const data = await internalUserCollection.findOne({ email: params });
    console.log("hit", data);
    return NextResponse.json({user: data}, {
        headers: {"Content-Type": "application/json" },
        status: 200,
      });
  } catch (e) {
    console.error(e);
  }
}
 