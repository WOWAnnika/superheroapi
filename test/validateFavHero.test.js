import {describe, it, expect} from "vitest";
import express from "express";

const app = express();
app.use(express.json());


const { validateFavorite } = require("../middlewares/validateFavorite");

app.post("/test", validateFavorite, (req, res) => {
    res.status(200).json({ message: "test test test test ok" });
});

