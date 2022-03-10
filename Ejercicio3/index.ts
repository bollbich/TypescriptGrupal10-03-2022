enum valorDefecto{
    COLOR = "blanco",
    CONSUMOENERG = 'F',
    PRECIOBASE = 100,
    PESO = 5
}
abstract class Electrodomesticos
{
    private _precioBase:number;
    private _color:string;
    private _consumoEnergetico:string;
    private _peso:number; 

    colores:string[] = ["blanco","negro","rojo","azul","gris"];

    consumoEnerg:string[] = ["A","B","C","D","E","F"];

    constructor(precioBase:number = valorDefecto.PRECIOBASE,color:string = valorDefecto.COLOR,consumoEnergetico:string = valorDefecto.CONSUMOENERG,peso:number = valorDefecto.PESO)
    {
        this._precioBase = precioBase;
        
        if(this.ComprobarConsumoEnergetico(consumoEnergetico))
        {
            this._consumoEnergetico = consumoEnergetico;
        }

        if(this.ComprobarColor(color))
        {
            this._color = color;
        }
                
        this._peso = peso;
    } 

    private ComprobarConsumoEnergetico(Energ:string):boolean 
    {     
        const found = this.consumoEnerg.find(element => element == Energ);  
        if(found != undefined)
       {
           return true;
       }
       else{
           return false;
       }
     }

     private ComprobarColor(color:string):boolean 
    {     
        const found = this.colores.find(element => element == color.toLowerCase());  
        if(found != undefined)
       {
           return true;
       }
       else{
           return false;
       }
     }
    
    public get precioBase():number{
        return this._precioBase 
    }

    public set precioBase(precioBase:number){
        this._precioBase = precioBase;
    }

    public get color():string{
        return this._color 
    }

    public set color(color:string){
        this._color = color;
    }

    public get consumoEnergetico():string{
        return this._consumoEnergetico 
    }

    public set consumoEnergetico(consumoEnergetico:string){
        this._consumoEnergetico = consumoEnergetico;
    }

    public get peso():number{
        return this._peso ;
    }

    public set peso(peso:number){
        this._peso = peso;
    }
}


class Lavadora extends Electrodomesticos
{     
    private _dueño:string;

    private _precioFinalReal:number;

    private _tamaño:number;

    constructor(dueño:string, tamaño:number,precioBase?:number,color?:string,consumoEnergetico?:string,peso?:number)
    {
        super(precioBase,color,consumoEnergetico,peso);

        this._dueño = dueño; 
        
        this._tamaño = tamaño;

        this.PrecioFinal();
    } 
    
    private PrecioFinal()
    {     
        const found = this.consumoEnerg.findIndex(element => element == this.consumoEnergetico);  

       this.precioFinalReal = this.precioBase + found + this.tamaño;
     }

    public get dueño():string{
        return this._dueño ;
    }

    public set dueño(dueño:string){
        this._dueño = dueño;
    }

    public get precioFinalReal():number{
        return this._precioFinalReal ;
    }

    public set precioFinalReal(precioFinalReal:number){
        this._precioFinalReal = precioFinalReal;
    }

    public get tamaño():number{
        return this._tamaño ;
    }

    public set tamaño(tamaño:number){
        this._tamaño = tamaño;
    }

    

     public ToString():string
     {
         return 'Dueño: '+this.dueño +'\n'+'Tamaño: '+this.tamaño +'\n'+'Precio base: '+ this.precioBase +'\n'+'Precio final: '+this.precioFinalReal +'\n'+'Color: '+ this.color +'\n'+'Consumo energetico: '+ this.consumoEnergetico +'\n'+'Peso: '+ this.peso;
     }
}



console.log('\n');
console.log('Creando una lavadora con todos los datos obtenidos.')
let electrodomestico1 = new Lavadora("Alberto", 125 ,350,"rojo","F",100);
console.log(electrodomestico1.ToString());
