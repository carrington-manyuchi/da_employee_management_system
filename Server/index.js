import express from "express";
import cors from "cors";
import { adminlogin } from "./Routes/AdminRoute.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", adminlogin);

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000    ");
});
