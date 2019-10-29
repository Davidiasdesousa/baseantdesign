/**
 * Import do service onde está configurado o request (que faz a mesma coisa q o axios)
 */
import { post, get } from '@/services/newPage';

export default {
  // seta o namespace que deve ser Único pra toda a aplicação
  namespace: 'newpage',
  // Obrigatório ter um estado, mesmo que vazio
  state: {
    data: { pagination: {}, listUser: [] },
  },
  // Definição do efeito que poderá ser chamado na página
  effects: {
    *post({ payload }, { call, put }) {
      const { data, success } = yield call(post, payload);
    },
    *get({ payload }, { call, put }) {
      const { data, success } = yield call(get, payload);
      const pagination = { current: data.page, pageSize: data.perPage, total: data.total };
      yield put({ type: 'updateState', payload: { pagination, listUser: data.data } });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
