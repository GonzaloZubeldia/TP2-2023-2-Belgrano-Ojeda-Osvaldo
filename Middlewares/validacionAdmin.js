const validacionAdmin = (req, res, next) => {
    try {
        const {user} = req

        if(user.role != "admin") {
            const error = new Error ("Requiere de permisos Administrador");
            error.status = 400;
            throw error;
        } 
        next();
    } catch (error) {
        next(error);
    }
};

export default validacionAdmin;