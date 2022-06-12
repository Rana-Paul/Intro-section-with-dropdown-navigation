const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;

console.log(path.join(__dirname, "./public"))
const staticPath = path.join(__dirname, "./public")
app.use(express.static(staticPath))


app.get("/", (req,res) => {
    res.send("")
})

app.listen(port, () => {
  console.log(`Server running at :${port}`);
});