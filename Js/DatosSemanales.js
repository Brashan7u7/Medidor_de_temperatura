class DatosSemanales {
    constructor() {

        this.temperaturas = {};
    }

    agregarTemperatura(dia, temp) {
    
        this.temperaturas[dia] = temp;
    }

    obtenerTemperatura(dia) {

        return this.temperaturas[dia];
    }

    obtenerTodasLasTemperaturas() {
        return this.temperaturas;
    }
}
