import Categoria from './Categoria.js'
import Gasto from './Gasto.js'
import Product from './Product.js' 
import User from './User.js'

Categoria.hasMany(Gasto);
Gasto.belongsTo(Categoria);

//Role.hasMany(User); 
//User.belongsTo(Role); 

export {Categoria,Product,User,Gasto}