import {defineField, defineType} from 'sanity'

export const projectsPageType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectsArray',
      title: 'Projects Array',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      options: {
        sortable: true,
      },
    }),
  ],
})
