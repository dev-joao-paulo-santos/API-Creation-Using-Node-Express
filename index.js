//first, open the terminal in this directory
//second, run the code "npm init -y"
//third, run the code "npm install express --save"


const app = require('express')()
const PORT = 3000
app.listen(PORT, () => console.log(`Aplicação rodando em ${PORT}`))

app.get('/skills', (req, res) => {
    res.send([{
        marca: 'Honda',
        ano: 2010,
        modelo: 'Biz 125',
        cilindradas: 124.9,
        quilometragem: 10000,
        cor: 'Vermelho'
    },
    {
        marca: 'Honda',
        ano: 2024,
        modelo: 'Start 160',
        cilindradas: 162.7,
        quilometragem: 10,
        cor: 'Preta'
    },
    {
        marca: 'Yamaha',
        ano: 2020,
        modelo: 'Xmax 250',
        cilindradas: 250,
        quilometragem: 5000,
        cor: 'Azul'
    },
    {
        marca: 'Yamaha',
        ano: 2015,
        modelo: 'Factor 150',
        cilindradas: 149.31,
        quilometragem: 24300,
        cor: 'Prata'
    }
    ])
})

//run server: "node ."
//acesse a URL: http://localhost:3000/skills