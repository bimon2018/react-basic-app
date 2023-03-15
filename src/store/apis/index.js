import { headers } from "src/store/apis/headers";

export const getUserData = async (username) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${username}`, 
    headers).then(res => res.json()
  );
  return res;
}

export const getRepoData = async (ownerName, repoName) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/repos/${ownerName}/${repoName}`, 
    headers).then(res => res.json()
  );
  return res;
}
