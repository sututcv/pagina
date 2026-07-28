import { agreementSchema } from '../schemas/content';
import type { Agreement, AgreementCategory } from '../types/content';

export const agreementCategories: AgreementCategory[] = [
  'Salud',
  'Educación',
  'Alimentación',
  'Turismo',
  'Ópticas',
  'Deporte y bienestar',
  'Servicios funerarios',
  'Comercio',
  'Servicios profesionales',
];

export const agreements: Agreement[] = [
  {
    id: 'alianza-centro-estudios-medicos',
    organization: 'Alianza Centro de Estudios Médicos',
    title: 'Convenio de colaboración institucional',
    category: 'Salud',
    summary:
      'Beneficios médicos y de diagnóstico para las personas agremiadas del SUTUTCV y sus familiares directos.',
    benefitSummary: 'Descuentos y precios preferenciales en estudios médicos y de diagnóstico.',
    benefits: [
      '20% de descuento en estudios de laboratorio.',
      'Radiografías generales digitales por $250.00.',
      'Electrocardiograma por $250.00.',
      'Panorámica dental por $250.00.',
      'Cupón de cumpleaños con 20% de descuento en cualquier estudio de gabinete.',
    ],
    beneficiaries: [
      'Personas agremiadas del SUTUTCV.',
      'Familiares directos de las personas agremiadas.',
    ],
    requirements: ['Presentar identificación oficial (credencencial vigente del SUTUTCV) para aplicar el descuento o el cupón de cumpleaños.'],
    restrictions: [
      'El cupón de cumpleaños es válido únicamente durante el mes de cumpleaños de la persona beneficiaria.',
    ],
    branches: ['Av. 9 Calle 9, Col. Centro, Córdoba, Veracruz, C.P. 94500.'],
    referenceDate: '2026-07-02',
    validityLabel: 'Vigencia por confirmar',
    status: 'por-confirmar',
    image: {
      src: '/media/convenios/alianza-centro-estudios-medicos.webp',
      alt: 'Propuesta de colaboración institucional de Alianza Centro de Estudios Médicos',
      width: 1103,
      height: 1426,
    },
    contact: {
      address: 'Av. 9 Calle 9, Col. Centro, Córdoba, Veracruz, C.P. 94500',
      phone: '271 109 48 60',
      email: 'alianzagrupoestudiosadm@gmail.com',
      instagram: '@AlianzaGrupoMedico',
      facebook: 'Alianza Grupo Medico',
    },
  },
].map((agreement) => agreementSchema.parse(agreement));
