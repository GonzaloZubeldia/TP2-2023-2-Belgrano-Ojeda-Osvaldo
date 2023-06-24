import {Gasto} from '../Models/index.js'

const gastoSeed = async() => {
    try {
        await Gasto.bulkCreate([{
            descripcion: "Verduras",
            monto: "2000",
            categoria: "Comida"
        },
        {
            descripcion:"Traumatólogo",
            monto:"3000",
            categoria: "Medico"
        },
        {
            descripcion:"Subte",
            monto:"800",
            categoria: "Transporte"
        },
        {
            Name:"Bateria de auto",
            Description:"Bateria de auto repuesto",
            UnitPrice:"45000",
            Image:"bateria_auto.jpg",
            CategoryId:3
        },
        {
            Name:"Bicicleta Venzo",
            Description:"Bicicleta Venzo R29",
            UnitPrice:"170000",
            Image:"bicicleta_venzo.jpg",
            CategoryId:4 
        }])
    } catch (err) {
        console.log(err)
    }
}

export default gastoSeed;