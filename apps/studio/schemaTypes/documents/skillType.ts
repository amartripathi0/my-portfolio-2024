import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',

  fields: [
    defineField({
      name: 'skill',
      title: 'Skill Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Skill Image',
      type: 'image',
    }),
  ],
})
