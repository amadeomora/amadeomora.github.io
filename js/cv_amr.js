show = div => document.getElementById(div).className = 'show'
hide = div => document.getElementById(div).className = 'hide'
sh = div => { secciones.forEach(it => hide(it.id)); show(div) }

load = () => {
    menu()
    titulos()
    puestos()
    ponencias()
    libros()
    proyectos()
    cursos()
}

let secciones = [
	{
		"id":"idTitulos",
		"titulo":"Formación académica"
	},
	{
		"id":"idPuestos",
		"titulo":"Experiencia laboral"
	},
	{
		"id":"idPonencias",
		"titulo":"Cursos y ponencias impartidas"
	},
	{
		"id":"idLibros",
		"titulo":"Publicaciones realizadas"
	},
	{
		"id":"idProyectos",
		"titulo":"Participación en proyectos"
	},
	{
		"id":"idCursos",
		"titulo":"Cursos realizados"
	}
]

function menu() {
    let menu_nav = document.querySelector("nav")
    let tpl = (id, titulo) => `<div><a href="#" onclick="sh('${id}')">${titulo}</a></div>`
    secciones.forEach(it => {
        menu_nav.innerHTML += tpl(it.id, it.titulo)
        document.getElementById(it.id).innerHTML = `<h2>${it.titulo}</h2>`
        document.getElementById(it.id).className = 'hide'
    })
}

