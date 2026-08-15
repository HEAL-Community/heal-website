import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(500),
    }),

    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),

        defineField({
          name: 'x',
          title: 'X',
          type: 'url',
        }),

        defineField({
          name: 'website',
          title: 'Website',
          type: 'url',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})