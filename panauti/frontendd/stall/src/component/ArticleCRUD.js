import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


class Acustomform extends React.Component {

    



handleFormSubmit=(event,requestType,articleID)=>{
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    
    // console.log(a,b);

    switch(requestType){
        case 'post':
          return axios.post('http://127.0.0.1:8000/api/',{
              title:title,
              content:content
          })
          .then(res=> console.log(res))
          .catch(error=> console.error(error));

        case 'put':
          return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
              title:title,
              content:content
          })
          .then(res=> console.log(res))
          .catch(error=> console.error(error));
    }

    
  } 
      render(){
      return (
        <div>
        
          <Form onSubmitCapture={(event)=>this.handleFormSubmit(event,
            this.props.requestType,
            this.props.articleID)}>
            <Form.Item label="TITLE:">
              <Input name="title" placeholder="input the title" />
            </Form.Item>
            <Form.Item label="CONTENT:">
              <Input name="content" placeholder="input some content" />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
}

export default Acustomform;