let cv = {
	"titulos":[
		{
			"titulo":"Licenciado en Informática",
			"universidad":"Universidad Politécnica de Madrid"
		},
		{
			"titulo":"Diploma de Estudios Avanzados en Didáctica y Organización Escolar",
			"universidad":"Universidad Nacional de Educación a Distancia"
		},
		{
			"titulo":"Máster Universitario en Software Libre",
			"universidad":"Universitat Oberta de Catalunya"
		},
		{
			"titulo":"First Certificate in English",
			"universidad":"University of Cambridge"
		}
	],
	"puestos":[
		{
			"empresa":"IES Tetuán de las Victorias",
			"fecha":"Desde el curso 2024-25",
			"cargo":"Catedrático de informática",
			"modulos":[
				"Aplicaciones web",
				"Seguridad informática",
				"Lenguajes de marcas"
			]
		},
		{
			"empresa":"IES Virgen de la Paloma",
			"fecha":"Cursos 2022-23 y 2023-24",
			"cargo":"Catedrático de informática y jefe del departamento de informática y comunicaciones",
			"modulos":[
				"Acceso a datos",
				"Programación multimedia y dispositivos móviles"
			],
			"descripcion":"Tutor de funcionarios en prácticas"
		},
		{
			"empresa":"Preparadores de oposiciones",
			"fecha":"Curso 2022-23",
			"cargo":"Preparador de oposiciones de la especialidad de informática"
		},
		{
			"empresa":"IES Clara del Rey",
			"fecha":"Curso 2021-22",
			"cargo":"Catedrático de informática",
			"modulos":[
				"Programación",
				"Acceso a datos",
				"Bases de datos"
			]
		},
		{
			"empresa":"IES Clara del Rey",
			"fecha":"Cursos 2015-16 al 2020-21",
			"cargo":"Profesor de informática",
			"modulos":[
				"Programación",
				"Acceso a datos",
				"Bases de datos"
			],
			"descripcion":"Tutor de funcionarios en prácticas"
		},
		{
			"empresa":"Centro para la Innovación y Desarrollo de la Educación a Distancia (CIDEAD)",
			"fecha":"Curso 2019-20",
			"cargo":"Profesor de informática",
			"modulos":[
				"Entornos de desarrollo"
			]
		},
		{
			"empresa":"IES Clara del Rey",
			"fecha":"Cursos 2010-11 al 2014-15",
			"cargo":"Profesor de informática y jefe de estudios adjunto",
			"modulos":[
				"Lenguajes de marcas",
				"Programación",
				"Programación multimedia y dispositivos móviles",
				"Desarrollo de Funciones en el Sistema Informático"
			],
			"descripcion":"Coordinador de FP Dual y Tutor de alumnos del Máster de Profesores de Enseñanza Secundaria"
		},
		{
			"empresa":"IES Clara del Rey",
			"fecha":"Cursos 2008-09 y 2009-10",
			"cargo":"Profesor de informática",
			"modulos":[
				"Programación en Lenguajes Estructurados",
				"Desarrollo de Funciones en el Sistema Informático"
			],
			"descripcion":"Tutor de alumnos del Máster de Profesores de Enseñanza Secundaria"
		},
		{
			"empresa":"Universidad Nacional de Educación a Distancia",
			"fecha":"Cursos de 2007-08 al 2011-12",
			"cargo":"Profesor del Máster en Tecnologías para la Educación y el Conocimiento",
			"modulos":[
				"Linux",
				"Software Libre",
				"Web 2.0"
			]
		},
		{
			"empresa":"Ministerio de Educación",
			"fecha":"Curso 2007-08",
			"cargo":"Jefe de Área de Formación del Profesorado del Instituto Superior de Formación y Recursos en Red para el Profesorado"
		},
		{
			"empresa":"IES Clara del Rey",
			"fecha":"Cursos 2005-06 y 2006-07",
			"cargo":"Profesor de informática y coordinador TIC",
			"modulos":[
				"Programación en Lenguajes Estructurados",
				"Desarrollo de Funciones en el Sistema Informático",
				"Fundamentos de programación",
				"Sistemas gestores de bases de datos"
			],
			"descripcion":"Grupo de gestión de calidad"
		},
		{
			"empresa":"IES La Arboleda de Alcorcón (Madrid)",
			"fecha":"Cursos 2003-04 y 2004-05",
			"cargo":"Profesor de informática",
			"modulos":"Desarrollo de Funciones en el Sistema Informático"
		},
		{
			"empresa":"Ministerio de Educación, Cultura y Deporte",
			"fecha":"Curso 2002-03",
			"cargo":"Asesor Técnico Docente de la Subdirección General de Tratamiento de la Información"
		},
		{
			"empresa":"Ministerio de Educación, Cultura y Deporte",
			"fecha":"Curso 2001-02",
			"cargo":"Consejero Técnico del Centro Nacional de Informática y Comunicación Educativa",
			"descripcion":[
				"Plataformas de formación a distancia",
				"Proyecto Mentor",
				"Formación del profesorado a distancia"
			]
		},
		{
			"empresa":"IES La Arboleda de Alcorcón (Madrid)",
			"fecha":"Curso 2000-01",
			"cargo":"Profesor de informática y jefe del departamento de informática y comunicaciones",
			"modulos":[
				"Sistemas Gestores de Bases de Datos",
				"Desarrollo de Funciones en el Sistema Informático"
			]
		},
		{
			"empresa":"IES La Arboleda de Alcorcón (Madrid)",
			"fecha":"Curso 1999-2000",
			"cargo":"Profesor de informática",
			"modulos":[
				"Sistemas Gestores de Bases de Datos",
				"Desarrollo de Funciones en el Sistema Informático"
			]
		},
		{
			"empresa":"Ministerio de Educación y Ciencia",
			"fecha":"De febrero de 1998 a septiembre de 1999",
			"cargo":"Jefe del Gabinete de Telemática del Programa de Nuevas Tecnologías de la Información y la Comunicación"
		},
		{
			"empresa":"IES La Arboleda de Alcorcón (Madrid)",
			"fecha":"De septiembre de 1996 a enero 1998",
			"cargo":"Profesor de informática",
			"modulos":[
				"Lenguajes de 4ª generación y herramientas CASE",
				"Formación en Centros de Trabajo"
			]
		},
		{
			"empresa":"Ministerio de Educación y Ciencia",
			"fecha":"De enero de 1995 a septiembre de 1996",
			"cargo":"Asesor Técnico Docente del Centro de Desarrollo Curricular"
		},
		{
			"empresa":"IFP Villablanca",
			"fecha":"De julio de 1994 a diciembre de 1994",
			"cargo":"Profesor de tecnología informática y jefe de estudios"
		},
		{
			"empresa":"IFP Villablanca",
			"fecha":"Cursos 1992-93 y 1993-94",
			"cargo":"Profesor de tecnología informática"
		},
		{
			"empresa":"Documenta Organización",
			"fecha":"De junio de 1990 a septiembre de 1992",
			"cargo":"Jefe de proyectos",
			"descripcion":"Consultoría. Gestión documental y archivos docuNAUTA."
		},
		{
			"empresa":"Sun Microsystems Ibérica",
			"fecha":"De abril de 1990 a mayo de 1990",
			"descripcion":"División de Venta Indirecta"
		},
		{
			"empresa":"Documenta Organización",
			"fecha":"De noviembre de 1989 a marzo de 1990",
			"cargo":"Analista",
			"descripcion":"Documentación y archivos. BRS/Search."
		},
		{
			"empresa":"Centro de Tratamiento de la Documentación",
			"fecha":"De Enero de 1989 a octubre de 1989",
			"cargo":"Técnico de Sistemas",
			"descripcion":"VAX/VMS y PDP/RSX"
		},
		{
			"empresa":"Centro de Tratamiento de la Documentación",
			"fecha":"De mayo de 1987 a diciembre de 1988",
			"cargo":"Operador-programador del Servicio de Microfilmación",
			"descripcion":"PDP-11 y RT-11"
		}
	],
	"proyectos":[
		{
			"empresa":"Software libre",
			"descripcion":[
				"Internal Message",
				"Internal Calendar",
				"Internal ClassRoom"
			],
			"herramientas":"Componente para Joomla de mensajería interna, avisos de próximos eventos y reserva de salas"
		},
		{
			"empresa":"Comunidad de Madrid",
			"descripcion":"Grupo de desarrollo de MAX (MAdrid_linuX)",
			"herramientas":"Linux"
		},
		{
			"empresa":"#FPEmpresa",
			"descripcion":"Software libre, motor de empresas"
		},
		{
			"empresa":"Centro Nacional de Información y Comunicación Educativa del Ministerio de Educación y Ciencia",
			"descripcion":"Análisis y desarrollo de la plataforma virtual de formación y trabajo cooperativo a distancia del profesorado",
			"herramientas":"PHP, MySQL, PostgreSQL y Apache en Linux"
		},
		{
			"empresa":"IES Clara del Rey",
			"descripcion":"Grupo de Gestión de Calidad"
		},
		{
			"empresa":"Centro Nacional de Información y Comunicación Educativa del Ministerio de Educación y Ciencia",
			"descripcion":"Coordinador a distancia del curso de Aplicaciones didácticas con Neobook"
		},
		{
			"empresa":"IES La Arboleda - CAP de Alcorcón",
			"descripcion":"Coordinador del grupo de trabajo de la elaboración del Portal WEB del IES La Arboleda"
		},
		{
			"empresa":"Centro Nacional de Información y Comunicación Educativa del Ministerio de Educación, Cultura y Deporte",
			"descripcion":"Tutor a distancia del curso de Programación en PHP en la Enseñanza"
		},
		{
			"empresa":"Subdirección General de Tratamiento de la Información del Ministerio de Educación, Cultura y Deporte",
			"descripcion":"Portal web del Ministerio de Educación, Cultura y Deporte",
			"herramientas":"J2EE y Oracle"
		},
		{
			"empresa":"Centro Nacional de Información y Comunicación Educativa del Ministerio de Educación, Cultura y Deporte",
			"descripcion":"Miembro del consejo de redacción de la revista Red Digital"
		},
		{
			"empresa":"CPR de Ciudad Lineal",
			"descripcion":"Grupo de Trabajo Virtual, formado por especialistas en informática educativa, que investigan las posibilidades didácticas de las herramientas de tiempo real en Internet aplicadas a la enseñanza no universitaria"
		},
		{
			"empresa":"Centro de Desarrollo Curricular del Ministerio de Educación y Ciencia",
			"descripcion":"Participación en el análisis y programación del software de gestión administrativa-académica de centros docentes GICeDo",
			"herramientas":"Clipper en MS-DOS"
		},
		{
			"empresa":"Centro de Desarrollo Curricular del Ministerio de Educación y Ciencia",
			"descripcion":"Base de Datos de Desarrollo Curricular",
			"herramientas":"BRS, ABSYS, Clipper en UNIX SCO/DOS/Windows"
		},
		{
			"empresa":"Documenta Organización",
			"descripcion":[
				"Diseño del Sistema de Gestión Documental Automatizado de la compañía ENDESA",
				"Mecanización del Archivo fotográfico de la Revista DIEZ MINUTOS del Grupo Hachette",
				"Mecanización del catálogo de la biblioteca del Ministerio de Cultura"
			],
			"herramientas":"C, MNS y BRS/Search en UNIX SCO"
		},
		{
			"empresa":"Documenta Organización",
			"descripcion":[
				"Proyecto docuNAUTA. Software de gestión documental de archivos",
				"Diseño del registro de entrada/salida y flujo documental de la entidad SEOPAN"
			],
			"herramientas":"C, Clipper en MS-DOS"
		},
		{
			"empresa":"Centro de Tratamiento de la Documentación",
			"descripcion":"Análisis y programación de la aplicación Control y Gestión de Archivos del Centro de Almacén y Custodia de Documentación",
			"herramientas":"Fortran, Powerhouse 4GL y Architect CASE en VAX/VMS y PDP11"
		}
	],
	"ponencias":[
		{
			"titulo":"Crea tu blog en Educamadrid",
			"lugar":"Curso. CRIF Las Acacias - Comunidad de Madrid. 2020."
		},
		{
			"titulo":"La FP DUAL en la especialidad de informática en Madrid: 3 años funcionando",
			"lugar":"II Congreso Nacional de Profesores de Informática. Valencia. 2014."
		},
		{
			"titulo":"FP Dual. Formación en la empresa y en el centro educativo",
			"lugar":"CPC Los Boscos. Logroño. 2014."
		},
		{
			"titulo":"FP Dual en Informática y Comunicaciones en la Comunidad de Madrid.",
			"lugar":"I Congreso Nacional de Profesores de Informática. Madrid. 2013."
		},
		{
			"titulo":"Twitter como núcleo de los entornos personales de aprendizaje (PLE).",
			"lugar":"XVII Congreso de Informática Educativa de la UNED. Madrid. 2012."
		},
		{
			"titulo":"Proyecto de formación dual ies+empresa.",
			"lugar":"Encuentro intermedio del proyecto FPEmpresa. Toledo. 2012."
		},
		{
			"titulo":"Peligros y problemas de las redes sociales.",
			"lugar":"XV Congreso de Informática Educativa de la UNED. Madrid. 2010."
		},
		{
			"titulo":"Joomla como catalizador de la organización del centro.",
			"lugar":"II Jornadas de Integración de las TIC en la enseñanza. CRIF Las Acacias. Madrid. 2010."
		},
		{
			"titulo":"El profesor 2.0. Pizarras y Tic-zas.",
			"lugar":"I Jornada TIC de Escuelas Católicas de Cantabria. Santander. 2009."
		},
		{
			"titulo":"Los desafíos del docente 2.0.",
			"lugar":"Conferencia de clausura. XIV Congreso de Informática Educativa de la UNED. Madrid. 2009."
		},
		{
			"titulo":"De la gestión de calidad a la Web 2.0: IES Clara del Rey",
			"lugar":"Experiencia. XIII Congreso de Informática Educativa de la UNED. Madrid. 2008."
		},
		{
			"titulo":"El fracaso de la independencia del ciberespacio de los gobiernos",
			"lugar":"Texto. Curso de doctorado de la UNED. Madrid. 2007."
		},
		{
			"titulo":"¿Ha muerto el intelecto?",
			"lugar":"Texto. Curso de doctorado de la UNED. Madrid. 2007."
		},
		{
			"titulo":"¿Por qué usar MAX en el aula?",
			"lugar":"Comunicación. XII Congreso de Informática Educativa de la UNED. Madrid. 2007."
		},
		{
			"titulo":"Usamos software libre",
			"lugar":"Curso. CAP de Retiro. Madrid. 2007."
		},
		{
			"titulo":"Sistema operativo MAX (MAdrid_linuX) 2.0",
			"lugar":"Curso. CAP de Retiro. Madrid. 2006."
		},
		{
			"titulo":"En clave de calidad. Hacia el éxito escolar.",
			"lugar":"Secretario. Hacia la vida profesional: itinerarios formativos. Ministerio de Educación, Cultura y Deporte. Madrid. 2002."
		},
		{
			"titulo":"La Educación en internet e internet en la educación.",
			"lugar":"Comité científico. CNICE-MECD. Madrid. 2002."
		},
		{
			"titulo":"La brecha digital.",
			"lugar":"Ponencia. CNICE-MECD. Madrid. 2002."
		},
		{
			"titulo":"Uniformidad digital: globalización.",
			"lugar":"Ponencia. UNED - Ávila. 2002."
		},
		{
			"titulo":"Tecnologías en la comunicación y la información",
			"lugar":"Secretario. Curso de Formación del Profesorado de Formación Profesional. UIMP. Santander. 2001."
		},
		{
			"titulo":"El ordenador en la enseñanza.",
			"lugar":"Mesa redonda. UIMP 2001."
		},
		{
			"titulo":"Nuevas Tecnologías en la educación.",
			"lugar":"Mesa Redonda. UIMP 2001."
		},
		{
			"titulo":"Formar en Informática Educativa.",
			"lugar":"Moderador. UIMP 2001."
		},
		{
			"titulo":"Aplicación de las Nuevas Tecnologías en la Formación Profesional.",
			"lugar":"Ponencia. UIMP 2001."
		},
		{
			"titulo":"Internet en educación",
			"lugar":"Curso. CPR de Alcobendas. Alcobendas. 1999."
		},
		{
			"titulo":"Proyecto de red temática del Programa de Lengua y Cultura Portuguesa",
			"lugar":"Ponencia. Santander. 1999."
		},
		{
			"titulo":"Access",
			"lugar":"Curso. Funcionarios de la Administración en el IES La Arboleda. Alcorcón. 1997."
		},
		{
			"titulo":"Introducción a Internet",
			"lugar":"Curso. XXII Escuela de Verano de Acción Educativa. 1997."
		},
		{
			"titulo":"¿Hay alguien ahí?: Conversaciones en Internet",
			"lugar":"Comunicación. Jornadas de Calidad de la Enseñanza e Innovación Educativa del CPR de Ciudad-Lineal. Madrid. 1997."
		},
		{
			"titulo":"Multimedia e Hipermedia : La red Internet",
			"lugar":"Curso ADC-C. CPR de Ciudad Lineal. Madrid. 1997."
		},
		{
			"titulo":"Informatización de Bibliotecas Escolares",
			"lugar":"Curso ADC-C. CPR de Ciudad Lineal. Madrid. 1996."
		},
		{
			"titulo":"Actualización de Aulas de Informática. Redes",
			"lugar":"Curso ADC-C. CPR de Ciudad Lineal. Madrid. 1995."
		},
		{
			"titulo":"Formación Básica en Informática",
			"lugar":"Curso ADC-C. CPR de Ciudad Lineal. Madrid. 1994."
		},
		{
			"titulo":"docuNAUTA",
			"lugar":"Ponencia. III Jornadas de Archivística en el País Vasco. Bilbao. 1992."
		},
		{
			"titulo":"Archivos administrativos en centros sanitarios",
			"lugar":"Ponencia. Master de Documentación para la Sanidad (DOSIS 2000). Madrid. 1991."
		},
		{
			"titulo":"Viabilidad económica, funcional y técnica de un Sistema de Gestión Documental Automatizado con soporte óptico",
			"lugar":"Ponencia. I Jornadas de Documentación Automatizada. Palma de Mallorca. 1990."
		}
	],
	"libros":[
		{
			"titulo":"Manual de Instalación de MAX 12.0",
			"editorial":"Comunidad de Madrid.",
			"autoria":"[Coautoría]"
		},
		{
			"titulo":"Manual de Instalación de MAX 11.0",
			"editorial":"Comunidad de Madrid.",
			"autoria":"[Coautoría]"
		},
		{
			"titulo":"Manual de Instalación de MAX 10.0",
			"editorial":"Comunidad de Madrid.",
			"autoria":"[Coautoría]"
		},
		{
			"titulo":"Manual de Instalación de MAX 9.0",
			"editorial":"Comunidad de Madrid.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max8.png",
			"titulo":"Manual de Instalación de MAX 8.0",
			"editorial":"Comunidad de Madrid. 2015.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max7.jpg",
			"titulo":"Manual de Instalación de MAX 7.0",
			"editorial":"Comunidad de Madrid. 2012.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max6.jpg",
			"titulo":"Manual de Instalación de MAX 6.0",
			"editorial":"Comunidad de Madrid. 2010.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max50.png",
			"titulo":"Manual de Instalación de MAX 5.0",
			"editorial":"Comunidad de Madrid. 2009.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max50.png",
			"titulo":"Guía de Referencia de MAX 5.0",
			"editorial":"Comunidad de Madrid. 2009.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max40.png",
			"titulo":"Manual de Instalación de MAX 4.0",
			"editorial":"Comunidad de Madrid. 2008.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max40.png",
			"titulo":"Guía de Referencia de MAX 4.0",
			"editorial":"Comunidad de Madrid. 2008.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max30.png",
			"titulo":"Guía de Instalación de MAX 3.0",
			"editorial":"Comunidad de Madrid. 2007.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max30.png",
			"titulo":"Guía de Utilización de MAX 3.0",
			"editorial":"Comunidad de Madrid. 2007.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/tutoreinternet.jpg",
			"titulo":"Tutor e Internet",
			"editorial":"CNICE-MEC. 2006.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max.png",
			"titulo":"MAX, Madrid Linux, v.2.0. Manual de instalación",
			"editorial":"Comunidad de Madrid. 2006.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/max.png",
			"titulo":"MAX, Madrid Linux, v.2.0. Manual de utilización por el usuario",
			"editorial":"Comunidad de Madrid. 2006.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/tutoreseinternet.png",
			"titulo":"Tutores e internet",
			"editorial":"CNICE-MECD. 2003.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/hotpotatoes.png",
			"titulo":"Aplicaciones Educativas con HOT POTATOES",
			"editorial":"CNICE-MECD. 2002.",
			"autoria":"[Asesoría técnica]"
		},
		{
			"img":"img/videodigitalymultimedia.png",
			"titulo":"Vídeo Digital y Multimedia",
			"editorial":"PNTIC-MEC. 1998.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/clipper.png",
			"titulo":"Guía Práctica de Clipper 5.2.",
			"editorial":"Anaya Multimedia. 1994.",
			"autoria":"[Coautoría]"
		},
		{
			"img":"img/pooclipper.png",
			"titulo":"Programación Orientada al Objeto en Clipper.",
			"editorial":"Anaya Multimedia. 1993.",
			"autoria":"[Autoría]"
		}
	],
	"cursos":[
		{
			"curso":"Fundamentos de los servicios de computación en la nube",
			"lugar":"Instituto Superior Madrileño de Innovación Educativa"
		},
		{
			"curso":"Mentores de funcionarios en prácticas",
			"lugar":"Instituto Superior Madrileño de Innovación Educativa"
		},
		{
			"curso":"Plan digital Virgen de la Paloma",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Google Workspace for Education",
			"lugar":"Formación permanente del profesorado - Comunidad de Madrid"
		},
		{
			"curso":"Introducción a la programación de videojuegos con Unity",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Big Data, Python fundamentals y bases de datos NoSQL",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"El impacto del RGPD en los centros educativos",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Programación en Python",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Función tutorial en el aula virtual del CRIF Las Acacias",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Creación de cursos Moodle orientados a metodologías activas",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"How to teach subjects in english in vocational",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Programación I. Introducción al uso de nuevas tecnologías en el aula. ",
			"lugar":"CodeMadrid - Comunidad de Madrid"
		},
		{
			"curso":"El aula virtual como recurso educativo en la Formación Profesional",
			"lugar":"CTIF Madrid-Capital - Comunidad de Madrid"
		},
		{
			"curso":"Desarrollo en HTML5, CSS y Javascript de WebApps, incluyendo móviles FirefoxOS",
			"lugar":"Miriada X / UPM"
		},
		{
			"curso":"Android: Programación de Aplicaciones ",
			"lugar":"Miriada X / UPV"
		},
		{
			"curso":"Diseño de presentaciones y su publicación en web ",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Servicios web de Google para la enseñanza ",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Elaboración de cursos Moodle y tutorización en el Aula Virtual de EducaMadrid ",
			"lugar":"CRIF Las Acacias - Comunidad de Madrid"
		},
		{
			"curso":"Joomla! La web en entornos educativos ",
			"lugar":"Formación del Profesorado - CNICE - MEPSYD"
		},
		{
			"curso":"Tutores en la red ",
			"lugar":"efepeline - Comunidad de Madrid"
		},
		{
			"curso":"Aprendizaje virtual con Moodle ",
			"lugar":"CAP de Retiro"
		},
		{
			"curso":"Seminario de Coordinadores TIC (ver)",
			"lugar":"CAP de Retiro"
		},
		{
			"curso":"Internetworking ",
			"lugar":"FYCSA - Comunidad de Madrid"
		},
		{
			"curso":"Java, JSP ",
			"lugar":"Subdirección General de Tratamiento de la Información - MECD"
		},
		{
			"curso":"Interwoven ",
			"lugar":"GFI Informática"
		},
		{
			"curso":"Perfeccionamiento para el ejercicio de la Función Directiva en Centros Educativos ",
			"lugar":"CSI-CSIF - MECD"
		},
		{
			"curso":"Tutoría Telemática a Distancia",
			"lugar":"Formación del Profesorado - CNICE - MECD"
		},
		{
			"curso":"Administración de base de datos ORACLE ",
			"lugar":"ORACLE Ibérica"
		},
		{
			"curso":"Windows NT ",
			"lugar":"CPR de Alcorcón-Madrid"
		},
		{
			"curso":"Verity Search97 ",
			"lugar":"ADD Servicios Informaticos"
		},
		{
			"curso":"Java ",
			"lugar":"MENTOR - PNTIC - MEC"
		},
		{
			"curso":"Tutoría Telemática ",
			"lugar":"MENTOR - PNTIC - MEC"
		},
		{
			"curso":"Seguridad en Internet ",
			"lugar":"Internet Publishing Services (IPS)"
		},
		{
			"curso":"Gestión de NOVELL 4.1 ",
			"lugar":"Informática El Corte Inglés"
		},
		{
			"curso":"Jornadas sobre la Reforma de la Selectividad",
			"lugar":"Universidad Autónoma de Madrid"
		},
		{
			"curso":"Jornada sobre Internet en la Administración ",
			"lugar":"MEC"
		},
		{
			"curso":"Telemática IBERTEX. Aplicaciones educativas ",
			"lugar":"PNTIC - MEC"
		},
		{
			"curso":"Informática Avanzada ",
			"lugar":"CPR de Hortaleza-Madrid"
		},
		{
			"curso":"Software de gestión de bibliotecas ABSYS ",
			"lugar":"Servicios de Teledocumentación BARATZ"
		},
		{
			"curso":"Sistemas de archivo electrónico ",
			"lugar":"Documenta Organización"
		},
		{
			"curso":"Invesdoc/Invescold ",
			"lugar":"Investrónica"
		},
		{
			"curso":"Diseño y Programación Orientada a Objetos ",
			"lugar":"Documenta Organización"
		},
		{
			"curso":"Hypermedia/Hypercard para Macintosh ",
			"lugar":"Facultad de Informática de la UPM"
		},
		{
			"curso":"Documentación y Nuevas Tecnologías ",
			"lugar":"Documenta Organización"
		},
		{
			"curso":"BRS/Search ",
			"lugar":"Servicios de Teledocumentación BARATZ"
		},
		{
			"curso":"MEGADOC y DOCSYST ",
			"lugar":"Philips Informática y Comunicaciones"
		},
		{
			"curso":"P4000, DINOS y COBOL ",
			"lugar":"Philips Informática y Comunicaciones"
		},
		{
			"curso":"Architec y CASE ",
			"lugar":"Audihispana Auditores"
		},
		{
			"curso":"Powerhouse y 4GL ",
			"lugar":"Audihispana Auditores"
		},
		{
			"curso":"Técnico de Sistemas VAX/VMS ",
			"lugar":"CTD"
		},
		{
			"curso":"Sistemas de microfilm ",
			"lugar":"CTD"
		}
	]
}


