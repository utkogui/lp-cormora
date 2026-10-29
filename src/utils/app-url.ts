const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:4000').replace(/\/$/, '');

export function appUrl(path: string) {
  if (path.startsWith('#')) {
    return path;
  }

  return `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
