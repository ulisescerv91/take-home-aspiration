import { gql } from '@apollo/client'

export const DATA_GITHUB = gql`
    query getTopics($topic:String!){
        topic(name:$topic){  
            name,
            relatedTopics(first:10){
                name,
                stargazers{
                    totalCount
                }
            }
        }    
    }
`