import { Body, Controller, Get, Post, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { CreateUserDTO } from './dto/createUser.dto';
import {UsersService} from './users.service';



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() req:CreateUserDTO){
        return this.usersService.create(req);
    }


@Get()
findAll(){
    return this.usersService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseUUIDPipe) id: number){
    return this.usersService.findOne(id);
}

@Patch(':id')
update(@Param('id', ParseUUIDPipe) id: number, @Body() req: CreateUserDTO){
    return this.usersService.update(id, req);
}
}