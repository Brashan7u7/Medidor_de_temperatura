class AplicacionTemperatura {
    constructor() {
        this.datosSemana = new DatosSemanales();
        this.visualizador = new VisualizadorDatos();
        this.calculadora = new CalculadoraEstadisticas();
    }

    ingresarTemperatura(dia, temp) {
        this.datosSemana.agregarTemperatura(dia, temp);
    }

    mostrarDatos() {
        return this.visualizador.mostrarDatos(this.datosSemana.obtenerTodasLasTemperaturas());
    }

    calcularEstadisticas() {
        let datos = this.datosSemana.obtenerTodasLasTemperaturas();
        let resultado = {
            promedio: this.calculadora.calcularPromedio(datos),
            maximo: this.calculadora.calcularMaximo(datos),
            minimo: this.calculadora.calcularMinimo(datos)
        };
        return resultado;
    }
}
