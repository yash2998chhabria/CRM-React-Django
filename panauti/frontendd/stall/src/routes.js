import React from 'react';
import { Route } from 'react-router-dom';
import ArticleListView from './containerr/ArticleList';
import ArticleDetailView from './containerr/ArticleDetail'
import loginPage  from './containerr/Login'
import signup  from './containerr/signup'
import ProductList from './containerr/Products'
import sproduct from './containerr/stalls'
import StallDetailView from './containerr/StallDetailView'

const BaseRouter = () =>(
    <div>
        <Route exact path='/articles/' component = {ArticleListView} />
        <Route exact path='/articles/:articleID/' component = {ArticleDetailView} />
        <Route exact path='/login/' component = { loginPage } />
        <Route exact path='/signup/' component = { signup } />
        <Route exact path='/sproducts/' component ={ProductList}/>
        <Route exact path='/stalls/' component ={sproduct}/>
        <Route exact path='/stalls/:pk' component ={StallDetailView}/>

    </div>

);

export default BaseRouter;