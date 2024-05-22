

export interface UserRepository{
    getAllUsers(): Promise<User[]| null>
}