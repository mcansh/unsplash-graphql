import fetch from 'isomorphic-unfetch';
import getUrl, { headers } from './getUrl';

const downloadPhoto = async ({ id }) => {
  const pathname = `/photos/${id}/download`;
  const url = getUrl({ pathname });

  return fetch(url, {
    method: 'POST',
    headers,
  });
};

export default downloadPhoto;
