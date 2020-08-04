import React from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';
import Acustomform from '../component/ArticleCRUD'; 




class ArticleDetailView extends React.Component {
    // constructor(props){
    //         super(props);
    //         this.state = {
    //             // articles : [],
                
    //         }
    state = {

    article: []
    }
    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                // const sr=res.data
                // console.log(sr);
                this.setState({article:res.data });
                console.log(this.state.article);
            })
            // .then(res => {
            //     // const sr=res.data
            //     // console.log(sr);
            //     this.setState({article:res.data });
            //     console.log(this.state.article);
            // })
    }
    handledelete =(event)=>{
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
            
    }

    

    render(){
        return(
            <div>
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
            <br />
            <br />
            <br />
            <Acustomform 
                requestType = "put"
                articleID = {this.props.match.params.articleID}
                initialV={this.props.article}
                btnText="Update"
                 />
                
            <form onSubmit = {this.handledelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form>
            </div>
        )    
    }

}
export default ArticleDetailView;