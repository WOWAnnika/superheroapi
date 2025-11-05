const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const heroRoutes = require('./routes/heroRoutes');

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
app.use('/api',heroRoutes);

app.listen(port, () => {
    console.log(`Server kører på https://localhost:${port}`);
})