import { homeContentSchema, siteConfigSchema } from '../schemas/content';
import type { HomeContent, SiteConfig } from '../types/content';

export const siteConfig: SiteConfig = siteConfigSchema.parse({
  organizationName:
    'Sindicato Único de Trabajadores de la Universidad Tecnológica del Centro de Veracruz',
  shortName: 'SUTUTCV',
  slogan: 'Justicia y Equidad por una Educación de Calidad',
  navigation: [
    { id: 'inicio', label: 'Inicio', href: '/' },
    { id: 'nuestro-sindicato', label: 'Nuestro sindicato', href: '/nuestro-sindicato' },
    { id: 'comite-sindical', label: 'Comité sindical', href: '/comite-sindical' },
    {
      id: 'convenios-y-beneficios',
      label: 'Convenios y beneficios',
      href: '/convenios-y-beneficios',
    },
    { id: 'noticias-y-eventos', label: 'Noticias y eventos', href: '/noticias-y-eventos' },
    { id: 'galeria', label: 'Galería', href: '/galeria' },
  ],
  logo: {
    src: '/brand/logo-sututcv.png',
    alt: 'Logotipo oficial del SUTUTCV',
    width: 692,
    height: 692,
  },
  contact: {},
  socials: [],
  lastUpdated: '27 de julio de 2026',
});

export const homeContent: HomeContent = homeContentSchema.parse({
  hero: {
    eyebrow: 'Portal público institucional',
    headline: 'Unidad, representación y bienestar',
    description: 'Información, servicios y beneficios para nuestra comunidad sindical.',
    image: {
      src: '/media/banner-dia-madres-2026.webp',
      alt: 'Grupo de trabajadoras de la comunidad universitaria durante la entrega de obsequios por el Día de las Madres',
      width: 1600,
      height: 617,
    },
    actions: [
      {
        id: 'conoce-sindicato',
        label: 'Conoce el sindicato',
        href: '/nuestro-sindicato',
        variant: 'primary',
      },
      {
        id: 'ver-convenios',
        label: 'Ver convenios',
        href: '/convenios-y-beneficios',
        variant: 'secondary',
      },
    ],
  },
  welcome: {
    title: 'Bienvenidos al SUTUTCV',
    paragraphs: [
      'Te damos la bienvenida al sitio oficial del Sindicato Único de Trabajadores de la Universidad Tecnológica del Centro de Veracruz (SUTUTCV), un espacio creado para fortalecer la comunicación, la participación y la cercanía con nuestras compañeras y compañeros agremiados.',
      'Aquí podrás encontrar información sobre nuestra organización sindical, el Comité Ejecutivo, derechos y prestaciones laborales, Condiciones Generales de Trabajo, convenios, actividades, comunicados y asuntos de interés para nuestra comunidad.',
      'Nuestro compromiso es mantener una representación responsable y cercana, promover el respeto a los derechos de las personas trabajadoras y fortalecer la unidad mediante el diálogo, la participación y el trabajo colectivo, en congruencia con las disposiciones que regulan la relación entre el SUTUTCV y la Universidad.',
    ],
    closing: 'Unidad, participación y compromiso con las trabajadoras y los trabajadores de la UTCV.',
  },
  alerts: [
    {
      id: 'convenio-alianza',
      eyebrow: 'Salud',
      title: 'Convenio de colaboración con Alianza',
      description:
        'Consulta los beneficios médicos proporcionados para las personas agremiadas y sus familiares directos.',
      href: '/convenios-y-beneficios/alianza-centro-estudios-medicos',
      tone: 'teal',
    },
    {
      id: 'documentos-institucionales',
      eyebrow: 'Información',
      title: 'Documentos institucionales',
      description:
        'El espacio de documentos está preparado; las versiones públicas siguen pendientes de autorización.',
      href: '/nuestro-sindicato#documentos',
      tone: 'blue',
    },
    {
      id: 'comite-ejecutivo',
      eyebrow: 'Representación',
      title: 'Conoce al Comité Ejecutivo y de Honor y Justifica',
      description: 'Consulta la integración y el orden institucional del Comité Ejecutivo del SUTUTCV y el comité de Honor y Justicia.',
      href: '/comite-sindical',
      tone: 'gold',
    },
  ],
  quickLinks: [
    {
      id: 'quienes-somos',
      title: 'Nuestro sindicato',
      description: 'Conoce nuestra misión, visión, valores y razón de ser.',
      href: '/nuestro-sindicato',
      tone: 'teal',
    },
    {
      id: 'beneficios',
      title: 'Convenios y beneficios',
      description: 'Consulta beneficios y requisitos con información autorizada.',
      href: '/convenios-y-beneficios',
      tone: 'blue',
    },
    {
      id: 'memoria',
      title: 'Galería institucional',
      description: 'Recorre una selección revisada de actividades realizadas en 2026.',
      href: '/galeria',
      tone: 'gold',
    },
  ],
});
