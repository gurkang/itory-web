import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Box = {
  __typename?: 'Box';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  name: Scalars['String']['output'];
};

export type Item = {
  __typename?: 'Item';
  box?: Maybe<Box>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type Jwt = {
  __typename?: 'JWT';
  expiresIn: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBox?: Maybe<Box>;
  createItem?: Maybe<Item>;
  deleteBox?: Maybe<Scalars['Boolean']['output']>;
  deleteItem?: Maybe<Scalars['Boolean']['output']>;
  login?: Maybe<Jwt>;
  register?: Maybe<Jwt>;
  updateBox?: Maybe<Box>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateBoxArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateItemArgs = {
  item: NewItem;
};


export type MutationDeleteBoxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  user: UserRegister;
};


export type MutationUpdateBoxArgs = {
  box: UpdateBox;
};


export type MutationUpdateItemArgs = {
  item: UpdateItem;
};

export type NewItem = {
  boxId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  boxes?: Maybe<Array<Maybe<Box>>>;
  items?: Maybe<Array<Maybe<Item>>>;
  me?: Maybe<User>;
};


export type QueryBoxesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateBox = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateItem = {
  boxId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  boxes?: Maybe<Array<Maybe<Box>>>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  name?: Maybe<Scalars['String']['output']>;
};


export type UserBoxesArgs = {
  boxId?: InputMaybe<Scalars['ID']['input']>;
};


export type UserItemsArgs = {
  itemId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserRegister = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'JWT', token: string, expiresIn: string } | null };

export type UpdateBoxMutationVariables = Exact<{
  box: UpdateBox;
}>;


export type UpdateBoxMutation = { __typename?: 'Mutation', updateBox?: { __typename?: 'Box', id: string } | null };

export type UpdateItemMutationVariables = Exact<{
  updateItemItem: UpdateItem;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem?: { __typename?: 'Item', name: string } | null };

export type CreateBoxMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateBoxMutation = { __typename?: 'Mutation', createBox?: { __typename?: 'Box', name: string } | null };

export type CreateItemMutationVariables = Exact<{
  item: NewItem;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem?: { __typename?: 'Item', id: string } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email?: string | null, name?: string | null, boxes?: Array<{ __typename?: 'Box', id: string, description?: string | null, name: string, items?: Array<{ __typename?: 'Item', name: string } | null> | null } | null> | null } | null };

export type GetSpecificBoxQueryVariables = Exact<{
  boxId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetSpecificBoxQuery = { __typename?: 'Query', me?: { __typename?: 'User', boxes?: Array<{ __typename?: 'Box', name: string, id: string, description?: string | null, items?: Array<{ __typename?: 'Item', id: string, name: string, quantity: number } | null> | null } | null> | null } | null };

export type GetBoxesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoxesQuery = { __typename?: 'Query', me?: { __typename?: 'User', boxes?: Array<{ __typename?: 'Box', description?: string | null, id: string, name: string, items?: Array<{ __typename?: 'Item', id: string, name: string, quantity: number } | null> | null } | null> | null } | null };

export type ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsQuery = { __typename?: 'Query', items?: Array<{ __typename?: 'Item', name: string, quantity: number, id: string, box?: { __typename?: 'Box', id: string, name: string } | null } | null> | null };

export type GetSpecificItemQueryVariables = Exact<{
  itemId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetSpecificItemQuery = { __typename?: 'Query', me?: { __typename?: 'User', items?: Array<{ __typename?: 'Item', name: string, id: string, quantity: number, box?: { __typename?: 'Box', description?: string | null, name: string, id: string } | null } | null> | null } | null };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    expiresIn
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateBoxDocument = gql`
    mutation UpdateBox($box: UpdateBox!) {
  updateBox(box: $box) {
    id
  }
}
    `;
export type UpdateBoxMutationFn = Apollo.MutationFunction<UpdateBoxMutation, UpdateBoxMutationVariables>;

/**
 * __useUpdateBoxMutation__
 *
 * To run a mutation, you first call `useUpdateBoxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoxMutation, { data, loading, error }] = useUpdateBoxMutation({
 *   variables: {
 *      box: // value for 'box'
 *   },
 * });
 */
export function useUpdateBoxMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBoxMutation, UpdateBoxMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBoxMutation, UpdateBoxMutationVariables>(UpdateBoxDocument, options);
      }
export type UpdateBoxMutationHookResult = ReturnType<typeof useUpdateBoxMutation>;
export type UpdateBoxMutationResult = Apollo.MutationResult<UpdateBoxMutation>;
export type UpdateBoxMutationOptions = Apollo.BaseMutationOptions<UpdateBoxMutation, UpdateBoxMutationVariables>;
export const UpdateItemDocument = gql`
    mutation UpdateItem($updateItemItem: UpdateItem!) {
  updateItem(item: $updateItemItem) {
    name
  }
}
    `;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      updateItemItem: // value for 'updateItemItem'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const CreateBoxDocument = gql`
    mutation CreateBox($name: String!, $description: String) {
  createBox(name: $name, description: $description) {
    name
  }
}
    `;
export type CreateBoxMutationFn = Apollo.MutationFunction<CreateBoxMutation, CreateBoxMutationVariables>;

/**
 * __useCreateBoxMutation__
 *
 * To run a mutation, you first call `useCreateBoxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoxMutation, { data, loading, error }] = useCreateBoxMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateBoxMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoxMutation, CreateBoxMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBoxMutation, CreateBoxMutationVariables>(CreateBoxDocument, options);
      }
