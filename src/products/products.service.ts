import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
    update(id: number, req: CreateProductDTO) {
        throw new Error('Method not implemented.');
    }
    findOne(id: number) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    create() {
        throw new Error('Method not implemented.');
    }
}
