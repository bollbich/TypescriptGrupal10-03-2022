enum valorVariable{
    cadenaVacia = "",
    numeroSinValor = 0
}

class Persona
{
    private _nombre:string;
    private _edad:number;
    private _DNI:string;
    private _sexo:string;
    private _peso:number;
    private _altura:number;    

    constructor(nombre:string = valorVariable.cadenaVacia,edad:number = valorVariable.numeroSinValor,sexo:string = valorVariable.cadenaVacia,peso:number = valorVariable.numeroSinValor,altura:number = valorVariable.numeroSinValor)
    {
        this._nombre = nombre;
        this._edad = edad;

        this._DNI = this.GeneraDNI();
        if(this.ComprobarSexo(sexo))
        {
            this._sexo = sexo;
        }else this.sexo = 'H'
        
        this._peso = peso;
        this._altura = altura;
    }   

    public get nombre():string{
        return this._nombre 
    }

    public set nombre(nombre:string){
        this._nombre = nombre;
    }

    public get edad():number{
        return this._edad 
    }

    public set edad(edad:number){
        this._edad = edad;
    }

    public get DNI():string{
        return this._DNI 
    }

    public set DNI(DNI:string){
        this._DNI = DNI;
    }

    public get sexo():string{
        return this._sexo 
    }

    public set sexo(sexo:string){
        this._sexo = sexo;
    }

    public get peso():number{
        return this._peso 
    }

    public set peso(peso:number){
        this._peso = peso;
    }

    public get altura():number{
        return this._altura 
    }

    public set altura(altura:number){
        this._altura = altura;
    }

    public CalcularIMC():number 
    {     
        let valor:number =   this.peso / (this.altura*this.altura);

        if(valor<20)
        {
           return -1;
        }
        else if(valor>=20 && valor<=25){ 
            return 0;
        }
        else{
             return 1;
        }
     }

    public EsMayorDeEdad():boolean 
    {       
        if(this.edad<18)
       {
           return false;
       }
       else{
           return true;
       }
     }

     private ComprobarSexo(sexo:string):boolean 
    {       
        if(sexo === "M"||sexo === "H")
       {
           return true;
       }
       else{
           return false;
       }
     }

     public ToString():string
     {
         return 'Nombre: '+this.nombre +'\n'+'edad: '+ this.edad +'\n'+'DNI: '+ this.DNI +'\n'+'sexo: '+ this.sexo +'\n'+'peso: '+ this.peso +'\n'+'altura: '+ this.altura;
     }

     private GeneraDNI():string{        
		
            let numero = Math.round(Math.random()* (99999999 - 10000000) + 10000000);
            let dniEntero:string = numero +"-" +"TRWAGMYFPDXBNJZSQVHLCKE".charAt(numero % 23);
            return dniEntero;              

            //let letras:string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            
            //let letra:string = letras[Math.round(Math.random() * (22 - 0) + 0)];
            //let dniEntero:string = numero +"-" +letra;

                  
     }
}

console.log('\n');
console.log('Creando persona con todos los datos obtenidos.')
let persona1 = new Persona("Charlie" , 35 , 'H' , 70 , 181);
console.log(persona1.ToString());

console.log('\n');
console.log('Creando persona sin peso ni altura.')
let persona2 = new Persona("Opra", 15 , 'M');
console.log(persona2.ToString());

console.log('\n');
console.log('Creando persona por defecto.')
let persona3 = new Persona();
console.log(persona3.ToString());

console.log('\n');
console.log('Asignando sus propiedades mediante setters')
persona3.nombre = "Alavro";
persona3.edad = 55;
persona3.sexo = "Z";
persona3.peso = 180;
persona3.altura = 191;
console.log(persona3.ToString());

console.log('\n');
if(persona1.EsMayorDeEdad())
{
    console.log(persona1.nombre +' es mayor de edad')
}
else
{
    console.log(persona1.nombre +' es menor de edad')
}

if(persona1.CalcularIMC()==-1)console.log(persona1.nombre+" tiene un peso ideal.");
		else if(persona1.CalcularIMC()==0)console.log(persona1.nombre+" tiene sobrepeso.");
		else console.log(persona1.nombre+" esta por debajo de su peso ideal.");

console.log('\n');
if(persona2.EsMayorDeEdad())
{
    console.log(persona2.nombre +' es mayor de edad')
}
else
{
    console.log(persona2.nombre +' es menor de edad')
}

if(persona2.CalcularIMC()==-1)console.log(persona2.nombre+" tiene un peso ideal.");
		else if(persona2.CalcularIMC()==0)console.log(persona2.nombre+" tiene sobrepeso.");
		else console.log(persona2.nombre+" esta por debajo de su peso ideal.");

console.log('\n');
if(persona3.EsMayorDeEdad())
{
    console.log(persona3.nombre +' es mayor de edad')
}
else
{
    console.log(persona3.nombre +' es menor de edad')
}

if(persona3.CalcularIMC()==-1)console.log(persona3.nombre+" tiene un peso ideal.");
		else if(persona3.CalcularIMC()==0)console.log(persona3.nombre+" tiene sobrepeso.");
		else console.log(persona3.nombre+" esta por debajo de su peso ideal.");
