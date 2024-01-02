import { IsDate, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateVideoDto {

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    titulo: string;

    @IsString()
    descripcion: string;

    @IsInt()
    @IsPositive()
    duracion: number;

    @IsString()
    fecha_publicacion: String;

    @IsString()
    canal: string;
}
