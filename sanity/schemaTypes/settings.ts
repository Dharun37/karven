import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'linkedin', title: 'LinkedIn', type: 'url'},
        {name: 'twitter', title: 'Twitter', type: 'url'},
        {name: 'facebook', title: 'Facebook', type: 'url'},
        {name: 'instagram', title: 'Instagram', type: 'url'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
      ],
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
    }),
    defineField({
      name: 'foundedYear',
      title: 'Founded Year',
      type: 'number',
    }),
    defineField({
      name: 'aboutCompany',
      title: 'About Company',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
