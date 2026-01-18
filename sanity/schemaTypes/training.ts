import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'training',
  title: 'Training Programs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Program Type',
      type: 'string',
      options: {
        list: [
          {title: 'Workshop', value: 'workshop'},
          {title: 'Awareness Program', value: 'awareness'},
          {title: 'Certification Course', value: 'certification'},
          {title: 'Hands-on Training', value: 'hands-on'},
        ],
      },
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string',
      options: {
        list: [
          {title: 'Schools', value: 'schools'},
          {title: 'Colleges', value: 'colleges'},
          {title: 'Professionals', value: 'professionals'},
          {title: 'Farmers', value: 'farmers'},
          {title: 'General Public', value: 'general'},
        ],
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 2 hours, 1 day, 3 days',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'topics',
      title: 'Topics Covered',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      title: 'Program Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'text',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Program',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
