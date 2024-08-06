import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'projectBio',
      title: 'Project Bio',
      type: 'string',
    }),
    defineField({
      name: 'projectThumbnail',
      title: 'Project Image',
      type: 'image',
    }),
    defineField({
      name: 'projectGithubLink',
      title: 'Project GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'projectDeployedLink',
      title: 'Project Live Link',
      type: 'url',
    }),
    defineField({
      name: 'projectDetail',
      title: 'Project Detail',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ]
    }),
    defineField({
      name: 'projectTools',
      title: 'Tools Used in Project',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
})
