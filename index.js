import express from "express";

const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {
res.send('¡Hola, Mundo!');
})

app.get('/', (req, res) => {
res.send('Bienvenido a mi servidor');
})

app.get('/numero', (req, res) => {
res.send('42');
})

app.get('/usuario', (req    , res) => {
res.json({ "nombre": "Ana", "edad": 25 } );
})

app.get('/productos', (req, res) => {
res.json( ["Mouse", "Teclado", "Monitor"] );
})

app.get('/materias', (req, res) => {
res.json( [ { "nombre": "Matemática" }, { "nombre": "Lengua" } ]);
})
app.listen(port, () => { // Inicio el servidor WEB (escuchar)
console. log(`Listening on http://localhost:${port}`)
})