import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';

const App = ({ location }) => {
  //Established a variable that saves the pathname to a variable and removes the first character. 
  const { pathname } = location;
  let path = pathname.substring(1);

  //Dynamically update document title based on path
  useEffect(() => {
    let title = path === '' ? 'flickr search' : `flickr search | ${path}`;
    document.title = title;
  },[path])

//Returns elements based upon path. If there is an error it returns the error page, otherwise it returns photoContainer and passes in the path variable.
  return (
  path !== 'error/404' ?
      <>
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path={`/`}>
              <h1>Find your inspiration with a simple search...</h1>
          </Route>
          <Route path={pathname}>
            <PhotoContainer path={path}/>
          </Route>
        </Switch>
      </>
  :
    <>
    <SearchForm />
    <Nav />
    <Route exact path={`/error/404`}>
      <Error />
    </Route>
  </>
  )
}

export default withRouter(App);