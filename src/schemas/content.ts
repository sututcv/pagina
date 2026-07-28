import { z } from 'zod';

export const imageAssetSchema = z.object({
  src: z.string().startsWith('/'),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const navigationItemSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  href: z.string().startsWith('/'),
});

export const highlightItemSchema = z.object({
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().startsWith('/'),
  tone: z.enum(['teal', 'blue', 'gold']).optional(),
});

export const publicDocumentSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.string().min(1),
  version: z.string().optional(),
  validity: z.string().optional(),
  updatedAt: z.string().optional(),
  file: z.string().startsWith('/').optional(),
  authorized: z.boolean(),
});

export const valueItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const siteConfigSchema = z.object({
  organizationName: z.string().min(1),
  shortName: z.string().min(1),
  slogan: z.string().min(1),
  navigation: z.array(navigationItemSchema).length(6),
  logo: imageAssetSchema,
  contact: z.object({
    address: z.string().min(1).optional(),
    hours: z.string().min(1).optional(),
    phone: z.string().min(1).optional(),
    email: z.email().optional(),
  }),
  socials: z.array(
    z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      href: z.url(),
    }),
  ),
  privacyUrl: z.string().startsWith('/').optional(),
  contentOwner: z.string().min(1).optional(),
  lastUpdated: z.string().min(1),
});

export const homeContentSchema = z.object({
  hero: z.object({
    eyebrow: z.string().min(1),
    headline: z.string().min(1),
    description: z.string().min(1),
    image: imageAssetSchema,
    actions: z.array(
      z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        href: z.string().startsWith('/'),
        variant: z.enum(['primary', 'secondary']).optional(),
      }),
    ),
  }),
  welcome: z.object({
    title: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(1),
    closing: z.string().min(1),
  }),
  alerts: z.array(highlightItemSchema),
  quickLinks: z.array(highlightItemSchema),
});

export const unionContentSchema = z.object({
  introduction: z.array(z.string().min(1)).min(1),
  reason: z.array(z.string().min(1)).min(1),
  pillars: z.array(valueItemSchema).min(1),
  community: z.array(z.string().min(1)).min(1),
  mission: z.array(z.string().min(1)).min(1),
  vision: z.array(z.string().min(1)).min(1),
  values: z.array(valueItemSchema).min(1),
  documents: z.array(publicDocumentSchema),
});

export const committeeMemberSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  area: z.string().min(1),
  function: z.string().min(1).optional(),
  email: z.email().optional(),
  order: z.number().int().positive(),
});

export const honorJusticeMemberSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  area: z.string().min(1),
  order: z.number().int().positive(),
});

export const agreementSchema = z.object({
  id: z.string().min(1),
  organization: z.string().min(1),
  title: z.string().min(1),
  category: z.enum([
    'Salud',
    'Educación',
    'Alimentación',
    'Turismo',
    'Ópticas',
    'Deporte y bienestar',
    'Servicios funerarios',
    'Comercio',
    'Servicios profesionales',
  ]),
  summary: z.string().min(1),
  benefitSummary: z.string().min(1),
  benefits: z.array(z.string().min(1)).min(1),
  beneficiaries: z.array(z.string().min(1)).min(1),
  requirements: z.array(z.string().min(1)),
  restrictions: z.array(z.string().min(1)),
  branches: z.array(z.string().min(1)),
  referenceDate: z.string().optional(),
  validityLabel: z.string().min(1),
  status: z.enum(['vigente', 'proximo-a-vencer', 'concluido', 'por-confirmar']),
  image: imageAssetSchema,
  contact: z.object({
    address: z.string().min(1).optional(),
    phone: z.string().min(1).optional(),
    email: z.email().optional(),
    instagram: z.string().min(1).optional(),
    facebook: z.string().min(1).optional(),
  }),
  publicDocument: z.string().startsWith('/').optional(),
  externalUrl: z.url().optional(),
});

export const newsItemSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  content: z.array(z.string().min(1)).min(1),
  category: z.string().min(1),
  date: z.iso.date(),
  dateLabel: z.string().min(1),
  author: z.string().optional(),
  image: imageAssetSchema.optional(),
  attachments: z.array(publicDocumentSchema),
});

export const eventItemSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  description: z.array(z.string().min(1)).min(1),
  date: z.iso.date(),
  dateLabel: z.string().min(1),
  time: z.string().optional(),
  place: z.string().optional(),
  modality: z.string().optional(),
  category: z.string().min(1),
  status: z.enum(['proximo', 'realizado']),
  image: imageAssetSchema,
  registrationUrl: z.url().optional(),
  callDocument: z.string().startsWith('/').optional(),
  gallerySlug: z.string().optional(),
});

export const galleryPhotoSchema = imageAssetSchema.extend({
  id: z.string().min(1),
  caption: z.string().min(1),
});

export const galleryAlbumSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.iso.date(),
  dateLabel: z.string().min(1),
  place: z.string().optional(),
  cover: imageAssetSchema,
  photos: z.array(galleryPhotoSchema).min(1),
});

export const pendingItemSchema = z.object({
  id: z.string().min(1),
  section: z.string().min(1),
  description: z.string().min(1),
  priority: z.enum(['alta', 'media', 'baja']),
});
