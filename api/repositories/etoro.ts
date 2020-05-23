import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'https://cdn.pika.dev/graphql/15.0.0'

function getStatus() {
  return 'healthy'
}

const statusType = new GraphQLObjectType({
  name: 'Status',
  fields: {
    status: { type: GraphQLString },
  }
})

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    status: {
      type: GraphQLString,
      resolve: () => getStatus()
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

export function querySchema(query: string) {
  return graphql(schema, query)
    .then(async result => result)
}
