import express from "express";
import axios from "axios";

const server = express();
const PORT = 3000;

server.use(express.static("public"));

server.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const { secret, username } = response.data;

        res.render("index.ejs", {
            secret: secret,
            user: username,
        });
    } catch (err) {
        console.error("Failed to fetch secret:", err.message);
        res.sendStatus(500);
    }
});

server.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
