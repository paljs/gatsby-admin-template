import { themes } from 'oah-ui/theme';

export default function themeService(theme, dir) {
  switch (theme) {
    case 'cosmic':
    case 'corporate':
    default:
      return themes(theme, { dir, sidebarHeaderGap: '2rem' });
  }
}
