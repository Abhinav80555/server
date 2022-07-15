import { client } from "../index.js";

export async function updateDressById(id, data, res) {
  const result = await client
    .db("dress")
    .collection("dress")
    .updateOne({ id: id }, { $set: data });
  res.send(result);
}
export async function deleteDressById(id, res) {
  const result = await client
    .db("dress")
    .collection("dress")
    .deleteOne({ id: id });
  result.deletedCount > 0
    ? res.send(result)
    : res.status(404).send({ error: "not found" });
}
export async function createDress(data, res) {
  const result = await client.db("dress").collection("dress").insertMany(data);
  res.send(result);
}
export async function getDressById(id, res) {
  const result = await client
    .db("dress")
    .collection("dress")
    .findOne({ id: id });
  result ? res.send(result) : res.status(404).send({ error: "not found" });
}
export async function getAllDress(res) {
  const result = await client
    .db("dress")
    .collection("dress")
    .find({})
    .toArray();
  res.send(result);
}