import { Serie } from './serie.js';
import { series } from './data.js';

const tablaSeries = document.getElementById("series");
const promedioElemento = document.getElementById("promedio");

showSeries(series);
showPromedio(series);

function showSeries(series) {
    const seriesTbody = document.createElement("tbody");
    series.forEach(serie => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.titulo}</td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
    tablaSeries.appendChild(seriesTbody);
}

function calcPromedio(series) {
    const totalTemp = series.reduce((sum, serie) => sum + serie.temporadas, 0);
    return totalTemp / series.length;
}

function showPromedio(series) {
    const promedio = calcPromedio(series);
    const promedioRow = document.createElement("tr");
    promedioRow.innerHTML = `<td colspan="4"><strong>Promedio de temporadas:</strong> ${promedio.toFixed(2)}</td>`;
    promedioElemento.appendChild(promedioRow);
}

