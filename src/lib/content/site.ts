import { committeeMembers, honorJusticeMembers } from '../../data/comite';
import { agreementCategories, agreements } from '../../data/convenios';
import { events } from '../../data/eventos';
import { galleryAlbums } from '../../data/galeria';
import { newsItems } from '../../data/noticias';
import { pendingItems } from '../../data/pendientes';
import { homeContent, siteConfig } from '../../data/site';
import { unionContent } from '../../data/sindicato';

export function getSiteConfig() {
  return siteConfig;
}

export function getHomeContent() {
  return homeContent;
}

export function getUnionContent() {
  return unionContent;
}

export function getCommitteeMembers() {
  return [...committeeMembers].sort((a, b) => a.order - b.order);
}

export function getHonorJusticeMembers() {
  return [...honorJusticeMembers].sort((a, b) => a.order - b.order);
}

export function getAgreements() {
  return agreements;
}

export function getAgreementCategories() {
  return agreementCategories;
}

export function getAgreementById(id: string) {
  return agreements.find((agreement) => agreement.id === id);
}

export function getNewsItems() {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getEvents() {
  return [...events].sort((a, b) => b.date.localeCompare(a.date));
}

export function getUpcomingEvents() {
  return events
    .filter((event) => event.status === 'proximo')
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents() {
  return events
    .filter((event) => event.status === 'realizado')
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getGalleryAlbums() {
  return [...galleryAlbums].sort((a, b) => b.date.localeCompare(a.date));
}

export function getGalleryAlbumBySlug(slug: string) {
  return galleryAlbums.find((album) => album.slug === slug);
}

export function getPendingItems() {
  return pendingItems;
}
