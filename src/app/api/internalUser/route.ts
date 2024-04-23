import { NextRequest, NextResponse } from "next/server";
import { connectInternalUserCollection } from "@/utils/interalUserCollectionConnection";
import { InternalUser } from "../../interfaces/Users";

 // Create an internal user 

 // TODO:: implement try catch, error responses if failed, error response if user already exists, authorization tokens
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
