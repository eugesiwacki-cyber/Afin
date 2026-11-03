// =====================================================================
//  CATEGORÍAS
// =====================================================================
const categorias = [
  { id: 'teatro', nombre: 'Teatro', color: '#631100', subs: ['Comedia', 'Musical', 'Stand up', 'Tragedia', 'Drama', 'Ópera'] },
  { id: 'arte', nombre: 'Arte', color: '#53779A', subs: ['Pintura', 'Diseño', 'Fotografía', 'Muestras'] },
  { id: 'cine', nombre: 'Cine', color: '#2F5D3A', subs: ['Estrenos', 'Clásicos', 'Animación', 'Documental'] },
  { id: 'musica', nombre: 'Música', color: '#8A5A00', subs: ['Conciertos', 'Festivales'] }
];

// =====================================================================
//  LUGARES: nombre, dirección, barrio, latitud, longitud, foto
//  La foto de cada lugar la usan todos sus planes (guardala en la carpeta img)
// =====================================================================
const LUG = (nombre, dir, zona, lat, lng, imagen) => ({ nombre, dir, zona, lat, lng, imagen });
const LUGARES = {
  // --- Museos ---
  bellasartes: LUG('Museo Nacional de Bellas Artes', 'Av. del Libertador 1473', 'Recoleta', -34.5838, -58.3927, 'bellasartes.jpg'),
  mariano: LUG('Centro Cultural Mariano Moreno', 'Agüero 2502 (Biblioteca Nacional)', 'Recoleta', -34.5841, -58.3967, 'mariano.jpg'),
  casaheredia: LUG('Museo Moderno – Casa Heredia', 'Av. Caseros, San Telmo', 'San Telmo', -34.6265, -58.3740, 'casaheredia.jpg'),
  decorativo: LUG('Museo Nacional de Arte Decorativo', 'Av. del Libertador 1902', 'Recoleta', -34.5812, -58.4010, 'decorativo.jpg'),
  popular: LUG('Museo de Arte Popular José Hernández', 'Av. del Libertador 2373', 'Palermo', -34.5799, -58.4047, 'popular.jpg'),
  malba: LUG('MALBA', 'Av. Pres. Figueroa Alcorta 3415', 'Palermo', -34.5771, -58.4033, 'malba.jpg'),
  macba: LUG('MACBA', 'Av. San Juan 328', 'San Telmo', -34.6220, -58.3702, 'macba.jpg'),
  moderno: LUG('Museo Moderno', 'Av. San Juan 350', 'San Telmo', -34.6222, -58.3706, 'moderno.jpg'),
  xul: LUG('Museo Xul Solar', 'Laprida 1212', 'Recoleta', -34.5948, -58.4078, 'xul.jpg'),
  fernandez: LUG('Museo Isaac Fernández Blanco', 'Suipacha 1422', 'Retiro', -34.5941, -58.3786, 'fernandez.jpg'),
  caminito: LUG('Caminito', 'Del Valle Iberlucea', 'La Boca', -34.6385, -58.3632, 'caminito.jpg'),
  evita: LUG('Museo Evita', 'Lafinur 2988', 'Palermo', -34.5856, -58.4107, 'evita.jpg'),
  maman: LUG('Maman Fine Art', 'Av. del Libertador 2475', 'Palermo', -34.5794, -58.4060, 'maman.jpg'),
  // --- Teatros ---
  colon: LUG('Teatro Colón', 'Cerrito 628', 'Microcentro', -34.6010, -58.3834, 'colon.jpg'),
  cervantes: LUG('Teatro Nacional Cervantes', 'Libertad 815', 'Retiro', -34.5995, -58.3860, 'cervantes.jpg'),
  laplaza: LUG('Paseo La Plaza', 'Av. Corrientes 1660', 'San Nicolás', -34.6041, -58.3895, 'laplaza.jpg'),
  astral: LUG('Teatro Astral', 'Av. Corrientes 1639', 'San Nicolás', -34.6040, -58.3891, 'astral.jpg'),
  metropolitan: LUG('Teatro Metropolitan', 'Av. Corrientes 1343', 'San Nicolás', -34.6036, -58.3858, 'metropolitan.jpg'),
  lola: LUG('Teatro Lola Membrives', 'Av. Corrientes 1280', 'San Nicolás', -34.6038, -58.3856, 'lola.jpg'),
  sanmartin: LUG('Teatro General San Martín', 'Av. Corrientes 1530', 'San Nicolás', -34.6040, -58.3879, 'sanmartin.jpg'),
  picadero: LUG('Teatro Picadero', 'Enrique Santos Discépolo 1857', 'Balvanera', -34.6044, -58.3935, 'picadero.jpg'),
  teatrobsas: LUG('Teatro Buenos Aires', '', 'San Nicolás', -34.6040, -58.3870, 'teatrobsas.jpg'),
  multiteatro: LUG('Multiteatro', 'Av. Corrientes 1283', 'San Nicolás', -34.6037, -58.3860, 'multiteatro.jpg'),
  standupclub: LUG('Stand Up Club', '', 'Recoleta', -34.5885, -58.3930, 'standupclub.jpg'),
  maipo: LUG('Teatro Maipo', 'Esmeralda 443', 'San Nicolás', -34.6028, -58.3768, 'maipo.jpg'),
  // --- Cines ---
  cinepolisrecoleta: LUG('Cinépolis Recoleta', 'Vicente López 2050', 'Recoleta', -34.5878, -58.3920, 'cinepolisrecoleta.jpg'),
  cinemarkpalermo: LUG('Cinemark Palermo', '', 'Palermo', -34.5866, -58.4114, 'cinemarkpalermo.jpg'),
  cinemarkabasto: LUG('Cinemark Abasto', 'Av. Corrientes 3247 (Abasto Shopping)', 'Balvanera', -34.6033, -58.4113, 'cinemarkabasto.jpg'),
  showcasebelgrano: LUG('Cine Showcase Belgrano', '', 'Belgrano', -34.5630, -58.4560, 'showcasebelgrano.jpg'),
  plazahoussay: LUG('Cinépolis Plaza Houssay', '', 'Recoleta', -34.5983, -58.3997, 'plazahoussay.jpg'),
  gaumont: LUG('Cine Gaumont', 'Av. Rivadavia 1635', 'Congreso', -34.6091, -58.3912, 'gaumont.jpg'),
  cacodelphia: LUG('Cine Arte Cacodelphia', '', 'Balvanera', -34.6075, -58.3990, 'cacodelphia.jpg'),
  cosmos: LUG('Cine Cosmos UBA', 'Av. Corrientes 2046', 'Balvanera', -34.6044, -58.3975, 'cosmos.jpg'),
  lorca: LUG('Cine Lorca', 'Av. Corrientes 1428', 'San Nicolás', -34.6041, -58.3871, 'lorca.jpg'),
  monumental: LUG('Multiplex Monumental Lavalle', 'Lavalle 780', 'San Nicolás', -34.6022, -58.3790, 'monumental.jpg'),
  atlasbullrich: LUG('Atlas Cines Patio Bullrich', 'Av. del Libertador 750', 'Retiro', -34.5871, -58.3802, 'atlasbullrich.jpg'),
  cinemarkpuertomadero: LUG('Cinemark Puerto Madero', '', 'Puerto Madero', -34.6128, -58.3660, 'cinemarkpuertomadero.jpg'),
  atlasalcorta: LUG('Atlas Cines Alcorta', 'Jerónimo Salguero 3172 (Alcorta Shopping)', 'Palermo', -34.5785, -58.4090, 'atlasalcorta.jpg'),
  // --- Música ---
  movistar: LUG('Movistar Arena', 'Humboldt 486', 'Chacarita', -34.5946, -58.4466, 'movistar.jpg'),
  clubciudad: LUG('Club Ciudad de Buenos Aires', 'Av. del Libertador 7501', 'Núñez', -34.5370, -58.4535, 'clubciudad.jpg'),
  sanisidro: LUG('Hipódromo de San Isidro', 'San Isidro (Gran Buenos Aires)', 'San Isidro', -34.4745, -58.5180, 'sanisidro.jpg')
};

