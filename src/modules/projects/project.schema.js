import { gql } from "apollo-server";

const projectType = gql`
  # Project
  type Project {
    _id: ID!
    name: String!
    generalObjective: String!
    specificObjectives: [String]!
    budget: Float!
    startDate: String!
    endDate: String!
    leader_id: ID!
    status: projectStatus!
    phase: Phase
    leader: User!
  }
`;

const enums = gql`
  # Enum for status values
  enum projectStatus {
    active
    inactive
  }

  # Enum for phase values
  enum Phase {
    started
    in
    progress
    ended
  }
`;

const queries = gql`
  # Query all projects
  type Query {
    allProjects: [Project]
  }

  type Query {
    project(_id: ID): Project
  }
`;

const mutations = gql`
  type Mutation {
    addProject(input: AddProjectInput!): Project!
  }
`;

const inputs = gql`
  input AddProjectInput {
    _id: ID!
    name: String!
    generalObjective: String!
    specificObjectives: [String]!
    budget: Float!
    startDate: String!
    endDate: String!
    status: projectStatus!
    phase: Phase
  }
`;

export default [projectType, enums, queries, mutations, inputs];
