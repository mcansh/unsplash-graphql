import fetch from 'isomorphic-unfetch';
import getUrl, { headers } from './getUrl';

const getPhotoById = async ({ id, width, height }) => {
  console.log(id, width, height);

  const url = getUrl({ pathname: `/photos/${id}`, width, height });

  return fetch(url, { headers });
};

export default getPhotoById;
