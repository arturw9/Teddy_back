import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    name: string;

    @IsNumber({}, { message: "Salario tem que ser um numero valido" })
    salary: number;

    @IsNumber({}, { message: "ValorEmpresa tem que ser um numero valido" })
    valorEmpresa: number;
}
