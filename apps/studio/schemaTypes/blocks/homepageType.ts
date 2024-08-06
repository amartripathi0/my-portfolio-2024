import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      description: 'First name of the user',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      description: 'Last name of the user',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Hero name of the user',
    }),
    defineField({
      name: 'userDescription',
      title: 'User Description',
      type: 'string',
    }),
  ],
})
