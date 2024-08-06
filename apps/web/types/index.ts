import { IconType } from 'react-icons'
import type { SanityImageAssetDocument } from "@sanity/client";
import { ElementType } from 'react';

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

export type ContactMeFormData = {
  name: string
  email: string
  message: string
}

export type SkillType = {
  name: string
  imageSrc: string
}

export type HomepageDataType = {
  firstName: string
  lastName: string
  userDescription: string
  heroImage: any
}

export type AboutPageDataType = {
  title: string
  resume: string
  heroImage: any
  aboutContent: any
}

export type ProjectType = {
  projectDetail:BlockField
  projectTitle: string
  projectBio: string
  projectGithubLink: string
  projectTools: string[]
  projectDeployedLink?: string
  projectThumbnail: SanityImageAssetDocument
}

export type BlockField<Name extends string = string> =  {
  name: Name;
  type: 'block';
  styles?: Array<{
    title: string;
    value: string;
    blockEditor?: {
      render: ElementType;
    };
    icon?: ElementType;
  }>;
  lists?: Array<{
    title: string;
    value: string;
  }>;
  marks?: {
    // annotations?: ArrayOf[];
    decorators?: Array<{
      title: string;
      value: string;
      icon?: ElementType;
    }>;
  };
  // of?: ArrayOf[];
  icon?: ElementType;
};


