import {defineField, defineType} from 'sanity'

export default defineType(
  {
    name: 'menu',
    title: 'Menu',
    type: 'object',
    fields :[
      defineField({
        title: 'Title',
        name: 'title',
        type: 'string'
      }),
      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      }),
    ]  
  }
)
