import {defineField, defineType} from 'sanity'

export const freelancePage = defineType({
  name: 'freelanceWorks',
  title: 'Freelance Works',
  type: 'document',
  fields: [
    defineField({
      name: 'freelancesArray',
      title: 'Freelances Array',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'freelance'}],
        },
      ],
      options: {
        sortable: true,
      },
    }),
  ],
})
