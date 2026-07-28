import { newsItemSchema } from '../schemas/content';
import type { NewsItem } from '../types/content';

export const newsItems: NewsItem[] = [
  {
    slug: 'sututcv-firma-convenio-alianza-centro-estudios-medicos',
    title: 'SUTUTCV firma convenio con Alianza Centro de Estudios Médicos',
    summary:
      'Las personas agremiadas y sus familiares directos podrán acceder a servicios médicos y de diagnóstico con descuentos y costos preferenciales.',
    content: [
      'El SUTUTCV formalizó un convenio de colaboración con **Alianza Centro de Estudios Médicos**, mediante el cual las personas agremiadas y sus familiares directos podrán acceder a servicios médicos y de diagnóstico con descuentos y costos preferenciales.',
      'Entre los beneficios destacan el **20 % de descuento en estudios de laboratorio**, precios especiales en radiografías, electrocardiogramas y panorámicas dentales, además de un descuento de cumpleaños. Esta alianza reafirma nuestro compromiso con la salud, el bienestar y la economía de nuestra comunidad sindical.',
    ],
    category: 'Convenios y beneficios',
    date: '2026-07-02',
    dateLabel: '2 de julio de 2026',
    author: 'SUTUTCV',
    image: {
      src: '/media/noticias/firma-convenio-alianza.webp',
      alt: 'Representantes del SUTUTCV y de Alianza Centro de Estudios Médicos muestran el convenio firmado',
      width: 1200,
      height: 1599,
    },
    attachments: [],
  },
].map((item) => newsItemSchema.parse(item));
