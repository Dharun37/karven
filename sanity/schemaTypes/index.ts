import { type SchemaTypeDefinition } from 'sanity'

import service from './service'
import blog from './blog'
import author from './author'
import category from './category'
import training from './training'
import testimonial from './testimonial'
import project from './project'
import settings from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    service,
    blog,
    author,
    category,
    training,
    testimonial,
    project,
    settings,
  ],
}
