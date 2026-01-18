import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
