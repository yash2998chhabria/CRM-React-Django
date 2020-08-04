import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import CustomLayout from './containerr/layout'
// import ArticleListView from './containerr/ArticleList';
import BaseRouter from './routes';
import * as actions from './store/actions/auth';
import 'semantic-ui-css/semantic.min.css'
import Acustomform from './component/ArticleCRUD';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render(){
  return (
    <div>
      <Router >  
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: state.token!==null
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
