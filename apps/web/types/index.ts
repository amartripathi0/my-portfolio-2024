import { IconType } from 'react-icons'
import type { SanityImageAssetDocument } from '@sanity/client'
import { ElementType } from 'react'
import { TypedObject } from '@portabletext/types'
import { Project } from '@/sanity/types'

export type SocialMediaLinkType = {
  label: string
  url: string
  icon: IconType
}
export type NavbarItemType = {
  label: string
  link: string
}

export type ProjectContainerProps = {
  projectDetail: {
    topPara: string
    parasArray?: string[]
  }
  projectTitle: string
  projectBio: string
  projectGithubLink: string
  projectTools: string[]
  projectDeployedLink?: string
  projectThumbnailSrc: string
}
export type ProjectCardProps = Partial<Project>

export type ContactMeFormData = {
  name: string
  email: string
  message: string
}

export type SkillType = {
  name: string
  imageSrc: string
}
