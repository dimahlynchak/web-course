import express from 'express';
import bodyParser from "body-parser"

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));


function randomDayConvert(req, res, next) {
    let randomDay = Math.floor(Math.random() * 7);

    if ((randomDay === 0) || (randomDay === 6)) {
        req.dayType = "Weekend";
        req.chill = true;
    } else {
        req.dayType = "Weekday";
        req.chill = false;
    }
    next();
}

app.use(randomDayConvert);

app.get("/", (req, res) => {
    res.render("index.ejs", {
        chill: req.chill,
        dayType: req.dayType
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})