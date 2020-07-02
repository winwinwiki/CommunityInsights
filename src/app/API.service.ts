/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDiscourseInput = {
  discourse_id: number;
  content?: string | null;
  source_id?: number | null;
  region?: string | null;
  created_time?: string | null;
  imported_time?: string | null;
  secondary_content?: string | null;
  isPost?: number | null;
  post_id?: number | null;
  ori_id?: string | null;
  country_code?: string | null;
  url?: string | null;
};

export type UpdateDiscourseInput = {
  discourse_id: number;
  content?: string | null;
  source_id?: number | null;
  region?: string | null;
  created_time?: string | null;
  imported_time?: string | null;
  secondary_content?: string | null;
  isPost?: number | null;
  post_id?: number | null;
  ori_id?: string | null;
  country_code?: string | null;
  url?: string | null;
};

export type CreateImpactAreaInput = {
  impact_area_id: number;
  tag?: string | null;
  source_parent_id?: number | null;
  impact_parent_id?: number | null;
  source_ontology?: string | null;
};

export type UpdateImpactAreaInput = {
  impact_area_id: number;
  tag?: string | null;
  source_parent_id?: number | null;
  impact_parent_id?: number | null;
  source_ontology?: string | null;
};

export type CreateModelVersionInput = {
  model_id: number;
  model_task?: string | null;
  created_time?: string | null;
};

export type UpdateModelVersionInput = {
  model_id: number;
  model_task?: string | null;
  created_time?: string | null;
};

export type CreatePlatformInput = {
  platform_id: number;
  platform_desc?: string | null;
  platform_type?: string | null;
};

export type UpdatePlatformInput = {
  platform_id: number;
  platform_desc?: string | null;
  platform_type?: string | null;
};

export type CreateSourceInput = {
  source_id: number;
  platform_id?: number | null;
  source_desc?: string | null;
  is_survey?: number | null;
  region?: string | null;
};

export type UpdateSourceInput = {
  source_id: number;
  platform_id?: number | null;
  source_desc?: string | null;
  is_survey?: number | null;
  region?: string | null;
};

export type CreateTrendingTopicsInput = {
  topic: string;
  counts?: number | null;
  n_gram?: number | null;
  created_time?: string | null;
};

export type UpdateTrendingTopicsInput = {
  topic: string;
  counts?: number | null;
  n_gram?: number | null;
  created_time?: string | null;
};

export type CreateRegionsInput = {
  region: string;
};

export type UpdateRegionsInput = {
  region: string;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type DeleteDiscourseMutation = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  created_time: string | null;
  imported_time: string | null;
  secondary_content: string | null;
  isPost: number | null;
  post_id: number | null;
  ori_id: string | null;
  country_code: string | null;
  url: string | null;
};

export type CreateDiscourseMutation = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  created_time: string | null;
  imported_time: string | null;
  secondary_content: string | null;
  isPost: number | null;
  post_id: number | null;
  ori_id: string | null;
  country_code: string | null;
  url: string | null;
};

export type UpdateDiscourseMutation = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  created_time: string | null;
  imported_time: string | null;
  secondary_content: string | null;
  isPost: number | null;
  post_id: number | null;
  ori_id: string | null;
  country_code: string | null;
  url: string | null;
};

export type DeleteImpactAreaMutation = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type CreateImpactAreaMutation = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type UpdateImpactAreaMutation = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type DeleteModelVersionMutation = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type CreateModelVersionMutation = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type UpdateModelVersionMutation = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type DeletePlatformMutation = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
  platform_type: string | null;
};

export type CreatePlatformMutation = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
  platform_type: string | null;
};

export type UpdatePlatformMutation = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
  platform_type: string | null;
};

export type DeleteSourceMutation = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
  is_survey: number | null;
  region: string | null;
};

export type CreateSourceMutation = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
  is_survey: number | null;
  region: string | null;
};

export type UpdateSourceMutation = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
  is_survey: number | null;
  region: string | null;
};

export type DeleteTrendingTopicsMutation = {
  __typename: "TrendingTopics";
  topic: string;
  counts: number | null;
  n_gram: number | null;
  created_time: string | null;
};

