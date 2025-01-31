//first, open the terminal in this directory
//second, run the code "npm init -y"
//third, run the code "npm install express --save"


const app = require('express')()
const PORT = 3000
app.listen(PORT, () => console.log(`Aplicação rodando em ${PORT}`))

app.get('/skills', (req, res) => {
    res.send([
    {
        "marca": "Honda",
        "ano": 2010,
        "modelo": "Biz 125",
        "cilindradas": 124.9,
        "quilometragem": 10000,
        "cor": "Vermelho"
    },
    {
        "marca": "Honda",
        "ano": 2024,
        "modelo": "Start 160",
        "cilindradas": 162.7,
        "quilometragem": 10,
        "cor": "Preta"
    },
    {
        "marca": "Yamaha",
        "ano": 2020,
        "modelo": "Xmax 250",
        "cilindradas": 250,
        "quilometragem": 5000,
        "cor": "Azul"
    },
    {
        "marca": "Yamaha",
        "ano": 2015,
        "modelo": "Factor 150",
        "cilindradas": 149.31,
        "quilometragem": 24300,
        "cor": "Prata"
    },
    {
        "marca": "Honda",
        "ano": 2022,
        "modelo": "PCX 160",
        "cilindradas": 156.9,
        "quilometragem": 2000,
        "cor": "Branco"
    },
    {
        "marca": "Yamaha",
        "ano": 2023,
        "modelo": "Fazer 250",
        "cilindradas": 249.5,
        "quilometragem": 1500,
        "cor": "Preto"
    },
    {
        "marca": "Suzuki",
        "ano": 2021,
        "modelo": "GSX-S150",
        "cilindradas": 147.3,
        "quilometragem": 8000,
        "cor": "Azul"
    },
    {
        "marca": "Kawasaki",
        "ano": 2020,
        "modelo": "Ninja 400",
        "cilindradas": 399,
        "quilometragem": 12000,
        "cor": "Verde"
    },
    {
        "marca": "BMW",
        "ano": 2024,
        "modelo": "R 1250 GS",
        "cilindradas": 1254,
        "quilometragem": 500,
        "cor": "Cinza"
    },
    {
        "marca": "Ducati",
        "ano": 2023,
        "modelo": "Panigale V4",
        "cilindradas": 1103,
        "quilometragem": 1000,
        "cor": "Vermelho"
    },
    {
        "marca": "Harley-Davidson",
        "ano": 2022,
        "modelo": "Sportster S",
        "cilindradas": 1250,
        "quilometragem": 3000,
        "cor": "Preto"
    },
    {
        "marca": "Triumph",
        "ano": 2021,
        "modelo": "Street Triple RS",
        "cilindradas": 765,
        "quilometragem": 6000,
        "cor": "Amarelo"
    },
    {
        "marca": "KTM",
        "ano": 2020,
        "modelo": "Duke 390",
        "cilindradas": 373.2,
        "quilometragem": 9000,
        "cor": "Laranja"
    }
])
})

//run server: "node ."
//acesse a URL: http://localhost:3000/skills
