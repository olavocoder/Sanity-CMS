import {defineField, defineType} from 'sanity'

export default defineType(
  {
    name: 'SidebarItems',
    title: 'sidebarItems',
    type: 'object',
    fields :[
      defineField({
        title: 'Title',
        name: 'title',
        type: 'string'
      }),
      defineField({
        title: 'Description',
        name: 'description',
        type: 'text'
      }),
      defineField({
        title: 'ImageCard',
        name: 'imageCard',
        type: 'image'
      }),
      defineField({
        title: 'Button',
        name: 'button',
        type: 'string'
      }),
    ]
  }
)
