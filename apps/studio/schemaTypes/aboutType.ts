import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'About Page Title',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'About page hero image',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Page Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
