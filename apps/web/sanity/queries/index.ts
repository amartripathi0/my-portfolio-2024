export const HOMEPAGE_QUERY = `
  *[_type == 'homepage']{
    firstName,
    lastName,
    userDescription,
    heroImage,
}[0]`;
