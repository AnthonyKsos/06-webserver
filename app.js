const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el motor de plantillas HBS y los parciales
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Middleware para servir contenido estático
app.use(express.static(path.join(__dirname, "public")));

// Ruta raíz para renderizar main.hbs
app.get("/", (req, res) => {
  res.render("components/inicio-page/inicio", { layout: "layouts/main" });
});

// Rutas del proyecto dsw Biblioteca de la FISI
app.get("/consultar-datos", (req, res) => {
  res.render("components/consultar-datos-page/consultar-datos", {
    layout: "layouts/main",
  });
});

app.get("/consultar-libro", (req, res) => {
  res.render("components/consultar-libro-page/consultar-libro", {
    nombre: "UNMSM",
    titulo: "Biblioteca de la FISI",
    layout: "layouts/main",
  });
});

app.get("/solicitar-prestamo", (req, res) => {
  res.render("components/solicitar-prestamo-page/solicitar-prestamo", {
    nombre: "UNMSM",
    titulo: "Biblioteca de la FISI",
    layout: "layouts/main",
  });
});

app.get("/actualizar-estado-de-prestamo", (req, res) => {
  res.render(
    "components/actualizar-estado-de-prestamo-page/actualizar-estado-de-prestamo",
    {
      nombre: "UNMSM",
      titulo: "Biblioteca de la FISI",
      layout: "layouts/main",
    }
  );
});

app.get("/consultar-historial-de-prestamos", (req, res) => {
  res.render(
    "components/consultar-historial-de-prestamos-page/consultar-historial-de-prestamos",
    {
      nombre: "UNMSM",
      titulo: "Biblioteca de la FISI",
      layout: "layouts/main",
    }
  );
});

app.get("/reservar-cubiculo", (req, res) => {
  res.render("components/reservar-cubiculo-page/reservar-cubiculo", {
    nombre: "UNMSM",
    titulo: "Biblioteca de la FISI",
    layout: "layouts/main",
  });
});

app.get("/consultar-cubiculo", (req, res) => {
  res.render("components/consultar-cubiculo-page/consultar-cubiculo", {
    nombre: "UNMSM",
    titulo: "Biblioteca de la FISI",
    layout: "layouts/main",
  });
});

app.get("/actualizar-estado-de-cubiculo", (req, res) => {
  res.render(
    "components/actualizar-estado-de-cubiculo-page/actualizar-estado-de-cubiculo",
    {
      nombre: "UNMSM",
      titulo: "Biblioteca de la FISI",
      layout: "layouts/main",
    }
  );
});

// Ruta para manejar errores 404
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
