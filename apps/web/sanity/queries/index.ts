export const HOMEPAGE_QUERY = `
  *[_type == 'homepage']{
    firstName,
    lastName,
    userDescription,
    heroImage,
}[0]`

export const ABOUT_PAGE_QUERY = `
  *[_type == 'about']{
    title,
    resume,
    aboutContent,
    heroImage,
}[0]`

export const PROJECTS_PAGE_QUERY = `
  *[_type == 'projects']{
   projectsArray[]->{
    projectTitle,
    projectBio,
    projectThumbnails,
    projectGithubLink,
    projectDeployedLink,
    projectDetail,
    projectTools,
  }
}[0]`
export const FREELANCE_PAGE_QUERY = `
  *[_type == 'freelanceWorks']{
    freelancesArray[]->{
    freelanceTitle,
    freelanceThumbnails,
    freelanceDeployedLink
  }
}[0]`
