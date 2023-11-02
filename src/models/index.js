// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, User, Emision, Factor } = initSchema(schema);

export {
  Company,
  User,
  Emision,
  Factor
};