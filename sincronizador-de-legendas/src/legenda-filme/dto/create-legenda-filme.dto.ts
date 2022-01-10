/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateLegendaFilmeDto {

    @IsNotEmpty()
    @IsInt()
    tempo_inicio_milisegundos: number;

    @IsNotEmpty()
    @IsInt()
    tempo_fim_milisegundos: number;

    @IsNotEmpty()
    @IsString()
    texto: string;
}


