import React from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';
import Acustomform from '../component/ArticleCRUD'; 
import {  Item, Label ,Message, List} from 'semantic-ui-react'
import {  Avatar, Space } from 'antd';



class StallDetailVieww extends React.Component {
    // constructor(props){
    //         super(props);
    //         this.state = {
    //             // articles : [],
                
    //         }
    state = {

    data: [],
    products:[]
    }
    componentDidMount() {
        const pk = this.props.match.params.pk;
        axios.get(`http://127.0.0.1:8000/api/stall/${pk}`)
            .then(res => {
                // const sr=res.data
                // console.log(sr);
                this.setState({data:res.data });
                this.setState({products:res.data.product})
                console.log(this.state.data);
                console.log(this.state.products);
            })
            // .then(res => {
            //     // const sr=res.data
            //     // console.log(sr);
            //     this.setState({article:res.data });
            //     console.log(this.state.article);
            // })
    }
    // handledelete =(event)=>{
    //     const articleID = this.props.match.params.articleID;
    //     axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
            
    // }

    

    render(){
        let products =this.state.products;
        return(
            <div>
                {products.map((prodd)=>(
                    <h4>
                        Name:{prodd.product_name}<br/>
                        Img:{prodd.product_image}<br/>
                        Price:{prodd.price}<br/>
                    </h4>
                ))}
                <h1>{this.props.name}</h1>
            <Card title={this.state.data.name}>
                <p>Description{this.state.data.description}</p>
                <p>Contact{this.state.data.contact_stall}</p>
                <p>IMG:{this.state.data.cover}</p>
             
            </Card>

            
            {/* <List.Item key={this.state.products.id}>
            <List.Item.Meta
             avatar={<Avatar src={this.state.products.product_image} />}
            //  title={<a href={`articles/${this.state.products.id}`}>{this.state.products.id}</a>}
            //  description={item.content}
             />
            </List.Item> */}
                
            {/* ))} */}
           
            <br />
            <br />
            <br />
            {/* <Acustomform 
                requestType = "put"
                articleID = {this.props.match.params.articleID}
                initialV={this.props.article}
                btnText="Update"
                 /> */}
                
            {/* <form onSubmit = {this.handledelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form> */}
            </div>
        )    
    }

}
export default StallDetailVieww;