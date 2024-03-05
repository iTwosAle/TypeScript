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
var Oscar = {
    id: 182110056,
    name: 'Oscar',
    surname: 'Rodríguez',
    birthday: new Date(2003, 10, 28)
};
var Luis = {
    id: 182110033,
    name: 'Luis',
    surname: 'Lopez',
    birthday: new Date(2004, 2, 6)
};
console.log(Oscar);
console.log(Luis);
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Edad: ".concat(this.edad));
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, sueldo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Sueldo: ".concat(this.sueldo));
    };
    Empleado.prototype.pagaImpuestos = function () {
        if (this.sueldo > 5000)
            console.log("".concat(this.nombre, " debe pagar impuestos"));
        else
            console.log("".concat(this.nombre, " no debe pagar impuestos"));
    };
    return Empleado;
}(Persona));
var persona1 = new Persona('Juan', 44);
persona1.imprimir();
var empleado1 = new Empleado('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
