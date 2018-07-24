import fetch from 'isomorphic-unfetch';
import getUrl, { headers } from './getUrl';

const getPhotos = options => {
  const url = getUrl(options);

  return fetch(url, { headers });
};

export default getPhotos;
