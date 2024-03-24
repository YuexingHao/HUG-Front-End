/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMed = /* GraphQL */ `
  subscription OnCreateMed(
    $filter: ModelSubscriptionMedFilterInput
    $owner: String
  ) {
    onCreateMed(filter: $filter, owner: $owner) {
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
export const onUpdateMed = /* GraphQL */ `
  subscription OnUpdateMed(
    $filter: ModelSubscriptionMedFilterInput
    $owner: String
  ) {
    onUpdateMed(filter: $filter, owner: $owner) {
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
export const onDeleteMed = /* GraphQL */ `
  subscription OnDeleteMed(
    $filter: ModelSubscriptionMedFilterInput
    $owner: String
  ) {
    onDeleteMed(filter: $filter, owner: $owner) {
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
