import config from "./dev.config.json";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  AddCuration,
  CategoryList,
  Collaborator,
  DashboardAnalysis,
  DashboardCollectionList,
  Details,
  doughnutChart,
  downloadFile,
  FilterList,
  GetDatasetTable,
  GetIndicesStats,
  Suggestions,
  getIndexDetail,
  GetMySqlTable,
  uploadCsvFile,
  InitialCategoryList,
  GetSpecificIndicesStats,
} from "./ApolloQueries";

const { graph, tags } = config;

const client = new ApolloClient({
  uri: graph,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          result: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: ["target", "category"],
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...incoming];
            },
          },
          semanticResult: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: ["target", "category"],
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...incoming];
            },
          },
        },
      },
    },
  }),
});

export const Services = {
  client: client,
  search: CategoryList,
  initialList: InitialCategoryList,
  details: Details,
  filters: FilterList,
  suggestions: Suggestions,
  downloadFile: downloadFile,
  tags: tags,
  collaborator: Collaborator,
  doughnutChart: doughnutChart,
  dashboardAnalysis: DashboardAnalysis,
  dashboardCollectionList: DashboardCollectionList,
  getIndexDetail: getIndexDetail,
  addCuration: AddCuration,
  GetIndicesStats: GetIndicesStats,
  GetSpecificIndicesStats: GetSpecificIndicesStats,
  getDatasetTable: GetDatasetTable,
  getMySqlTable: GetMySqlTable,
  uploadCsvFile: uploadCsvFile,
};