// =====================================================================
//  PLANES
//  en: id del lugar | dias: 0=lunes ... 5=sábado, 6=domingo
//  fechas: lista de días puntuales (año-mes-día)  | desde / hasta: rango (si no ponés nada: hoy hasta fin de 2027)
//  precio: 0 es gratis | imagen: solo si el plan tiene foto propia (si no, usa la del lugar)
//  Los planes de museos, teatros y cines son EJEMPLOS: reemplazalos por la cartelera real.
// =====================================================================
const EVENTOS = [
  // ---------- MUSEOS ----------
  { id: 'bellasartes-visita', en: 'bellasartes', titulo: 'Visita guiada a la colección', cat: 'arte', sub: 'Pintura', dias: [1, 2, 3, 4, 5, 6], dia: 'Mar a dom', hora: '12:30 y 16:30 h', ini: '12:30', precio: 0,
    desc: 'Recorrido con guía por las salas de arte argentino y europeo.', etiquetas: ['Arte', 'Pintura', 'Gratis', 'Visita guiada'] },
  { id: 'mariano-muestras', en: 'mariano', titulo: 'Muestras y actividades abiertas', cat: 'arte', sub: 'Muestras', dias: [1, 2, 3, 4, 5], dia: 'Mar a vie', hora: '14 a 20 h', ini: '14:00', precio: 0,
    desc: 'Exposiciones y actividades culturales en el centro cultural de la Biblioteca Nacional.', etiquetas: ['Arte', 'Muestras', 'Gratis', 'Actividades'] },
  { id: 'heredia-taller', en: 'casaheredia', titulo: 'Jornada de taller abierto', cat: 'arte', sub: 'Muestras', fechas: ['2026-11-21', '2026-12-19', '2027-03-20', '2027-05-15'], dia: 'Sáb 21 nov y más fechas', hora: '16 h', ini: '16:00', precio: 0,
    desc: 'Los artistas en residencia abren su taller para mostrar lo que están creando.', etiquetas: ['Arte', 'Muestras', 'Gratis', 'Artistas'] },
  { id: 'decorativo-palacio', en: 'decorativo', titulo: 'Visita al palacio y sus colecciones', cat: 'arte', sub: 'Diseño', dias: [2, 3, 4, 5, 6], dia: 'Mié a dom', hora: '14 a 19 h', ini: '14:00', precio: 2500,
    desc: 'Una casona de época con muebles, tapices y objetos decorativos de distintos siglos.', etiquetas: ['Arte', 'Diseño', 'Historia', 'Visita guiada'] },
  { id: 'popular-muestra', en: 'popular', titulo: 'Muestra de arte popular', cat: 'arte', sub: 'Muestras', dias: [2, 3, 4, 5, 6], dia: 'Mié a dom', hora: '12 a 19 h', ini: '12:00', precio: 1500,
    desc: 'Platería, cerámica y textiles de distintas regiones del país.', etiquetas: ['Arte', 'Muestras', 'Tradición', 'Artesanías'] },
  { id: 'malba-muestra', en: 'malba', titulo: 'Muestra de arte latinoamericano', cat: 'arte', sub: 'Muestras', dias: [0, 2, 3, 4, 5, 6], dia: 'Todos los días menos martes', hora: '12 a 19 h', ini: '12:00', precio: 12000, estreno: true,
    desc: 'La colección permanente y muestras temporarias de artistas de toda América Latina.', etiquetas: ['Arte', 'Muestras', 'Latinoamérica', 'Colección'] },
  { id: 'macba-geometrica', en: 'macba', titulo: 'Muestra de abstracción geométrica', cat: 'arte', sub: 'Pintura', dias: [0, 1, 2, 3, 4, 5], dia: 'Lun a sáb', hora: '12 a 19 h', ini: '12:00', precio: 5000,
    desc: 'Obras de arte geométrico y cinético de artistas argentinos e internacionales.', etiquetas: ['Arte', 'Pintura', 'Geométrico', 'Contemporáneo'] },
  { id: 'moderno-visita', en: 'moderno', titulo: 'Visita guiada al Museo Moderno', cat: 'arte', sub: 'Muestras', dias: [1, 2, 3, 4, 5, 6], dia: 'Mar a dom', hora: '11 a 19 h', ini: '11:00', precio: 5000,
    desc: 'Recorrido por las muestras de arte moderno y contemporáneo del museo.', etiquetas: ['Arte', 'Muestras', 'Moderno', 'Visita guiada'] },
  { id: 'xul-visita', en: 'xul', titulo: 'Visita al museo de Xul Solar', cat: 'arte', sub: 'Pintura', dias: [1, 2, 3, 4, 5], dia: 'Mar a vie', hora: '12 a 19 h', ini: '12:00', precio: 4000,
    desc: 'La casa del artista, con sus pinturas, sus idiomas inventados y sus instrumentos.', etiquetas: ['Arte', 'Pintura', 'Xul Solar', 'Casa museo'] },
  { id: 'fernandez-casa', en: 'fernandez', titulo: 'Visita a la casa-museo', cat: 'arte', sub: 'Muestras', dias: [2, 3, 4, 5, 6], dia: 'Mié a dom', hora: '14 a 19 h', ini: '14:00', precio: 1500,
    desc: 'Un palacio neocolonial con arte hispanoamericano, platería y pintura religiosa.', etiquetas: ['Arte', 'Muestras', 'Historia', 'Arquitectura'] },
  { id: 'caminito-paseo', en: 'caminito', titulo: 'Paseo por Caminito y sus artistas', cat: 'arte', sub: 'Pintura', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '10 a 18 h', ini: '10:00', precio: 0,
    desc: 'Casas de colores, pintores en la calle, tango y artesanías en el corazón de La Boca.', etiquetas: ['Arte', 'Pintura', 'Gratis', 'Al aire libre'] },
  { id: 'evita-visita', en: 'evita', titulo: 'Visita guiada al Museo Evita', cat: 'arte', sub: 'Muestras', dias: [1, 2, 3, 4, 5, 6], dia: 'Mar a dom', hora: '11 a 19 h', ini: '11:00', precio: 6000,
    desc: 'Objetos, vestidos y documentos para conocer la vida de Eva Perón.', etiquetas: ['Arte', 'Muestras', 'Historia', 'Visita guiada'] },
  { id: 'maman-muestra', en: 'maman', titulo: 'Muestra en la galería', cat: 'arte', sub: 'Pintura', dias: [0, 1, 2, 3, 4, 5], dia: 'Lun a sáb', hora: '11 a 20 h', ini: '11:00', precio: 0,
    desc: 'Pintura y escultura de artistas argentinos y latinoamericanos, con entrada libre.', etiquetas: ['Arte', 'Pintura', 'Gratis', 'Galería'] },

  // ---------- TEATROS ----------
  { id: 'colon-opera', en: 'colon', titulo: 'Función de ópera', cat: 'teatro', sub: 'Ópera', dias: [4, 5, 6], dia: 'Vie a dom', hora: '20 h', ini: '20:00', precio: 45000,
    desc: 'La sala más importante del país, con orquesta, coro y escenografía en vivo.', etiquetas: ['Teatro', 'Ópera', 'Clásico', 'Gala'] },
  { id: 'colon-sinfonico', en: 'colon', titulo: 'Concierto sinfónico', cat: 'musica', sub: 'Conciertos', fechas: ['2026-11-22', '2026-12-13', '2027-04-11', '2027-06-20'], dia: 'Dom 22 nov y más fechas', hora: '17 h', ini: '17:00', precio: 30000,
    desc: 'Una orquesta sinfónica con obras clásicas en la acústica del Colón.', etiquetas: ['Música', 'Conciertos', 'Sinfónico', 'Clásica'] },
  { id: 'cervantes-obra', en: 'cervantes', titulo: 'Obra de teatro nacional', cat: 'teatro', sub: 'Drama', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '20 h', ini: '20:00', precio: 9000,
    desc: 'Producciones del teatro nacional con elencos y directores argentinos.', etiquetas: ['Teatro', 'Drama', 'Nacional', 'Sala principal'] },
  { id: 'laplaza-comedia', en: 'laplaza', titulo: 'Comedia en Paseo La Plaza', cat: 'teatro', sub: 'Comedia', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '21 h', ini: '21:00', precio: 22000,
    desc: 'Una comedia para pasar la noche en uno de los paseos teatrales de la Avenida Corrientes.', etiquetas: ['Teatro', 'Comedia', 'Corrientes', 'Noche'] },
  { id: 'astral-musical', en: 'astral', titulo: 'Comedia musical', cat: 'teatro', sub: 'Musical', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '20:30 h', ini: '20:30', precio: 28000,
    desc: 'Canto, baile y orquesta en vivo en un clásico de la calle Corrientes.', etiquetas: ['Teatro', 'Musical', 'En vivo', 'Familiar'] },
  { id: 'metropolitan-humor', en: 'metropolitan', titulo: 'Espectáculo de humor', cat: 'teatro', sub: 'Comedia', dias: [4, 5, 6], dia: 'Vie a dom', hora: '21 h', ini: '21:00', precio: 24000,
    desc: 'Humor y sketches con actores y humoristas de la escena local.', etiquetas: ['Teatro', 'Comedia', 'Humor', '+13'] },
  { id: 'lola-drama', en: 'lola', titulo: 'Obra de drama contemporáneo', cat: 'teatro', sub: 'Drama', dias: [4, 5, 6], dia: 'Vie a dom', hora: '20:30 h', ini: '20:30', precio: 25000,
    desc: 'Una historia intensa con un elenco de primera línea.', etiquetas: ['Teatro', 'Drama', 'Contemporáneo', '+16'] },
  { id: 'sanmartin-teatro', en: 'sanmartin', titulo: 'Teatro y danza en el San Martín', cat: 'teatro', sub: 'Drama', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '20 h', ini: '20:00', precio: 8000,
    desc: 'Obras, danza y espectáculos en uno de los complejos teatrales más grandes de la ciudad.', etiquetas: ['Teatro', 'Drama', 'Danza', 'Público'] },
  { id: 'picadero-obra', en: 'picadero', titulo: 'Obra en el Picadero', cat: 'teatro', sub: 'Drama', dias: [4, 5, 6], dia: 'Vie a dom', hora: '21 h', ini: '21:00', precio: 20000,
    desc: 'Teatro de autor en una sala con historia, a pasos de Corrientes.', etiquetas: ['Teatro', 'Drama', 'Autor', 'Sala'] },
  { id: 'teatrobsas-comedia', en: 'teatrobsas', titulo: 'Comedia en el Teatro Buenos Aires', cat: 'teatro', sub: 'Comedia', dias: [4, 5, 6], dia: 'Vie a dom', hora: '20:30 h', ini: '20:30', precio: 18000,
    desc: 'Una obra para reírse con un elenco de actores conocidos.', etiquetas: ['Teatro', 'Comedia', 'Humor', 'Noche'] },
  { id: 'multiteatro-musical', en: 'multiteatro', titulo: 'Musical en el Multiteatro', cat: 'teatro', sub: 'Musical', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '20 h', ini: '20:00', precio: 30000,
    desc: 'Un gran musical con canciones en vivo y mucho movimiento.', etiquetas: ['Teatro', 'Musical', 'En vivo', 'Familiar'] },
  { id: 'standupclub-noche', en: 'standupclub', titulo: 'Noche de stand up', cat: 'teatro', sub: 'Stand up', dias: [4, 5], dia: 'Vie y sáb', hora: '21 h', ini: '21:00', precio: 12000,
    desc: 'Varios comediantes en una misma noche y humor para todos los gustos.', etiquetas: ['Teatro', 'Stand up', 'Humor', '+16'] },
  { id: 'maipo-revista', en: 'maipo', titulo: 'Revista musical y tango', cat: 'teatro', sub: 'Musical', dias: [4, 5, 6], dia: 'Vie a dom', hora: '21 h', ini: '21:00', precio: 26000,
    desc: 'Música, humor y baile en un teatro histórico de la ciudad.', etiquetas: ['Teatro', 'Musical', 'Tango', 'Clásico'] },

  // ---------- CINES ----------
  { id: 'cinepolisrecoleta-estrenos', en: 'cinepolisrecoleta', titulo: 'Estrenos de la semana', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 9000,
    desc: 'Las películas que se estrenan esta semana, en varias funciones por día.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Shopping'] },
  { id: 'cinemarkpalermo-estrenos', en: 'cinemarkpalermo', titulo: 'Estrenos de la semana', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 9000, estreno: true,
    desc: 'Estrenos nacionales e internacionales, con funciones subtituladas y dobladas.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Shopping'] },
  { id: 'cinemarkabasto-estrenos', en: 'cinemarkabasto', titulo: 'Estrenos de la semana', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 8500,
    desc: 'Cartelera completa dentro del Abasto Shopping.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Shopping'] },
  { id: 'showcasebelgrano-estrenos', en: 'showcasebelgrano', titulo: 'Estrenos de la semana', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 8500,
    desc: 'Cine en Belgrano con los estrenos de la semana.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Belgrano'] },
  { id: 'plazahoussay-estrenos', en: 'plazahoussay', titulo: 'Estrenos y preestrenos', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 8500,
    desc: 'Estrenos y funciones especiales en el centro de la ciudad.', etiquetas: ['Cine', 'Estrenos', 'Preestrenos', 'Centro'] },
  { id: 'gaumont-nacional', en: 'gaumont', titulo: 'Cine nacional en el Gaumont', cat: 'cine', sub: 'Clásicos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 22 h', ini: '14:00', precio: 3500,
    desc: 'Películas argentinas, estrenos independientes y ciclos, a precio accesible.', etiquetas: ['Cine', 'Clásicos', 'Nacional', 'Accesible'] },
  { id: 'cacodelphia-autor', en: 'cacodelphia', titulo: 'Ciclo de cine de autor', cat: 'cine', sub: 'Clásicos', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '19 y 21 h', ini: '19:00', precio: 5000,
    desc: 'Películas de culto y cine de autor en una sala chica.', etiquetas: ['Cine', 'Clásicos', 'Autor', 'Sala chica'] },
  { id: 'cosmos-repertorio', en: 'cosmos', titulo: 'Ciclo de cine de repertorio', cat: 'cine', sub: 'Clásicos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '15 a 22 h', ini: '15:00', precio: 3000,
    desc: 'Clásicos, cine independiente y ciclos temáticos en el cine de la Universidad.', etiquetas: ['Cine', 'Clásicos', 'Repertorio', 'Accesible'] },
  { id: 'lorca-independiente', en: 'lorca', titulo: 'Ciclo de cine independiente', cat: 'cine', sub: 'Documental', dias: [3, 4, 5, 6], dia: 'Jue a dom', hora: '19 y 21 h', ini: '19:00', precio: 4000,
    desc: 'Documentales y películas independientes de Argentina y el mundo.', etiquetas: ['Cine', 'Documental', 'Independiente', 'Ciclo'] },
  { id: 'monumental-estrenos', en: 'monumental', titulo: 'Estrenos y preestrenos', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 7500,
    desc: 'Cartelera comercial en pleno centro, a pasos de Lavalle.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Centro'] },
  { id: 'atlasbullrich-estrenos', en: 'atlasbullrich', titulo: 'Estrenos de la semana', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 9500,
    desc: 'Cine dentro del shopping con salas cómodas y estrenos.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Shopping'] },
  { id: 'cinemarkpuertomadero-estrenos', en: 'cinemarkpuertomadero', titulo: 'Estrenos de la semana', cat: 'cine', sub: 'Estrenos', dias: [0, 1, 2, 3, 4, 5, 6], dia: 'Todos los días', hora: '14 a 23 h', ini: '14:00', precio: 9000,
    desc: 'Estrenos y función nocturna frente a los diques de Puerto Madero.', etiquetas: ['Cine', 'Estrenos', 'Cartelera', 'Puerto Madero'] },
  { id: 'atlasalcorta-animacion', en: 'atlasalcorta', titulo: 'Cine de animación para toda la familia', cat: 'cine', sub: 'Animación', dias: [5, 6], dia: 'Sáb y dom', hora: '14 a 18 h', ini: '14:00', precio: 8000,
    desc: 'Películas animadas para ir con chicos y grandes durante el fin de semana.', etiquetas: ['Cine', 'Animación', 'Familiar', 'Finde'] },

  // ---------- MÚSICA ----------
  { id: 'bunbury', en: 'movistar', titulo: 'Enrique Bunbury en el Movistar Arena', cat: 'musica', sub: 'Conciertos', fechas: ['2026-11-04'], dia: 'Mié 4 nov', hora: '21 h', ini: '21:00', precio: 65000, estreno: true,
    desc: 'Concierto del cantautor español en el Movistar Arena. Confirmá fecha y horario con la ticketera.', etiquetas: ['Música', 'Conciertos', 'Rock', 'En vivo'] },
  { id: 'rush', en: 'movistar', titulo: 'Rush en el Movistar Arena', cat: 'musica', sub: 'Conciertos', fechas: ['2027-01-15'], dia: 'Vie 15 ene', hora: '21 h', ini: '21:00', precio: 90000,
    desc: 'Show en el Movistar Arena. Confirmá fecha y horario con la ticketera.', etiquetas: ['Música', 'Conciertos', 'Rock', 'En vivo'] },
  { id: 'tomlinson', en: 'movistar', titulo: 'Louis Tomlinson en el Movistar Arena', cat: 'musica', sub: 'Conciertos', fechas: ['2027-04-02'], dia: 'Vie 2 abr', hora: '21 h', ini: '21:00', precio: 80000,
    desc: 'Show en el Movistar Arena. Confirmá fecha y horario con la ticketera.', etiquetas: ['Música', 'Conciertos', 'Pop', 'En vivo'] },
  { id: 'primavera', en: 'clubciudad', titulo: 'Primavera Sound Buenos Aires', cat: 'musica', sub: 'Festivales', fechas: ['2026-11-28', '2026-11-29'], dia: 'Sáb 28 y dom 29 nov', hora: 'Desde la tarde', ini: '15:00', precio: 185000, estreno: true, imagen: 'primavera.jpg',
    desc: 'Festival de dos días con Gorillaz, The Strokes, FKA twigs y muchos más.', etiquetas: ['Música', 'Festivales', 'Gorillaz', 'The Strokes'] },
  { id: 'lolla', en: 'sanisidro', titulo: 'Lollapalooza Argentina', cat: 'musica', sub: 'Festivales', fechas: ['2027-03-12', '2027-03-13', '2027-03-14'], dia: 'Vie 12 a dom 14 mar', hora: 'Desde el mediodía', ini: '12:00', precio: 350000, estreno: true, imagen: 'lollapalooza.jpg',
    desc: 'Tres días de música, arte y gastronomía en el Hipódromo de San Isidro. El precio varía según la etapa de venta.', etiquetas: ['Música', 'Festivales', '3 días', 'San Isidro'] }
];

