import { verifyToken } from "../Utils/token.js";

const validacionLogin = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("No estas logueado");
    }
    const { payload } = verifyToken(token);
    if (!payload) {
      throw new Error("falta payload");
    }
    req.user = payload;
    next();
  } catch (err) {
    next(err)
    res.status(400).send(err.message);
  }
};

export default validacionLogin;
