import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
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
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Cpu, Drone, Cloud, BookOpen)',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'AI & Machine Learning', value: 'ai'},
          {title: 'Drone Technology', value: 'drone'},
          {title: 'Enterprise Solutions', value: 'enterprise'},
          {title: 'Cloud Services', value: 'cloud'},
          {title: 'Education & Training', value: 'education'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
