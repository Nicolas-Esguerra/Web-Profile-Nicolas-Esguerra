/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Estudio Programación Web y construyo sitios con HTML, CSS y JavaScript. Me interesa el desarrollo accesible y el soporte técnico, y quiero aplicar lo que aprendo en mis primeras prácticas.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Guamo, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A2)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Aprendo a construir sitios web con HTML, CSS, JavaScript y MySQL, y a trabajar en equipo con Git y GitHub.",
  "edu.2.title": "Diplomado en Redes (en curso)",
  "edu.2.text":  "Aprendo direccionamiento IP, subredes, fundamentos de redes y Cisco.",

  "exp.1.title": "Proyecto académico en equipo",
  "exp.1.text":  "Participé en el desarrollo de un evaluador de accesibilidad que revisa criterios de nivel A de WCAG 2.2 analizando HTML, usando la metodología XP.",
  "exp.2.title": "Desarrollo de videojuego",
  "exp.2.text":  "Desarrollé un videojuego simple con Godot Engine, programando su lógica y sus controles.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Calculadora de matrices",
  "project.1.text":  "Resuelve sistemas de ecuaciones y calcula la matriz inversa paso a paso · JavaScript, PHP",
  "project.2.title": "Evaluador de accesibilidad WCAG · En curso",
  "project.2.text":  "Analiza HTML según WCAG 2.2 nivel A · Laravel",
  "project.3.title": "Perfil web bilingüe",
  "project.3.text":  "Página personal en español e inglés · HTML, CSS, JavaScript",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes una práctica o un proyecto? Escríbeme.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Nicolás Esguerra",

  "footer.note": "Nicolás Esguerra · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "Web programming student building websites with HTML, CSS and JavaScript. I focus on accessible development and technical support, and I am looking for an internship to apply what I learn.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Guamo, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A2)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Learning to build websites with HTML, CSS, JavaScript and MySQL, and to collaborate using Git and GitHub.",
  "edu.2.title": "Diploma in Networking (in progress)",
  "edu.2.text":  "Learning IP addressing, subnetting, the basics of networks and Cisco.",

  "exp.1.title": "Team academic project",
  "exp.1.text":  "Helped build an accessibility checker that tests WCAG 2.2 Level A criteria by analyzing HTML, following the XP methodology.",
  "exp.2.title": "Video game development",
  "exp.2.text":  "Developed a simple video game with Godot Engine, programming its logic and controls.",

  "portfolio.title": "Projects",
  "project.1.title": "Matrix calculator",
  "project.1.text":  "Solves linear systems and calculates inverse matrices step by step · JavaScript, PHP",
  "project.2.title": "WCAG accessibility checker . course",
  "project.2.text":  "Analyzes HTML against WCAG 2.2 Level A · Laravel",
  "project.3.title": "Bilingual web profile",
  "project.3.text":  "Personal page in Spanish and English · HTML, CSS, JavaScript",

  "contact.title":         "Contact",
  "contact.intro":         "Looking for an intern or have a project? Send me a message.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Nicolás Esguerra",

  "footer.note": "Nicolás Esguerra · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
