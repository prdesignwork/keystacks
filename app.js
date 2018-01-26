const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'))
app.get('/', function (req, res) {
res.send("It's aliveee")
})
app.listen(port, () => {
console.log(`app listening on port: ${port}`);
});
