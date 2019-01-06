import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';

function* rootSaga() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite)]);
}

export default rootSaga;
