import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import User from '../user/user_input';

export default new GraphQLInputObjectType({
  name: 'TodoInput',
  fields: {
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    creator: {type: User}
  }
});
