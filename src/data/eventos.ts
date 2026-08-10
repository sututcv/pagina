import { eventItemSchema } from '../schemas/content';
import type { EventItem } from '../types/content';
import { galleryAlbums } from './galeria';

const eventDescriptions: Record<string, string> = {
  'entrega-camisas-mayo-2026':
    'La actividad quedó documentada mediante una selección de fotografías autorizadas para publicación.',
  'dia-madres-mayo-2026':
    'La comunidad universitaria participó en una actividad de reconocimiento con motivo del Día de las Madres.',
  'dia-maestro-mayo-2026':
    'Se realizó una actividad de reconocimiento con motivo del Día del Maestro.',
  'dia-padre-junio-2026':
    'Se realizó una actividad de reconocimiento a trabajadores de la comunidad universitaria.',
  'personal-administrativo-julio-2026':
    'Se realizó una actividad de reconocimiento al personal administrativo de la UTCV.',
};

const upcomingEvents: EventItem[] = [
  eventItemSchema.parse({
    slug: 'asamblea-cuatrimestre-mayo-agosto-2026',
    name: 'Asamblea cuatrimestral Mayo–Agosto 2026',
    summary:
      'Asamblea sindical obligatoria. Se realizarán elecciones para la Secretaría de Comunicación, Difusión Cultura y Deportiva.',
    description: [
      'El SUTUTCV convoca a las personas agremiadas a la asamblea correspondiente al cuatrimestre Mayo–Agosto 2026, que se llevará a cabo el 28 de agosto de 2026 a las 13:00 horas en el CIBI de la UTCV.',
      'La asistencia es obligatoria. Para agilizar el pase de lista previo al inicio de la asamblea, se solicita presentar la credencial del sindicato.',
      'Durante esta asamblea se realizarán las elecciones para ocupar el puesto de la Secretaría de Comunicación, Difusión Cultural y Deportiva, por lo que la participación de las personas agremiadas es de especial importancia.',
    ],
    date: '2026-08-28',
    dateLabel: '28 de agosto de 2026',
    time: '13:00 horas',
    place: 'CIBI de la UTCV',
    modality: 'Presencial',
    category: 'Asamblea sindical',
    status: 'proximo',
    image: {
      src: '/media/eventos/asamblea-mayo-agosto-2026.svg',
      alt: 'Convocatoria a la Asamblea sindical Mayo–Agosto 2026, el 28 de agosto a las 13:00 horas en el CIBI de la UTCV',
      width: 1200,
      height: 675,
    },
  }),
];

const completedEvents: EventItem[] = galleryAlbums.map((album) =>
  eventItemSchema.parse({
    slug: album.slug,
    name: album.title,
    summary: album.description,
    description: [
      eventDescriptions[album.slug],
      'La galería asociada muestra únicamente fotografías que pasaron una revisión visual de privacidad.',
    ],
    date: album.date,
    dateLabel: album.dateLabel,
    category: 'Actividad sindical',
    status: 'realizado',
    image: album.cover,
    gallerySlug: album.slug,
  }),
);

export const events: EventItem[] = [...upcomingEvents, ...completedEvents];
