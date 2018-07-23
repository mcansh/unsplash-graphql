import { format } from 'url';
import fetch from 'isomorphic-unfetch';

const headers = {
  Authorization: `Client-ID ${process.env.KEY}`,
};

const getUrl = ({ pathname = '/photos/random', count = 10, ...query }) => {
  const defaultOptions = {
    protocol: 'https',
    hostname: 'api.unsplash.com',
    pathname,
    query: {
      count,
      ...query,
    },
  };

  return format(defaultOptions);
};

export const getPhotos = options => {
  const url = getUrl(options);

  return fetch(url, { headers });
};

export const me = () => 'suh';

export const getPhotoById = async id => {
  const url = getUrl({ pathname: `/photos/${id}` });

  return fetch(url, { headers });
};

export const likePhoto = async id => {
  const url = getUrl({ pathname: `/photos/${id}/like` });

  return fetch(url, {
    method: 'POST',
    headers,
  });
};
