import { series } from "./data";

// Obtengo el elemento donde quiero insertar la tabla
const tableContainer = document.getElementById('table-container');

if (tableContainer) {
    // Creo el contenido HTML de la tabla
    let tableHTML = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Canal</th>
                <th scope="col">Temporadas</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Itero sobre las series y agrego cada una como una fila en la tabla
    let totalSeasons = 0;
    series.forEach(serie => {
        tableHTML += `
            <tr>
                <th scope="row">${serie.id}</th>
                <td>${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            </tr>
        `;
        totalSeasons += serie.seasons;
    });

    // Calculo el promedio de temporadas
    const averageSeasons = totalSeasons / series.length;

    // Cierro la etiqueta tbody antes de abrir tfoot
    tableHTML += `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Promedio de temporadas de todas las series:</td>
                <td>${averageSeasons.toFixed(2)}</td>
            </tr>
        </tfoot>
    </table>
    `;

    // Inserto la tabla en el contenedor
    tableContainer.innerHTML = tableHTML;
} else {
    console.error("No se encontró el elemento con el ID 'table-container'");
}
