import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import {
  getAgreements,
  getCommitteeMembers,
  getEvents,
  getGalleryAlbums,
  getHonorJusticeMembers,
  getHomeContent,
  getNewsItems,
  getPastEvents,
  getPendingItems,
  getSiteConfig,
  getUpcomingEvents,
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
    expect(committee[6]).toMatchObject({
      id: 'juan-balam-pacheco-rodriguez',
      name: 'Lic. Juan Balam Pacheco Rodríguez',
      role: 'Secretario de Comunicación, Difusión Cultural y Deportiva',
      area: 'comunicacion@sututcv.org.mx',
    });
    expect(committee.some((member) => member.name.includes('Víctor García'))).toBe(false);
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

  it('retira el convenio y la noticia de Alianza y anuncia futuros convenios', () => {
    expect(getAgreements()).toHaveLength(0);
    expect(JSON.stringify(getNewsItems())).not.toMatch(/alianza/i);
    expect(JSON.stringify(getHomeContent())).not.toMatch(/alianza/i);
    expect(getHomeContent().alerts).toContainEqual(expect.objectContaining({
      title: 'Próximos convenios',
      href: '/convenios-y-beneficios',
    }));
  });

  it('publica las noticias de la SEV y el décimo aniversario con sus fotografías locales', () => {
    const news = getNewsItems();
    expect(news.map((item) => [item.slug, item.date, item.photos?.length])).toEqual([
      ['decimo-aniversario-sututcv-2026', '2026-11-05', 6],
      ['reunion-sev-actualizacion-condiciones-trabajo-octubre-2026', '2026-10-06', 3],
    ]);
    expect(news[0]?.content).toHaveLength(4);
    expect(news[0]?.content[3]).toBe(
      '**¡Felicidades a toda la familia SUTUTCV por este décimo aniversario! Sigamos haciendo historia.**',
    );
    expect(news[1]?.content.join(' ')).toContain('David Jiménez');
    expect(news[1]?.content.join(' ')).toContain('Raquel Bonilla');
    expect(news[1]?.content.join(' ')).toContain('presentarnos como federación');
    for (const item of news) {
      expect(item.image).toBeDefined();
      const photos = item.photos ?? [];
      expect(new Set(photos.map((photo) => photo.src)).size).toBe(photos.length);
      for (const photo of photos) {
        expect(existsSync(resolve('public', photo.src.slice(1)))).toBe(true);
        expect(photo.alt.length).toBeGreaterThan(0);
        expect(photo.caption.length).toBeGreaterThan(0);
      }
    }
  });

  it('relaciona cada actividad realizada con una galería revisada', () => {
    const events = getEvents();
    const completedEvents = events.filter((event) => event.status === 'realizado');
    const albums = getGalleryAlbums();
    const albumSlugs = new Set(albums.map((album) => album.slug));

    expect(events).toHaveLength(6);
    expect(completedEvents).toHaveLength(6);
    expect(albums).toHaveLength(6);
    expect(
      Object.fromEntries(albums.map((album) => [album.slug, album.photos.length])),
    ).toEqual({
      'entrega-camisas-mayo-2026': 11,
      'dia-madres-mayo-2026': 11,
      'dia-maestro-mayo-2026': 11,
      'dia-padre-junio-2026': 12,
      'personal-administrativo-julio-2026': 11,
      'entrega-botanas-asamblea-agosto-2026': 12,
    });
    expect(albums.reduce((total, album) => total + album.photos.length, 0)).toBe(68);
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

  it('conserva la ruta de la asamblea realizada y la vincula con su galería sin duplicar el evento', () => {
    const event = getEvents().find(
      (item) => item.slug === 'asamblea-cuatrimestre-mayo-agosto-2026',
    );

    expect(event).toMatchObject({
      date: '2026-08-28',
      time: '13:00 horas',
      place: 'CIBI de la UTCV',
      modality: 'Presencial',
      status: 'realizado',
      gallerySlug: 'entrega-botanas-asamblea-agosto-2026',
      summary:
        'Asamblea sindical realizada el 28 de agosto de 2026 en el CIBI de la UTCV.',
    });
    expect(event?.description.join(' ')).toContain(
      'Secretaría de Comunicación, Difusión Cultural y Deportiva',
    );
    expect(getEvents().filter((item) => item.gallerySlug === event?.gallerySlug)).toHaveLength(1);
    expect(getPastEvents()[0]?.slug).toBe(event?.slug);
  });

  it('presenta la nueva galería con las 12 fotografías y el texto proporcionado', () => {
    const [album] = getGalleryAlbums();

    expect(album).toMatchObject({
      slug: 'entrega-botanas-asamblea-agosto-2026',
      title: 'Entrega de botanas en la asamblea del 28 de agosto',
      date: '2026-08-28',
      description:
        'Como parte de las actividades realizadas durante nuestra Asamblea, se llevó a cabo la entrega de botanas a las y los compañeros asistentes.\n\nAgradecemos su participación y disposición, reiterando nuestro compromiso de continuar generando espacios de convivencia y atención para todas y todos.',
    });
    expect(album?.photos).toHaveLength(12);
    expect(new Set(album?.photos.map((photo) => photo.src)).size).toBe(12);
  });

  it('separa las actividades realizadas de los próximos eventos', () => {
    expect(getPastEvents()).toHaveLength(6);
    expect(getUpcomingEvents()).toHaveLength(0);
  });

  it('centraliza los datos que aún requieren confirmación', () => {
    const pendingIds = getPendingItems().map((item) => item.id);

    expect(pendingIds).not.toContain('dominio-canonico');
    expect(pendingIds).toContain('aviso-privacidad');
    expect(pendingIds).not.toContain('vigencia-alianza');
    expect(pendingIds).toContain('futuros-convenios');
    expect(pendingIds).not.toContain('periodo-comite');
  });
});
