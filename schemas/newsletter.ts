import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    defineField({
      name: 'emails',
      title: 'emails',
      type: 'array',
      of: [{
        type: 'string'
      }]
    }),
  ],
  preview: {
    prepare() {
      return {title: 'emails', subtitle: 'lista de emails da newsletter'}
    },
  },
})
