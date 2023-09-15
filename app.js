    // Obtenemos el elemento donde se mostrará la información
let info = document.getElementById("info");

function showInfo(instrumento) {
    // Creamos una variable para almacenar el contenido HTML
    var html = "";
    // Según el instrumento, mostramos una información u otra
    switch (instrumento) {
        case "guitarra":
            html += "<h3>Cómo afinar una guitarra</h3>";
            html += "<p>Para afinar una guitarra, necesitas un afinador o una referencia de sonido. Las cuerdas de la guitarra se afinan de la siguiente manera:</p>";
            html += "<ul>";
            html += "<li>La primera cuerda (la más fina) se afina en Mi (E).</li>";
            html += "<li>La segunda cuerda se afina en Si (B).</li>";
            html += "<li>La tercera cuerda se afina en Sol (G).</li>";
            html += "<li>La cuarta cuerda se afina en Re (D).</li>";
            html += "<li>La quinta cuerda se afina en La (A).</li>";
            html += "<li>La sexta cuerda (la más gruesa) se afina en Mi (E).</li>";
            html += "</ul>";
            html += "<p>Para afinar cada cuerda, debes girar el clavijero correspondiente hasta que el sonido de la cuerda coincida con el del afinador o la referencia. Puedes usar un diapasón, un piano, una aplicación o un sitio web como referencia.</p>";
            break;
        case "violin":
            html += "<h3>Cómo afinar un violín</h3>";
            html += "<p>Para afinar un violín, necesitas un afinador o una referencia de sonido. Las cuerdas del violín se afinan de la siguiente manera:</p>";
            html += "<ul>";
            html += "<li>La primera cuerda (la más cercana al suelo) se afina en Mi (E).</li>";
            html += "<li>La segunda cuerda se afina en La (A).</li>";
            html += "<li>La tercera cuerda se afina en Re (D).</li>";
            html += "<li>La cuarta cuerda (la más cercana al techo) se afina en Sol (G).</li>";
            html += "</ul>";
            html += "<p>Para afinar cada cuerda, debes girar el clavijero correspondiente hasta que el sonido de la cuerda coincida con el del afinador o la referencia. También puedes usar las llaves de afinación que están en el cordal para hacer ajustes más finos. Puedes usar un diapasón, un piano, una aplicación o un sitio web como referencia.</p>";
            break;
        case "ukelele":
            html += "<h3>Cómo afinar un ukelele</h3>";
            html += "<p>Para afinar un ukelele, necesitas un afinador o una referencia de sonido. Las cuerdas del ukelele se afinan de la siguiente manera:</p>";
            html += "<ul>";
            html += "<li>La primera cuerda (la más cercana al suelo) se afina en La (A).</li>";
            html += "<li>La segunda cuerda se afina en Mi (E).</li>";
            html += "<li>La tercera cuerda se afina en Do (C).</li>";
            html += "<li>La cuarta cuerda (la más cercana al techo) se afina en Sol (G).</li>";
            html += "</ul>";
            html += "<p>Para afinar cada cuerda, debes girar el clavijero correspondiente hasta que el sonido de la cuerda coincida con el del afinador o la referencia. Puedes usar un diapasón, un piano, una aplicación o un sitio web como referencia.</p>";
            break;
        default:
            html += "<p>Selecciona un instrumento para ver cómo afinarlo.</p>";
    }
    // Asignamos el contenido HTML al elemento info
    info.innerHTML = html;
}