export type CreateTrendingTopicsMutation = {
  __typename: "TrendingTopics";
  topic: string;
  counts: number | null;
  n_gram: number | null;
  created_time: string | null;
};

export type UpdateTrendingTopicsMutation = {
  __typename: "TrendingTopics";
  topic: string;
  counts: number | null;
  n_gram: number | null;
  created_time: string | null;
};

export type DeleteRegionsMutation = {
  __typename: "Regions";
  region: string;
};

export type CreateRegionsMutation = {
  __typename: "Regions";
  region: string;
};

export type UpdateRegionsMutation = {
  __typename: "Regions";
  region: string;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

export type GetDiscourseQuery = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  created_time: string | null;
  imported_time: string | null;
  secondary_content: string | null;
  isPost: number | null;
  post_id: number | null;
  ori_id: string | null;
  country_code: string | null;
  url: string | null;
};

export type ListDiscoursesQuery = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  created_time: string | null;
  imported_time: string | null;
  secondary_content: string | null;
  isPost: number | null;
  post_id: number | null;
  ori_id: string | null;
  country_code: string | null;
  url: string | null;
};

export type GetImpactAreaQuery = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type ListImpactAreasQuery = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type GetModelVersionQuery = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type ListModelVersionsQuery = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type GetPlatformQuery = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
  platform_type: string | null;
};

export type ListPlatformsQuery = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
  platform_type: string | null;
};

export type GetSourceQuery = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
  is_survey: number | null;
  region: string | null;
};

export type ListSourcesQuery = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
  is_survey: number | null;
  region: string | null;
};

export type GetTrendingTopicsQuery = {
  __typename: "TrendingTopics";
  topic: string;
  counts: number | null;
  n_gram: number | null;
  created_time: string | null;
};

export type ListImpactTreeQuery = {
  __typename: "ImpactTree";
  discourse_id: number | null;
  region: string;
  date: string | null;
  tag: string | null;
  level2: string | null;
  level1: string | null;
  level0: string | null;
  source_ontology: string | null;
  value: number | null;
  color: string | null;
};

export type GetRegionsQuery = {
  __typename: "Regions";
  region: string;
};

export type ListRegionssQuery = {
  __typename: "Regions";
  region: string;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type ListTrendingTopicsQuery = {
  __typename: "TrendingTopics";
  topic: string;
  counts: number | null;
  n_gram: number | null;
  created_time: string | null;
};

export type ListDiscourseHashtagsQuery = {
  __typename: "DiscourseHashtags";
  counts: number | null;
  hashtag: string;
};

export type ListTrendingHashtagsQuery = {
  __typename: "listTrendingHashtags";
  counts: number | null;
  hashtag: string;
  sentiment: number | null;
  negative: number | null;
  neutral: number | null;
  positive: number | null;
  start_date: string | null;
};

export type ListTrendingTopicsMasterQuery = {
  __typename: "listTrendingTopicsMaster";
  counts: number | null;
  topic: string;
  sentiment: number | null;
  negative: number | null;
  neutral: number | null;
  positive: number | null;
};

export type DiscourseTrendingTopicsQuery = {
  __typename: "discourseTrendingTopics";
  counts: number | null;
  sentiment: number | null;
  topic: string;
  date: string | null;
};

export type HashtagMasterQuery = {
  __typename: "hashtagMaster";
  counts: number | null;
  sentiment: number | null;
  topic: string;
  date: string | null;
};

export type ListDiscourseDataQuery = {
  __typename: "listDiscourseData";
  discourse_id: number;
  platform_desc: string;
  comment: string;
  created_time: string | null;
  level0: string;
  level1: string;
  level2: string;
  level3: string | null;
  isPost: boolean | null;
  post_id: number | null;
  region: string;
};

export type GetTopicsCommentQuery = {
  __typename: "getTopicsComment";
  topic: string | null;
};

export type ListImpactSpiQuery = {
  __typename: "listImpactSPI";
  level2: string;
  level1: string;
  level0: string;
  value: number | null;
  color: string | null;
};

export type ListImpactTsfQuery = {
  __typename: "listImpactTSF";
  level2: string;
  level1: string;
  level0: string;
  value: number | null;
  color: string | null;
};

export type ListImpactSgdQuery = {
  __typename: "listImpactSDG";
  level2: string;
  level1: string;
  level0: string;
  value: number | null;
  color: string | null;
};

export type OnCreateDiscourseSubscription = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  created_time: string | null;
  imported_time: string | null;
  secondary_content: string | null;
  isPost: number | null;
  post_id: number | null;
  ori_id: string | null;
  country_code: string | null;
  url: string | null;
};

