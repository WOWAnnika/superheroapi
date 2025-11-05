import {describe, it, expect} from "vitest";
import express, {response} from "express";
import request from "supertest";

const app = express();
app.use(express.json());


const { validateFavorite } = require("../middleware/validateFavHero");

app.post("/test", validateFavorite, (req, res) => {
    res.status(200).json({ success: true});
});


describe("favorite validator", () => {
    it("Should accept data", async () => {
        const response = await request(app)
            .post("/test")
            .send({id: 1, note: "test note 1"});

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

    it("No id", async () => {
        const response = await request(app)
            .post("/test")
            .send({note: "test note 1"});

        expect(response.status).toBe(400);
        expect(response.body.error).toContain("id");
    });

    it("no note", async () => {
        const response = await request(app)
            .post("/test")
            .send({id: 1});

        expect(response.status).toBe(400);
        expect(response.body.error).toContain("note");
    });

});
