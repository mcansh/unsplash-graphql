import { format } from 'url';

export const headers = {
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
  accessToken,
  ...query
}) => {
  const defaultOptions = {
    protocol: 'https',
    hostname: 'api.unsplash.com',
    pathname,
    query: { ...query },
  };

  if (accessToken) {
    defaultOptions.query.access_token = accessToken;
  }

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

  return url;
};

export default getUrl;
