import { UserRepository } from "../../infrastructure/db/user/dao/user-repository";

export class UserServices{

    constructor(private readonly userRepository: UserRepository){}

    async getAll(): Promise<User[]>{
        const users = await this.userRepository.getAllUsers
        return users
    }
    
}