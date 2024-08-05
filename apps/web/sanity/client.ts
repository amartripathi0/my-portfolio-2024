import { createClient, type QueryParams } from 'next-sanity'

export const client = createClient({
  projectId: '7ux5ptkf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: false,
      tags,
    },
  })
}
