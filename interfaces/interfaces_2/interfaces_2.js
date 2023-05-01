function mostrarInfo(figura) {
    console.log(figura.area());
}
var TrianguloEquilatero = /** @class */ (function () {
    function TrianguloEquilatero(base, altura, medidaLado) {
        this.tipo = "Triangulo";
        this.altura = altura;
        this.base = base;
        this.medidaLado = medidaLado;
    }
    TrianguloEquilatero.prototype.area = function () {
        return (this.altura * this.base) / 2;
    };
    TrianguloEquilatero.prototype.perimetro = function () {
        return this.medidaLado * 3;
    };
    return TrianguloEquilatero;
}());
var triangulo = new TrianguloEquilatero(2, 3, 5);
mostrarInfo(triangulo);
