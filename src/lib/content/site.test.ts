import { describe, expect, it } from 'vitest';

import {
  getAgreements,
  getCommitteeMembers,
  getEvents,
  getGalleryAlbums,
  getHonorJusticeMembers,
  getHomeContent,
  getNewsItems,
  getPendingItems,
  getSiteConfig,
} from './site';

describe('site content', () => {
  it('expone exactamente las seis opciones del menú principal', () => {
    const site = getSiteConfig();

    expect(site.navigation).toHaveLength(6);
    expect(site.navigation.map((item) => item.label)).toEqual([
      'Inicio',
      'Nuestro sindicato',
      'Comité sindical',
      'Convenios y beneficios',
      'Noticias y eventos',
      'Galería',
    ]);
  });

  it('publica el contenido institucional y los recursos locales proporcionados', () => {
    const home = getHomeContent();

    expect(home.hero.headline).toBe('Unidad, representación y bienestar');
    expect(home.hero.image.src).toBe('/media/banner-dia-madres-2026.webp');
    expect(home.welcome.paragraphs.join(' ')).toContain('SUTUTCV');
    expect(home.alerts).toHaveLength(3);
  });

  it('conserva el orden oficial de las siete secretarías del Comité Ejecutivo', () => {
    const committee = getCommitteeMembers();

    expect(committee).toHaveLength(7);
    expect(committee[0]?.role).toBe('Secretario General');
    expect(committee.map((member) => member.order)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('publica a los cuatro integrantes del Comité de Honor y Justicia', () => {
    const committee = getHonorJusticeMembers();

    expect(committee.map((member) => member.name)).toEqual([
      'Mtro. Ricardo Castro Valdivia',
      'Lic. Irais del Pilar Ávila Flores',
      'Maura Alcántara Lagunes',
      'Lic. Manuel Rafael Cuellar Rivero',
    ]);
  });

  it('marca la propuesta de Alianza como pendiente de confirmar', () => {
    const [agreement] = getAgreements();

    expect(agreement?.organization).toBe('Alianza Centro de Estudios Médicos');
    expect(agreement?.status).toBe('por-confirmar');
    expect(agreement?.benefits).toHaveLength(5);
    expect(agreement?.image.src.startsWith('/media/convenios/')).toBe(true);
  });

  it('publica la nota del convenio con Alianza y su fotografía', () => {
    const [newsItem] = getNewsItems();

    expect(newsItem?.slug).toBe('sututcv-firma-convenio-alianza-centro-estudios-medicos');
    expect(newsItem?.date).toBe('2026-07-02');
    expect(newsItem?.content).toHaveLength(2);
    expect(newsItem?.image?.src).toBe('/media/noticias/firma-convenio-alianza.webp');
  });

  it('relaciona cada actividad realizada con una galería revisada', () => {
    const events = getEvents();
    const completedEvents = events.filter((event) => event.status === 'realizado');
    const albums = getGalleryAlbums();
    const albumSlugs = new Set(albums.map((album) => album.slug));

    expect(events).toHaveLength(6);
    expect(completedEvents).toHaveLength(5);
    expect(albums).toHaveLength(5);
    expect(
      Object.fromEntries(albums.map((album) => [album.slug, album.photos.length])),
    ).toEqual({
      'entrega-camisas-mayo-2026': 11,
      'dia-madres-mayo-2026': 11,
      'dia-maestro-mayo-2026': 11,
      'dia-padre-junio-2026': 12,
      'personal-administrativo-julio-2026': 11,
    });
    expect(albums.reduce((total, album) => total + album.photos.length, 0)).toBe(56);
    expect(Object.fromEntries(albums.map((album) => [album.slug, album.cover.src]))).toMatchObject({
      'entrega-camisas-mayo-2026': '/media/galeria/entrega-camisas-portada.webp',
      'dia-maestro-mayo-2026': '/media/galeria/dia-maestro-portada.webp',
      'personal-administrativo-julio-2026': '/media/galeria/administrativos-portada.webp',
    });
    expect(
      completedEvents.every((event) => event.gallerySlug && albumSlugs.has(event.gallerySlug)),
    ).toBe(true);
    expect(
      albums.every((album) =>
        album.photos.every(
          (photo) =>
            photo.src.startsWith('/media/galeria/') &&
            photo.alt.length > 0 &&
            photo.width > 0 &&
            photo.height > 0,
        ),
      ),
    ).toBe(true);
  });

  it('publica la asamblea cuatrimestral de agosto de 2026 como próximo evento', () => {
    const event = getEvents().find(
      (item) => item.slug === 'asamblea-cuatrimestre-mayo-agosto-2026',
    );

    expect(event).toMatchObject({
      date: '2026-08-28',
      time: '13:00 horas',
      place: 'CIBI de la UTCV',
      modality: 'Presencial',
      status: 'proximo',
    });
    expect(event?.description.join(' ')).toContain(
      'Secretaría de Comunicación, Difusión Cultural y Deportiva',
    );
  });

  it('centraliza los datos que aún requieren confirmación', () => {
    const pendingIds = getPendingItems().map((item) => item.id);

    expect(pendingIds).not.toContain('dominio-canonico');
    expect(pendingIds).toContain('aviso-privacidad');
    expect(pendingIds).toContain('vigencia-alianza');
    expect(pendingIds).not.toContain('periodo-comite');
  });
});
