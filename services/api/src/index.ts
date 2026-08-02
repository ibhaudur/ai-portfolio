import express, { Request, Response } from "express";
import http from "http";
import routes from "./routes";

const app = express();
const server = http.createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the API servicesss!");
});

app.use("/api/v1", routes);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});