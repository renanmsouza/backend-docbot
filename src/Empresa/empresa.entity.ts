import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Empresa")
export class Empresa {
    @PrimaryColumn({name: "id"})
    private _id: number;
    @Column({name: "nome"}) 
    private _nome: string; 
    @Column({name: "tipo"})
    private _tipo: string; 
    @Column({name: "cpfCnpj"})
    private _cpfCnpj: string;

    constructor(
        _id: number,
        _nome: string,
        _tipo: string,
        _cpfCnpj: string
    ) {
        this._id = _id;
        this._nome = _nome;
        this._tipo = _tipo;
        this._cpfCnpj = _cpfCnpj;
    }

    public get id(): number {
        return this._id;
    }

    public set id(_id: number) {
        this._id = _id;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(_nome: string) {
        this._nome = _nome;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(_tipo: string) {
        this._tipo = _tipo;
    }

    public get cpfCnpj(): string {
        return this._cpfCnpj;
    }

    public set cpfCnpj(_cpfCnpj: string) {
        this._cpfCnpj = _cpfCnpj;
    }

}

