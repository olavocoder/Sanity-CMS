import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'geral',
  title: 'Geral',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'Menu',
      title: 'menu',
      type: 'array',
      of:[{type:'menu'}]
      })
    ],
    preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
