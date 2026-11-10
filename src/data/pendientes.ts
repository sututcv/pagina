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
    id: 'futuros-convenios',
    section: 'Convenios y beneficios',
    description:
      'Proporcionar la información autorizada de nuevos convenios, incluyendo beneficios, requisitos y vigencia, antes de publicarlos.',
    priority: 'media',
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
      'Revisar individualmente el material restante de Eventos2026.zip antes de realizar una nueva ampliación. La selección de ese archivo conserva 56 imágenes en cinco álbumes; se añadieron 12 fotografías proporcionadas para la galería de la asamblea del 28 de agosto, para un total de 68 imágenes en seis álbumes.',
    priority: 'media',
  },
  {
    id: 'redes-sociales',
    section: 'Pie de página',
    description: 'Proporcionar URLs verificadas de las redes sociales oficiales del SUTUTCV.',
    priority: 'baja',
  },
].map((item) => pendingItemSchema.parse(item));
