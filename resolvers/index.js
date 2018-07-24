import {
  getPhotos,
  me,
  likePhoto,
  getPhotoById,
  downloadPhoto,
} from '../fetches';

const resolvers = {
  Mutation: {
    likePhoto: async (_, { id, accessToken }) => {
      try {
        const photo = await likePhoto({ id, accessToken }).then(r => r.json());
        return photo.photo;
      } catch (error) {
        return error;
      }
    },
    downloadPhoto: async (_, { id }) => {
      try {
        return downloadPhoto({ id });
      } catch (error) {
        return error;
      }
    },
  },
  Query: {
    photos: async (_, options) => getPhotos(options).then(r => r.json()),
    randomPhoto: async (_, options) =>
      getPhotos({ ...options, random: true }).then(r => r.json()),
    getPhotoById: async (_, options) =>
      getPhotoById(options).then(r => r.json()),
    me: async () => me(),
  },
};

export default resolvers;
