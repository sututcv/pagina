import { committeeMemberSchema, honorJusticeMemberSchema } from '../schemas/content';
import type { CommitteeMember, HonorJusticeMember } from '../types/content';

export const committeeMembers: CommitteeMember[] = [
  {
    id: 'juan-carlos-nunez-dorantes',
    name: 'Dr. Juan Carlos Núñez Dorantes',
    role: 'Secretario General',
    area: 'secretario.general@sututcv.org.mx',
    order: 1,
  },
  {
    id: 'jose-ernesto-dominguez-herrera',
    name: 'Dr. José Ernesto Domínguez Herrera',
    role: 'Secretario de Organización',
    area: 'organizacion@sututcv.org.mx',
    order: 2,
  },
  {
    id: 'alejandra-salomon-castillo',
    name: 'Lic. Alejandra Salomón Castillo',
    role: 'Secretaria de Trabajo y Conflictos',
    area: 'secretaria.trabajo@sututcv.org.mx',
    order: 3,
  },
  {
    id: 'erik-gerardo-martinez-galindo',
    name: 'Ing. Erik Gerardo Martínez Galindo',
    role: 'Secretario de Actas y Acuerdos',
    area: 'actas@sututcv.org.mx',
    order: 4,
  },
  {
    id: 'beatriz-morales-coto',
    name: 'Lic. Beatriz Morales Coto',
    role: 'Secretaria de Finanzas',
    area: 'finanzas@sututcv.org.mx',
    order: 5,
  },
  {
    id: 'jose-antonio-mendez-flores',
    name: 'Lic. José Antonio Méndez Flores',
    role: 'Secretario de Capacitación, Seguridad e Higiene',
    area: 'capacitacion@sututcv.org.mx',
    order: 6,
  },
  {
    id: 'victor-garcia-gomez',
    name: 'Lic. Víctor García Gómez',
    role: 'Secretario de Comunicación, Difusión Cultural y Deportiva',
    area: 'comunicacion@sututcv.org.mx',
    order: 7,
  },
].map((member) => committeeMemberSchema.parse(member));

export const honorJusticeMembers: HonorJusticeMember[] = [
  {
    id: 'ricardo-castro-valdivia',
    name: 'Mtro. Ricardo Castro Valdivia',
    role: 'Integrante',
    area: 'honor.justicia@sututcv.org.mx',
    order: 1,
  },
  {
    id: 'irais-del-pilar-avila-flores',
    name: 'Lic. Irais del Pilar Ávila Flores',
    role: 'Integrante',
    area: 'honor.justicia@sututcv.org.mx',
    order: 2,
  },
  {
    id: 'maura-alcantara-lagunes',
    name: 'Maura Alcántara Lagunes',
    role: 'Integrante',
    area: 'honor.justicia@sututcv.org.mx',
    order: 3,
  },
  {
    id: 'manuel-rafael-cuellar-rivero',
    name: 'Lic. Manuel Rafael Cuellar Rivero',
    role: 'Integrante',
    area: 'honor.justicia@sututcv.org.mx',
    order: 4,
  },
].map((member) => honorJusticeMemberSchema.parse(member));
