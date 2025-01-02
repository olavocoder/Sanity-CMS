import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paginas',
  title: 'Paginas',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'job',
      title: 'Job',
      type: 'string',
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'Social',
      title: 'social',
      type: 'array',
      of:[{type:'SocialItems'}]
      }),
      defineField({
        name: 'banners',
        title: 'Banners',
        type: 'array',
        of: [{type: 'reference', to: {type: 'banner'}}],
      }),
    ]
  ,

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
