import { gql } from "@apollo/client";

export const CategoryList = gql`
  query Search(
    $target: String!
    $category: [String!]
    $pageNumber: Int
    $pageSize: Int
  ) {
    result(
      target: $target
      category: $category
      pageNumber: $pageNumber
      pageSize: $pageSize
    ) {
      name
      description
      id
      index
      download
      version
      total
    }
  }
`;

export const InitialCategoryList = gql`
  query Search(
    $target: String!
    $category: [String!]
    $pageNumber: Int
    $pageSize: Int
  ) {
    result(
      target: $target
      category: $category
      pageNumber: $pageNumber
      pageSize: $pageSize
    ) {
      name
      description
      id
      index
      download
      version
      total
    }
  }
`;

export const Suggestions = gql`
  query Suggestions($name: String!) {
    suggestion(name: $name) {
      name
      count
    }
  }
`;
export const Details = gql`
  query Details($id: String!, $index: String!) {
    detail(id: $id, index: $index) {
      indexName
      name
      tags
      description
      detail_image
      download
      version
      author
      modification
      status
      taskId
    }
  }
`;
export const FilterList = gql`
  query Filter {
    filtersName {
      name
      count
    }
  }
`;
export const downloadFile = gql`
  query DownloadDetails($index: String!, $id: String!) {
    downloadDetails(index: $index, id: $id) {
      data
    }
  }
`;

export const Collaborator = gql`
  query Collaborator($index: String!) {
    collaborator(index: $index) {
      count
    }
  }
`;

export const doughnutChart = gql`
  query doughnutChart {
    doughnutChart {
      analysis
      datasets
      tools
    }
  }
`;

export const DashboardAnalysis = gql`
  query dashboardAnalysis($index: String!) {
    dashboardAnalysis(index: $index) {
      author
      description
      name
    }
  }
`;

export const DashboardCollectionList = gql`
  query DashboardCollectionList($index: String!) {
    dashboardCollectionList(index: $index) {
      description
      name
    }
  }
`;
export const getIndexDetail = gql`
  query GetIndexDetail($index: String!) {
    getIndexDetail(index: $index) {
      name
      email
      description
    }
  }
`;

export const AddCuration = gql`
  mutation AddCuration($input: Curation) {
    addCuration(Input: $input) {
      success
    }
  }
`;

export const GetIndicesStats = gql`
  query getIndicesStats {
    getIndicesStats {
      total_count
      datasets_count
      tools_count
      analysis_count
      questions_count
    }
  }
`;

export const GetSpecificIndicesStats = gql`
  query getSpecificIndicesStats($indices: String!) {
    getSpecificIndicesStats(indices: $indices) {
      total_count
      countObj
    }
  }
`;

export const GetDatasetTable = gql`
  query getDatasetTable {
    getDatasetTable {
      view1
      view2
      view3
      view4
    }
  }
`;

export const GetMySqlTable = gql`
  query getMySqlTable($tableNames: String!) {
    getMySqlTable(tableNames: $tableNames) {
      tableName
      data
    }
  }
`;

export const uploadCsvFile = gql`
  mutation UploadCsvFile($input: CsvData) {
    uploadCsvFile(Input: $input) {
      success
    }
  }
`;
