import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Health Education', value: 'healthEducation'},
          {title: 'Health Journalism', value: 'healthJournalism'},
          {title: 'Healthcare Documentation', value: 'healthcareDocumentation'},
          {title: 'Opinion', value: 'opinion'},
          {title: 'Research / Evidence', value: 'research'},
          {title: 'Explainer', value: 'explainer'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      contentType: 'contentType',
    },
    prepare({title, media, contentType}) {
      return {
        title,
        media,
        subtitle: contentType,
      }
    },
  },
})