function titulos() {
    let tpl = (t, u) => `
        <div class="titulacion">
            <div class="titulo">${t}</div>
            <div class="universidad">${u}</div>
        </div>
    `
    cv.titulos.forEach(it => idTitulos.innerHTML += tpl(it.titulo, it.universidad))
}

function puestos() {
    let tpl = (e, f, c, m, d) => `
        <div class="puesto">
            <div class="empresa">${e}</div>
            <div class="fecha">${f}</div>
            <div class="cargo">${c}</div>
            <div class="modulos">${m}</div>
            <div class="descripcion">${d}</div>
        </div>`
    cv.puestos.forEach(it => {
        let modulos = it.modulos ?? ""
        if (typeof modulos != "string") {
            modulos = modulos.join(" | ")
        }
        idPuestos.innerHTML += (tpl(it.empresa, it.fecha, it.cargo ?? "", modulos, it.descripcion ?? ""))
    })
}

function proyectos() {
    let tpl = (e, d, h) => `
        <div class="proyecto">
            <div class="empresa">${e}</div>
            <div class="desc">${d}</div>
            <div class="herramientas">${h}</div>
        </div>
    `
    cv.proyectos.forEach(it => {
        let desc = it.descripcion ?? ""
        if (typeof desc != "string") {
            desc = desc.join(" | ")
        }
        idProyectos.innerHTML += (tpl(it.empresa, desc, it.herramientas ?? ""))
    })
}

function ponencias() {
    let tpl = (t, l) => `
        <div class="ponencia">
            <div class="titulo">${t}</div>
            <div class="lugar">${l}</div>
        </div>
    `
    cv.ponencias.forEach(it => idPonencias.innerHTML += (tpl(it.titulo, it.lugar)))
}

function libros() {
    let tpl = (i, t, e, a) => `
        <div class="libro">
            <div class="portada"><img src="${i}"></div>
            <div class="titulo">${t}</div>
            <div class="editorial">${e}</div>
            <div class="autoria">${a}</div>
        </div>
    `
    cv.libros.forEach(it => idLibros.innerHTML += (tpl(it.img ?? "img/max.png", it.titulo, it.editorial, it.autoria)))
}

function cursos() {
    let tpl = (c, l) => `
        <div class="ponencia">
            <div class="curso">${c}</div>
            <div class="lugar">${l}</div>
        </div>
    `
    cv.cursos.forEach(it => idCursos.innerHTML += (tpl(it.curso, it.lugar)))
}
