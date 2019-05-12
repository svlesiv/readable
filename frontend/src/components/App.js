import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleGetPosts } from '../actions/posts';
import { handleGetCategories } from '../actions/categories';
import LoadingBar from 'react-redux-loading-bar';
import '../styles/index.scss';

import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Category from './Category';

class App extends Component {
  state = {
    isLoaded: false
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetCategories());
    dispatch(handleGetPosts()).then(()=> this.setState({isLoaded: true}));
  }

  render() {
    return (
      <Router> 
          {!this.state.isLoaded ? (
            <LoadingBar/>
          ) : (
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/add_post' exact component={CreatePost}/>
              <Route path='/:category' exact component={Category}/>
              <Route path='/:category/:post_id' exact component={PostDetail}/>
            </Switch>
          )}
      </Router>
    );
  }
}

export default connect()(App);
