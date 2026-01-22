export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-17'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

// Only warn in development, don't throw errors during build
if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.warn('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID')
  }
  if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.warn('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET')
  }
}
