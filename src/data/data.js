import camionero from '../assets/productos/camionero.jpg'
import imperial from '../assets/productos/imperial.jpg'
import stanley_verde2 from '../assets/productos/stanley_verde2.webp'
import termolar from '../assets/productos/termolar.jpg'
import playadito2 from '../assets/productos/playadito2.jpg'
import rosamonte from '../assets/productos/rosamonte.png'
import alpaca from '../assets/productos/alpaca.jpeg'
import cisne from '../assets/productos/cisne.webp'



export const productos = [
    {
        "id":          1,
        "nombre":      "Mate Camionero",
        "categoria":   "Mates",
        "descripcion": "Calabaza extra grande",
        "caract":      "Altura: 13cm, Diámetro: 11cm",
        "precio":      15990,
        "stock":       10,
        "img":         camionero 
    },
    {
        "id":          2,
        "nombre":      "Mate Imperial",
        "categoria":   "Mates",
        "descripcion": "Calabaza cincelada a mano",
        "caract":      "Altura: 12cm, Diámetro: 10cm",
        "precio":      48990,
        "stock":       5,
        "img":         imperial 
    },
    {
        "id":          3,
        "nombre":      "Termo Stanley",
        "categoria":   "Termos",
        "descripcion": "Termo 1,4 Lts con manija",
        "caract":      "48 hrs duración",
        "precio":      45990,
        "stock":       10,
        "img":         stanley_verde2 
    },
    {
        "id":          4,
        "nombre":      "Termolar R-Evolution",
        "categoria":   "Termos",
        "descripcion": "Termo con pico cebador. 1 Lt",
        "caract":      "40 hrs duración",
        "precio":      43890,
        "stock":       26,
        "img":         termolar 
    },
    {
        "id":          5,
        "nombre":      "Playadito 500grs",
        "categoria":   "Yerbas",
        "descripcion": "La mejor yerba",
        "caract":      "Suave e intensa",
        "precio":      3700,
        "stock":       10,
        "img":         playadito2 
    },
    {
        "id":          6,
        "nombre":      "Rosamonte 500 grs",
        "categoria":   "Yerbas",
        "descripcion": "Yerba tradicional ",
        "caract":      "con sabor a campo",
        "precio":      3900,
        "stock":       10,
        "img":         rosamonte 
    },
    {
        "id":          7,
        "nombre":      "Bombilla Alpaca",
        "categoria":   "Bombillas",
        "descripcion": "Bañada en alpaca",
        "caract":      "20 cm",
        "precio":      25990,
        "stock":       8,
        "img":         alpaca 
    },
    {
        "id":          8,
        "nombre":      "Bombilla Cisne",
        "categoria":   "Bombillas",
        "descripcion": "Acero inoxidable",
        "caract":      "19 cm",
        "precio":      15990,
        "stock":       10,
        "img":         cisne 
    },


]

export const categorias = [
    {
        "id":     1,
        "nombre": "Mates"
    },
    {
        "id":     2,
        "nombre": "Termos"
    },
    {
        "id":     3,
        "nombre": "Bombillas"
    },
    {
        "id":     4,
        "nombre": "Yerbas"
    },
]