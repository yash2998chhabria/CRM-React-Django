import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import {connect,} from "react-redux"
import * as actions from '../store/actions/auth'
import {Link,withRouter} from 'react-router-dom';
const { Header, Content, Footer } = Layout;



class CustomLayout extends React.Component{
    render(){
    return(
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
            <Menu.Item key="0">
                <Link to ='/stalls'>Stalls</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to ='/articles'>Posts</Link>
            </Menu.Item>
                {
                    this.props.isAuthenticated ?
                    <Menu.Item key="2" onClick={this.props.logout}>Logout</Menu.Item>
                    
                :
                    
                    <Menu.Item key="2">
                       <Link to="/login">Login</Link> 
                    </Menu.Item>

                }
                
                
             
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/articles">List</Link></Breadcrumb.Item>
                
            </Breadcrumb>
            <div>   
                <div className="site-layout-content">
                    {this.props.children}
                </div>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Bizness Design ©2020</Footer>
        </Layout>
    );
}
} 
const mapDispatchToProps = dispatch => {
    return{
        logout:() =>dispatch(actions.logout())
    }
}
export default withRouter(connect(null,mapDispatchToProps)(CustomLayout));



