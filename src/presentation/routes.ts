import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  //Si no existe inyección de dependencias, se puede hacer el método estático
  public static get routes(): Router {
    const router = Router();

    //Definir rutas
    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
