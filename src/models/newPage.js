import { post } from '@/services/newPage';

export default {
  namespace: 'newpage',
  state: {},
  effects: {
    *post({ payload }, { call, put }) {
      console.log(payload);
      const { data, success } = yield call(post, payload);
    },
  },
};
