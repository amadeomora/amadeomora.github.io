load = () => {
	menu()
	cv()
}

async function menu() {
	const menuNav = document.querySelector("nav")
    const secciones = await fetchUrl('./data/menu.json')
    secciones.forEach(it => {
		menuNav.innerHTML += `<a href="#${it.id}">${it.link}</a>`
		document.getElementById(it.id).innerHTML = `<h2>${it.titulo}</h2>`
	})
}

async function cv() {
    const cv = await fetchUrl('./data/cv-minify.json')
    titulos(cv.titulos, 'idTitulos')
    puestos(cv.puestos, 'idPuestos')
    ponencias(cv.ponencias, 'idPonencias')
    libros(cv.libros, 'idLibros')
    proyectos(cv.proyectos, 'idProyectos')
    cursos(cv.cursos, 'idCursos')
}

function titulos(info, section) {
	info.forEach(it => document.getElementById(section).innerHTML += `
        <div class="titulacion">
			<div class="logo"><img src="img/universidad/${it.logo}" alt="Logo de la Universidad"></div>
            <div class="titulo">${it.titulo}</div>
            <div class="universidad">${it.universidad}</div>
        </div>
    `)
}

function puestos(info, section) {
	info.forEach(it => document.getElementById(section).innerHTML += `
        <div class="puesto">
            <div class="empresa">${it.empresa}</div>
            <div class="fecha">${it.fecha}</div>
            <div class="cargo">${fmt(it.cargo)}</div>
            <div class="modulos">${fmt(it.modulos)}</div>
            <div class="descripcion">${fmt(it.descripcion)}</div>
        </div>
	`)
}

function proyectos(info, section) {
	info.forEach(it => document.getElementById(section).innerHTML += `
        <div class="proyecto">
            <div class="empresa">${it.empresa}</div>
            <div class="desc">${fmt(it.descripcion)}</div>
            <div class="herramientas">${fmt(it.herramientas)}</div>
        </div>
    `)
}

function ponencias(info, section) {
	info.forEach(it => document.getElementById(section).innerHTML += `
        <div class="ponencia">
            <div class="titulo">${it.titulo}</div>
            <div class="lugar">${it.lugar}</div>
        </div>
    `)
}

function libros(info, section) {
	info.forEach(it => document.getElementById(section).innerHTML += `
        <div class="libro">
            <div class="portada"><img src="img/libros/${it.img}" alt="Portada del libro"></div>
            <div class="titulo">${it.titulo}</div>
            <div class="editorial">${it.editorial}</div>
            <div class="autoria">${it.autoria}</div>
        </div>
    `)
}

function cursos(info, section) {
	info.forEach(it => document.getElementById(section).innerHTML += `
        <div class="ponencia">
            <div class="curso">${it.curso}</div>
            <div class="lugar">${it.lugar}</div>
        </div>
    `)
}

// Funciones auxiliares

fmt = (it) => {
	it = it ?? ""
	return typeof it == "string" ? it : it.join(" | ")
}

async function fetchUrl(url) {
    const response = await fetch(url)
    if (!response.ok) {
        console.log(response)
    }
    return await response.json()
}
