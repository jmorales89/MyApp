import clientPromise from "@/lib/mongodb";

// connects to MongoDB ABAI database
// Collection Users

export async function connectInternalUserCollection() {
  try {
    const client = await clientPromise;
    const db = client.db("ABAI");
    const internalUserCollection = await db.collection("InternalUsers");
    return internalUserCollection;
  } catch (e) {
    console.error(e);
  }
}
