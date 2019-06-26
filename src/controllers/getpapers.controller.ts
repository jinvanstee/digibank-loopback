// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  del,
  get,
  getFilterSchemaFor,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import { Getpapers } from '../models';

import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();

export class GetpapersController {
  constructor() { }

  @post('/getpapers', {
    responses: {
      '200': {
        description: 'Todo model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Getpapers } } },
      },
    },
  })
  async createGetpapers(@requestBody() requestBody: Getpapers): Promise<Getpapers> {
    console.log('Buy, requestBody: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    if (!networkObj) {
      let errString = 'Error connecting to network';
      let getpapers = new Getpapers({ issuer: errString });
      return getpapers;
    }
    console.log('newtork obj: ')
    console.log(networkObj)

    let dataForGetpapers = {
      function: 'getAllPapersFromIssuer',
      issuer: requestBody.issuer,
      contract: networkObj.contract
    };

    var resultString = await blockchainClient.getpapers(dataForGetpapers);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    console.log(resultString);
    let result = JSON.parse(resultString);
    return result;
  }

}