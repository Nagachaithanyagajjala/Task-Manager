const pb = {
  collection: () => ({
    getFullList: async () => [],
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
    authWithPassword: async () => ({}),
  }),
  authStore: {
    model: null,
    isValid: false,
    clear: () => {},
  },
};

export default pb;