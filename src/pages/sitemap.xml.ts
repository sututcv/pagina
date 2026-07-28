import type { APIRoute } from 'astro';

import {
  getAgreements,
  getEvents,
  getGalleryAlbums,
  getNewsItems,
} from '../lib/content/site';

export const prerender = true;

const staticPaths = [
  '/',
  '/nuestro-sindicato',
  '/comite-sindical',
  '/convenios-y-beneficios',
  '/noticias-y-eventos',
  '/noticias',
  '/eventos',
  '/galeria',
];

const dynamicPaths = [
  ...getAgreements().map((agreement) => `/convenios-y-beneficios/${agreement.id}`),
  ...getNewsItems().map((item) => `/noticias/${item.slug}`),
  ...getEvents().map((event) => `/eventos/${event.slug}`),
  ...getGalleryAlbums().map((album) => `/galeria/${album.slug}`),
];

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  const configuredOrigin = (
    import.meta.env.PUBLIC_SITE_URL?.trim() ||
    site?.toString() ||
    ''
  ).replace(/\/+$/, '');
  const paths = [...staticPaths, ...dynamicPaths];
  const entries = configuredOrigin
    ? paths
        .map((path) => `  <url><loc>${escapeXml(new URL(path, configuredOrigin).toString())}</loc></url>`)
        .join('\n')
    : '  <!-- Configura PUBLIC_SITE_URL antes del despliegue para generar las URLs absolutas. -->';

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
