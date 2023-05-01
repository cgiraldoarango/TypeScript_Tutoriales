interface IFigura {
    readonly lados: number;
    area(): number;
    perimetro(): number;

}
function mostrarInfo(figura: IFigura) {
    console.log(figura.area())
}

class TrianguloEquilatero implements IFigura {
    private base: number;
    private altura: number;
    private medidaLado;
    readonly tipo: string = "Triangulo"
    lados: number;
    area(): number {
        return (this.altura * this.base) / 2
    }
    perimetro(): number {
        return this.medidaLado * 3;
    }
    constructor(base: number, altura: number, medidaLado: number) {
        this.altura = altura;
        this.base = base;
        this.medidaLado = medidaLado
    }
}
let triangulo = new TrianguloEquilatero(2, 3, 5);
mostrarInfo(triangulo)