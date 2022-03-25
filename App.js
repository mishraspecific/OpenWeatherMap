/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './src/navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.Fragment>
        <StatusBar style="auto" />
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
