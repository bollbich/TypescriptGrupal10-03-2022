var valorVariable;
(function (valorVariable) {
    valorVariable["cadenaVacia"] = "";
    valorVariable[valorVariable["numeroSinValor"] = 0] = "numeroSinValor";
})(valorVariable || (valorVariable = {}));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, peso, altura) {
        if (nombre === void 0) { nombre = valorVariable.cadenaVacia; }
        if (edad === void 0) { edad = valorVariable.numeroSinValor; }
        if (sexo === void 0) { sexo = valorVariable.cadenaVacia; }
        if (peso === void 0) { peso = valorVariable.numeroSinValor; }
        if (altura === void 0) { altura = valorVariable.numeroSinValor; }
        this._nombre = nombre;
        this._edad = edad;
        this._DNI = this.GeneraDNI();
        if (this.ComprobarSexo(sexo)) {
            this._sexo = sexo;
        }
        else
            this.sexo = 'H';
        this._peso = peso;
        this._altura = altura;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (DNI) {
            this._DNI = DNI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (peso) {
            this._peso = peso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (altura) {
            this._altura = altura;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.CalcularIMC = function () {
        var valor = this.peso / (this.altura * this.altura);
        if (valor < 20) {
            console.log(valor);
            return -1;
        }
        else if (valor >= 20 && valor <= 25) {
            console.log(valor);
            return 0;
        }
        else {
            console.log(valor);
            return 1;
        }
    };
    Persona.prototype.EsMayorDeEdad = function () {
        if (this.edad < 18) {
            return false;
        }
        else {
            return true;
        }
    };
    Persona.prototype.ComprobarSexo = function (sexo) {
        if (sexo == 'M' || sexo == 'H') {
            return true;
        }
        else {
            return false;
        }
    };
    Persona.prototype.ToString = function () {
        return 'Nombre: ' + this.nombre + '\n' + 'edad: ' + this.edad + '\n' + 'DNI: ' + this.DNI + '\n' + 'sexo: ' + this.sexo + '\n' + 'peso: ' + this.peso + '\n' + 'altura: ' + this.altura;
    };
    Persona.prototype.GeneraDNI = function () {
        var numero = Math.round(Math.random() * (99999999 - 10000000) + 10000000);
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        var letra = letras[Math.round(Math.random() * (22 - 0) + 0)];
        var dniEntero = numero + "-" + letra;
        return dniEntero;
    };
    return Persona;
}());
console.log('\n');
console.log('Creando persona con todos los datos obtenidos.');
var persona1 = new Persona("Charlie", 35, 'H', 70, 181);
console.log(persona1.ToString());
console.log('\n');
console.log('Creando persona sin peso ni altura.');
var persona2 = new Persona("Opra", 15, 'M');
console.log(persona2.ToString());
console.log('\n');
console.log('Creando persona por defecto.');
var persona3 = new Persona();
console.log(persona3.ToString());
console.log('\n');
console.log('Asignando sus propiedades mediante setters');
persona3.nombre = "Alavro";
persona3.edad = 55;
persona3.sexo = "Z";
persona3.peso = 180;
persona3.altura = 191;
console.log(persona3.ToString());
console.log('\n');
if (persona1.EsMayorDeEdad()) {
    console.log(persona1.nombre + ' es mayor de edad');
}
else {
    console.log(persona1.nombre + ' es menor de edad');
}
if (persona1.CalcularIMC() == -1)
    console.log(persona1.nombre + " tiene un peso ideal.");
else if (persona1.CalcularIMC() == 0)
    console.log(persona1.nombre + " tiene sobrepeso.");
else
    console.log(persona1.nombre + " esta por debajo de su peso ideal.");
console.log('\n');
if (persona2.EsMayorDeEdad()) {
    console.log(persona2.nombre + ' es mayor de edad');
}
else {
    console.log(persona2.nombre + ' es menor de edad');
}
if (persona2.CalcularIMC() == -1)
    console.log(persona2.nombre + " tiene un peso ideal.");
else if (persona2.CalcularIMC() == 0)
    console.log(persona2.nombre + " tiene sobrepeso.");
else
    console.log(persona2.nombre + " esta por debajo de su peso ideal.");
console.log('\n');
if (persona3.EsMayorDeEdad()) {
    console.log(persona3.nombre + ' es mayor de edad');
}
else {
    console.log(persona3.nombre + ' es menor de edad');
}
if (persona3.CalcularIMC() == -1)
    console.log(persona3.nombre + " tiene un peso ideal.");
else if (persona3.CalcularIMC() == 0)
    console.log(persona3.nombre + " tiene sobrepeso.");
else
    console.log(persona3.nombre + " esta por debajo de su peso ideal.");
