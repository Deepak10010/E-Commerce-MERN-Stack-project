import exppress from "express";
import { loginUserCtrl, registerUserCtrl } from "../controllers/usersCtrl.js";



const userRoutes = exppress.Router();

userRoutes.post("/api/v1/users/register", registerUserCtrl);
userRoutes.post("/api/v1/users/login",loginUserCtrl);

export default userRoutes;