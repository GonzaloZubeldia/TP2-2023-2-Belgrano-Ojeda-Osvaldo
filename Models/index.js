import Categoria from "./Categoria.js";
import Gasto from "./Gasto.js";
import User from "./User.js";
// import Product from './Product.js'

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

export { Categoria, User, Gasto };
