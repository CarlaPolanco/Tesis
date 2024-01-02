import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateTranscripcioneDto {

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
    idioma_transcripcion: string;

    @IsString()
    id_video: string;

}
