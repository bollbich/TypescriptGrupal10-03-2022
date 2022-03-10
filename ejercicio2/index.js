//Crear una clase llamada SERIE
//Sus atributos son titulo,numero de temporadas, entregado, genero y creador
//El numero de temporadas es de 3 y entregado false
//El resto de atributos seran valores por defecto segun el tipo de atributo
//Los constructores que se implemnetaran seran (un constructor por defecto, un constructor con el titulo y creador,
//un constrcutor con todos los atributos, excepto de entregado)
//Los metodos que se implemnetaran seran (metodos get de todos los atributos excepto de entregado,
//metodos set de todos los atributos excepto de entregado, sobreescribe los metodos toString)
var Serie = /** @class */ (function () {
    function Serie(titulo, numeroTemporadas, genero, creador) {
        this._numeroTemporadas = 3;
        this._entregado = false;
        this._titulo = titulo;
        this._numeroTemporadas = numeroTemporadas;
        this._genero = genero;
        this._creador = creador;
    }
    Object.defineProperty(Serie.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (valor) {
            this._titulo = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "numeroTemporadas", {
        get: function () {
            return this._numeroTemporadas;
        },
        set: function (valor) {
            this._numeroTemporadas = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "genero", {
        get: function () {
            return this._genero;
        },
        set: function (valor) {
            this._genero = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "creador", {
        get: function () {
            return this._creador;
        },
        set: function (valor) {
            this._creador = valor;
        },
        enumerable: false,
        configurable: true
    });
    Serie.prototype.ToString = function () {
        return 'Titulo: ' + this.titulo + '\n' + 'Numero temporadas: ' + this.numeroTemporadas + '\n' + 'Genero: ' + this.genero + '\n' + 'Creador: ' + this.creador;
    };
    return Serie;
}());
var titulo = ["Verano azul"];
console.log(titulo);
var numeroTemporadas = [5];
console.log(numeroTemporadas);
var genero = ["Drama"];
console.log(genero);
var creador = ["Jairo"];
console.log(creador);
