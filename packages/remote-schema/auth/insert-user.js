function (user, context, callback) {
  const upsertUserQuery = `
    mutation($id: String!, $username: String!, $picture: String){
      insert_users(objects: [{
        id: $id,
        username: $username,
        picture: $picture
      }], on_conflict: { constraint: users_pkey, update_columns: [username] }) {
        affected_rows
      }
    }`;

  request.post(
    {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': configuration.HASURA_GRAPHQL_ADMIN_SECRET,
      },
      url: configuration.HASURA_GRAPHQL_ENDPOINT,
      body: JSON.stringify({
        query: upsertUserQuery,
        variables: {
          id: user.user_id,
          username: user.name,
          picture: user.picture,
        },
      }),
    },
    () => {
      callback(null, user, context);
    },
  );
}