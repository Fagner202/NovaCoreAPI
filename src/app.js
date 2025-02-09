require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Rota de teste
app.post('/summarize', (req, res) => {
    res.json({
        status: 'API online',
        message: 'Endpoint de teste'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Alterando em tempo real na porta ${port}`);
});