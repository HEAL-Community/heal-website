import {createClient} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const sanityConfigured = Boolean(projectId && dataset)

// Keep the module safe in previews where Sanity has not been configured yet.
// Queries are skipped when `sanityConfigured` is false.
export const sanityClient = createClient({
  projectId: projectId || 'preview-placeholder',
  dataset: dataset || 'production',
  apiVersion: '2026-08-15',
  useCdn: true,
})
