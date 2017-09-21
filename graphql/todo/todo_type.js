import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

import User from '../user/user_type';

export default new GraphQLObjectType({
  name: 'Todo',
  fields: {
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    creator: {
      type: User
    }
  }
});