// =====================================================================
//  FECHAS (funciones para trabajar con días)
// =====================================================================
function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function hoyDate() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
function sumarDias(d, n) { const r = new Date(d); r.setDate(r.getDate() + n); return r; }
function hoyIdx() { return (new Date().getDay() + 6) % 7; }
function ocurre(e, d) {
  const s = iso(d);
  if (e.fechas) return e.fechas.includes(s);
  return s >= e.desde && s <= e.hasta && e.dias.includes((d.getDay() + 6) % 7);
}
function proximaFecha(e) {
  let d = hoyDate();
  for (let i = 0; i < 500; i++) { if (ocurre(e, d)) return d; d = sumarDias(d, 1); }
  return null;
}

// Une cada plan con los datos de su lugar y descarta los que ya pasaron
const eventos = EVENTOS.map(e => {
  const lu = LUGARES[e.en];
  return { ...e, lugar: lu.nombre, dir: lu.dir, zona: lu.zona, lat: lu.lat, lng: lu.lng,
    imagen: e.imagen || lu.imagen, desde: e.desde || '2026-11-02', hasta: e.hasta || '2027-12-31' };
}).map(e => ({ ...e, prox: proximaFecha(e) })).filter(e => e.prox);

// ===== NOTIFICACIONES (de ejemplo) =====
const notifs = [
  { id: 'n1', grupo: 'Hoy', tipo: 'recordatorio', ico: 'Notificaciones', color: '#631100', t: 'Empieza en 2 horas', s: 'Noche de stand up · 21 h' },
  { id: 'n2', grupo: 'Hoy', tipo: 'novedad', ico: 'Grilla', color: '#002B49', t: 'Nuevo estreno afín a vos', s: 'Estrenos de la semana · Cinemark Palermo' },
  { id: 'n3', grupo: 'Hoy', tipo: 'aviso', ico: 'Favoritos', color: '#B52000', t: 'Se agotan las entradas', s: 'Primavera Sound · Sáb 28 nov' },
  { id: 'n4', grupo: 'Antes', tipo: 'recordatorio', ico: 'Calendario', color: '#53779A', t: 'Agendaste una muestra', s: 'MALBA · Muestra latinoamericana' },
  { id: 'n5', grupo: 'Antes', tipo: 'novedad', ico: 'Ubicacion', color: '#002B49', t: 'Plan nuevo en Palermo', s: 'Museo Evita · Visita guiada' },
  { id: 'n6', grupo: 'Antes', tipo: 'compartido', ico: 'Compartir', color: '#631100', t: 'Cami te compartió un plan', s: 'Lollapalooza · 12 de marzo' }
];

