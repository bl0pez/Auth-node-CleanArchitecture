import { Router } from "express";
import { AuthController } from "./controllers";

export class AuthRoutes {
  //Si no existe inyección de dependencias, se puede hacer el método estático
  public static get routes(): Router {
    const router = Router();

    const authController = new AuthController();

    //Definir rutas
    router.post('/login', authController.loginUser);
    router.post('/register', authController.registerUser);

    return router;
  }
}
