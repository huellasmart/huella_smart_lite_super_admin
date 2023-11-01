// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Company, Emision, Factor } = initSchema(schema);

export {
  User,
  Company,
  Emision,
  Factor
};