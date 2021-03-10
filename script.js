$(".head").load("/templates/header.html");

Galleria.loadTheme(
  "https://cdnjs.cloudflare.com/ajax/libs/galleria/1.6.1/themes/folio/galleria.folio.js"
);
Galleria.run(".galleria");
var loc = $(location).attr('href');
console.log(loc);