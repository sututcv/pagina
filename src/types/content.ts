export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroAction {
  id: string;
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HighlightItem {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  tone?: 'teal' | 'blue' | 'gold';
}

export interface SiteContact {
  address?: string;
  hours?: string;
  phone?: string;
  email?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  organizationName: string;
  shortName: string;
  slogan: string;
  navigation: NavigationItem[];
  logo: ImageAsset;
  contact: SiteContact;
  socials: SocialLink[];
  privacyUrl?: string;
  contentOwner?: string;
  lastUpdated: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    image: ImageAsset;
    actions: HeroAction[];
  };
  welcome: {
    title: string;
    paragraphs: string[];
    closing: string;
  };
  alerts: HighlightItem[];
  quickLinks: HighlightItem[];
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface PublicDocument {
  id: string;
  title: string;
  description: string;
  type: string;
  version?: string;
  validity?: string;
  updatedAt?: string;
  file?: string;
  authorized: boolean;
}

export interface UnionContent {
  introduction: string[];
  reason: string[];
  pillars: ValueItem[];
  community: string[];
  mission: string[];
  vision: string[];
  values: ValueItem[];
  documents: PublicDocument[];
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  area: string;
  function?: string;
  email?: string;
  order: number;
}

export interface HonorJusticeMember {
  id: string;
  name: string;
  role: string;
  area: string;
  order: number;
}

export type AgreementCategory =
  | 'Salud'
  | 'Educación'
  | 'Alimentación'
  | 'Turismo'
  | 'Ópticas'
  | 'Deporte y bienestar'
  | 'Servicios funerarios'
  | 'Comercio'
  | 'Servicios profesionales';

export type AgreementStatus = 'vigente' | 'proximo-a-vencer' | 'concluido' | 'por-confirmar';

export interface AgreementContact {
  address?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
}

export interface Agreement {
  id: string;
  organization: string;
  title: string;
  category: AgreementCategory;
  summary: string;
  benefitSummary: string;
  benefits: string[];
  beneficiaries: string[];
  requirements: string[];
  restrictions: string[];
  branches: string[];
  referenceDate?: string;
  validityLabel: string;
  status: AgreementStatus;
  image: ImageAsset;
  contact: AgreementContact;
  publicDocument?: string;
  externalUrl?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  date: string;
  dateLabel: string;
  author?: string;
  image?: ImageAsset;
  photos?: GalleryPhoto[];
  attachments: PublicDocument[];
}

export type EventStatus = 'proximo' | 'realizado';

export interface EventItem {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  date: string;
  dateLabel: string;
  time?: string;
  place?: string;
  modality?: string;
  category: string;
  status: EventStatus;
  image: ImageAsset;
  registrationUrl?: string;
  callDocument?: string;
  gallerySlug?: string;
}

export interface GalleryPhoto extends ImageAsset {
  id: string;
  caption: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  place?: string;
  cover: ImageAsset;
  photos: GalleryPhoto[];
}

export type PendingPriority = 'alta' | 'media' | 'baja';

export interface PendingItem {
  id: string;
  section: string;
  description: string;
  priority: PendingPriority;
}
