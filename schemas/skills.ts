import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'image',
      fields: [
        {
          name: 'altText',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Descreva o conteúdo da imagem para acessibilidade.',
        },
      ],
    }),
  ],
})
