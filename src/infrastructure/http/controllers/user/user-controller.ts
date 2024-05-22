import { Request,Response } from "express";
import { UserServices } from "../../../../services/user/user-services";

export class UserController{
    constructor(private readonly UserServices: UserServices){}

    async getAllUsers(req:Request,res:Response){
        try{
            const users = await this.UserServices.getAll();

            return res.status(200).send(users)
        }catch(error){
            if(error){
                return res.status(404).send();
            }
            return res.status(500).send()
        }
    }
}
