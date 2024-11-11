import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column('decimal', { default: 0 }) // Definir um valor padrão para salary
    salary: number;

    @Column('decimal', { default: 0 }) // Definir um valor padrão para valorEmpresa
    valorEmpresa: number;
}
