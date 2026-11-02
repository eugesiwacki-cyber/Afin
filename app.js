// ===== CONTENIDO: acá cambiás textos, categorías y eventos =====
// Todos los planes son en la Ciudad de Buenos Aires
const categorias = [
  { id: 'teatro', nombre: 'Teatro', color: '#631100', subs: ['Comedia', 'Musical', 'Stand up', 'Tragedia', 'Drama'] },
  { id: 'arte', nombre: 'Arte', color: '#53779A', subs: ['Pintura', 'Diseño', 'Fotografía', 'Muestras'] },
  { id: 'cine', nombre: 'Cine', color: '#2F5D3A', subs: ['Estrenos', 'Clásicos', 'Animación', 'Documental'] },
  { id: 'musica', nombre: 'Música', color: '#8A5A00', subs: ['Conciertos', 'Festivales'] }
];

// dias: 0=lunes, 1=martes ... 5=sábado, 6=domingo
// lat y lng: coordenadas del lugar (ahora son aproximadas del barrio; poné las exactas de cada dirección)
// precio: 0 es gratis | imagen: nombre de la foto en la carpeta img
const eventos = [
  { id: 'feria', titulo: 'Feria de arte independiente', cat: 'arte', sub: 'Muestras', dias: [5, 6], dia: 'Sáb y dom', hora: '15 a 20 h', ini: '15:00',
    lugar: 'Centro cultural', zona: 'Palermo', lat: -34.5875, lng: -58.4300, precio: 0, imagen: 'feria.jpg', estreno: true,
    desc: 'Más de 40 artistas muestran y venden sus obras. Hay pintura, ilustración y fotografía.',
    etiquetas: ['Arte', 'Muestras', 'Gratis', 'Al aire libre'] },
  { id: 'impro', titulo: 'Noche de impro', cat: 'teatro', sub: 'Comedia', dias: [4], dia: 'Vie', hora: '21 h', ini: '21:00',
    lugar: 'Teatro del centro', zona: 'Palermo', lat: -34.5890, lng: -58.4250, precio: 6000, imagen: 'impro.jpg', estreno: true,
    desc: 'Cinco improvisadores, cero guion. Cada función es distinta y el público decide.',
    etiquetas: ['Teatro', 'Comedia', 'Estreno', '+16'] },
  { id: 'standup', titulo: 'Stand up', cat: 'teatro', sub: 'Stand up', dias: [5], dia: 'Sáb', hora: '20 h', ini: '20:00',
    lugar: 'Bar cultural', zona: 'Almagro', lat: -34.6100, lng: -58.4200, precio: 8000, imagen: 'standup.jpg',
    desc: 'Una noche con varios comediantes y humor para todos los gustos.',
    etiquetas: ['Teatro', 'Stand up', 'Noche', '+16'] },
  { id: 'musical', titulo: 'Comedia musical', cat: 'teatro', sub: 'Musical', dias: [5], dia: 'Sáb', hora: '21 h', ini: '21:00',
    lugar: 'Teatro Villa Crespo', zona: 'Villa Crespo', lat: -34.5990, lng: -58.4400, precio: 12000, imagen: 'musical.jpg',
    desc: 'Una comedia con canciones en vivo, actuada y cantada por un elenco joven.',
    etiquetas: ['Teatro', 'Musical', 'En vivo', 'Familiar'] },
  { id: 'teatroind', titulo: 'Teatro independiente', cat: 'teatro', sub: 'Drama', dias: [6], dia: 'Dom', hora: '19 h', ini: '19:00',
    lugar: 'Sala independiente', zona: 'San Telmo', lat: -34.6210, lng: -58.3720, precio: 5000, imagen: 'teatroind.jpg',
    desc: 'Una obra íntima en una sala chica, con el elenco a pocos metros del público.',
    etiquetas: ['Teatro', 'Drama', 'Independiente', 'Sala chica'] },
  { id: 'cine', titulo: 'Ciclo de cine', cat: 'cine', sub: 'Clásicos', dias: [5], dia: 'Sáb', hora: '19 h', ini: '19:00',
    lugar: 'Cine Almagro', zona: 'Almagro', lat: -34.6080, lng: -58.4190, precio: 3500, imagen: 'cine.jpg', estreno: true,
    desc: 'Una película por semana, con charla abierta al terminar la función.',
    etiquetas: ['Cine', 'Clásicos', 'Ciclo', 'Charla'] },
  { id: 'diseno', titulo: 'Feria de diseño', cat: 'arte', sub: 'Diseño', dias: [6], dia: 'Dom', hora: '15 h', ini: '15:00',
    lugar: 'Galpón de diseño', zona: 'Palermo', lat: -34.5830, lng: -58.4350, precio: 0, imagen: 'diseno.jpg',
    desc: 'Diseñadores independientes con ropa, objetos, afiches y mucho más.',
    etiquetas: ['Arte', 'Diseño', 'Gratis', 'Feria'] },
  { id: 'muestra', titulo: 'Muestra colectiva', cat: 'arte', sub: 'Muestras', dias: [5, 6], dia: 'Finde', hora: '14 a 19 h', ini: '14:00',
    lugar: 'Galería de arte', zona: 'Recoleta', lat: -34.5880, lng: -58.3930, precio: 0, imagen: 'muestra.jpg',
    desc: 'Obras de más de 20 artistas en una misma sala.',
    etiquetas: ['Arte', 'Muestras', 'Gratis', 'Pintura'] },
  { id: 'concierto', titulo: 'Concierto íntimo', cat: 'musica', sub: 'Conciertos', dias: [3, 4], dia: 'Jue y vie', hora: '21 h', ini: '21:00',
    lugar: 'Café concert', zona: 'Colegiales', lat: -34.5760, lng: -58.4480, precio: 9000, imagen: 'concierto.jpg', estreno: true,
    desc: 'Un cantautor en formato acústico, con mesas y a pocos metros del escenario.',
    etiquetas: ['Música', 'Conciertos', 'En vivo', 'Acústico'] }
];

