import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "chat" */
export type Chat = {
  __typename?: 'chat';
  create_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregated array relationship */
  messages_aggregate: Message_Aggregate;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  users: Array<Chat_Users>;
  /** An aggregated array relationship */
  users_aggregate: Chat_Users_Aggregate;
};


/** columns and relationships of "chat" */
export type ChatMessagesArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "chat" */
export type ChatMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "chat" */
export type ChatUsersArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};


/** columns and relationships of "chat" */
export type ChatUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};

/** aggregated selection of "chat" */
export type Chat_Aggregate = {
  __typename?: 'chat_aggregate';
  aggregate?: Maybe<Chat_Aggregate_Fields>;
  nodes: Array<Chat>;
};

/** aggregate fields of "chat" */
export type Chat_Aggregate_Fields = {
  __typename?: 'chat_aggregate_fields';
  avg?: Maybe<Chat_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chat_Max_Fields>;
  min?: Maybe<Chat_Min_Fields>;
  stddev?: Maybe<Chat_Stddev_Fields>;
  stddev_pop?: Maybe<Chat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chat_Stddev_Samp_Fields>;
  sum?: Maybe<Chat_Sum_Fields>;
  var_pop?: Maybe<Chat_Var_Pop_Fields>;
  var_samp?: Maybe<Chat_Var_Samp_Fields>;
  variance?: Maybe<Chat_Variance_Fields>;
};


