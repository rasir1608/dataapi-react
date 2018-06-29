
import { query } from '../services/user';

export default {
  namespace: 'user',
  state: {
    obj: {},
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     dispatch({
  //       type: 'admit/saveTitle',
  //       payload: {
  //         title: '对外接待',
  //       },
  //     });
  //   },
  // },

  effects: {
    *findById({ payload }, { call, put }) {
      const res = yield call(query, payload);
      if (!res || !res.result) return null;
      yield put({
        type: 'saveUser',
        payload: res.result,
      });
    },
  },

  reducers: {
    saveUser(state, action) {
      return {
        ...state,
        obj: action.payload,
      };
    },
  },
};
