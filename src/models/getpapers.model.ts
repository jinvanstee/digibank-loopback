import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Getpapers extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  issuer: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Getpapers>) {
    super(data);
  }
}

export interface GetpapersRelations {
  // describe navigational properties here
}

export type GetpapersWithRelations = Getpapers & GetpapersRelations;
