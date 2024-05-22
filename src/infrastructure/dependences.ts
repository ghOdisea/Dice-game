import { PlayerService } from "../application/services/player.services";
import { DaoUser } from "../infrastructure/dao/dao-user";
import { UserController } from "./http/controllers/user-controller";


const daoUser = new DaoUser();
const userServices = new PlayerService(daoUser);
export const userControllers = new UserController(userServices)