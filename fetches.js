import { format } from 'url';
import fetch from 'isomorphic-unfetch';

const headers = {
  Authorization: `Client-ID ${process.env.KEY}`,
};

const getUrl = ({
  pathname = '/photos',
  random,
  count = 1,
  orderBy,
  curated,
  width,
  height,
  ...query
}) => {
  const defaultOptions = {
    protocol: 'https',
    hostname: 'api.unsplash.com',
    pathname,
    query: { ...query },
  };

  if (width) {
    defaultOptions.query.w = width;
  }

  if (height) {
    defaultOptions.query.h = height;
  }

  if (curated) {
    defaultOptions.pathname = '/photos/curated';
  }

  if (random) {
    defaultOptions.pathname = '/photos/random';
    defaultOptions.query.count = count;
  }

  if (count && !random) {
    defaultOptions.query.per_page = count;
  }

  if (orderBy) {
    defaultOptions.query.order_by = orderBy;
  }

  const url = format(defaultOptions);
  console.log(url);

  return url;
};

export const getPhotos = options => {
  const url = getUrl(options);

  return fetch(url, { headers });
};

export const me = () => 'suh';

export const getPhotoById = async ({ id, width, height }) => {
  console.log(id, width, height);

  const url = getUrl({ pathname: `/photos/${id}`, width, height });

  return fetch(url, { headers });
};

export const likePhoto = async id => {
  const url = getUrl({ pathname: `/photos/${id}/like` });

  return fetch(url, {
    method: 'POST',
    headers,
  });
};
