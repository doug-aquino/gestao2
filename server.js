const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

let filmes = [
    { id: 1, titulo: 'O Auto da Compadecida', ano: 2000 },
    { id: 2, titulo: 'Cidade de Deus', ano: 2002 }
];

app.get('/api/filmes', (req, res) => {
    res.status(200).json(filmes);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
// ... (código anterior) ...

app.get('/api/filmes', (req, res) => {
    res.status(200).json(filmes);
});

app.post('/api/filmes', (req, res) => {
    const { titulo, ano } = req.body;
    
    if (!titulo || !ano) {
        return res.status(400).json({ erro: 'Título e ano são obrigatórios.' });
    }

    const novoFilme = {
        id: filmes.length + 1,
        titulo,
        ano
    };

    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});