// ico: nombre del ícono (los nombres están en la función icono)
const notifs = [
  { id: 'n1', grupo: 'Hoy', tipo: 'recordatorio', ico: 'Notificaciones', color: '#631100', t: 'Empieza en 2 horas', s: 'Noche de impro · 21 h' },
  { id: 'n2', grupo: 'Hoy', tipo: 'novedad', ico: 'Grilla', color: '#002B49', t: 'Nuevo estreno afín a vos', s: 'Ciclo de cine · Almagro' },
  { id: 'n3', grupo: 'Hoy', tipo: 'aviso', ico: 'Favoritos', color: '#B52000', t: 'Se agotan las entradas', s: 'Stand up · Sáb 20 h' },
  { id: 'n4', grupo: 'Antes', tipo: 'recordatorio', ico: 'Calendario', color: '#53779A', t: 'Agendaste una muestra', s: 'Feria de arte · Sáb 15 h' },
  { id: 'n5', grupo: 'Antes', tipo: 'novedad', ico: 'Ubicacion', color: '#002B49', t: 'Plan nuevo en Palermo', s: 'Feria de diseño · Dom 15 h' },
  { id: 'n6', grupo: 'Antes', tipo: 'compartido', ico: 'Compartir', color: '#631100', t: 'Cami te compartió un plan', s: 'Concierto íntimo' }
];

// Preguntas frecuentes (pantalla de Ayuda)
const FAQ = [
  ['¿Cómo guardo un plan en mi agenda?', 'Entrá al plan que te interesa y tocá "Guardar en mi agenda". Después lo ves en la pestaña Agenda, en el día que corresponde.'],
  ['¿Cómo cambio mis intereses?', 'Andá a Perfil y tocá "Editar" al lado de "Mis intereses". Ahí podés elegir otras categorías y subcategorías.'],
  ['¿Por qué me piden mi ubicación?', 'Para mostrarte qué planes hay cerca tuyo y ordenarlos por distancia. Es opcional, no la guardamos y no la compartimos con nadie.'],
  ['¿Los planes son solo en Buenos Aires?', 'Sí, por ahora todos los planes son en la Ciudad de Buenos Aires.'],
  ['¿Cuesta usar Afín?', 'No, Afín es gratis. El precio que ves en cada plan es el de la entrada, y lo define cada lugar.'],
  ['¿Cómo comparto un plan con mis amigos?', 'Dentro del plan, tocá el botón de compartir. Podés mandarlo por WhatsApp, Instagram, mensaje o copiar el link.']
];

// Términos y privacidad (texto base: revisalo y ajustalo cuando la app se publique)
const TERMINOS = [
  ['Qué es Afín', 'Afín es una app que te ayuda a descubrir propuestas culturales (teatro, cine, arte y música) en la Ciudad de Buenos Aires, según tus intereses.'],
  ['Uso de la app', 'Podés usar Afín gratis. La información de cada plan (horarios, precios y lugares) la carga cada espacio y puede cambiar, por eso te recomendamos confirmarla antes de ir.'],
  ['Qué datos guardamos', 'Solo tu nombre, tu edad y tu ciudad, que son los que vos escribís al ingresar. En esta versión se guardan únicamente en tu dispositivo.'],
  ['Tu ubicación', 'Usamos tu ubicación solo para mostrarte qué planes hay cerca. Es opcional, no la guardamos y no la compartimos. Podés desactivarla cuando quieras desde los permisos de tu navegador.'],
  ['Lo que no hacemos', 'No vendemos tus datos ni los compartimos con terceros.'],
  ['Cambios y contacto', 'Si actualizamos estos términos, vas a ver la fecha nueva arriba. Si tenés dudas, escribinos a hola@afin.app.']
];

// ===== ESTADO: lo que el usuario va eligiendo =====
// Usuario que ingresó (se guarda en el navegador)
let usuario = null;
try { usuario = JSON.parse(localStorage.getItem('afin_usuario')); } catch (e) {}

// Ubicación de la persona (solo si da permiso; no se guarda en ningún lado)
let miUbic = null, ubicEstado = 'no'; // 'no' | 'pidiendo' | 'ok' | 'negado' | 'error'

let pantalla = 'splash', pila = [];
let gustos = [], subsElegidas = [], abierta = null, filtro = 'todo', faqAbierta = null;
let eventoActual = null, menuAbierto = false, compartirItem = null, copiado = false, modalListo = false;
let favoritos = [], agenda = [], hechos = [], diaSel = hoyIdx(), favFiltro = 'todo';
let q = '', chipExp = 'todo', fCats = [], fFecha = null, fDist = 20, fPrecio = 20000, orden = 'cerca';
let notifFiltro = 'todas', notifLeidas = [], recordar = true;

const app = document.getElementById('app');

// ===== FUNCIONES ÚTILES =====
function hoyIdx() { return (new Date().getDay() + 6) % 7; }
function alternar(lista, x) { return lista.includes(x) ? lista.filter(i => i !== x) : [...lista, x]; }
function buscar(id) { return eventos.find(e => e.id === id); }
function catDe(id) { return categorias.find(c => c.id === id); }
function precioTxt(e) { return e.precio ? '$' + e.precio.toLocaleString('es-AR') : 'Gratis'; }