// ===== AYUDA Y TÉRMINOS =====
const FAQ = [
  ['¿Cómo guardo un plan en mi agenda?', 'Entrá al plan que te interesa y tocá "Guardar en mi agenda". Después lo ves en la pestaña Agenda, en el día que corresponde.'],
  ['¿Cómo cambio mis intereses?', 'Andá a Perfil y tocá "Editar" al lado de "Mis intereses". Ahí podés elegir otras categorías y subcategorías.'],
  ['¿Por qué me piden mi ubicación?', 'Para mostrarte qué planes hay cerca tuyo y ordenarlos por distancia. Es opcional, no la guardamos y no la compartimos con nadie.'],
  ['¿Los planes son solo en Buenos Aires?', 'Casi todos son en la Ciudad de Buenos Aires. Algunos festivales grandes pueden hacerse en el Gran Buenos Aires y se indica en el plan.'],
  ['¿Cuesta usar Afín?', 'No, Afín es gratis. El precio que ves en cada plan es el de la entrada, y lo define cada lugar.'],
  ['¿Cómo llego a un plan?', 'Dentro del plan, tocá "Cómo llegar" y se abre el mapa con la dirección del lugar.']
];
const TERMINOS = [
  ['Qué es Afín', 'Afín es una app que te ayuda a descubrir propuestas culturales (teatro, cine, arte y música) en la Ciudad de Buenos Aires, según tus intereses.'],
  ['Uso de la app', 'Podés usar Afín gratis. La información de cada plan (horarios, precios y lugares) la carga cada espacio y puede cambiar, por eso te recomendamos confirmarla antes de ir.'],
  ['Qué datos guardamos', 'Solo tu nombre, tu edad y tu ciudad, que son los que vos escribís al ingresar. En esta versión se guardan únicamente en tu dispositivo.'],
  ['Tu ubicación', 'Usamos tu ubicación solo para mostrarte qué planes hay cerca. Es opcional, no la guardamos y no la compartimos. Podés desactivarla cuando quieras desde los permisos de tu navegador.'],
  ['Lo que no hacemos', 'No vendemos tus datos ni los compartimos con terceros.'],
  ['Cambios y contacto', 'Si actualizamos estos términos, vas a ver la fecha nueva arriba. Si tenés dudas, escribinos a hola@afin.app.']
];

