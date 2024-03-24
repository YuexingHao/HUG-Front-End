/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMed = /* GraphQL */ `
  mutation CreateMed(
    $input: CreateMedInput!
    $condition: ModelMedConditionInput
  ) {
    createMed(input: $input, condition: $condition) {
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
export const updateMed = /* GraphQL */ `
  mutation UpdateMed(
    $input: UpdateMedInput!
    $condition: ModelMedConditionInput
  ) {
    updateMed(input: $input, condition: $condition) {
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
export const deleteMed = /* GraphQL */ `
  mutation DeleteMed(
    $input: DeleteMedInput!
    $condition: ModelMedConditionInput
  ) {
    deleteMed(input: $input, condition: $condition) {
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
