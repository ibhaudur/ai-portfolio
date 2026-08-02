import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import routes from "./routes";

const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Allow your frontend URL (change port if needed)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies/headers if needed
  })
);

// Optional: Parse JSON bodies if your frontend sends POST/PUT requests
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the API servicesss!");
});

app.use("/api/v1", routes);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});