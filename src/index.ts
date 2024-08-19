import express from 'express';
import cors from 'cors';

import carPaintRoute from './routes/carpaint_route';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(carPaintRoute);



// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

