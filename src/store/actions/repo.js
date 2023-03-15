export const GET_REPO = "GET_REPO";

export const getRepo = (repo) =>({
  type: GET_REPO,
  payload: repo,
})