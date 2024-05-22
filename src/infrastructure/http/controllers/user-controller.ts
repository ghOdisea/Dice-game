import { Request,Response } from "express";
import { PlayerService } from "../../../application/services/player.services";


export class UserController{
    constructor(private readonly UserServices: PlayerService){}

    async getAllUsers(req:Request,res:Response){
        try{
            const users = await this.UserServices.getAllPlayers();

            return res.status(200).send(users)
        }catch(error){
            if(error){
                return res.status(404).send();
            }
            return res.status(500).send()
        }
    }
}
/* CAMBIAR NOMBRE A PLAYER */