import Categoria from './Categoria.js'
import Gasto from './Gasto.js'
import Product from './Product.js' 
import User from './User.js'

Categoria.hasMany(Gasto, {
    foreignKey: "categoryId",
  });
Gasto.belongsTo(Categoria, {
    foreignKey: "categoryId",
  });
User.hasMany(Gasto, {
    foreignKey: "gastoId",
  });
  Gasto.belongsTo(User, {
    foreignKey: "gastoId",
  });

//Role.hasMany(User); 
//User.belongsTo(Role); 

export {Categoria,Product,User,Gasto}