import Categoria from './Categoria.js'
import Gasto from './Gasto.js'
import Product from './Product.js' 
import User from './User.js'

Categoria.hasMany(Gasto, {
    foreignKey: "categoriaID",
  });
Gasto.belongsTo(Categoria, {
    foreignKey: "categoriaID",
  });
User.hasMany(Gasto, {
    foreignKey: "gastoID",
  });
  Gasto.belongsTo(User, {
    foreignKey: "gastoID",
  });

//Role.hasMany(User); 
//User.belongsTo(Role); 

export {Categoria,Product,User,Gasto}