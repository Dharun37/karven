import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects & Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          {title: 'Agriculture', value: 'agriculture'},
          {title: 'Education', value: 'education'},
          {title: 'Healthcare', value: 'healthcare'},
          {title: 'Manufacturing', value: 'manufacturing'},
          {title: 'Technology', value: 'technology'},
          {title: 'Government', value: 'government'},
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alternative Text'}],
        },
      ],
    }),
    defineField({
      name: 'completedAt',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