/** aggregate fields of "chat" */
export type Chat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat" */
export type Chat_Aggregate_Order_By = {
  avg?: Maybe<Chat_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Max_Order_By>;
  min?: Maybe<Chat_Min_Order_By>;
  stddev?: Maybe<Chat_Stddev_Order_By>;
  stddev_pop?: Maybe<Chat_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chat_Stddev_Samp_Order_By>;
  sum?: Maybe<Chat_Sum_Order_By>;
  var_pop?: Maybe<Chat_Var_Pop_Order_By>;
  var_samp?: Maybe<Chat_Var_Samp_Order_By>;
  variance?: Maybe<Chat_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chat" */
export type Chat_Arr_Rel_Insert_Input = {
  data: Array<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
};

/** aggregate avg on columns */
export type Chat_Avg_Fields = {
  __typename?: 'chat_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chat" */
export type Chat_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chat". All fields are combined with a logical 'AND'. */
export type Chat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  _not?: Maybe<Chat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  create_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  messages?: Maybe<Message_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner_id?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  users?: Maybe<Chat_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "chat" */
export enum Chat_Constraint {
  /** unique or primary key constraint */
  ChatPkey = 'chat_pkey'
}

/** input type for incrementing integer column in table "chat" */
export type Chat_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chat" */
export type Chat_Insert_Input = {
  create_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  messages?: Maybe<Message_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  users?: Maybe<Chat_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Chat_Max_Fields = {
  __typename?: 'chat_max_fields';
  create_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chat" */
export type Chat_Max_Order_By = {
  create_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Min_Fields = {
  __typename?: 'chat_min_fields';
  create_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chat" */
export type Chat_Min_Order_By = {
  create_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** response of any mutation on the table "chat" */
export type Chat_Mutation_Response = {
  __typename?: 'chat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chat>;
};

/** input type for inserting object relation for remote table "chat" */
export type Chat_Obj_Rel_Insert_Input = {
  data: Chat_Insert_Input;
  on_conflict?: Maybe<Chat_On_Conflict>;
};

/** on conflict condition type for table "chat" */
export type Chat_On_Conflict = {
  constraint: Chat_Constraint;
  update_columns: Array<Chat_Update_Column>;
  where?: Maybe<Chat_Bool_Exp>;
};

/** ordering options when selecting data from "chat" */
export type Chat_Order_By = {
  create_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Message_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  users_aggregate?: Maybe<Chat_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "chat" */
export type Chat_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chat" */
export enum Chat_Select_Column {
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Picture = 'picture'
}

/** input type for updating data in table "chat" */
export type Chat_Set_Input = {
  create_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Chat_Stddev_Fields = {
  __typename?: 'chat_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chat" */
export type Chat_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chat_Stddev_Pop_Fields = {
  __typename?: 'chat_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chat" */
export type Chat_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chat_Stddev_Samp_Fields = {
  __typename?: 'chat_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chat" */
export type Chat_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chat_Sum_Fields = {
  __typename?: 'chat_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chat" */
export type Chat_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "chat" */
export enum Chat_Update_Column {
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Picture = 'picture'
}

/** columns and relationships of "chat_users" */
export type Chat_Users = {
  __typename?: 'chat_users';
  /** An object relationship */
  chat: Chat;
  chat_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "chat_users" */
export type Chat_Users_Aggregate = {
  __typename?: 'chat_users_aggregate';
  aggregate?: Maybe<Chat_Users_Aggregate_Fields>;
  nodes: Array<Chat_Users>;
};

/** aggregate fields of "chat_users" */
export type Chat_Users_Aggregate_Fields = {
  __typename?: 'chat_users_aggregate_fields';
  avg?: Maybe<Chat_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chat_Users_Max_Fields>;
  min?: Maybe<Chat_Users_Min_Fields>;
  stddev?: Maybe<Chat_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Chat_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chat_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Chat_Users_Sum_Fields>;
  var_pop?: Maybe<Chat_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Chat_Users_Var_Samp_Fields>;
  variance?: Maybe<Chat_Users_Variance_Fields>;
};


/** aggregate fields of "chat_users" */
export type Chat_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_users" */
export type Chat_Users_Aggregate_Order_By = {
  avg?: Maybe<Chat_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Users_Max_Order_By>;
  min?: Maybe<Chat_Users_Min_Order_By>;
  stddev?: Maybe<Chat_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Chat_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chat_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Chat_Users_Sum_Order_By>;
  var_pop?: Maybe<Chat_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Chat_Users_Var_Samp_Order_By>;
  variance?: Maybe<Chat_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chat_users" */
export type Chat_Users_Arr_Rel_Insert_Input = {
  data: Array<Chat_Users_Insert_Input>;
  on_conflict?: Maybe<Chat_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Chat_Users_Avg_Fields = {
  __typename?: 'chat_users_avg_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chat_users" */
export type Chat_Users_Avg_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chat_users". All fields are combined with a logical 'AND'. */
export type Chat_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Users_Bool_Exp>>>;
  _not?: Maybe<Chat_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chat_Users_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chat_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_users" */
export enum Chat_Users_Constraint {
  /** unique or primary key constraint */
  ChatUsersPkey = 'chat_users_pkey'
}

/** input type for incrementing integer column in table "chat_users" */
export type Chat_Users_Inc_Input = {
  chat_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chat_users" */
export type Chat_Users_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chat_id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chat_Users_Max_Fields = {
  __typename?: 'chat_users_max_fields';
  chat_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chat_users" */
export type Chat_Users_Max_Order_By = {
  chat_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Users_Min_Fields = {
  __typename?: 'chat_users_min_fields';
  chat_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chat_users" */
export type Chat_Users_Min_Order_By = {
  chat_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "chat_users" */
export type Chat_Users_Mutation_Response = {
  __typename?: 'chat_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chat_Users>;
};

/** input type for inserting object relation for remote table "chat_users" */
export type Chat_Users_Obj_Rel_Insert_Input = {
  data: Chat_Users_Insert_Input;
  on_conflict?: Maybe<Chat_Users_On_Conflict>;
};

/** on conflict condition type for table "chat_users" */
export type Chat_Users_On_Conflict = {
  constraint: Chat_Users_Constraint;
  update_columns: Array<Chat_Users_Update_Column>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};

/** ordering options when selecting data from "chat_users" */
export type Chat_Users_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chat_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "chat_users" */
export type Chat_Users_Pk_Columns_Input = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "chat_users" */
export enum Chat_Users_Select_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "chat_users" */
export type Chat_Users_Set_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Chat_Users_Stddev_Fields = {
  __typename?: 'chat_users_stddev_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chat_users" */
export type Chat_Users_Stddev_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chat_Users_Stddev_Pop_Fields = {
  __typename?: 'chat_users_stddev_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chat_users" */
export type Chat_Users_Stddev_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chat_Users_Stddev_Samp_Fields = {
  __typename?: 'chat_users_stddev_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chat_users" */
export type Chat_Users_Stddev_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chat_Users_Sum_Fields = {
  __typename?: 'chat_users_sum_fields';
  chat_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chat_users" */
export type Chat_Users_Sum_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** update columns of table "chat_users" */
export enum Chat_Users_Update_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Chat_Users_Var_Pop_Fields = {
  __typename?: 'chat_users_var_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chat_users" */
export type Chat_Users_Var_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chat_Users_Var_Samp_Fields = {
  __typename?: 'chat_users_var_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chat_users" */
export type Chat_Users_Var_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chat_Users_Variance_Fields = {
  __typename?: 'chat_users_variance_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chat_users" */
export type Chat_Users_Variance_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Chat_Var_Pop_Fields = {
  __typename?: 'chat_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chat" */
export type Chat_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chat_Var_Samp_Fields = {
  __typename?: 'chat_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chat" */
export type Chat_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chat_Variance_Fields = {
  __typename?: 'chat_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chat" */
export type Chat_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  /** An object relationship */
  chat: Chat;
  chat_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  sender: Users;
  sender_id: Scalars['String'];
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: Maybe<Message_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Message_Max_Order_By>;
  min?: Maybe<Message_Min_Order_By>;
  stddev?: Maybe<Message_Stddev_Order_By>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Order_By>;
  sum?: Maybe<Message_Sum_Order_By>;
  var_pop?: Maybe<Message_Var_Pop_Order_By>;
  var_samp?: Maybe<Message_Var_Samp_Order_By>;
  variance?: Maybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chat_id?: Maybe<Int_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sender?: Maybe<Users_Bool_Exp>;
  sender_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint */
  MessagePkey = 'message_pkey'
}

/** input type for incrementing integer column in table "message" */
export type Message_Inc_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sender?: Maybe<Users_Obj_Rel_Insert_Input>;
  sender_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  chat_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  chat_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Message>;
};

/** input type for inserting object relation for remote table "message" */
export type Message_Obj_Rel_Insert_Input = {
  data: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};

/** on conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns: Array<Message_Update_Column>;
  where?: Maybe<Message_Bool_Exp>;
};

/** ordering options when selecting data from "message" */
export type Message_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chat_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sender?: Maybe<Users_Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "message" */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  chat_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SenderId = 'sender_id'
}

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  chat_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  chat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "chat" */
  delete_chat?: Maybe<Chat_Mutation_Response>;
  /** delete single row from the table: "chat" */
  delete_chat_by_pk?: Maybe<Chat>;
  /** delete data from the table: "chat_users" */
  delete_chat_users?: Maybe<Chat_Users_Mutation_Response>;
  /** delete single row from the table: "chat_users" */
  delete_chat_users_by_pk?: Maybe<Chat_Users>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "chat" */
  insert_chat?: Maybe<Chat_Mutation_Response>;
  /** insert a single row into the table: "chat" */
  insert_chat_one?: Maybe<Chat>;
  /** insert data into the table: "chat_users" */
  insert_chat_users?: Maybe<Chat_Users_Mutation_Response>;
  /** insert a single row into the table: "chat_users" */
  insert_chat_users_one?: Maybe<Chat_Users>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "chat" */
  update_chat?: Maybe<Chat_Mutation_Response>;
  /** update single row of the table: "chat" */
  update_chat_by_pk?: Maybe<Chat>;
  /** update data of the table: "chat_users" */
  update_chat_users?: Maybe<Chat_Users_Mutation_Response>;
  /** update single row of the table: "chat_users" */
  update_chat_users_by_pk?: Maybe<Chat_Users>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ChatArgs = {
  where: Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_UsersArgs = {
  where: Chat_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Users_By_PkArgs = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ChatArgs = {
  objects: Array<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_OneArgs = {
  object: Chat_Insert_Input;
  on_conflict?: Maybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_UsersArgs = {
  objects: Array<Chat_Users_Insert_Input>;
  on_conflict?: Maybe<Chat_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Users_OneArgs = {
  object: Chat_Users_Insert_Input;
  on_conflict?: Maybe<Chat_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ChatArgs = {
  _inc?: Maybe<Chat_Inc_Input>;
  _set?: Maybe<Chat_Set_Input>;
  where: Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_By_PkArgs = {
  _inc?: Maybe<Chat_Inc_Input>;
  _set?: Maybe<Chat_Set_Input>;
  pk_columns: Chat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_UsersArgs = {
  _inc?: Maybe<Chat_Users_Inc_Input>;
  _set?: Maybe<Chat_Users_Set_Input>;
  where: Chat_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Users_By_PkArgs = {
  _inc?: Maybe<Chat_Users_Inc_Input>;
  _set?: Maybe<Chat_Users_Set_Input>;
  pk_columns: Chat_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: Maybe<Message_Inc_Input>;
  _set?: Maybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: Maybe<Message_Inc_Input>;
  _set?: Maybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch aggregated fields from the table: "chat" */
  chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "chat" using primary key columns */
  chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "chat_users" */
  chat_users: Array<Chat_Users>;
  /** fetch aggregated fields from the table: "chat_users" */
  chat_users_aggregate: Chat_Users_Aggregate;
  /** fetch data from the table: "chat_users" using primary key columns */
  chat_users_by_pk?: Maybe<Chat_Users>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootChatArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChat_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChat_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootChat_UsersArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};


/** query root */
export type Query_RootChat_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};


/** query root */
export type Query_RootChat_Users_By_PkArgs = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** query root */
export type Query_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** query root */
export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch aggregated fields from the table: "chat" */
  chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "chat" using primary key columns */
  chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "chat_users" */
  chat_users: Array<Chat_Users>;
  /** fetch aggregated fields from the table: "chat_users" */
  chat_users_aggregate: Chat_Users_Aggregate;
  /** fetch data from the table: "chat_users" using primary key columns */
  chat_users_by_pk?: Maybe<Chat_Users>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootChatArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootChat_UsersArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_Users_By_PkArgs = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  chats: Array<Chat>;
  /** An aggregated array relationship */
  chats_aggregate: Chat_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregated array relationship */
  messages_aggregate: Message_Aggregate;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  /** An array relationship */
  users: Array<Chat_Users>;
  /** An aggregated array relationship */
  users_aggregate: Chat_Users_Aggregate;
};


/** columns and relationships of "users" */
export type UsersChatsArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChats_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Users_Order_By>>;
  where?: Maybe<Chat_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  chats?: Maybe<Chat_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  messages?: Maybe<Message_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  users?: Maybe<Chat_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  chats?: Maybe<Chat_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  messages?: Maybe<Message_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  users?: Maybe<Chat_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  chats_aggregate?: Maybe<Chat_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Message_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  users_aggregate?: Maybe<Chat_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Username = 'username'
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'username' | 'picture'>
  )> }
);


export const GetUserDocument = gql`
    query getUser($id: String!) {
  users(where: {id: {_eq: $id}}) {
    id
    name
    username
    picture
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;