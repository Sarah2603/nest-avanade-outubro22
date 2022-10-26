import {Injectable} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    async create(): Promise<string> {
        return 'Usuario criado com sucesso';
    }


    async findAll(): Promise<string> {
    return 'Lista de usuários';
    }

    async findOne(id: number): Promise<string> {
    return `Usuário ${id} encontrado`;
   }
   async update(id: number, req: UpdateUserDTO): Promise<string> {
        return `Usuário ${id} atualizado`;
}
}