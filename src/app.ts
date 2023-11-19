import express from "express";
import { prisma } from "../prisma/prisma-instance";
import { errorHandleMiddleware } from "./error-handler";
import "express-async-errors";

const app = express();
app.use(express.json());
// All code should go below this line
////////////////////////////////////////////////////////////////////////
app.use(express.json());
// INDEX ENDPOINT
app.get('/dogs', async (req, res) => {
	const dogs = await prisma.dog.findMany()
	res.send(dogs)
})

/* 
app.get("/", (_req, res) => {
  res.json({ message: "Hello World!" }).status(200); // the 'status' is unnecessary but wanted to show you how to define a status
});
 */




////////////////////////////////////////////////////////////////////////
// all your code should go above this line
app.use(errorHandleMiddleware);

const port = process.env.NODE_ENV === "test" ? 3001 : 3000;
app.listen(port, () =>
	console.log(`
🚀 Server ready at: http://localhost:${port}
`)
);
