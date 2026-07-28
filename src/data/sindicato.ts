import { unionContentSchema } from '../schemas/content';
import type { UnionContent } from '../types/content';

export const unionContent: UnionContent = unionContentSchema.parse({
  introduction: [
    'El SUTUTCV es el Sindicato Único de Trabajadores de la Universidad Tecnológica del Centro de Veracruz, una organización sindical legalmente constituida que representa a las trabajadoras y los trabajadores afiliados de nuestra Universidad.',
    'Nuestra labor se orienta a representar los intereses de nuestros agremiados, promover el respeto de sus derechos laborales y contribuir al mejoramiento de sus condiciones de trabajo, procurando en todo momento una relación basada en el diálogo, la participación y el respeto entre la comunidad trabajadora y la Universidad.',
    'El SUTUTCV cuenta con el reconocimiento de la Universidad como representante de las personas trabajadoras sindicalizadas y participa en los asuntos relacionados con sus condiciones laborales conforme a las disposiciones legales, estatutarias y a las Condiciones Generales de Trabajo vigentes.',
  ],
  reason: [
    'Creemos que la organización y la participación colectiva son fundamentales para construir un entorno laboral justo y digno. Por ello, trabajamos para mantener una representación cercana a nuestros compañeros y compañeras, escuchar sus necesidades y acompañarlos en los asuntos relacionados con su vida laboral.',
  ],
  pillars: [
    {
      id: 'derechos',
      title: 'Defensa de los derechos laborales',
      description:
        'Mediante el conocimiento y cumplimiento de las disposiciones que protegen a las personas trabajadoras.',
    },
    {
      id: 'representacion',
      title: 'Representación',
      description:
        'Mantenemos comunicación y participación en los asuntos que inciden en sus condiciones de trabajo.',
    },
    {
      id: 'dialogo',
      title: 'Diálogo institucional',
      description:
        'Favorecemos la búsqueda de acuerdos entre el Sindicato y la Universidad.',
    },
    {
      id: 'participacion',
      title: 'Unidad y participación sindical',
      description:
        'Reconocemos que la fortaleza de la organización se construye con la participación responsable de sus integrantes.',
    },
  ],
  community: [
    'Más que una organización sindical, somos una comunidad de trabajadoras y trabajadores de la Universidad Tecnológica del Centro de Veracruz que comparte el compromiso de construir mejores condiciones laborales mediante la organización, el respeto, el diálogo y la participación.',
    'Unidad, representación y compromiso con las trabajadoras y los trabajadores de la UTCV.',
  ],
  mission: [
    'Representar, defender y fortalecer los derechos e intereses laborales de las trabajadoras y los trabajadores afiliados al SUTUTCV, mediante una gestión sindical responsable, cercana y transparente, basada en el diálogo, la unidad y la participación colectiva.',
    'Promovemos el cumplimiento de las Condiciones Generales de Trabajo, el respeto a la dignidad de las personas y la búsqueda permanente de mejores condiciones laborales, económicas y sociales para nuestros agremiados, manteniendo una relación institucional constructiva con la Universidad Tecnológica del Centro de Veracruz.',
  ],
  vision: [
    'Ser una organización sindical sólida, participativa, democrática y cercana a sus agremiados, reconocida por su capacidad de representación, defensa de los derechos laborales y generación de acuerdos que contribuyan al bienestar y desarrollo de las trabajadoras y los trabajadores de la UTCV.',
    'Aspiramos a consolidar un sindicato unido, informado y comprometido, capaz de afrontar los nuevos retos laborales mediante el diálogo, la participación, la equidad y la mejora continua de las condiciones de trabajo.',
  ],
  values: [
    {
      id: 'unidad',
      title: 'Unidad',
      description:
        'Creemos en la fuerza de permanecer unidos. La participación y colaboración de cada agremiado fortalece nuestra organización y nuestra capacidad para alcanzar objetivos comunes.',
    },
    {
      id: 'respeto',
      title: 'Respeto',
      description:
        'Promovemos relaciones basadas en el reconocimiento de la dignidad de cada persona, sus derechos, opiniones y responsabilidades, favoreciendo siempre un ambiente laboral respetuoso.',
    },
    {
      id: 'solidaridad',
      title: 'Solidaridad',
      description:
        'Impulsamos el apoyo entre compañeras y compañeros, entendiendo que las necesidades individuales también forman parte de los intereses colectivos de nuestra organización.',
    },
    {
      id: 'equidad',
      title: 'Equidad',
      description:
        'Defendemos un trato justo y condiciones laborales que reconozcan los derechos de todas las personas trabajadoras, sin distinciones y conforme a las disposiciones que regulan nuestra relación laboral.',
    },
    {
      id: 'compromiso',
      title: 'Compromiso',
      description:
        'Asumimos con responsabilidad la representación de nuestros agremiados, trabajando para proteger sus derechos, atender sus necesidades y contribuir al fortalecimiento de sus condiciones laborales.',
    },
    {
      id: 'dialogo',
      title: 'Diálogo',
      description:
        'Privilegiamos la comunicación, la negociación y la construcción de acuerdos como medios para atender las necesidades de nuestros agremiados y fortalecer la relación institucional.',
    },
    {
      id: 'participacion',
      title: 'Participación',
      description:
        'Un sindicato se construye con la voz de quienes lo integran. Promovemos una comunidad sindical informada, activa y comprometida con las decisiones y acciones que contribuyen al bienestar colectivo.',
    },
  ],
  documents: [],
});
