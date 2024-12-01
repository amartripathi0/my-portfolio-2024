import {defineField, defineType} from 'sanity'

export const freelanceType = defineType({
  name: 'freelance',
  title: 'Freelance Work',
  type: 'document',

  fields: [
    defineField({
      name: 'freelanceTitle',
      title: 'Freelance Title',
      type: 'string',
    }),
    defineField({
      name: 'freelanceBio',
      title: 'Freelance Bio',
      type: 'string',
    }),
    defineField({
      name: 'freelanceThumbnails',
      title: 'Freelance Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'freelanceGithubLink',
      title: 'Freelance GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'freelanceDeployedLink',
      title: 'Freelance Live Link',
      type: 'url',
    }),
    defineField({
      name: 'freelanceDetail',
      title: 'Freelance Detail',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'freelanceTools',
      title: 'Tools Used in Freelance',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
})
