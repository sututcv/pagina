import { getSiteConfig } from '../content/site';

export interface SeoInput {
  title: string;
  description: string;
}

export function buildTitle(title: string) {
  const site = getSiteConfig();
  return title === 'Inicio' ? `${site.shortName} | Sindicato Único de Trabajadores de la UTCV` : `${title} | ${site.shortName}`;
}

export function getDefaultDescription() {
  return 'Portal público institucional del Sindicato Único de Trabajadores de la Universidad Tecnológica del Centro de Veracruz.';
}

export function buildSeo(input: Partial<SeoInput>) {
  return {
    title: buildTitle(input.title ?? 'Portal público'),
    description: input.description ?? getDefaultDescription(),
  };
}
