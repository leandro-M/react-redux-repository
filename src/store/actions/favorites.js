export function addFavoriteRequest(repository) {
  return {
    type: 'ADD_FAVORITE_REQUEST',
    payload: { repository },
  };
}

export function addFavoriteSuccess(data) {
  return {
    type: 'ADD_FAVORITE_SUCCESS',
    payload: { data },
  };
}
