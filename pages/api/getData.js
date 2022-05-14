import { data } from "../../data";
console.log(data);
export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    return res.status(200).json(data);
  }
  if (method === "POST") {
    console.log(req.body);
    data.push({ ...req.body, id: data.length + 1 });
    return res.status(200).json(data);
  }
}
