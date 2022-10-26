import { Body, Controller, Get, Post, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';
import { CreateProductDTO } from './dto/createProduct.dto';
import {ProductsService} from './products.service';




@Controller('users')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Post()
    create(@Body() req:CreateProductDTO){
        return this.ProductsService.create();
    }


@Get()
findAll(){
    return this.ProductsService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseUUIDPipe) id: number){
    return this.ProductsService.findOne(id);
}

@Patch(':id')
update(@Param('id', ParseUUIDPipe) id: number, @Body() req: CreateProductDTO): void{
    return this.ProductsService.update(id, req);
}
}