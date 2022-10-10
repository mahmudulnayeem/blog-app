import { ObjectId } from "mongodb";
import NextCors from 'nextjs-cors';
import { connectToDatabase } from "../../lib/mongodb";
export default async function handler(
  request,
  response
) {
  await NextCors(request, response, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, 
 });
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);
  const id = new ObjectId(request.query.id);
  const results = await collection.find({ _id: id }).toArray();

  response.status(200).json(results);
}
