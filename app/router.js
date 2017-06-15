import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layout
import MainContainer from './components/MainContainer';
import ContentContainer from './components/ContentContainer';

//Pages
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import MVC from './components/MVC'


export default (
    <Router history={browserHistory}>
        <Route component={MainContainer}>
            <Route path="/" component={Home} />


            <Route path="mvc">
                <Route component={ContentContainer}>
                    <IndexRoute component={MVC}/>
                </Route>
                {/*<Route path="authors/:Id" component={BooksList}/>*/}
                {/*<Route path="authors/:Id/:Id" component={BookItem} />*/}
            </Route>

            <Route path="articles">
                <Route component={ContentContainer}>
                    <IndexRoute component={ArticlesList} />
                </Route>

            </Route>



        </Route>
  </Router>
)
