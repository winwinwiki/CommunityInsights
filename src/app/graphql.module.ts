import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { fetch } from 'apollo-env'
import { pluck } from 'rxjs/operators';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import Amplify, { Auth } from 'aws-amplify';
import API from '@aws-amplify/api';
import awsmobile from '../aws-exports';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
Amplify.configure(awsmobile);
import ApolloClient, { ApolloLink } from "apollo-boost";



const uri = 'https://aizd7wkjorb5bpkxb7zombwj4u.appsync-api.us-west-2.amazonaws.com/graphql';
//const uri = 'https://a4kfqfeqkfgxhaad2777qxhiy4.appsync-api.us-west-2.amazonaws.com/graphql';
export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({ uri });

  const authLink = new ApolloLink((operation, forward) => {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        "X-Api-Key": "da2-dq52cxdnxzcx7pyuqfjdswijkm"
      },
      fetch
    });
    return forward(operation);
  });
  return {
    link: authLink.concat(http),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
