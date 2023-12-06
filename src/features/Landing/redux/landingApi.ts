import { gql } from '@apollo/client'

import { client } from 'src/App'

export const fetchGithubReposCall = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        user(login: "AdminAkai") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
              }
            }
          }
        }
      }
    `,
  })

  return data?.user?.pinnedItems?.nodes
}
