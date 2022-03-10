//Crear una clase llamada SERIE
//Sus atributos son titulo,numero de temporadas, entregado, genero y creador
//El numero de temporadas es de 3 y entregado false
//El resto de atributos seran valores por defecto segun el tipo de atributo
//Los constructores que se implemnetaran seran (un constructor por defecto, un constructor con el titulo y creador,
//un constrcutor con todos los atributos, excepto de entregado)
//Los metodos que se implemnetaran seran (metodos get de todos los atributos excepto de entregado,
//metodos set de todos los atributos excepto de entregado, sobreescribe los metodos toString)

class Serie{

    private _titulo:string;
    private _numeroTemporadas:number = 3;
    private _entregado:boolean = false;
    private _genero:string;
    private _creador:string;

    constructor(titulo?:string, numeroTemporadas?:number, genero?:string, creador?:string){
        this._titulo=titulo;
        this._numeroTemporadas=numeroTemporadas;
        this._genero=genero;
        this._creador=creador;

    }

    public get titulo():string{
        return this._titulo;
    }

    public set titulo(valor:string){
        this._titulo=valor;
    }

    public get numeroTemporadas():number{
        return this._numeroTemporadas;
    }

    public set numeroTemporadas(valor:number){
        this._numeroTemporadas=valor;
    }

    public get genero():string{
        return this._genero;
    }

    public set genero(valor:string){
        this._genero=valor;
    }

    public get creador():string{
        return this._creador;
    }

    public set creador(valor:string){
        this._creador=valor;
    }


    public ToString():string

    {

        return 'Titulo: '+this.titulo +'\n'+'Numero temporadas: '+ this.numeroTemporadas +'\n'+'Genero: '+ this.genero +'\n'+'Creador: '+ this.creador;

    }

    

}

let titulo:string[] = ["Verano azul"];
    console.log(titulo);

    let numeroTemporadas:number[] = [5];
    console.log(numeroTemporadas);

    let genero:string[] = ["Drama"];
    console.log(genero);

    let creador:string[] = ["Jairo"];
    console.log(creador);



