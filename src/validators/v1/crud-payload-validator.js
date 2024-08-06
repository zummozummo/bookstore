export default {
  createNode: {
    type: 'object',
    properties: {
      title: { type: 'string' },
    },
    required: ['title'],
    errorMessage: 'Invalid inputs passed',
  },
};
