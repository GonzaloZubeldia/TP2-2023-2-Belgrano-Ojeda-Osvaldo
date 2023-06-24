import {Categoria} from '../Models/index.js'

const categoriaSeed = async() => {
    try {
        await Categori.bulkCreate([{
            Description:"Transporte"
        },
        {
            Description:"Expensas"
        },
        {
            Description:"Medico"
        },
        {
            Description:"Mercado"
        }])
    } catch (err) {
        console.log(err)
    }
}

export default categoriaSeed;