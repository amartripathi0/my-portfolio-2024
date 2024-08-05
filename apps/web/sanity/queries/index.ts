export const HOMEPAGE_QUERY = `
  *[_type == 'homepage']{
    firstName,
    lastName,
    userDescription,
    heroImage,
}[0]`;

export const ABOUT_PAGE_QUERY = `
  *[_type == 'about']{
    title,
    resume,
    aboutContent,
    heroImage,
}[0]`;
