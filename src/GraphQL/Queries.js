import { gql } from '@apollo/client'

export const DATA_GITHUB = gql`
    query getTopics($topic:String!){
        topic(name:$topic){    
            name,
            id,
            relatedTopics{
                id,
                name,
                stargazers{
                    totalCount
                }
            }
        }    
    }
`