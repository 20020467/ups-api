import { SchemaObject } from 'ajv';

export const createProduct: SchemaObject = {
  type: 'object',
  required: ['name'],
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
    },
  },
};
