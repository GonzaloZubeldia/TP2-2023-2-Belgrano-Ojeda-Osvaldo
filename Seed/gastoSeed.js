import {Gasto} from '../Models/index.js'

const gastoSeed = async() => {
    try {
        await Gasto.bulkCreate([{
            descripcion: "Verduras",
            monto: "2000",
            categoria: "Comida",
            fecha:"26-06-2023"
        },
        {
            descripcion:"Traumatólogo",
            monto:"3000",
            categoria: "Medico",
            fecha:"26-06-2023"
        },
        {
            descripcion:"Subte",
            monto:"800",
            categoria: "Transporte",
            fecha:"26-06-2023"
        },
        ])
    } catch (err) {
        console.log(err)
    }
}

export default gastoSeed;