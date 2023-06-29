import fs from "fs";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import posts from "../../data/posts.json";

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    fs.writeFileSync("data/posts.json", JSON.stringify({ nome: "meme" }));
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    fs.writeFileSync("data/posts.json", JSON.stringify({ nome: "meme" }));
    res.status(200).json({ message: "This is a POST request" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
