import{
    IsString,
    IsNotEmpty,
     IsNumber,
} from 'class-validator'

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
     name: string;
 
 
 @IsString()
 @IsNotEmpty()
    description: string;
 @IsNumber({ maxDecimalPlaces: 2 })
price: number;

}
 
 







