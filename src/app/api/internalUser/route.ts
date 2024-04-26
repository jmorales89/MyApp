import { NextRequest, NextResponse } from "next/server";
import { connectInternalUserCollection } from "@/utils/interalUserCollectionConnection";
import { InternalUser } from "../../interfaces/Users";
import clientPromise from "@/lib/mongodb";

 // Create an internal user in the InternalUserCollection 

export async function POST(req: NextRequest) {
  const newInternalUser: InternalUser = await req.json();
  const collection = await connectInternalUserCollection();  
  collection?.insertOne(newInternalUser);

  return NextResponse.json(
    { message: newInternalUser },
    {
      headers: {"Content-Type": "application/json" },
      status: 201,
    }
  );


}

// Get an internal user by email
export async function GET(req: NextRequest){
  const params = req.nextUrl.searchParams.get("email")
try {
  const client = await clientPromise;
  const db = client.db("ABAI");
  const internalUserCollection = await db.collection("InternalUsers");
  const user = await internalUserCollection.findOne({ email: params});

  return NextResponse.json(user);
} catch (e) {
  console.error(e);
}
}
