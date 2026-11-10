import { newsItemSchema } from '../schemas/content';
import type { GalleryPhoto, NewsItem } from '../types/content';

const sevPhotos: GalleryPhoto[] = [
  {
    id: 'sev-octubre-2026-01',
    src: '/media/noticias/sev-octubre-2026/sev-01.jpeg',
    alt: 'Participantes reunidos en las instalaciones de la SEV durante el encuentro del 6 de octubre',
    caption: 'Encuentro en la SEV para la presentación como federación y el diálogo sobre las condiciones de trabajo.',
    width: 1600,
    height: 1200,
  },
  {
    id: 'sev-octubre-2026-02',
    src: '/media/noticias/sev-octubre-2026/sev-02.jpeg',
    alt: 'Fotografía de grupo de los participantes en la visita a la SEV',
    caption: 'Participantes en la reunión del 6 de octubre de 2026 en la SEV.',
    width: 1600,
    height: 1200,
  },
  {
    id: 'sev-octubre-2026-03',
    src: '/media/noticias/sev-octubre-2026/sev-03.jpeg',
    alt: 'Asistentes conversan durante la reunión en las instalaciones de la SEV',
    caption: 'Diálogo durante el encuentro sobre la actualización de las condiciones de trabajo.',
    width: 1600,
    height: 1200,
  },
];

const anniversaryPhotos: GalleryPhoto[] = [
  {
    id: 'decimo-aniversario-2026-01',
    src: '/media/noticias/decimo-aniversario-2026/aniversario-01.jpeg',
    alt: 'Asistentes escuchan un mensaje durante la celebración del décimo aniversario del SUTUTCV',
    caption: 'Mensaje a la comunidad sindical durante la celebración de los diez años del SUTUTCV.',
    width: 1600,
    height: 720,
  },
  {
    id: 'decimo-aniversario-2026-02',
    src: '/media/noticias/decimo-aniversario-2026/aniversario-02.jpeg',
    alt: 'Integrantes del sindicato comparten alimentos durante la convivencia del aniversario',
    caption: 'Convivencia entre compañeras y compañeros con motivo del décimo aniversario.',
    width: 1600,
    height: 720,
  },
  {
    id: 'decimo-aniversario-2026-03',
    src: '/media/noticias/decimo-aniversario-2026/aniversario-03.jpeg',
    alt: 'Vista general de la comunidad reunida para la celebración del SUTUTCV',
    caption: 'La comunidad sindical reunida para conmemorar una década de unidad y fortaleza.',
    width: 1600,
    height: 720,
  },
  {
    id: 'decimo-aniversario-2026-04',
    src: '/media/noticias/decimo-aniversario-2026/aniversario-04.jpeg',
    alt: 'Pendón del décimo aniversario del SUTUTCV junto al espacio de celebración',
    caption: 'Diez años del SUTUTCV: justicia y equidad por una educación de calidad.',
    width: 720,
    height: 1600,
  },
  {
    id: 'decimo-aniversario-2026-05',
    src: '/media/noticias/decimo-aniversario-2026/aniversario-05.jpeg',
    alt: 'Compañeras y compañeros atienden un mensaje en el patio decorado para el aniversario',
    caption: 'Participación de las y los agremiados en la conmemoración del 5 de noviembre de 2026.',
    width: 720,
    height: 1600,
  },
  {
    id: 'decimo-aniversario-2026-06',
    src: '/media/noticias/decimo-aniversario-2026/aniversario-06.jpeg',
    alt: 'Grupo de integrantes del sindicato posa junto a una mesa durante la convivencia',
    caption: 'Compañeras y compañeros celebran una década de solidaridad y compromiso sindical.',
    width: 1471,
    height: 1044,
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: 'reunion-sev-actualizacion-condiciones-trabajo-octubre-2026',
    title: 'Reunión en la SEV para abordar la actualización de las condiciones de trabajo',
    summary:
      'El 6 de octubre se realizó un encuentro con autoridades educativas para la presentación como federación y el diálogo sobre la actualización de las condiciones de trabajo.',
    content: [
      'El martes 6 de octubre de 2026 se llevó a cabo una reunión en la **Secretaría de Educación de Veracruz (SEV)** con el subsecretario **David Jiménez** y la secretaria de Educación **Raquel Bonilla**.',
      'El encuentro tuvo como propósito presentarnos como federación y tratar temas relacionados con la actualización de las condiciones de trabajo.',
    ],
    category: 'Gestión sindical',
    date: '2026-10-06',
    dateLabel: 'Martes 6 de octubre de 2026',
    author: 'SUTUTCV',
    image: sevPhotos[1],
    photos: sevPhotos,
    attachments: [],
  },
  {
    slug: 'decimo-aniversario-sututcv-2026',
    title: '¡Celebrando 10 Años de Unidad y Fortaleza: Feliz Aniversario SUTUTCV!',
    summary:
      'Este 5 de noviembre celebramos una década de solidaridad, esfuerzo y compromiso con los derechos laborales y el bienestar de nuestra comunidad sindical.',
    content: [
      'Hoy nos llenamos de orgullo al conmemorar una década de solidaridad, esfuerzo y compromiso constante. Hace diez años nació el **SUTUTCV** con el firme propósito de defender nuestros derechos laborales, dignificar nuestra labor diaria y construir un frente común para el bienestar de todos.',
      'Queremos extender la más cálida felicitación y nuestro más profundo reconocimiento a cada uno de ustedes, los miembros de este gran sindicato. Su dedicación, participación activa y resiliencia han sido el pilar fundamental que mantiene vivo y fuerte a nuestro gremio. Cada logro, mejora y avance obtenido en estos diez años es el resultado directo de nuestra unidad.',
      'Al mirar hacia el camino recorrido, celebramos las victorias compartidas, y al mirar hacia el futuro, renovamos nuestro compromiso de seguir trabajando hombro a hombro por un entorno cada vez más justo y próspero. Aún quedan metas por alcanzar, pero juntos hemos demostrado que no hay desafío que no podamos superar.',
      '**¡Felicidades a toda la familia SUTUTCV por este décimo aniversario! Sigamos haciendo historia.**',
    ],
    category: 'Vida sindical',
    date: '2026-11-05',
    dateLabel: 'Jueves 5 de noviembre de 2026',
    author: 'SUTUTCV',
    image: anniversaryPhotos[3],
    photos: anniversaryPhotos,
    attachments: [],
  },
].map((item) => newsItemSchema.parse(item));
