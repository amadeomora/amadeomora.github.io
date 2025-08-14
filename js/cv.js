/**
 * Carga el Menú y el CV desde varios archivos JSON y lo muestra en la página.
 * Utiliza plantillas para renderizar las diferentes secciones del CV.
 */
window.addEventListener('load', async function() {   
    document.querySelector('header').innerHTML = tpl_header()

	const nav = document.querySelector('nav')
    const main = document.querySelector('main')

    const secciones = await fetchJson('./data/menu.json')
    secciones.forEach(it => {
        nav.innerHTML += `<a href="#${it.id}">${it.link}</a>`
        main.innerHTML += `<section id="${it.id}"></section>`
        document.getElementById(it.id).innerHTML = `<h2>${it.titulo}</h2>`
        seccion(it.id)
    })

    document.querySelector('footer').innerHTML = tpl_footer()
})

/**
 * Formatea un elemento para mostrarlo como una cadena de texto.
 * Si el elemento es `null` o `undefined`, devuelve una cadena vacía.
 * Si es una cadena, la devuelve tal cual.
 * Si es un array, lo convierte en una cadena uniendo sus elementos con ' | '
 * 
 * @param {string|Array} it - El elemento a formatear.
 * @returns {string} - La representación en cadena del elemento.
 */
fmt = (it) => {
	it = it ?? ''
	return typeof it == 'string' ? it : it.join(' | ')
}

/**
 * Realiza una solicitud HTTP GET para obtener un recurso JSON.
 * Si la respuesta no es exitosa, imprime el error en la consola.
 * 
 * @param {string} url - La URL del recurso JSON a obtener.
 * @returns {Promise<Object>} - Una promesa que resuelve con el objeto JSON obtenido.
 */
async function fetchJson(url) {
    const response = await fetch(url)
    if (!response.ok) console.log(response)
    return await response.json()
}

/**
 * Carga una sección del CV a partir de un archivo JSON.
 * Utiliza la plantilla correspondiente para renderizar cada elemento.
 * 
 * @param {string} id - El ID de la sección a cargar.
 */
async function seccion(id) {
    const data = await fetchJson('./data/cv_'+id+'.json')
    data.forEach(it => document.getElementById(id).innerHTML += window['tpl_'+id](it))
}


// Plantillas de secciones

function tpl_header() {
    const name = 'Amadeo Mora Rioja'
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
