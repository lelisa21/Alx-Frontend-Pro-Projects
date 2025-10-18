import { gql } from "@apollo/client";

export const GET_EPISODE = gql`
query getEpisodes($page:Int, $filter:FilterEpisode){
 episodes(page, filter: $filter){
    info{
    pages
    next
    prev
    count
    }
    results{
    id
    name
    air_date
    episode
    }
 }
} `;
