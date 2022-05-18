import { data } from "../../data";

export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    return res.status(200).json(data);
  }
  if (method === "POST") {

    data.push({ ...req.body, id: data.length + 1 });
    return res.status(200).json(data);
  }
}
