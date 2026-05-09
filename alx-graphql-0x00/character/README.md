# GraphQL Character Queries

This project contains GraphQL queries to retrieve specific character information from the Rick and Morty API using character IDs.

## Files

- `character-id-1.graphql` - Query for character with ID 1
- `character-id-1-output.json` - Expected output for character ID 1
- `character-id-2.graphql` - Query for character with ID 2
- `character-id-2-output.json` - Expected output for character ID 2
- `character-id-3.graphql` - Query for character with ID 3
- `character-id-3-output.json` - Expected output for character ID 3
- `character-id-4.graphql` - Query for character with ID 4
- `character-id-4-output.json` - Expected output for character ID 4
- `characters-page-1.graphql` - Query for page 1 of characters
- `characters-page-1-output.json` - Expected output for page 1
- `characters-page-2.graphql` - Query for page 2 of characters
- `characters-page-2-output.json` - Expected output for page 2
- `characters-page-3.graphql` - Query for page 3 of characters
- `characters-page-3-output.json` - Expected output for page 3
- `characters-page-4.graphql` - Query for page 4 of characters
- `characters-page-4-output.json` - Expected output for page 4
## Query Structure

All queries use the same structure:
- Use the `character(id: ID!)` field
- Request the following fields: `id`, `name`, `status`, `species`, `type`, `gender`

## How to Use

Execute these queries against the Rick and Morty GraphQL endpoint to retrieve character information.
