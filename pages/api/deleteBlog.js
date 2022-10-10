import { ObjectId } from "mongodb";
import NextCors from 'nextjs-cors';
import { connectToDatabase } from "../../lib/mongodb";
export default async function handler(
  request,
  response
) {
  await NextCors(req, res, {
  
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
 });
    if(request.method==='DELETE'){
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);
  const id = new ObjectId(request.query.id);
  const results = await collection.remove({ _id: id });

  response.status(200).json(results);}
  else{
    response.status(405).json({messege:"Method not allowd"})
  }
}
