var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

app.post('/api', (req, res) => {
    const moods = ['joy', 'anger', 'sadness', 'fear', 'surprise'];
    const { userInput } = req.body;
    console.log(userInput);
    res.status(200).json({
        message: moods[Math.floor(Math.random() * moods.length)]
    });
})

app.listen(8081, () => {
    console.log('mood server started!');
})