export type CreateBoxMutationHookResult = ReturnType<typeof useCreateBoxMutation>;
export type CreateBoxMutationResult = Apollo.MutationResult<CreateBoxMutation>;
export type CreateBoxMutationOptions = Apollo.BaseMutationOptions<CreateBoxMutation, CreateBoxMutationVariables>;
export const CreateItemDocument = gql`
    mutation CreateItem($item: NewItem!) {
  createItem(item: $item) {
    id
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      item: // value for 'item'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    name
    boxes {
      id
      description
      name
      items {
        name
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetSpecificBoxDocument = gql`
    query GetSpecificBox($boxId: ID) {
  me {
    boxes(boxId: $boxId) {
      name
      id
      description
      items {
        id
        name
        quantity
      }
    }
  }
}
    `;

/**
 * __useGetSpecificBoxQuery__
 *
 * To run a query within a React component, call `useGetSpecificBoxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecificBoxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecificBoxQuery({
 *   variables: {
 *      boxId: // value for 'boxId'
 *   },
 * });
 */
export function useGetSpecificBoxQuery(baseOptions?: Apollo.QueryHookOptions<GetSpecificBoxQuery, GetSpecificBoxQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecificBoxQuery, GetSpecificBoxQueryVariables>(GetSpecificBoxDocument, options);
      }
export function useGetSpecificBoxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecificBoxQuery, GetSpecificBoxQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecificBoxQuery, GetSpecificBoxQueryVariables>(GetSpecificBoxDocument, options);
        }
export type GetSpecificBoxQueryHookResult = ReturnType<typeof useGetSpecificBoxQuery>;
export type GetSpecificBoxLazyQueryHookResult = ReturnType<typeof useGetSpecificBoxLazyQuery>;
export type GetSpecificBoxQueryResult = Apollo.QueryResult<GetSpecificBoxQuery, GetSpecificBoxQueryVariables>;
export const GetBoxesDocument = gql`
    query GetBoxes {
  me {
    boxes {
      description
      id
      name
      items {
        id
        name
        quantity
      }
    }
  }
}
    `;

/**
 * __useGetBoxesQuery__
 *
 * To run a query within a React component, call `useGetBoxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoxesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoxesQuery(baseOptions?: Apollo.QueryHookOptions<GetBoxesQuery, GetBoxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoxesQuery, GetBoxesQueryVariables>(GetBoxesDocument, options);
      }
export function useGetBoxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoxesQuery, GetBoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoxesQuery, GetBoxesQueryVariables>(GetBoxesDocument, options);
        }
export type GetBoxesQueryHookResult = ReturnType<typeof useGetBoxesQuery>;
export type GetBoxesLazyQueryHookResult = ReturnType<typeof useGetBoxesLazyQuery>;
export type GetBoxesQueryResult = Apollo.QueryResult<GetBoxesQuery, GetBoxesQueryVariables>;
export const ItemsDocument = gql`
    query Items {
  items {
    name
    quantity
    id
    box {
      id
      name
    }
  }
}
    `;

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsQuery(baseOptions?: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
      }
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>;
export const GetSpecificItemDocument = gql`
    query GetSpecificItem($itemId: ID) {
  me {
    items(itemId: $itemId) {
      name
      id
      quantity
      box {
        description
        name
        id
      }
    }
  }
}
    `;

/**
 * __useGetSpecificItemQuery__
 *
 * To run a query within a React component, call `useGetSpecificItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecificItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecificItemQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useGetSpecificItemQuery(baseOptions?: Apollo.QueryHookOptions<GetSpecificItemQuery, GetSpecificItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecificItemQuery, GetSpecificItemQueryVariables>(GetSpecificItemDocument, options);
      }
export function useGetSpecificItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecificItemQuery, GetSpecificItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecificItemQuery, GetSpecificItemQueryVariables>(GetSpecificItemDocument, options);
        }
export type GetSpecificItemQueryHookResult = ReturnType<typeof useGetSpecificItemQuery>;
export type GetSpecificItemLazyQueryHookResult = ReturnType<typeof useGetSpecificItemLazyQuery>;
export type GetSpecificItemQueryResult = Apollo.QueryResult<GetSpecificItemQuery, GetSpecificItemQueryVariables>;