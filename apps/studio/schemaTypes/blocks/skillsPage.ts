import {defineField, defineType} from 'sanity'

export const skillsPageType = defineType({
  name: 'skills',
  title: 'Skills ',
  type: 'document',
  fields: [
    defineField({
      name: 'frontendSkills',
      title: 'Frontend Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    }),
    defineField({
      name: 'backendSkills',
      title: 'Backend Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    }),
  ],
})
