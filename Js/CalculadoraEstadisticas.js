class CalculadoraEstadisticas {
    calcularPromedio(datos) {
        // Calcula y retorna el promedio de las temperaturas
        let suma = 0;
        let count = 0;
        for (let dia in datos) {
            suma += datos[dia];
            count++;
        }
        return suma / count;
    }

    calcularMaximo(datos) {
        let maxTemp = -Infinity;
        for (let dia in datos) {
            if (datos[dia] > maxTemp) maxTemp = datos[dia];
        }
        return maxTemp;
    }

    calcularMinimo(datos) {
        let minTemp = Infinity;
        for (let dia in datos) {
            if (datos[dia] < minTemp) minTemp = datos[dia];
        }
        return minTemp;
    }
}