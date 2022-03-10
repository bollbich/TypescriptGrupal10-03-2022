var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var valorDefecto;
(function (valorDefecto) {
    valorDefecto["COLOR"] = "blanco";
    valorDefecto["CONSUMOENERG"] = "F";
    valorDefecto[valorDefecto["PRECIOBASE"] = 100] = "PRECIOBASE";
    valorDefecto[valorDefecto["PESO"] = 5] = "PESO";
})(valorDefecto || (valorDefecto = {}));
var Electrodomesticos = /** @class */ (function () {
    function Electrodomesticos(precioBase, color, consumoEnergetico, peso) {
        if (precioBase === void 0) { precioBase = valorDefecto.PRECIOBASE; }
        if (color === void 0) { color = valorDefecto.COLOR; }
        if (consumoEnergetico === void 0) { consumoEnergetico = valorDefecto.CONSUMOENERG; }
        if (peso === void 0) { peso = valorDefecto.PESO; }
        this.colores = ["blanco", "negro", "rojo", "azul", "gris"];
        this.consumoEnerg = ["A", "B", "C", "D", "E", "F"];
        this._precioBase = precioBase;
        if (this.ComprobarConsumoEnergetico(consumoEnergetico)) {
            this._consumoEnergetico = consumoEnergetico;
        }
        if (this.ComprobarColor(color)) {
            this._color = color;
        }
        this._peso = peso;
    }
    Electrodomesticos.prototype.ComprobarConsumoEnergetico = function (Energ) {
        var found = this.consumoEnerg.find(function (element) { return element == Energ; });
        if (found != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    Electrodomesticos.prototype.ComprobarColor = function (color) {
        var found = this.colores.find(function (element) { return element == color.toLowerCase(); });
        if (found != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(Electrodomesticos.prototype, "precioBase", {
        get: function () {
            return this._precioBase;
        },
        set: function (precioBase) {
            this._precioBase = precioBase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electrodomesticos.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electrodomesticos.prototype, "consumoEnergetico", {
        get: function () {
            return this._consumoEnergetico;
        },
        set: function (consumoEnergetico) {
            this._consumoEnergetico = consumoEnergetico;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electrodomesticos.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (peso) {
            this._peso = peso;
        },
        enumerable: false,
        configurable: true
    });
    return Electrodomesticos;
}());
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(dueño, tamaño, precioBase, color, consumoEnergetico, peso) {
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this._dueño = dueño;
        _this._tamaño = tamaño;
        _this.PrecioFinal();
        return _this;
    }
    Lavadora.prototype.PrecioFinal = function () {
        var _this = this;
        var found = this.consumoEnerg.findIndex(function (element) { return element == _this.consumoEnergetico; });
        this.precioFinalReal = this.precioBase + found + this.tamaño;
    };
    Object.defineProperty(Lavadora.prototype, "due\u00F1o", {
        get: function () {
            return this._dueño;
        },
        set: function (dueño) {
            this._dueño = dueño;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lavadora.prototype, "precioFinalReal", {
        get: function () {
            return this._precioFinalReal;
        },
        set: function (precioFinalReal) {
            this._precioFinalReal = precioFinalReal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lavadora.prototype, "tama\u00F1o", {
        get: function () {
            return this._tamaño;
        },
        set: function (tamaño) {
            this._tamaño = tamaño;
        },
        enumerable: false,
        configurable: true
    });
    Lavadora.prototype.ToString = function () {
        return 'Dueño: ' + this.dueño + '\n' + 'Tamaño: ' + this.tamaño + '\n' + 'Precio base: ' + this.precioBase + '\n' + 'Precio final: ' + this.precioFinalReal + '\n' + 'Color: ' + this.color + '\n' + 'Consumo energetico: ' + this.consumoEnergetico + '\n' + 'Peso: ' + this.peso;
    };
    return Lavadora;
}(Electrodomesticos));
console.log('\n');
console.log('Creando una lavadora con todos los datos obtenidos.');
var electrodomestico1 = new Lavadora("Alberto", 125, 350, "rojo", "F", 100);
console.log(electrodomestico1.ToString());
