import NextCors from 'nextjs-cors';
import { connectToDatabase } from "../../lib/mongodb";
export default async function handler(
  req,
  res
) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, 
 });
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  if (req.method === "POST") {
    let data = req.body;
    data.date = new Date();
    const result = await collection.insertOne(data);
    res.status(200).json(result);
  } else {
    res.status(405).json({ messege: "method not allowed" });
  }
}
