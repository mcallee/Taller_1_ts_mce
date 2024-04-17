"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
// Obtengo el elemento donde quiero insertar la tabla
var tableContainer = document.getElementById('table-container');
if (tableContainer) {
    // Creo el contenido HTML de la tabla
    var tableHTML_1 = "\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Canal</th>\n                <th scope=\"col\">Temporadas</th>\n            </tr>\n        </thead>\n        <tbody>\n    ";
    // Itero sobre las series y agrego cada una como una fila en la tabla
    var totalSeasons_1 = 0;
    data_1.series.forEach(function (serie) {
        tableHTML_1 += "\n            <tr>\n                <th scope=\"row\">".concat(serie.id, "</th>\n                <td>").concat(serie.name, "</td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td>\n            </tr>\n        ");
        totalSeasons_1 += serie.seasons;
    });
    // Calculo el promedio de temporadas
    var averageSeasons = totalSeasons_1 / data_1.series.length;
    // Cierro la etiqueta tbody antes de abrir tfoot
    tableHTML_1 += "\n        </tbody>\n        <tfoot>\n            <tr>\n                <td colspan=\"3\">Promedio de temporadas de todas las series:</td>\n                <td>".concat(averageSeasons.toFixed(2), "</td>\n            </tr>\n        </tfoot>\n    </table>\n    ");
    // Inserto la tabla en el contenedor
    tableContainer.innerHTML = tableHTML_1;
}
else {
    console.error("No se encontró el elemento con el ID 'table-container'");
}
