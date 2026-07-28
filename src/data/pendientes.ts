import { pendingItemSchema } from '../schemas/content';
import type { PendingItem } from '../types/content';

export const pendingItems: PendingItem[] = [
  {
    id: 'archivos-tipograficos',
    section: 'Identidad visual',
    description:
      'Proporcionar o autorizar archivos web de Montserrat y Source Sans 3. Mientras tanto se utilizan fuentes del sistema como respaldo.',
    priority: 'baja',
  },
  {
    id: 'contacto-institucional',
    section: 'Pie de página',
    description:
      'Proporcionar dirección, horario, teléfono y correo institucionales autorizados.',
    priority: 'alta',
  },
  {
    id: 'aviso-privacidad',
    section: 'Privacidad',
    description: 'Proporcionar la versión pública autorizada del aviso de privacidad.',
    priority: 'alta',
  },
  {
    id: 'responsable-contenidos',
    section: 'Pie de página',
    description: 'Confirmar el área o cargo responsable de los contenidos del portal.',
    priority: 'media',
  },
  {
    id: 'documentos-sindicato',
    section: 'Nuestro sindicato',
    description:
      'Proporcionar versiones públicas revisadas del Contrato UTCV y de las Condiciones Generales de Trabajo SUTUTCV 2024-2026.',
    priority: 'alta',
  },
  {
    id: 'funciones-comite',
    section: 'Comité sindical',
    description:
      'Confirmar funciones generales y correos institucionales de cada integrante, si deben publicarse.',
    priority: 'baja',
  },
  {
    id: 'historia-logros',
    section: 'Nuestro sindicato',
    description: 'Proporcionar la historia institucional y los principales logros verificables.',
    priority: 'media',
  },
  {
    id: 'vigencia-alianza',
    section: 'Convenios y beneficios',
    description:
      'Confirmar que la propuesta de Alianza está vigente y proporcionar su fecha de término o documento formal.',
    priority: 'alta',
  },
  {
    id: 'noticias',
    section: 'Noticias',
    description:
      'Proporcionar noticias o comunicados oficiales adicionales autorizados para publicación.',
    priority: 'media',
  },
  {
    id: 'eventos-proximos',
    section: 'Eventos',
    description: 'Proporcionar próximos eventos, convocatorias, horarios y lugares autorizados.',
    priority: 'media',
  },
  {
    id: 'revision-galeria-completa',
    section: 'Galería',
    description:
      'Revisar individualmente el material restante de Eventos2026.zip antes de realizar una nueva ampliación. La selección actual publica 56 imágenes revisadas y distribuidas en cinco álbumes.',
    priority: 'media',
  },
  {
    id: 'redes-sociales',
    section: 'Pie de página',
    description: 'Proporcionar URLs verificadas de las redes sociales oficiales del SUTUTCV.',
    priority: 'baja',
  },
].map((item) => pendingItemSchema.parse(item));
