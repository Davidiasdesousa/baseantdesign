/**
 * Import do service onde está configurado o request (que faz a mesma coisa q o axios)
 */
import { post } from '@/services/newPage';

export default {
  // seta o namespace que deve ser Único pra toda a aplicação
  namespace: 'newpage',
  // Obrigatório ter um estado, mesmo que vazio
  state: {},
  // Definição do efeito que poderá ser chamado na página
  effects: {
    *post({ payload }, { call, put }) {
      console.log(payload);
      const { data, success } = yield call(post, payload);
    },
  },
};
