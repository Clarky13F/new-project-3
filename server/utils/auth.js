const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  UserInputError: new GraphQLError('Incorrect user input.', {
    extensions: {
      code: 'BAD_USER_INPUT',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function (payload) {

    if (!secret || !expiration) {
      throw new Error('Error in signToken, must add secret and expiration to .env');
    };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
