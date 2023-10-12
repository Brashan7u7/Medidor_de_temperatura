class VisualizadorDatos {
    constructor() {
        this.chartPromedio = null;
        this.chartMaximo = null;
        this.chartMinimo = null;
    }

    mostrarDatos(datos) {
        this.actualizarGrafico(
            'chartPromedio',
            Object.keys(datos),
            Object.values(datos).map((_, i, arr) => (arr.slice(0, i + 1).reduce((a, b) => a + b) / (i + 1)).toFixed(2))
        );
        this.actualizarGrafico('chartMaximo', Object.keys(datos), Object.values(datos).map((_, i, arr) => Math.max(...arr.slice(0, i + 1))));
        this.actualizarGrafico('chartMinimo', Object.keys(datos), Object.values(datos).map((_, i, arr) => Math.min(...arr.slice(0, i + 1))));
    }

    actualizarGrafico(canvasId, labels, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        if (this[canvasId]) {
            this[canvasId].data.labels = labels;
            this[canvasId].data.datasets[0].data = data;
            this[canvasId].update();
        } else {
            this[canvasId] = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: canvasId === 'chartPromedio' ? 'Registro (°C)' : canvasId === 'chartMaximo' ? 'Máximo (°C)' : 'Mínimo (°C)',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
}
