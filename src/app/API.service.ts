/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateRestuarantInput = {
  name: string;
  city: string;
};

export type UpdateRestuarantInput = {
  id: string;
  name?: string | null;
  city?: string | null;
};

export type DeleteRestuarantInput = {
  id: string;
};

export type TableRestuarantFilterInput = {
  id?: TableIDFilterInput | null;
  name?: TableStringFilterInput | null;
  city?: TableStringFilterInput | null;
};

export type TableIDFilterInput = {
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
};

export type TableStringFilterInput = {
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
};

export type CreateRestuarantMutation = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

export type UpdateRestuarantMutation = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

export type DeleteRestuarantMutation = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

export type GetRestuarantQuery = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

export type ListRestuarantsQuery = {
  __typename: "RestuarantConnection";
  items: Array<{
    __typename: "Restuarant";
    id: string;
    name: string;
    city: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateRestuarantSubscription = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

export type OnUpdateRestuarantSubscription = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

export type OnDeleteRestuarantSubscription = {
  __typename: "Restuarant";
  id: string;
  name: string;
  city: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestuarant(
    input: CreateRestuarantInput
  ): Promise<CreateRestuarantMutation> {
    const statement = `mutation CreateRestuarant($input: CreateRestuarantInput!) {
        createRestuarant(input: $input) {
          __typename
          id
          name
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestuarantMutation>response.data.createRestuarant;
  }
  async UpdateRestuarant(
    input: UpdateRestuarantInput
  ): Promise<UpdateRestuarantMutation> {
    const statement = `mutation UpdateRestuarant($input: UpdateRestuarantInput!) {
        updateRestuarant(input: $input) {
          __typename
          id
          name
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestuarantMutation>response.data.updateRestuarant;
  }
  async DeleteRestuarant(
    input: DeleteRestuarantInput
  ): Promise<DeleteRestuarantMutation> {
    const statement = `mutation DeleteRestuarant($input: DeleteRestuarantInput!) {
        deleteRestuarant(input: $input) {
          __typename
          id
          name
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestuarantMutation>response.data.deleteRestuarant;
  }
  async GetRestuarant(id: string): Promise<GetRestuarantQuery> {
    const statement = `query GetRestuarant($id: ID!) {
        getRestuarant(id: $id) {
          __typename
          id
          name
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestuarantQuery>response.data.getRestuarant;
  }
  async ListRestuarants(
    filter?: TableRestuarantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestuarantsQuery> {
    const statement = `query ListRestuarants($filter: TableRestuarantFilterInput, $limit: Int, $nextToken: String) {
        listRestuarants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            city
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
    return <ListRestuarantsQuery>response.data.listRestuarants;
  }
  OnCreateRestuarantListener: Observable<
    OnCreateRestuarantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestuarant($id: ID, $name: String, $city: String) {
        onCreateRestuarant(id: $id, name: $name, city: $city) {
          __typename
          id
          name
          city
        }
      }`
    )
  ) as Observable<OnCreateRestuarantSubscription>;

  OnUpdateRestuarantListener: Observable<
    OnUpdateRestuarantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestuarant($id: ID, $name: String, $city: String) {
        onUpdateRestuarant(id: $id, name: $name, city: $city) {
          __typename
          id
          name
          city
        }
      }`
    )
  ) as Observable<OnUpdateRestuarantSubscription>;

  OnDeleteRestuarantListener: Observable<
    OnDeleteRestuarantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestuarant($id: ID, $name: String, $city: String) {
        onDeleteRestuarant(id: $id, name: $name, city: $city) {
          __typename
          id
          name
          city
        }
      }`
    )
  ) as Observable<OnDeleteRestuarantSubscription>;
}
