load = () => {
	menu()
	cv()
}

function menu() {
	const menuNav = document.querySelector("nav")
	fetch('./data/menu.json')
		.then(response => response.json())
		.then(secciones => secciones.forEach(it => {
			menuNav.innerHTML += `<a href="#${it.id}">${it.link}</a>`
			document.getElementById(it.id).innerHTML = `<h2>${it.titulo}</h2>`
		}))
}

function cv() {
	fetch('./data/cv.json')
		.then(response => response.json())
		.then(cv => {
			titulos(cv)
			puestos(cv)
			ponencias(cv)
			libros(cv)
			proyectos(cv)
			cursos(cv)
		})
}

function titulos(cv) {
	const tpl = (i, t, u) => `
        <div class="titulacion">
			<div class="logo"><img src="img/universidad/${i}" alt="Logo de la Universidad"></div>
            <div class="titulo">${t}</div>
            <div class="universidad">${u}</div>
        </div>
    `
	cv.titulos.forEach(it => idTitulos.innerHTML += tpl(it.logo, it.titulo, it.universidad))
}

function puestos(cv) {
	const tpl = (e, f, c, m, d) => `
        <div class="puesto">
            <div class="empresa">${e}</div>
            <div class="fecha">${f}</div>
            <div class="cargo">${c}</div>
            <div class="modulos">${m}</div>
            <div class="descripcion">${d}</div>
        </div>
	`
	cv.puestos.forEach(it => idPuestos.innerHTML += tpl(it.empresa, it.fecha, fmt(it.cargo), fmt(it.modulos), fmt(it.descripcion)))
}

function proyectos(cv) {
	const tpl = (e, d, h) => `
        <div class="proyecto">
            <div class="empresa">${e}</div>
            <div class="desc">${d}</div>
            <div class="herramientas">${h}</div>
        </div>
    `
	cv.proyectos.forEach(it => idProyectos.innerHTML += tpl(it.empresa, fmt(it.descripcion), fmt(it.herramientas)))
}

function ponencias(cv) {
	const tpl = (t, l) => `
        <div class="ponencia">
            <div class="titulo">${t}</div>
            <div class="lugar">${l}</div>
        </div>
    `
	cv.ponencias.forEach(it => idPonencias.innerHTML += tpl(it.titulo, it.lugar))
}

function libros(cv) {
	const tpl = (i, t, e, a) => `
        <div class="libro">
            <div class="portada"><img src="img/libros/${i}" alt="Portada del libro"></div>
            <div class="titulo">${t}</div>
            <div class="editorial">${e}</div>
            <div class="autoria">${a}</div>
        </div>
    `
	cv.libros.forEach(it => idLibros.innerHTML += tpl(it.img, it.titulo, it.editorial, it.autoria))
}

function cursos(cv) {
	const tpl = (c, l) => `
        <div class="ponencia">
            <div class="curso">${c}</div>
            <div class="lugar">${l}</div>
        </div>
    `
	cv.cursos.forEach(it => idCursos.innerHTML += tpl(it.curso, it.lugar))
}

fmt = (it) => {
	it = it ?? ""
	return typeof it == "string" ? it : it.join(" | ")
}
