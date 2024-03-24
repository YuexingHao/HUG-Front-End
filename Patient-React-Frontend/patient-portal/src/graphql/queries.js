/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMed = /* GraphQL */ `
  query GetMed($userID: ID!, $hugID: ID!) {
    getMed(userID: $userID, hugID: $hugID) {
      hugID
      userID
      medname
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listMeds = /* GraphQL */ `
  query ListMeds(
    $userID: ID
    $hugID: ModelIDKeyConditionInput
    $filter: ModelMedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMeds(
      userID: $userID
      hugID: $hugID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        hugID
        userID
        medname
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
