window.addEventListener('load', async function() {   
    const head = this.document.querySelector("header")
    head.innerHTML = tpl_header()

	const menu = document.querySelector("nav")
    const main = document.querySelector("main")

    const secciones = await fetchUrl('./data/menu.json')
    secciones.forEach(it => {
        menu.innerHTML += `<a href="#${it.id}">${it.link}</a>`
        main.innerHTML += `<section id="${it.id}"></section>`
        document.getElementById(it.id).innerHTML = `<h2>${it.titulo}</h2>`
        seccion(it.id)
    })

    const foot = document.querySelector("footer")
    foot.innerHTML = tpl_footer()
})

// Plantillas de secciones

function tpl_header() {
    const name = "Amadeo Mora Rioja"
    return `
        <a href="index.html" title="Portal de ${name}">
            <img src="img/foto.jpg" alt="Foto de ${name}">
        </a>

        <h1>${name}</h1>
        <div>amadeomora (en) gmail (punto) com</div>
    `
}

function tpl_footer() {
    const year = new Date().getFullYear()
    return `&copy; ${year}`
}

function tpl_titulos(it) {
    return `
        <div class="titulacion">
			<div class="logo"><img src="img/universidad/${it.logo}" alt="Logo de la Universidad"></div>
            <div class="titulo">${it.titulo}</div>
            <div class="universidad">${it.universidad}</div>
        </div>
    `
}

function tpl_puestos(it) {
	return `
        <div class="puesto">
            <div class="empresa">${it.empresa}</div>
            <div class="fecha">${it.fecha}</div>
            <div class="cargo">${fmt(it.cargo)}</div>
            <div class="modulos">${fmt(it.modulos)}</div>
            <div class="descripcion">${fmt(it.descripcion)}</div>
        </div>
	`
}

function tpl_proyectos(it) {
	return `
        <div class="proyecto">
            <div class="empresa">${it.empresa}</div>
            <div class="desc">${fmt(it.descripcion)}</div>
            <div class="herramientas">${fmt(it.herramientas)}</div>
        </div>
    `
}

function tpl_ponencias(it) {
	return `
        <div class="ponencia">
            <div class="titulo">${it.titulo}</div>
            <div class="lugar">${it.lugar}</div>
        </div>
    `
}

function tpl_libros(it) {
	return `
        <div class="libro">
            <div class="portada"><img src="img/libros/${it.img}" alt="Portada del libro"></div>
            <div class="titulo">${it.titulo}</div>
            <div class="editorial">${it.editorial}</div>
            <div class="autoria">${it.autoria}</div>
        </div>
    `
}

function tpl_cursos(it) {
	return `
        <div class="ponencia">
            <div class="curso">${it.curso}</div>
            <div class="lugar">${it.lugar}</div>
        </div>
    `
}

// Funciones auxiliares

fmt = (it) => {
	it = it ?? ""
	return typeof it == "string" ? it : it.join(" | ")
}

async function fetchUrl(url) {
    const response = await fetch(url)
    if (!response.ok) console.log(response)
    return await response.json()
}

async function seccion(id) {
    const data = await fetchUrl('./data/cv_'+id+'.json')
    data.forEach(it => document.getElementById(id).innerHTML += window['tpl_'+id](it))
}
