import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post("/submit", (req, res) => {
    req.body
});


app.listen(PORT, () => {
    console.log(`Connected to server on Port: ${PORT}.`);
});