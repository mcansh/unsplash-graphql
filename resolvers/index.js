import {
  getPhotos,
  me,
  likePhoto,
  getPhotoById,
  downloadPhoto,
} from '../fetches';

const resolvers = {
  Mutation: {
    likePhoto: async (_, { id }, { req }) => {
      const { authorization } = req.headers;
      try {
        const photo = await likePhoto({ id, accessToken: authorization }).then(
          r => r.json()
        );
        console.log(photo);

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
    isLogin: (parent, args, { req }) => {
      const { authorization } = req.headers;
      console.log({ authorization });

      return !!authorization;
    },
    photos: async (_, options) => getPhotos(options).then(r => r.json()),
    randomPhoto: async (_, options) =>
      getPhotos({ ...options, random: true }).then(r => r.json()),
    getPhotoById: async (_, options) =>
      getPhotoById(options).then(r => r.json()),
    me: async () => me(),
  },
};

export default resolvers;