// =====================================================================
//  ESTADO: lo que la persona va eligiendo
// =====================================================================
let usuario = null;
try { usuario = JSON.parse(localStorage.getItem('afin_usuario')); } catch (e) {}

// Ubicación de la persona (solo si da permiso; no se guarda en ningún lado)
let miUbic = null, ubicEstado = 'no'; // 'no' | 'pidiendo' | 'ok' | 'negado' | 'error'
let mapaObj = null;

let pantalla = 'splash', pila = [];
let gustos = [], subsElegidas = [], abierta = null, filtro = 'todo', faqAbierta = null;
let eventoActual = null, menuAbierto = false, compartirItem = null, copiado = false, modalListo = false;
let favoritos = [], agenda = [], hechos = [], diaSel = hoyIdx(), semOff = 0, favFiltro = 'todo';
let q = '', chipExp = 'todo', fCats = [], fFecha = null, fDist = 20, fPrecio = 200000, orden = 'cerca';
let notifFiltro = 'todas', notifLeidas = [], recordar = true;

const PRECIO_MAX = 200000;
const app = document.getElementById('app');

// ===== FUNCIONES ÚTILES =====
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
function kmEntre(lat1, lng1, lat2, lng2) {
  const R = 6371, rad = x => x * Math.PI / 180;
  const dLat = rad(lat2 - lat1), dLng = rad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
// Distancia real entre la persona y el plan (null si no hay ubicación)
function kmA(e) { return miUbic ? kmEntre(miUbic.lat, miUbic.lng, e.lat, e.lng) : null; }
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
// Lleva a la agenda en la semana y el día del próximo encuentro del plan
function verAgenda() {
  modalListo = false;
  const f = buscar(eventoActual).prox, lunActual = sumarDias(hoyDate(), -hoyIdx());
  const dias = Math.round((f - lunActual) / 86400000);
  semOff = Math.floor(dias / 7); diaSel = dias - 7 * semOff;
  irTab('agenda');
}
function cambiarSemana(n) { semOff = Math.max(0, semOff + n); dibujar(); }

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
    'Play': '<path d="M8 5l11 7-11 7z"/>',
    'Ruta': '<path d="M3 11l18-8-8 18-2-8z"/>'
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

// Foto del plan; si todavía no hay (o no se encuentra), muestra un bloque del color de su categoría
function foto(e, clase) {
  const bloque = `<div class="foto vacio ${clase}" style="background:${catDe(e.cat).color}"></div>`;
  return e.imagen
    ? `<img class="foto ${clase}" src="img/${e.imagen}" alt="${esc(e.titulo)}" onerror="this.outerHTML=this.dataset.f" data-f='${bloque}'>`
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
  if (pantalla === 'explorar') iniciarMapa();
  else if (mapaObj) { mapaObj.remove(); mapaObj = null; }
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

// ===== PASO 3: VIDEO A PANTALLA COMPLETA (video/intro.mp4 y opcional video/portada.jpg) =====
function alternarPlay() {
  const v = document.getElementById('vid');
  if (v) v.paused ? v.play() : v.pause();
}
function alternarSonido(btn) {
  const v = document.getElementById('vid');
  if (!v) return;
  v.muted = !v.muted;
  btn.textContent = v.muted ? 'Activar sonido' : 'Silenciar';
}
function vistaVideo() {
  const falta = `<div class="video-falta"><div class="play-g">${icono('Play', true)}</div><p>Acá va el video de Afín</p></div>`;
  return `<div class="pantalla video-full">
    <video id="vid" src="video/intro.mp4" poster="video/portada.jpg" autoplay muted playsinline
      onclick="alternarPlay()" onpause="document.getElementById('playbig').classList.remove('oculto')"
      onplay="document.getElementById('playbig').classList.add('oculto')"
      onerror="this.outerHTML=this.dataset.f" data-f='${falta}'></video>
    <div id="playbig" class="play-big oculto">${icono('Play', true)}</div>
    <div class="vf-top">
      <div class="progreso"><div class="on"></div><div class="on"></div><div class="on"></div></div>
      <div class="top"><button class="atras" onclick="atras()">‹</button><button class="omitir" onclick="irTab('inicio')">Omitir</button></div>
    </div>
    <div class="vf-bottom">
      <button class="btn-sonido" onclick="alternarSonido(this)">Activar sonido</button>
      <button class="continuar" onclick="irTab('inicio')">Empezar</button>
    </div>
  </div>`;
}

// ===== INICIO "PARA VOS" =====
function vistaInicio() {
  const lista = gustos.length ? categorias.filter(c => gustos.includes(c.id)) : categorias;
  const chips = [['todo', 'Todo'], ...lista.map(c => [c.id, c.nombre])]
    .map(([id, n]) => `<button class="chip ${filtro === id ? 'on' : ''}" onclick="filtro='${id}'; dibujar()">${n}</button>`).join('');
  const base = eventos.filter(e => !gustos.length || gustos.includes(e.cat));
  const vis = base.filter(e => filtro === 'todo' || e.cat === filtro).sort((a, b) => a.prox - b.prox).slice(0, 12);
  const grandes = vis.length ? vis.map(e =>
    `<div class="ev-grande" onclick="abrirEvento('${e.id}')">${foto(e, 'grande')}<b>${esc(e.titulo)}</b><span>${e.dia} · ${e.hora}</span></div>`).join('')
    : `<p class="vacio-msg">Todavía no hay planes de esta categoría.</p>`;
  const nuevos = eventos.filter(e => e.estreno).sort((a, b) => a.prox - b.prox).slice(0, 2).map(e =>
    `<div onclick="abrirEvento('${e.id}')">${foto(e, 'chica')}<b class="nombre-chico">${esc(e.titulo)}</b></div>`).join('');
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
  const lista = eventos.filter(e => e.estreno).sort((a, b) => a.prox - b.prox);
  if (!lista.length) return `<div class="pantalla">${cab('Estrenos')}<p class="vacio-msg">Todavía no hay estrenos.</p></div>`;
  const filas = lista.map(e =>
    `<div class="fila" onclick="abrirEvento('${e.id}')">${foto(e, 'mini')}
      <div class="fila-texto"><b>${esc(e.titulo)}</b><span>${e.dia} · ${subDist(e)}</span></div>
      <button class="corazon" onclick="alternarFav('${e.id}', event)">${icono('Favoritos', favoritos.includes(e.id))}</button></div>`).join('');
  return `<div class="pantalla">${cab('Estrenos')}<div class="scroll">${foto(lista[0], 'portada')}<div class="lista-est">${filas}</div></div></div>`;
}

// ===== DETALLE DEL PLAN =====
function vistaEvento() {
  const e = buscar(eventoActual), guardado = agenda.includes(e.id);
  const etiquetas = e.etiquetas.map((t, i) => `<span class="etiqueta ${i === 0 ? 'on' : ''}">${t}</span>`).join('');
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(e.lugar + ', ' + (e.dir ? e.dir + ', ' : '') + 'Buenos Aires, Argentina');
  const donde = [e.dir, e.zona, distTxt(e)].filter(Boolean).join(' · ');
  return `<div class="pantalla evento">
    <div class="evento-scroll">
      <button class="atras rojo" onclick="atras()">‹</button>
      <div class="portada-wrap">${foto(e, 'portada')}<button class="corazon-flot" onclick="alternarFav('${e.id}', event)">${icono('Favoritos', favoritos.includes(e.id))}</button></div>
      <h1 class="serif titulo-ev">${esc(e.titulo)}</h1>
      <div class="etiquetas">${etiquetas}</div>
      <div class="datos">
        <div class="dato"><div class="dato-ico">${icono('Calendario')}</div><div><b>${e.dia}</b><span>${e.hora}</span></div></div>
        <div class="dato"><div class="dato-ico">${icono('Ubicacion')}</div><div><b>${e.lugar}</b><span>${donde}</span></div></div>
        <div class="dato"><div class="dato-ico">${icono('Entrada')}</div><div><b>${precioTxt(e)}</b><span>Entrada</span></div></div>
      </div>
      <p class="descripcion">${e.desc}</p>
      <a class="btn-ir" href="${mapsUrl}" target="_blank" rel="noopener">${icono('Ruta')}Cómo llegar</a>
    </div>
    <div class="barra-ev">
      <button class="guardar ${guardado ? 'listo' : ''}" onclick="guardarAgenda('${e.id}')">${guardado ? 'Guardado en tu agenda' : 'Guardar en mi agenda'}</button>
      <button class="compartir-btn" onclick="abrirCompartir('${e.id}')">${icono('Compartir')}</button>
    </div>
  </div>`;
}

// ===== EXPLORAR (mapa real) =====
function iniciarMapa() {
  const el = document.getElementById('mapa');
  if (!el) return;
  if (typeof L === 'undefined') { el.innerHTML = '<div class="mapa-error">No se pudo cargar el mapa. Revisá tu conexión a internet.</div>'; return; }
  if (mapaObj) { mapaObj.remove(); mapaObj = null; }
  mapaObj = L.map(el).setView([-34.6037, -58.3816], 12);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(mapaObj);

  const vis = eventos.filter(e => chipExp === 'todo' || e.cat === chipExp);
  const porLugar = {};
  vis.forEach(e => { (porLugar[e.en] = porLugar[e.en] || []).push(e); });
  const puntos = [];
  Object.keys(porLugar).forEach(id => {
    const lu = LUGARES[id], evs = porLugar[id];
    const icon = L.divIcon({ className: '', html: `<div class="pin" style="background:${catDe(evs[0].cat).color}"></div>`, iconSize: [22, 22], iconAnchor: [11, 22], popupAnchor: [0, -22] });
    const html = `<b>${lu.nombre}</b><br><small>${lu.dir ? lu.dir + ' · ' : ''}${lu.zona}</small>` +
      evs.slice(0, 3).map(e => `<a class="pop-ev" onclick="abrirEvento('${e.id}')">${esc(e.titulo)}</a>`).join('');
    L.marker([lu.lat, lu.lng], { icon }).addTo(mapaObj).bindPopup(html);
    puntos.push([lu.lat, lu.lng]);
  });
  // La persona se marca en el mapa, y se incluye en el zoom solo si está cerca de la ciudad
  if (miUbic) {
    L.circleMarker([miUbic.lat, miUbic.lng], { radius: 8, color: '#fff', weight: 3, fillColor: '#002B49', fillOpacity: 1 }).addTo(mapaObj);
    if (kmEntre(miUbic.lat, miUbic.lng, -34.6037, -58.3816) < 40) puntos.push([miUbic.lat, miUbic.lng]);
  }
  if (puntos.length) mapaObj.fitBounds(puntos, { padding: [26, 26], maxZoom: 15 });
}
function vistaExplorar() {
  let lista = eventos.filter(e => chipExp === 'todo' || e.cat === chipExp);
  lista = miUbic ? lista.sort((a, b) => kmA(a) - kmA(b)) : lista.sort((a, b) => a.prox - b.prox);
  const filas = lista.slice(0, 12).map(e => `<div class="fila" onclick="abrirEvento('${e.id}')">${foto(e, 'mini')}<div class="fila-texto"><b>${esc(e.titulo)}</b><span>${e.lugar} · ${subDist(e)}</span></div></div>`).join('');
  return `<div class="pantalla sinpad"><div class="cuerpo">
    <div class="buscar-fila">${buscador()}<button class="atras rojo" onclick="ir('filtro')">☰</button></div>
    <div id="mapa" class="mapa"></div>
    ${avisoUbic()}
    <div class="chips2">${chipsCat(chipExp, 'chipExp', true)}</div>
    <div class="seccion2"><b>${miUbic ? 'Cerca tuyo' : 'Planes en Buenos Aires'}</b><span onclick="ir('resultados')">Ver lista</span></div>
    ${filas}
  </div>${barra('Explorar')}</div>`;
}

// ===== FILTRO =====
function txtDist() { return fDist >= 20 ? 'Cualquiera' : 'Hasta ' + fDist + ' km'; }
function txtPrecio() { return fPrecio >= PRECIO_MAX ? 'Cualquiera' : fPrecio === 0 ? 'Gratis' : 'Hasta $' + fPrecio.toLocaleString('es-AR'); }
const FECHAS = [['hoy', 'Hoy'], ['manana', 'Mañana'], ['finde', 'Finde'], ['semana', 'Semana']];
function fechasFiltro(f) {
  const h = hoyDate(), dow = hoyIdx();
  if (f === 'hoy') return [h];
  if (f === 'manana') return [sumarDias(h, 1)];
  if (f === 'finde') { const s = dow === 6 ? -1 : 5 - dow; return [sumarDias(h, s), sumarDias(h, s + 1)].filter(d => d >= h); }
  return [0, 1, 2, 3, 4, 5, 6].map(i => sumarDias(h, i));
}
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
    <input type="range" min="0" max="${PRECIO_MAX}" step="5000" value="${fPrecio}" oninput="fPrecio=+this.value;document.getElementById('lbPrecio').textContent=txtPrecio()">
    <div class="botones-fin">
      <button class="btn-lim" onclick="fCats=[];fFecha=null;fDist=20;fPrecio=${PRECIO_MAX};q='';dibujar()">Limpiar</button>
      <button class="btn-ver" onclick="ir('resultados')">Ver</button>
    </div>
  </div>`;
}

// ===== RESULTADOS DEL FILTRO =====
function filtrar() {
  const palabras = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const fechasSel = fFecha ? fechasFiltro(fFecha) : null;
  const r = eventos.filter(e => {
    const txt = (e.titulo + ' ' + catDe(e.cat).nombre + ' ' + e.sub + ' ' + e.zona + ' ' + e.lugar).toLowerCase();
    return palabras.every(p => txt.includes(p) || ['en', 'de', 'el', 'la', 'cerca', 'tuyo'].includes(p))
      && (!fCats.length || fCats.includes(e.cat))
      && (!fechasSel || fechasSel.some(d => ocurre(e, d)))
      && (!miUbic || fDist >= 20 || kmA(e) <= fDist)
      && e.precio <= fPrecio;
  });
  return r.sort(orden === 'cerca' && miUbic ? (a, b) => kmA(a) - kmA(b) : (a, b) => a.prox - b.prox);
}
function quitar(k) {
  if (k.startsWith('cat:')) fCats = fCats.filter(x => x !== k.slice(4));
  if (k === 'fecha') fFecha = null;
  if (k === 'dist') fDist = 20;
  if (k === 'precio') fPrecio = PRECIO_MAX;
  dibujar();
}
function vistaResultados() {
  const r = filtrar();
  const act = [...fCats.map(id => ['cat:' + id, catDe(id).nombre]),
    ...(fFecha ? [['fecha', FECHAS.find(f => f[0] === fFecha)[1]]] : []),
    ...(miUbic && fDist < 20 ? [['dist', fDist + ' km']] : []),
    ...(fPrecio < PRECIO_MAX ? [['precio', txtPrecio()]] : [])];
  const chips = act.map(([k, n]) => `<button class="chip2 on" onclick="quitar('${k}')">${n}</button>`).join('');
  const filas = r.map(e => `<div class="fila" onclick="abrirEvento('${e.id}')">${foto(e, 'mini')}<div class="fila-texto"><b>${esc(e.titulo)}</b><span>${e.dia} · ${subDist(e)}</span></div></div>`).join('');
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
  const lun = sumarDias(hoyDate(), -hoyIdx() + 7 * semOff);
  const dias = ['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((l, i) =>
    `<button class="dia ${diaSel === i ? 'on' : ''}" onclick="diaSel=${i};dibujar()"><small>${l}</small>${sumarDias(lun, i).getDate()}</button>`).join('');
  const fechaSel = sumarDias(lun, diaSel);
  const items = agenda.map(buscar).filter(e => ocurre(e, fechaSel)).sort((a, b) => a.ini.localeCompare(b.ini));
  const filas = items.map(e => `<div class="ag-item"><span class="ag-hora">${e.ini}</span>
    <div class="ag-card" style="border-left:5px solid ${catDe(e.cat).color}" onclick="abrirEvento('${e.id}')">
      <div style="flex:1"><b>${esc(e.titulo)}</b><span>${catDe(e.cat).nombre} · ${e.zona}</span></div>
      <button class="check ${hechos.includes(e.id) ? 'on' : ''}" onclick="event.stopPropagation();hechos=alternar(hechos,'${e.id}');dibujar()">${hechos.includes(e.id) ? '✓' : ''}</button>
    </div></div>`).join('');
  const vacio = `<div class="vacio-box"><div class="circ-blanco">${icono('Calendario')}</div><div class="serif">Sin planes este día</div>
    <p>Probá con otro día o explorá propuestas cerca tuyo</p><button class="continuar" onclick="irTab('explorar')">Explorar planes</button></div>`;
  return `<div class="pantalla sinpad"><div class="cuerpo">
    <div class="header" style="padding:0">${logoImg('l-header')}<button class="menu" onclick="abrirMenu()">≡</button></div>
    <div class="mes-fila">
      <button class="flecha-sem" onclick="cambiarSemana(-1)" ${semOff === 0 ? 'disabled' : ''}>‹</button>
      <div class="mes">${fechaSel.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}</div>
      <button class="flecha-sem" onclick="cambiarSemana(1)">›</button>
    </div>
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
    <button class="corazon-flot" onclick="alternarFav('${e.id}', event)">${icono('Favoritos', true)}</button></div><b>${esc(e.titulo)}</b><span class="s">${e.dia}</span></div>`).join('');
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
    <div class="mini-ev">${img}<div><b>${esc(c.titulo)}</b><span>${c.sub}</span></div></div>
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