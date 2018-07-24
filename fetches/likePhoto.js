import fetch from 'isomorphic-unfetch';
import getUrl, { headers } from './getUrl';

const likePhoto = async ({ id, accessToken }) => {
  const pathname = `/photos/${id}/like`;
  const url = getUrl({ pathname, accessToken });

  return fetch(url, {
    method: 'POST',
    headers,
  });
};

export default likePhoto;
