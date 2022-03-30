import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Header';
import {routes} from './router/index.js'
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <div style={{height: '10vh'}}>
          <Header/>
        </div>
        <Switch>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
              >
              <Switch>
                {routes.map(route => 
                  <Route exact path={route.pathname}>
                    {<route.component/>}
                  </Route>
                )}
              </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </Switch>
      </Box>
    </ChakraProvider>
  );
}

export default App;
