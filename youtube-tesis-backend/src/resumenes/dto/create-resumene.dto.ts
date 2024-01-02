import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateResumeneDto {

    @IsString()
    contenido: string;

    @IsInt()
    @IsPositive()
    longitud: number;

    @IsString()
    fecha_creacion: string;

    @IsString()
    idioma_origen: string;

    @IsString()
    idioma_resumen: string;

    @IsString()
    palabras_clave: string;

    @IsString()
    url_video: string;
}