// ===== UBICACIÓN =====
function pedirUbicacion() {
  if (!navigator.geolocation) { ubicEstado = 'error'; dibujar(); return; }
  ubicEstado = 'pidiendo'; dibujar();
  navigator.geolocation.getCurrentPosition(
    p => { miUbic = { lat: p.coords.latitude, lng: p.coords.longitude }; ubicEstado = 'ok'; dibujar(); },
    () => { ubicEstado = 'negado'; dibujar(); },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  );
}
// Distancia real en km entre la persona y el evento (null si no hay ubicación)
function kmA(e) {
  if (!miUbic) return null;
  const R = 6371, rad = x => x * Math.PI / 180;
  const dLat = rad(e.lat - miUbic.lat), dLng = rad(e.lng - miUbic.lng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(miUbic.lat)) * Math.cos(rad(e.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
// Texto de distancia ("a 850 m", "a 3,2 km"); vacío si no hay ubicación
function distTxt(e) {
  const k = kmA(e);
  if (k === null) return '';
  return k < 1 ? 'a ' + Math.max(1, Math.round(k * 100)) * 10 + ' m' : 'a ' + k.toFixed(1).replace('.', ',') + ' km';
}
// Muestra la distancia si hay ubicación; si no, el barrio
function subDist(e) { return distTxt(e) || e.zona; }

function avisoUbic() {
  if (miUbic) return '';
  const msg = ubicEstado === 'negado' ? 'No pudimos acceder a tu ubicación. Revisá los permisos del navegador y probá de nuevo.'
    : ubicEstado === 'pidiendo' ? 'Buscando tu ubicación…'
    : ubicEstado === 'error' ? 'Este navegador no permite usar la ubicación.'
    : 'Activá tu ubicación para ver qué planes hay cerca tuyo.';
  const btn = ubicEstado === 'pidiendo' || ubicEstado === 'error' ? ''
    : `<button class="btn-ubic" onclick="pedirUbicacion()">${ubicEstado === 'negado' ? 'Probar de nuevo' : 'Activar ubicación'}</button>`;
  return `<div class="aviso-ubic">${icono('Ubicacion')}<div><p>${msg}</p>${btn}</div></div>`;
}

// ===== NAVEGACIÓN =====
function ir(p) {
  if (pantalla !== 'splash' && pantalla !== p) pila.push(pantalla);
  pantalla = p; menuAbierto = false; compartirItem = null; dibujar();
}
function irTab(p) { pila = []; pantalla = p; menuAbierto = false; compartirItem = null; dibujar(); }
function atras() { pantalla = pila.pop() || 'inicio'; menuAbierto = false; compartirItem = null; dibujar(); }
function abrirMenu() { menuAbierto = true; dibujar(); }
function abrirEvento(id) { eventoActual = id; ir('evento'); }
function alternarFav(id, ev) { ev.stopPropagation(); favoritos = alternar(favoritos, id); dibujar(); }
function reiniciar() { pila = []; pantalla = 'splash'; dibujar(); setTimeout(() => ir('gustos'), 2000); }
function irMenu(p) { menuAbierto = false; if (['inicio', 'explorar', 'agenda', 'perfil'].includes(p)) irTab(p); else ir(p); }

function guardarAgenda(id) {
  if (agenda.includes(id)) agenda = alternar(agenda, id);
  else { agenda.push(id); modalListo = true; }
  dibujar();
}
function verAgenda() { modalListo = false; diaSel = buscar(eventoActual).dias[0]; irTab('agenda'); }

function abrirCompartir(id) {
  if (id === 'afin') compartirItem = { id: 'afin', titulo: 'Afín', sub: 'Cultura cerca tuyo', e: null };
  else { const e = buscar(id); compartirItem = { id, titulo: e.titulo, sub: e.dia + ' · ' + e.hora, e }; }
  dibujar();
}
function copiarLink() {
  try { navigator.clipboard.writeText('afin.app/' + (compartirItem.id === 'afin' ? '' : compartirItem.id)); } catch (e) {}
  copiado = true; dibujar();
  setTimeout(() => { copiado = false; dibujar(); }, 2000);
}

// Logo: usa img/logo.png. Si no lo encuentra, muestra el texto "Afín"
function logoImg(clase) {
  return `<img class="logo-img ${clase || ''}" src="img/logo.png" alt="Afín" onerror="this.outerHTML='<span class=logo>Afín</span>'">`;
}

// Protege el texto que escribe la persona
function esc(s) {
  return String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// Íconos minimalistas. Para rellenar uno (por ejemplo el corazón de favoritos) se usa icono('Favoritos', true)
function icono(n, lleno) {
  const p = {
    'Inicio': '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    'Explorar': '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    'Agenda': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    'Calendario': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    'Favoritos': '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
    'Notificaciones': '<path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z"/><path d="M10 21h4"/>',
    'Perfil': '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    'Sobre Afín': '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    'Compartir': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/>',
    'Ubicacion': '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    'Entrada': '<path d="M3 9V6h18v3a3 3 0 0 0 0 6v3H3v-3a3 3 0 0 0 0-6z"/><path d="M14 6v12"/>',
    'Grilla': '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',
    'Mensaje': '<path d="M4 5h16v11H9l-5 4z"/>',
    'Mail': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    'Mas': '<path d="M12 5v14M5 12h14"/>',
    'Sol': '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    'Ayuda': '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17v.5"/>',
    'Salir': '<path d="M10 4H5v16h5M15 8l4 4-4 4M19 12H9"/>',
    'Documento': '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    'Play': '<path d="M8 5l11 7-11 7z"/>'
  }[n] || '';
  return `<svg class="svg-ico" viewBox="0 0 24 24" fill="${lleno ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
}

// Ingreso: guarda nombre, edad y ciudad en el navegador
function ingresar() {
  const v = id => document.getElementById(id).value.trim();
  const nombre = v('lg-nombre');
  if (!nombre) { document.getElementById('lg-error').textContent = 'Escribí tu nombre para ingresar'; return; }
  usuario = { nombre, ciudad: v('lg-ciudad'), edad: v('lg-edad') };
  try { localStorage.setItem('afin_usuario', JSON.stringify(usuario)); } catch (e) {}
  irTab('perfil');
}
function cerrarSesion() {
  usuario = null;
  try { localStorage.removeItem('afin_usuario'); } catch (e) {}
  dibujar();
}

// Foto del evento; si todavía no hay (o no se encuentra), muestra un bloque del color de su categoría
function foto(e, clase) {
  const bloque = `<div class="foto vacio ${clase}" style="background:${catDe(e.cat).color}"></div>`;
  return e.imagen
    ? `<img class="foto ${clase}" src="img/${e.imagen}" alt="${e.titulo}" onerror="this.outerHTML=this.dataset.f" data-f='${bloque}'>`
    : bloque;
}

function barra(act) {
  const t = [['Inicio', 'inicio'], ['Explorar', 'explorar'], ['Agenda', 'agenda'], ['Perfil', 'perfil']];
  return `<div class="tabbar">${t.map(([n, p]) => `<button class="tab ${act === n ? 'on' : ''}" onclick="irTab('${p}')">${n}</button>`).join('')}</div>`;
}
function cab(titulo, der) {
  return `<div class="top-estrenos"><button class="atras rojo" onclick="atras()">‹</button><span class="titulo-pag">${titulo}</span>${der === undefined ? `<button class="atras rojo" onclick="abrirMenu()">≡</button>` : der}</div>`;
}
function buscador() {
  const ph = miUbic ? 'Buscá cerca tuyo' : 'Buscá planes en Buenos Aires';
  return `<div class="buscador">${icono('Explorar')}<input placeholder="${ph}" value="${q.replace(/"/g, '&quot;')}" oninput="q=this.value" onkeydown="if(event.key==='Enter')ir('resultados')"></div>`;
}
function chipsCat(sel, variable, todo) {
  const l = todo ? [['todo', 'Todo']] : [];
  return [...l, ...categorias.map(c => [c.id, c.nombre])]
    .map(([id, n]) => `<button class="chip2 ${sel === id ? 'on' : ''}" onclick="${variable}='${id}';dibujar()">${n}</button>`).join('');
}

function dibujar() {
  const vistas = { splash, gustos: vistaGustos, subs: vistaSubs, video: vistaVideo, editar: vistaEditar, inicio: vistaInicio, estrenos: vistaEstrenos,
    evento: vistaEvento, explorar: vistaExplorar, filtro: vistaFiltro, resultados: vistaResultados, agenda: vistaAgenda,
    favoritos: vistaFavoritos, notificaciones: vistaNotif, perfil: vistaPerfil, sobre: vistaSobre, login: vistaLogin,
    ayuda: vistaAyuda, terminos: vistaTerminos };
  let h = vistas[pantalla]();
  if (modalListo) h += vistaListo();
  if (menuAbierto) h += vistaMenu();
  if (compartirItem) h += vistaCompartir();
  app.innerHTML = h;
}

// ===== SPLASH =====
function splash() {
  return `<div class="pantalla splash">${logoImg('claro l-splash')}<div class="lema">Cultura<br>cerca<br>tuyo</div></div>`;
}

// ===== PASO 1: ¿QUÉ TE GUSTA? =====
function vistaGustos() {
  const botones = categorias.map(c =>
    `<button class="pill ${gustos.includes(c.id) ? 'on' : ''}" onclick="gustos = alternar(gustos, '${c.id}'); dibujar()">${c.nombre}</button>`).join('');
  return `<div class="pantalla">
    <div class="progreso"><div class="on"></div><div></div><div></div></div>
    <div class="top"><button class="atras" onclick="reiniciar()">‹</button><button class="omitir" onclick="irTab('inicio')">Omitir</button></div>
    <div class="logobox">${logoImg('l-caja')}</div>
    <h1 class="serif">¿Qué te gusta?</h1>
    <p class="sub">Elegí tus gustos y armamos tu agenda cultural</p>
    <div class="grid gustos-grid">${botones}</div>
    <button class="continuar" onclick="ir('subs')">Continuar</button>
  </div>`;
}

// ===== PASO 2: SUBCATEGORÍAS (se usa también para editar intereses) =====
function tarjetasSubs(lista) {
  return lista.map(c => {
    const abierto = abierta === c.id;
    const subs = abierto ? `<div class="grid subs">${c.subs.map(s =>
      `<button class="pill chica ${subsElegidas.includes(c.id + ':' + s) ? 'on' : ''}" style="--c:${c.color}"
        onclick="subsElegidas = alternar(subsElegidas, '${c.id}:${s}'); if(!gustos.includes('${c.id}')) gustos.push('${c.id}'); dibujar()">${s}</button>`).join('')}</div>` : '';
    return `<div class="card">
      <div class="card-head" onclick="abierta = ${abierto ? 'null' : `'${c.id}'`}; dibujar()">
        <div class="punto" style="background:${c.color}"></div>
        <div class="card-nombre" style="color:${c.color}">${c.nombre}</div>
        <div class="flecha" style="color:${c.color}">${abierto ? '⌄' : '›'}</div>
      </div>${subs}</div>`;
  }).join('');
}
function vistaSubs() {
  return `<div class="pantalla">
    <div class="progreso"><div class="on"></div><div class="on"></div><div></div></div>
    <div class="top"><button class="atras" onclick="atras()">‹</button><button class="omitir" onclick="irTab('inicio')">Omitir</button></div>
    <h2>Tocá una categoría para ver más</h2>
    <div class="lista">${tarjetasSubs(categorias.filter(c => gustos.includes(c.id)))}</div>
    <button class="continuar" onclick="ir('video')">Continuar</button>
  </div>`;
}
function vistaEditar() {
  return `<div class="pantalla">
    ${cab('Mis intereses', '<span></span>')}
    <h2>Tocá una categoría para ver más</h2>
    <div class="lista">${tarjetasSubs(categorias)}</div>
    <button class="continuar" onclick="atras()">Guardar</button>
  </div>`;
}

// ===== PASO 3: VIDEO "ASÍ FUNCIONA AFÍN" =====
// El video va en la carpeta video con el nombre intro.mp4 (y opcional portada.jpg)
function vistaVideo() {
  const falta = `<div class="video-falta"><div class="play-g">${icono('Play', true)}</div><p>Acá va el video de Afín</p></div>`;
  const pasos = [['Favoritos', 'Elegí lo que te gusta'], ['Explorar', 'Descubrí planes en Buenos Aires'], ['Compartir', 'Guardá y compartí con tus amigos']]
    .map(([i, t]) => `<div class="paso-v"><div class="paso-ico">${icono(i)}</div><span>${t}</span></div>`).join('');
  return `<div class="pantalla">
    <div class="progreso"><div class="on"></div><div class="on"></div><div class="on"></div></div>
    <div class="top"><button class="atras" onclick="atras()">‹</button><button class="omitir" onclick="irTab('inicio')">Omitir</button></div>
    <h2 style="margin:20px 0 14px">Así funciona Afín</h2>
    <div class="video-box"><video controls playsinline preload="metadata" poster="video/portada.jpg" data-f='${falta}'><source src="video/intro.mp4" type="video/mp4" onerror="this.parentNode.outerHTML=this.parentNode.dataset.f"></video></div>
    ${pasos}
    <button class="continuar" onclick="irTab('inicio')">Empezar</button>
  </div>`;
}

// ===== INICIO "PARA VOS" =====
function vistaInicio() {
  const lista = gustos.length ? categorias.filter(c => gustos.includes(c.id)) : categorias;
  const chips = [['todo', 'Todo'], ...lista.map(c => [c.id, c.nombre])]
    .map(([id, n]) => `<button class="chip ${filtro === id ? 'on' : ''}" onclick="filtro='${id}'; dibujar()">${n}</button>`).join('');
  const vis = eventos.filter(e => filtro === 'todo' || e.cat === filtro);
  const grandes = vis.length ? vis.map(e =>
    `<div class="ev-grande" onclick="abrirEvento('${e.id}')">${foto(e, 'grande')}<b>${e.titulo}</b><span>${e.dia} · ${e.hora}</span></div>`).join('')
    : `<p class="vacio-msg">Todavía no hay eventos de esta categoría.</p>`;
  const nuevos = eventos.filter(e => e.estreno).slice(0, 2).map(e =>
    `<div onclick="abrirEvento('${e.id}')">${foto(e, 'chica')}<b class="nombre-chico">${e.titulo}</b></div>`).join('');
  return `<div class="pantalla inicio">
    <div class="contenido">
      <div class="header">${logoImg('l-header')}<button class="menu" onclick="abrirMenu()">≡</button></div>
      <h1 class="serif">Para vos</h1>
      <div class="chips">${chips}</div>
      <div class="carrusel">${grandes}</div>
      <div class="seccion"><b>Estrenos</b><span onclick="ir('estrenos')" style="cursor:pointer">Ver todo</span></div>
      <div class="estrenos">${nuevos}</div>
    </div>
    ${barra('Inicio')}
  </div>`;
}

// ===== ESTRENOS Y NOVEDADES =====
function vistaEstrenos() {
  const lista = eventos.filter(e => e.estreno);
  const filas = lista.map(e =>
    `<div class="fila" onclick="abrirEvento('${e.id}')">${foto(e, 'mini')}
      <div class="fila-texto"><b>${e.titulo}</b><span>${e.dia} · ${e.hora} · ${subDist(e)}</span></div>
      <button class="corazon" onclick="alternarFav('${e.id}', event)">${icono('Favoritos', favoritos.includes(e.id))}</button></div>`).join('');
  return `<div class="pantalla">${cab('Estrenos')}<div class="scroll">${foto(lista[0], 'portada')}<div class="lista-est">${filas}</div></div></div>`;
}

// ===== DETALLE DEL EVENTO =====
function vistaEvento() {
  const e = buscar(eventoActual), guardado = agenda.includes(e.id);
  const etiquetas = e.etiquetas.map((t, i) => `<span class="etiqueta ${i === 0 ? 'on' : ''}">${t}</span>`).join('');
  return `<div class="pantalla evento">
    <div class="evento-scroll">
      <button class="atras rojo" onclick="atras()">‹</button>
      <div class="portada-wrap">${foto(e, 'portada')}<button class="corazon-flot" onclick="alternarFav('${e.id}', event)">${icono('Favoritos', favoritos.includes(e.id))}</button></div>
      <h1 class="serif titulo-ev">${e.titulo}</h1>
      <div class="etiquetas">${etiquetas}</div>
      <div class="datos">
        <div class="dato"><div class="dato-ico">${icono('Calendario')}</div><div><b>${e.dia}</b><span>${e.hora}</span></div></div>
        <div class="dato"><div class="dato-ico">${icono('Ubicacion')}</div><div><b>${e.lugar}</b><span>${e.zona}${distTxt(e) ? ' · ' + distTxt(e) : ''}</span></div></div>
        <div class="dato"><div class="dato-ico">${icono('Entrada')}</div><div><b>${precioTxt(e)}</b><span>Entrada</span></div></div>
      </div>
      <p class="descripcion">${e.desc}</p>
    </div>
    <div class="barra-ev">
      <button class="guardar ${guardado ? 'listo' : ''}" onclick="guardarAgenda('${e.id}')">${guardado ? 'Guardado en tu agenda' : 'Guardar en mi agenda'}</button>
      <button class="compartir-btn" onclick="abrirCompartir('${e.id}')">${icono('Compartir')}</button>
    </div>
  </div>`;
}

// ===== EXPLORAR (ubicación) =====
function mapa() {
  const pins = [[62, 40], [255, 80], [185, 105], [112, 145]].map(([x, y]) =>
    `<path transform="translate(${x} ${y})" d="M0 0c-9 0-14 7-14 14 0 10 14 24 14 24s14-14 14-24c0-7-5-14-14-14z" fill="#B52000"/>`).join('');
  const yo = miUbic ? `<circle cx="165" cy="190" r="14" fill="#9FB1BB"/><circle cx="165" cy="190" r="7" fill="#002B49" stroke="#fff" stroke-width="2"/>` : '';
  return `<svg class="mapa" viewBox="0 0 360 250"><rect width="360" height="250" fill="#EFE8D6"/>
    <rect x="215" y="12" width="70" height="60" fill="#B7C1C2"/>
    <path d="M0 175 Q90 150 160 185 T360 165 L360 205 Q250 230 170 218 T0 220Z" fill="#9FB1BB"/>
    <g stroke="#fff" stroke-width="10" fill="none"><path d="M60 0V250M215 0V250M0 78H360M0 140H360M10 240L360 70"/></g>
    ${pins}${yo}</svg>`;
}
function vistaExplorar() {
  let lista = eventos.filter(e => chipExp === 'todo' || e.cat === chipExp);
  if (miUbic) lista = lista.sort((a, b) => kmA(a) - kmA(b));
  const filas = lista.map(e => `<div class="fila" onclick="abrirEvento('${e.id}')">${foto(e, 'mini')}<div class="fila-texto"><b>${e.titulo}</b><span>${subDist(e)}</span></div></div>`).join('');
  return `<div class="pantalla sinpad"><div class="cuerpo">
    <div class="buscar-fila">${buscador()}<button class="atras rojo" onclick="ir('filtro')">☰</button></div>
    ${mapa()}
    ${avisoUbic()}
    <div class="chips2">${chipsCat(chipExp, 'chipExp', true)}</div>
    <div class="seccion2"><b>${miUbic ? 'Cerca tuyo' : 'Planes en Buenos Aires'}</b><span onclick="ir('resultados')">Ver lista</span></div>
    ${filas}
  </div>${barra('Explorar')}</div>`;
}

// ===== FILTRO =====
function txtDist() { return fDist >= 20 ? 'Cualquiera' : 'Hasta ' + fDist + ' km'; }
function txtPrecio() { return fPrecio >= 20000 ? 'Cualquiera' : fPrecio === 0 ? 'Gratis' : 'Hasta $' + fPrecio.toLocaleString('es-AR'); }
const FECHAS = [['hoy', 'Hoy'], ['manana', 'Mañana'], ['finde', 'Finde'], ['semana', 'Semana']];
function vistaFiltro() {
  const cats = categorias.map(c => `<button class="chip2 ${fCats.includes(c.id) ? 'on' : ''}" onclick="fCats=alternar(fCats,'${c.id}');dibujar()">${c.nombre}</button>`).join('');
  const fechas = FECHAS.map(([id, n]) => `<button class="chip2 ${fFecha === id ? 'on' : ''}" onclick="fFecha=(fFecha==='${id}'?null:'${id}');dibujar()">${n}</button>`).join('');
  const dist = miUbic
    ? `<div class="filtro-t">Distancia <span class="lb" id="lbDist">${txtDist()}</span></div>
       <input type="range" min="1" max="20" value="${fDist}" oninput="fDist=+this.value;document.getElementById('lbDist').textContent=txtDist()">`
    : `<div class="filtro-t">Distancia</div>${avisoUbic()}`;
  return `<div class="pantalla">
    <div class="buscar-fila">${buscador()}<span class="ver-lista" onclick="ir('resultados')">Ver lista</span></div>
    <div class="filtro-t">Categoría</div><div class="chips-fila">${cats}</div>
    <div class="filtro-t">Fecha</div><div class="chips-fila">${fechas}</div>
    ${dist}
    <div class="filtro-t">Precio <span class="lb" id="lbPrecio">${txtPrecio()}</span></div>
    <input type="range" min="0" max="20000" step="500" value="${fPrecio}" oninput="fPrecio=+this.value;document.getElementById('lbPrecio').textContent=txtPrecio()">
    <div class="botones-fin">
      <button class="btn-lim" onclick="fCats=[];fFecha=null;fDist=20;fPrecio=20000;q='';dibujar()">Limpiar</button>
      <button class="btn-ver" onclick="ir('resultados')">Ver</button>
    </div>
  </div>`;
}

// ===== RESULTADOS DEL FILTRO =====
function filtrar() {
  const h = hoyIdx(), set = { hoy: [h], manana: [(h + 1) % 7], finde: [5, 6], semana: [0, 1, 2, 3, 4, 5, 6] };
  const palabras = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const r = eventos.filter(e => {
    const txt = (e.titulo + ' ' + catDe(e.cat).nombre + ' ' + e.sub + ' ' + e.zona).toLowerCase();
    return palabras.every(p => txt.includes(p) || ['en', 'de', 'el', 'la', 'cerca', 'tuyo'].includes(p))
      && (!fCats.length || fCats.includes(e.cat))
      && (!fFecha || e.dias.some(d => set[fFecha].includes(d)))
      && (!miUbic || fDist >= 20 || kmA(e) <= fDist)
      && e.precio <= fPrecio;
  });
  return r.sort(orden === 'cerca' && miUbic ? (a, b) => kmA(a) - kmA(b) : (a, b) => a.dias[0] - b.dias[0]);
}
function quitar(k) {
  if (k.startsWith('cat:')) fCats = fCats.filter(x => x !== k.slice(4));
  if (k === 'fecha') fFecha = null;
  if (k === 'dist') fDist = 20;
  if (k === 'precio') fPrecio = 20000;
  dibujar();
}
function vistaResultados() {
  const r = filtrar();
  const act = [...fCats.map(id => ['cat:' + id, catDe(id).nombre]),
    ...(fFecha ? [['fecha', FECHAS.find(f => f[0] === fFecha)[1]]] : []),
    ...(miUbic && fDist < 20 ? [['dist', fDist + ' km']] : []),
    ...(fPrecio < 20000 ? [['precio', txtPrecio()]] : [])];
  const chips = act.map(([k, n]) => `<button class="chip2 on" onclick="quitar('${k}')">${n}</button>`).join('');
  const filas = r.map(e => `<div class="fila" onclick="abrirEvento('${e.id}')">${foto(e, 'mini')}<div class="fila-texto"><b>${e.titulo}</b><span>${e.dia} ${e.hora} · ${subDist(e)}</span></div></div>`).join('');
  const orde = miUbic ? `<span class="ordenar" onclick="orden=(orden==='cerca'?'dia':'cerca');dibujar()">Ordenar: ${orden === 'cerca' ? 'cercanía' : 'día'}</span>` : '<span></span>';
  return `<div class="pantalla sinpad"><div class="cuerpo">
    <div class="buscar-fila">${buscador()}<button class="atras rojo" onclick="ir('filtro')">☰</button></div>
    <div class="chips2">${chips || '<span class="vacio-msg">Sin filtros</span>'}</div>
    <div class="res-top"><span>${r.length} resultado${r.length === 1 ? '' : 's'}</span>${orde}</div>
    ${filas || '<p class="vacio-msg">No hay planes con estos filtros. Probá con otros.</p>'}
  </div>${barra('Explorar')}</div>`;
}

// ===== AGENDA =====
function vistaAgenda() {
  const hoy = new Date(), lun = new Date(hoy); lun.setDate(hoy.getDate() - hoyIdx());
  const dias = ['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((l, i) => {
    const d = new Date(lun); d.setDate(lun.getDate() + i);
    return `<button class="dia ${diaSel === i ? 'on' : ''}" onclick="diaSel=${i};dibujar()"><small>${l}</small>${d.getDate()}</button>`;
  }).join('');
  const items = agenda.map(buscar).filter(e => e.dias.includes(diaSel)).sort((a, b) => a.ini.localeCompare(b.ini));
  const filas = items.map(e => `<div class="ag-item"><span class="ag-hora">${e.ini}</span>
    <div class="ag-card" style="border-left:5px solid ${catDe(e.cat).color}" onclick="abrirEvento('${e.id}')">
      <div style="flex:1"><b>${e.titulo}</b><span>${catDe(e.cat).nombre} · ${e.zona}</span></div>
      <button class="check ${hechos.includes(e.id) ? 'on' : ''}" onclick="event.stopPropagation();hechos=alternar(hechos,'${e.id}');dibujar()">${hechos.includes(e.id) ? '✓' : ''}</button>
    </div></div>`).join('');
  const vacio = `<div class="vacio-box"><div class="circ-blanco">${icono('Calendario')}</div><div class="serif">Sin planes este día</div>
    <p>Probá con otro día o explorá propuestas cerca tuyo</p><button class="continuar" onclick="irTab('explorar')">Explorar planes</button></div>`;
  return `<div class="pantalla sinpad"><div class="cuerpo">
    <div class="header" style="padding:0">${logoImg('l-header')}<button class="menu" onclick="abrirMenu()">≡</button></div>
    <div class="mes">${hoy.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}</div>
    <div class="dias">${dias}</div>
    ${items.length ? filas : vacio}
  </div>${barra('Agenda')}</div>`;
}
function vistaListo() {
  return `<div class="menu-fondo gris" onclick="modalListo=false;dibujar()"></div>
  <div class="listo-box"><div class="check-grande">✓</div><div class="serif listo-t">¡Listo!</div>
    <p>Agregamos este plan a tu agenda</p>
    <button class="continuar" onclick="verAgenda()">Ver mi agenda</button>
    <button class="secundario" onclick="modalListo=false;dibujar()">Seguir explorando</button></div>`;
}

// ===== FAVORITOS =====
function vistaFavoritos() {
  const lista = favoritos.map(buscar).filter(e => favFiltro === 'todo' || e.cat === favFiltro);
  const cards = lista.map(e => `<div class="fav-card" onclick="abrirEvento('${e.id}')"><div class="portada-wrap" style="margin:0">${foto(e, 'fav')}
    <button class="corazon-flot" onclick="alternarFav('${e.id}', event)">${icono('Favoritos', true)}</button></div><b>${e.titulo}</b><span class="s">${e.dia} ${e.hora}</span></div>`).join('');
  const vacio = `<div class="vacio-box"><div class="circ-blanco">${icono('Favoritos')}</div><div class="serif">Todavía no guardaste nada</div>
    <p>Tocá el corazón en los planes que te gusten y los vas a ver acá.</p><button class="continuar" onclick="irTab('explorar')">Explorar planes</button></div>`;
  return `<div class="pantalla sinpad"><div class="cuerpo">${cab('Favoritos')}
    ${favoritos.length ? `<div class="chips2">${chipsCat(favFiltro, 'favFiltro', true)}</div>${cards ? `<div class="fav-grid">${cards}</div>` : '<p class="vacio-msg">No tenés favoritos de esta categoría.</p>'}` : vacio}
  </div>${barra('Perfil')}</div>`;
}

// ===== NOTIFICACIONES =====
function vistaNotif() {
  const lista = notifs.filter(n => notifFiltro === 'todas' || n.tipo === 'recordatorio');
  const grupo = g => {
    const it = lista.filter(n => n.grupo === g);
    return it.length ? `<div class="n-sec">${g}</div>` + it.map(n => `<div class="n-item" onclick="if(!notifLeidas.includes('${n.id}'))notifLeidas.push('${n.id}');dibujar()">
      <div class="n-ico" style="background:${n.color}">${icono(n.ico)}</div><div class="n-txt"><b>${n.t}</b><span>${n.s}</span></div>
      ${(n.id === 'n1' || n.id === 'n2') && !notifLeidas.includes(n.id) ? '<div class="punto-r"></div>' : ''}</div>`).join('') : '';
  };
  return `<div class="pantalla sinpad"><div class="cuerpo">${cab('Notificaciones')}
    <div class="chips-fila" style="margin-bottom:6px">
      <button class="chip2 ${notifFiltro === 'todas' ? 'on' : ''}" onclick="notifFiltro='todas';dibujar()">Todas</button>
      <button class="chip2 ${notifFiltro === 'rec' ? 'on' : ''}" onclick="notifFiltro='rec';dibujar()">Recordatorios</button></div>
    ${grupo('Hoy')}${grupo('Antes')}
  </div>
  <div class="recordar"><span>Recordarme antes de cada plan</span><button class="switch ${recordar ? 'on' : ''}" onclick="recordar=!recordar;dibujar()"></button></div>
  ${barra('Perfil')}</div>`;
}

// ===== INGRESO =====
function vistaLogin() {
  return `<div class="pantalla">
    <div class="top"><button class="atras" onclick="atras()">‹</button><span></span></div>
    <div class="logobox" style="height:150px">${logoImg('l-caja')}</div>
    <h1 class="serif">Ingresá a Afín</h1>
    <p class="sub">Contanos un poco sobre vos</p>
    <input class="campo" id="lg-nombre" placeholder="Tu nombre">
    <input class="campo" id="lg-edad" type="number" min="1" max="120" placeholder="Tu edad">
    <input class="campo" id="lg-ciudad" placeholder="¿Dónde vivís?">
    <div class="error" id="lg-error"></div>
    <button class="continuar" onclick="ingresar()">Ingresar</button>
  </div>`;
}

// ===== PERFIL =====
function vistaPerfil() {
  const chips = [...categorias.map(c => [c.nombre, gustos.includes(c.id)]), ...subsElegidas.map(s => [s.split(':')[1], true])]
    .map(([n, on]) => `<span class="chip3 ${on ? 'on' : ''}">${n}</span>`).join('');
  const filas = [['Favoritos', 'Favoritos', "ir('favoritos')"], ['Notificaciones', 'Notificaciones', "ir('notificaciones')"],
    ['Sobre Afín', 'Sobre Afín', "ir('sobre')"], ['Compartir', 'Compartir Afín', "abrirCompartir('afin')"],
    ['Ayuda', 'Ayuda y contacto', "ir('ayuda')"], ['Documento', 'Términos y privacidad', "ir('terminos')"],
    ...(usuario ? [['Salir', 'Cerrar sesión', 'cerrarSesion()']] : [])]
    .map(([i, n, f]) => `<div class="row" onclick="${f}"><span class="ico2">${icono(i)}</span><b>${n}</b><span class="fl2">›</span></div>`).join('');
  const datos = usuario ? [usuario.ciudad, usuario.edad ? usuario.edad + ' años' : ''].filter(Boolean).join(' · ') : '';
  const cabecera = usuario
    ? `<div class="avatar-g">${esc(usuario.nombre.charAt(0).toUpperCase())}</div><div class="serif p-nombre">${esc(usuario.nombre)}</div><div class="p-sub">${esc(datos)}</div>`
    : `<div class="avatar-g">${icono('Perfil')}</div><div class="serif p-nombre">Invitado</div><div class="p-sub">Ingresá para guardar tus planes</div>
       <button class="continuar" style="display:block;margin:14px auto 0;padding:0 40px" onclick="ir('login')">Ingresar</button>`;
  return `<div class="pantalla sinpad"><div class="cuerpo">
    <div class="perfil-top"><span>Perfil</span><span class="circ-blanco circ-sm">${icono('Sol')}</span></div>
    ${cabecera}
    <div class="int-top"><span style="color:var(--bordo);cursor:default">Mis intereses</span><span onclick="ir('editar')">Editar</span></div>
    <div class="chips3">${chips}</div>
    <div style="margin-top:14px">${filas}</div>
  </div>${barra('Perfil')}</div>`;
}

// ===== SOBRE AFÍN =====
function vistaSobre() {
  return `<div class="pantalla">${cab('Sobre Afín')}
    <div class="scroll">
      <div class="logo-cuad">${logoImg('claro l-cuad')}</div>
      <p class="sobre-t">Afín conecta a las personas con propuestas culturales como el teatro, el cine y el arte</p>
      <div class="bloque bordo"><h4>Misión</h4><p>Acercar la cultura a las personas, ayudándolas a descubrir espectáculos y espacios afines a sus intereses.</p></div>
      <div class="bloque navy"><h4>Visión</h4><p>Convertirse en una plataforma referente para el público joven a la hora de descubrir y participar de propuestas culturales.</p></div>
      <div class="bloque blanco"><h4>Valores</h4><div class="valores"><span>Afinidad</span><span>Accesibilidad</span><span>Curiosidad</span><span>Diversidad</span><span>Calidez</span></div></div>
    </div></div>`;
}

// ===== AYUDA Y CONTACTO =====
function vistaAyuda() {
  const items = FAQ.map(([p, r], i) => `<div class="faq" onclick="faqAbierta=${faqAbierta === i ? 'null' : i};dibujar()">
    <div class="faq-q"><b>${p}</b><span>${faqAbierta === i ? '⌄' : '›'}</span></div>${faqAbierta === i ? `<p>${r}</p>` : ''}</div>`).join('');
  return `<div class="pantalla sinpad"><div class="cuerpo">${cab('Ayuda y contacto')}
    <div class="faqs">${items}</div>
    <div class="contacto"><h4>¿Necesitás más ayuda?</h4><p>Escribinos y te respondemos lo antes posible.</p>
      <a class="btn-mail" href="mailto:hola@afin.app?subject=Consulta%20sobre%20Af%C3%ADn">${icono('Mail')}Escribinos</a></div>
  </div>${barra('Perfil')}</div>`;
}

// ===== TÉRMINOS Y PRIVACIDAD =====
function vistaTerminos() {
  const secs = TERMINOS.map(([t, x]) => `<div class="term"><h4>${t}</h4><p>${x}</p></div>`).join('');
  return `<div class="pantalla sinpad"><div class="cuerpo">${cab('Términos y privacidad')}
    <p class="act">Última actualización: noviembre de 2026</p>${secs}
  </div>${barra('Perfil')}</div>`;
}

// ===== MENÚ LATERAL =====
function vistaMenu() {
  const it = [['Inicio', 'inicio'], ['Explorar', 'explorar'], ['Agenda', 'agenda'], ['Favoritos', 'favoritos'], ['Notificaciones', 'notificaciones'], ['Perfil', 'perfil']];
  const items = it.map(([n, p]) => `<button class="menu-item ${pantalla === p ? 'on' : ''}" onclick="irMenu('${p}')">${icono(n)}${n}${pantalla === p ? '<span class="fl">›</span>' : ''}</button>`).join('');
  const abajo = [['Sobre Afín', 'Sobre Afín', 'sobre'], ['Ayuda', 'Ayuda y contacto', 'ayuda'], ['Documento', 'Términos y privacidad', 'terminos']]
    .map(([i, n, p]) => `<button class="menu-item ${pantalla === p ? 'on' : ''}" onclick="irMenu('${p}')">${icono(i)}${n}</button>`).join('');
  const quien = usuario
    ? `<div class="perfil-mini"><div class="avatar">${esc(usuario.nombre.charAt(0).toUpperCase())}</div><div><b>${esc(usuario.nombre)}</b><span>${esc(usuario.ciudad)}</span></div></div>`
    : `<div class="perfil-mini" style="cursor:pointer" onclick="irMenu('login')"><div class="avatar">${icono('Perfil')}</div><div><b>Ingresar</b><span>Iniciá sesión</span></div></div>`;
  return `<div class="menu-fondo" onclick="menuAbierto=false; dibujar()"></div>
  <div class="menu-panel">
    <div class="menu-top">${logoImg('claro l-menu')}<button class="cerrar" onclick="menuAbierto=false; dibujar()">✕</button></div>
    ${quien}
    <div class="menu-items">${items}</div>
    <div class="menu-sep">${abajo}</div>
  </div>`;
}

// ===== COMPARTIR =====
function vistaCompartir() {
  const c = compartirItem;
  const amigos = [['Cami', '#631100', 'C'], ['Juan', '#002B49', 'J'], ['Lu', '#53779A', 'L'], ['Mati', '#B52000', 'M']]
    .map(a => `<div><div class="circ" style="background:${a[1]}">${a[2]}</div>${a[0]}</div>`).join('');
  const redes = [['WhatsApp', '#002B49', 'Mensaje'], ['Instagram', '#631100', 'Compartir'], ['Mensajes', '#53779A', 'Mail'], ['Más', '#35201A', 'Mas']]
    .map(r => `<div><div class="cuad" style="background:${r[1]}">${icono(r[2])}</div>${r[0]}</div>`).join('');
  const img = c.e ? foto(c.e, 'mini') : `<div class="foto mini" style="background:#631100;display:flex;align-items:center;justify-content:center">${logoImg('claro l-mini')}</div>`;
  return `<div class="menu-fondo" onclick="compartirItem=null; dibujar()"></div>
  <div class="hoja"><div class="agarre"></div>
    <div class="mini-ev">${img}<div><b>${c.titulo}</b><span>${c.sub}</span></div></div>
    <h3>Enviar a amigos</h3><div class="fila4">${amigos}</div>
    <h3>Compartir en</h3><div class="fila4">${redes}</div>
    <div class="link"><span>afin.app/${c.id === 'afin' ? '' : c.id}</span><button onclick="copiarLink()">${copiado ? 'Copiado' : 'Copiar'}</button></div>
  </div>`;
}

// ===== ARRANQUE =====
dibujar();
setTimeout(() => ir('gustos'), 2000);
// Si la persona ya había dado permiso antes, se usa la ubicación sin volver a preguntar
try { navigator.permissions.query({ name: 'geolocation' }).then(r => { if (r.state === 'granted') pedirUbicacion(); }); } catch (e) {}