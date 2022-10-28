import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    update(id: number, req: CreateUserDTO) {
        throw new Error('Method not implemented.');
    }
    findOne(id: number) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    constructor(private prisma: PrismaService) {}


    async create(data: CreateUserDTO): Promise<users> {
const {name, email, password} = data;  
const user = await this.prisma.users.create({
    data: {
        name,
        email,
        password,
    },
});
if (!user) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        message: 'Erro ao criar usuário!',
      },
      HttpStatus.FORBIDDEN,
    );
  }
    return user;
}
    


  
}