import {Categoria} from '../Models/index.js'

const categoriaSeed = async() => {
    try {
        await Categoria.bulkCreate([{
            categoria:"Transporte"
        },
        {
            categoria:"Expensas"
        },
        {
            categoria:"Medico"
        },
        {
            categoria:"Mercado"
        }])
    } catch (err) {
        console.log(err)
    }
}

export default categoriaSeed;