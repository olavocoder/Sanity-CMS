import {defineField, defineType} from 'sanity'

export default defineType(
  {
    name: 'SocialItems',
    title: 'socialitems',
    type: 'object',
    fields :[
      defineField({
        title: 'Url',
        name: 'url',
        type: 'string'
      }),
      defineField({
        title: 'Icon',
        name: 'icon',
        type: 'image'
    })]
  }
)
