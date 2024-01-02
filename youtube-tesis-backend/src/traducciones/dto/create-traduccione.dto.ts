import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateTraduccioneDto {

    @IsString()
    contenido: string;

    @IsString()
    contenido_original: string;

    @IsInt()
    @IsPositive()
    longitud: number;

    @IsString()
    fecha_creacion: string;

    @IsString()
    idioma_origen: string;

    @IsString()
    idioma_traducido: string;

    @IsString()
    url_video: string;
}
