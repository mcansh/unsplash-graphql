import { getPhotos, me, likePhoto, getPhotoById } from '../fetches';

const resolvers = {
  Mutation: {
    likePhoto: async (_, { id }) => {
      try {
        const photo = await likePhoto(id).then(r => r.json());
        console.log(photo);
        return photo;
      } catch (error) {
        return error;
      }
    },
  },
  Query: {
    photos: async (_, options) => getPhotos(options).then(r => r.json()),
    getPhotoById: async (_, { id }) => getPhotoById(id).then(r => r.json()),
    me: async () => me(),
  },
};

export default resolvers;
