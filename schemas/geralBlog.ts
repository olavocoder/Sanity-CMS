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
      name: 'logoFooter',
      title: 'LogoFooter',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    defineField({
      name: 'Menu',
      title: 'menu',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'SocialFooter',
      title: 'socialFooter',
      type: 'array',
      of:[{type:'SocialItems'}]
      }),
      defineField({
        name: 'policyText',
        title: 'PolicyText',
        type: 'text',
      }),
    ],
    preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