export type OnCreateImpactAreaSubscription = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type OnCreateModelVersionSubscription = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type OnCreatePlatformSubscription = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
  platform_type: string | null;
};

export type OnCreateSourceSubscription = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
  is_survey: number | null;
  region: string | null;
};

export type OnCreateTrendingTopicsSubscription = {
  __typename: "TrendingTopics";
  topic: string;
  counts: number | null;
  n_gram: number | null;
  created_time: string | null;
};

export type OnCreateRegionsSubscription = {
  __typename: "Regions";
  region: string;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async DeleteDiscourse(
    discourse_id: number
  ): Promise<DeleteDiscourseMutation> {
    const statement = `mutation DeleteDiscourse($discourse_id: Int!) {
        deleteDiscourse(discourse_id: $discourse_id) {
          __typename
          discourse_id
          content
          source_id
          region
          created_time
          imported_time
          secondary_content
          isPost
          post_id
          ori_id
          country_code
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      discourse_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDiscourseMutation>response.data.deleteDiscourse;
  }
  async CreateDiscourse(
    createDiscourseInput: CreateDiscourseInput
  ): Promise<CreateDiscourseMutation> {
    const statement = `mutation CreateDiscourse($createDiscourseInput: CreateDiscourseInput!) {
        createDiscourse(createDiscourseInput: $createDiscourseInput) {
          __typename
          discourse_id
          content
          source_id
          region
          created_time
          imported_time
          secondary_content
          isPost
          post_id
          ori_id
          country_code
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createDiscourseInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDiscourseMutation>response.data.createDiscourse;
  }
  async UpdateDiscourse(
    updateDiscourseInput: UpdateDiscourseInput
  ): Promise<UpdateDiscourseMutation> {
    const statement = `mutation UpdateDiscourse($updateDiscourseInput: UpdateDiscourseInput!) {
        updateDiscourse(updateDiscourseInput: $updateDiscourseInput) {
          __typename
          discourse_id
          content
          source_id
          region
          created_time
          imported_time
          secondary_content
          isPost
          post_id
          ori_id
          country_code
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateDiscourseInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDiscourseMutation>response.data.updateDiscourse;
  }
  async DeleteImpactArea(
    impact_area_id: number
  ): Promise<DeleteImpactAreaMutation> {
    const statement = `mutation DeleteImpactArea($impact_area_id: Int!) {
        deleteImpactArea(impact_area_id: $impact_area_id) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      impact_area_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteImpactAreaMutation>response.data.deleteImpactArea;
  }
  async CreateImpactArea(
    createImpactAreaInput: CreateImpactAreaInput
  ): Promise<CreateImpactAreaMutation> {
    const statement = `mutation CreateImpactArea($createImpactAreaInput: CreateImpactAreaInput!) {
        createImpactArea(createImpactAreaInput: $createImpactAreaInput) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createImpactAreaInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateImpactAreaMutation>response.data.createImpactArea;
  }
  async UpdateImpactArea(
    updateImpactAreaInput: UpdateImpactAreaInput
  ): Promise<UpdateImpactAreaMutation> {
    const statement = `mutation UpdateImpactArea($updateImpactAreaInput: UpdateImpactAreaInput!) {
        updateImpactArea(updateImpactAreaInput: $updateImpactAreaInput) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateImpactAreaInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateImpactAreaMutation>response.data.updateImpactArea;
  }
  async DeleteModelVersion(
    model_id: number
  ): Promise<DeleteModelVersionMutation> {
    const statement = `mutation DeleteModelVersion($model_id: Int!) {
        deleteModelVersion(model_id: $model_id) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      model_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteModelVersionMutation>response.data.deleteModelVersion;
  }
  async CreateModelVersion(
    createModelVersionInput: CreateModelVersionInput
  ): Promise<CreateModelVersionMutation> {
    const statement = `mutation CreateModelVersion($createModelVersionInput: CreateModelVersionInput!) {
        createModelVersion(createModelVersionInput: $createModelVersionInput) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createModelVersionInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateModelVersionMutation>response.data.createModelVersion;
  }
  async UpdateModelVersion(
    updateModelVersionInput: UpdateModelVersionInput
  ): Promise<UpdateModelVersionMutation> {
    const statement = `mutation UpdateModelVersion($updateModelVersionInput: UpdateModelVersionInput!) {
        updateModelVersion(updateModelVersionInput: $updateModelVersionInput) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateModelVersionInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateModelVersionMutation>response.data.updateModelVersion;
  }
  async DeletePlatform(platform_id: number): Promise<DeletePlatformMutation> {
    const statement = `mutation DeletePlatform($platform_id: Int!) {
        deletePlatform(platform_id: $platform_id) {
          __typename
          platform_id
          platform_desc
          platform_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      platform_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlatformMutation>response.data.deletePlatform;
  }
  async CreatePlatform(
    createPlatformInput: CreatePlatformInput
  ): Promise<CreatePlatformMutation> {
    const statement = `mutation CreatePlatform($createPlatformInput: CreatePlatformInput!) {
        createPlatform(createPlatformInput: $createPlatformInput) {
          __typename
          platform_id
          platform_desc
          platform_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createPlatformInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlatformMutation>response.data.createPlatform;
  }
  async UpdatePlatform(
    updatePlatformInput: UpdatePlatformInput
  ): Promise<UpdatePlatformMutation> {
    const statement = `mutation UpdatePlatform($updatePlatformInput: UpdatePlatformInput!) {
        updatePlatform(updatePlatformInput: $updatePlatformInput) {
          __typename
          platform_id
          platform_desc
          platform_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updatePlatformInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlatformMutation>response.data.updatePlatform;
  }
  async DeleteSource(source_id: number): Promise<DeleteSourceMutation> {
    const statement = `mutation DeleteSource($source_id: Int!) {
        deleteSource(source_id: $source_id) {
          __typename
          source_id
          platform_id
          source_desc
          is_survey
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      source_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSourceMutation>response.data.deleteSource;
  }
  async CreateSource(
    createSourceInput: CreateSourceInput
  ): Promise<CreateSourceMutation> {
    const statement = `mutation CreateSource($createSourceInput: CreateSourceInput!) {
        createSource(createSourceInput: $createSourceInput) {
          __typename
          source_id
          platform_id
          source_desc
          is_survey
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createSourceInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSourceMutation>response.data.createSource;
  }
  async UpdateSource(
    updateSourceInput: UpdateSourceInput
  ): Promise<UpdateSourceMutation> {
    const statement = `mutation UpdateSource($updateSourceInput: UpdateSourceInput!) {
        updateSource(updateSourceInput: $updateSourceInput) {
          __typename
          source_id
          platform_id
          source_desc
          is_survey
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateSourceInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSourceMutation>response.data.updateSource;
  }
  async DeleteTrendingTopics(
    topic: string
  ): Promise<DeleteTrendingTopicsMutation> {
    const statement = `mutation DeleteTrendingTopics($topic: String!) {
        deleteTrendingTopics(topic: $topic) {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      topic
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTrendingTopicsMutation>response.data.deleteTrendingTopics;
  }
  async CreateTrendingTopics(
    createTrendingTopicsInput: CreateTrendingTopicsInput
  ): Promise<CreateTrendingTopicsMutation> {
    const statement = `mutation CreateTrendingTopics($createTrendingTopicsInput: CreateTrendingTopicsInput!) {
        createTrendingTopics(createTrendingTopicsInput: $createTrendingTopicsInput) {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createTrendingTopicsInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTrendingTopicsMutation>response.data.createTrendingTopics;
  }
  async UpdateTrendingTopics(
    updateTrendingTopicsInput: UpdateTrendingTopicsInput
  ): Promise<UpdateTrendingTopicsMutation> {
    const statement = `mutation UpdateTrendingTopics($updateTrendingTopicsInput: UpdateTrendingTopicsInput!) {
        updateTrendingTopics(updateTrendingTopicsInput: $updateTrendingTopicsInput) {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateTrendingTopicsInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTrendingTopicsMutation>response.data.updateTrendingTopics;
  }
  async DeleteRegions(region: string): Promise<DeleteRegionsMutation> {
    const statement = `mutation DeleteRegions($region: String!) {
        deleteRegions(region: $region) {
          __typename
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      region
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRegionsMutation>response.data.deleteRegions;
  }
  async CreateRegions(
    createRegionsInput: CreateRegionsInput
  ): Promise<CreateRegionsMutation> {
    const statement = `mutation CreateRegions($createRegionsInput: CreateRegionsInput!) {
        createRegions(createRegionsInput: $createRegionsInput) {
          __typename
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createRegionsInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRegionsMutation>response.data.createRegions;
  }
  async UpdateRegions(
    updateRegionsInput: UpdateRegionsInput
  ): Promise<UpdateRegionsMutation> {
    const statement = `mutation UpdateRegions($updateRegionsInput: UpdateRegionsInput!) {
        updateRegions(updateRegionsInput: $updateRegionsInput) {
          __typename
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateRegionsInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRegionsMutation>response.data.updateRegions;
  }
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async GetDiscourse(discourse_id: number): Promise<GetDiscourseQuery> {
    const statement = `query GetDiscourse($discourse_id: Int!) {
        getDiscourse(discourse_id: $discourse_id) {
          __typename
          discourse_id
          content
          source_id
          region
          created_time
          imported_time
          secondary_content
          isPost
          post_id
          ori_id
          country_code
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      discourse_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDiscourseQuery>response.data.getDiscourse;
  }
  async ListDiscourses(): Promise<Array<ListDiscoursesQuery>> {
    const statement = `query ListDiscourses {
        listDiscourses {
          __typename
          discourse_id
          content
          source_id
          region
          created_time
          imported_time
          secondary_content
          isPost
          post_id
          ori_id
          country_code
          url
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListDiscoursesQuery>>response.data.listDiscourses;
  }
  async GetImpactArea(impact_area_id: number): Promise<GetImpactAreaQuery> {
    const statement = `query GetImpactArea($impact_area_id: Int!) {
        getImpactArea(impact_area_id: $impact_area_id) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      impact_area_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetImpactAreaQuery>response.data.getImpactArea;
  }
  async ListImpactAreas(): Promise<Array<ListImpactAreasQuery>> {
    const statement = `query ListImpactAreas {
        listImpactAreas {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactAreasQuery>>response.data.listImpactAreas;
  }
  async GetModelVersion(model_id: number): Promise<GetModelVersionQuery> {
    const statement = `query GetModelVersion($model_id: Int!) {
        getModelVersion(model_id: $model_id) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      model_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetModelVersionQuery>response.data.getModelVersion;
  }
  async ListModelVersions(): Promise<Array<ListModelVersionsQuery>> {
    const statement = `query ListModelVersions {
        listModelVersions {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListModelVersionsQuery>>response.data.listModelVersions;
  }
  async GetPlatform(platform_id: number): Promise<GetPlatformQuery> {
    const statement = `query GetPlatform($platform_id: Int!) {
        getPlatform(platform_id: $platform_id) {
          __typename
          platform_id
          platform_desc
          platform_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      platform_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlatformQuery>response.data.getPlatform;
  }
  async ListPlatforms(): Promise<Array<ListPlatformsQuery>> {
    const statement = `query ListPlatforms {
        listPlatforms {
          __typename
          platform_id
          platform_desc
          platform_type
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListPlatformsQuery>>response.data.listPlatforms;
  }
  async GetSource(source_id: number): Promise<GetSourceQuery> {
    const statement = `query GetSource($source_id: Int!) {
        getSource(source_id: $source_id) {
          __typename
          source_id
          platform_id
          source_desc
          is_survey
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      source_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSourceQuery>response.data.getSource;
  }
  async ListSources(): Promise<Array<ListSourcesQuery>> {
    const statement = `query ListSources {
        listSources {
          __typename
          source_id
          platform_id
          source_desc
          is_survey
          region
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListSourcesQuery>>response.data.listSources;
  }
  async GetTrendingTopics(topic: string): Promise<GetTrendingTopicsQuery> {
    const statement = `query GetTrendingTopics($topic: String!) {
        getTrendingTopics(topic: $topic) {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      topic
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTrendingTopicsQuery>response.data.getTrendingTopics;
  }
  async ListImpactTree(): Promise<Array<ListImpactTreeQuery>> {
    const statement = `query ListImpactTree {
        listImpactTree {
          __typename
          discourse_id
          region
          date
          tag
          level2
          level1
          level0
          source_ontology
          value
          color
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactTreeQuery>>response.data.listImpactTree;
  }
  async GetRegions(region: string): Promise<GetRegionsQuery> {
    const statement = `query GetRegions($region: String!) {
        getRegions(region: $region) {
          __typename
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      region
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRegionsQuery>response.data.getRegions;
  }
  async ListRegionss(): Promise<Array<ListRegionssQuery>> {
    const statement = `query ListRegionss {
        listRegionss {
          __typename
          region
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListRegionssQuery>>response.data.listRegionss;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async ListTrendingTopics(): Promise<Array<ListTrendingTopicsQuery>> {
    const statement = `query ListTrendingTopics {
        listTrendingTopics {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListTrendingTopicsQuery>>response.data.listTrendingTopics;
  }
  async ListDiscourseHashtags(): Promise<Array<ListDiscourseHashtagsQuery>> {
    const statement = `query ListDiscourseHashtags {
        listDiscourseHashtags {
          __typename
          counts
          hashtag
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListDiscourseHashtagsQuery>>(
      response.data.listDiscourseHashtags
    );
  }
  async ListTrendingHashtags(
    start: string,
    end: string,
    region: string
  ): Promise<Array<ListTrendingHashtagsQuery>> {
    const statement = `query ListTrendingHashtags($start: String!, $end: String!, $region: String!) {
        listTrendingHashtags(start: $start, end: $end, region: $region) {
          __typename
          counts
          hashtag
          sentiment
          negative
          neutral
          positive
          start_date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListTrendingHashtagsQuery>>response.data.listTrendingHashtags;
  }
  async ListTrendingTopicsMaster(
    start: string,
    end: string,
    region: string
  ): Promise<Array<ListTrendingTopicsMasterQuery>> {
    const statement = `query ListTrendingTopicsMaster($start: String!, $end: String!, $region: String!) {
        listTrendingTopicsMaster(start: $start, end: $end, region: $region) {
          __typename
          counts
          topic
          sentiment
          negative
          neutral
          positive
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListTrendingTopicsMasterQuery>>(
      response.data.listTrendingTopicsMaster
    );
  }
  async DiscourseTrendingTopics(
    start: string,
    end: string,
    region: string,
    topic: string
  ): Promise<Array<DiscourseTrendingTopicsQuery>> {
    const statement = `query DiscourseTrendingTopics($start: String!, $end: String!, $region: String!, $topic: String!) {
        discourseTrendingTopics(start: $start, end: $end, region: $region, topic: $topic) {
          __typename
          counts
          sentiment
          topic
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region,
      topic
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<DiscourseTrendingTopicsQuery>>(
      response.data.discourseTrendingTopics
    );
  }
  async HashtagMaster(
    start: string,
    end: string,
    region: string,
    topic: string
  ): Promise<Array<HashtagMasterQuery>> {
    const statement = `query HashtagMaster($start: String!, $end: String!, $region: String!, $topic: String!) {
        hashtagMaster(start: $start, end: $end, region: $region, topic: $topic) {
          __typename
          counts
          sentiment
          topic
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region,
      topic
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<HashtagMasterQuery>>response.data.hashtagMaster;
  }
  async ListDiscourseData(
    start: string,
    end: string,
    region: string
  ): Promise<Array<ListDiscourseDataQuery>> {
    const statement = `query ListDiscourseData($start: String!, $end: String!, $region: String!) {
        listDiscourseData(start: $start, end: $end, region: $region) {
          __typename
          discourse_id
          platform_desc
          comment
          created_time
          level0
          level1
          level2
          level3
          isPost
          post_id
          region
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListDiscourseDataQuery>>response.data.listDiscourseData;
  }
  async GetTopicsComment(
    discourse_id?: number
  ): Promise<Array<GetTopicsCommentQuery>> {
    const statement = `query GetTopicsComment($discourse_id: Int) {
        getTopicsComment(discourse_id: $discourse_id) {
          __typename
          topic
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (discourse_id) {
      gqlAPIServiceArguments.discourse_id = discourse_id;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<GetTopicsCommentQuery>>response.data.getTopicsComment;
  }
  async ListImpactSpi(): Promise<Array<ListImpactSpiQuery>> {
    const statement = `query ListImpactSpi {
        listImpactSPI {
          __typename
          level2
          level1
          level0
          value
          color
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactSpiQuery>>response.data.listImpactSPI;
  }
  async ListImpactTsf(): Promise<Array<ListImpactTsfQuery>> {
    const statement = `query ListImpactTsf {
        listImpactTSF {
          __typename
          level2
          level1
          level0
          value
          color
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactTsfQuery>>response.data.listImpactTSF;
  }
  async ListImpactSgd(): Promise<Array<ListImpactSgdQuery>> {
    const statement = `query ListImpactSgd {
        listImpactSGD {
          __typename
          level2
          level1
          level0
          value
          color
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactSgdQuery>>response.data.listImpactSGD;
  }
  OnCreateDiscourseListener: Observable<
    OnCreateDiscourseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDiscourse {
        onCreateDiscourse {
          __typename
          discourse_id
          content
          source_id
          region
          created_time
          imported_time
          secondary_content
          isPost
          post_id
          ori_id
          country_code
          url
        }
      }`
    )
  ) as Observable<OnCreateDiscourseSubscription>;

  OnCreateImpactAreaListener: Observable<
    OnCreateImpactAreaSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateImpactArea {
        onCreateImpactArea {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`
    )
  ) as Observable<OnCreateImpactAreaSubscription>;

  OnCreateModelVersionListener: Observable<
    OnCreateModelVersionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateModelVersion {
        onCreateModelVersion {
          __typename
          model_id
          model_task
          created_time
        }
      }`
    )
  ) as Observable<OnCreateModelVersionSubscription>;

  OnCreatePlatformListener: Observable<
    OnCreatePlatformSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlatform {
        onCreatePlatform {
          __typename
          platform_id
          platform_desc
          platform_type
        }
      }`
    )
  ) as Observable<OnCreatePlatformSubscription>;

  OnCreateSourceListener: Observable<OnCreateSourceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSource {
        onCreateSource {
          __typename
          source_id
          platform_id
          source_desc
          is_survey
          region
        }
      }`
    )
  ) as Observable<OnCreateSourceSubscription>;

  OnCreateTrendingTopicsListener: Observable<
    OnCreateTrendingTopicsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTrendingTopics {
        onCreateTrendingTopics {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`
    )
  ) as Observable<OnCreateTrendingTopicsSubscription>;

  OnCreateRegionsListener: Observable<
    OnCreateRegionsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRegions {
        onCreateRegions {
          __typename
          region
        }
      }`
    )
  ) as Observable<OnCreateRegionsSubscription>;

  OnCreateTodoListener: Observable<OnCreateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnCreateTodoSubscription>;

  OnUpdateTodoListener: Observable<OnUpdateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnUpdateTodoSubscription>;

  OnDeleteTodoListener: Observable<OnDeleteTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnDeleteTodoSubscription>;
}
