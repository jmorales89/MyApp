import { NextResponse, NextRequest } from "next/server";
import { connectInternalUserCollection } from "@/utils/interalUserCollectionConnection";
import { InternalUser } from "../../../interfaces/Users";

// Locate internal user by id and update the selected field(s)
// body must be in json format {"exampleKey": "exampleValue" , "multipleExampleKey": "exampleValue }
export async function PATCH (req: NextRequest, { params } : {params: {id: string} }) {
    
    const body: InternalUser = await req.json();
    const collection = await connectInternalUserCollection();
    const updated = await collection?.findOneAndUpdate({"id": params.id},[ { $set: body }])
   
    return NextResponse.json({message: updated}, {
        headers: { 'Content-Type': 'application/json'},
        status: 200
    })
}

// gets the internal user by their id and returns all fields
export async function GET (_req: NextRequest, { params } : {params: {id: string} }) {
    const collection = await connectInternalUserCollection();
    const user = await collection?.findOne({"id": params.id})
   
    return NextResponse.json({message: user}, {
        headers: { 'Content-Type': 'application/json'},
        status: 200
    })
}

// delete internal user by their id
export async function DELETE (req: NextRequest, { params } : {params: {id: string} }) {
    
    const body: InternalUser = await req.json();
    const collection = await connectInternalUserCollection();
    const updated = await collection?.deleteOne({"id": params.id})
   
    return NextResponse.json({message: updated}, {
        headers: { 'Content-Type': 'application/json'},
        status: 200
    })
}