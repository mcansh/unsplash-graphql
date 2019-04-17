import { mergeTypeDefs } from 'graphql-tools-merge-typedefs';

import user from './user';
import photo from './photo';

export default mergeTypeDefs([user, photo]);
