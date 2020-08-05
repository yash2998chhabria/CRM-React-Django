import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


class StallCRUDView extends React.Component {

    



handleFormSubmit=(event,requestType,stallID)=>{
    const name = event.target.elements.name.value;
    const description = event.target.elements.description.value;
    const contact_stall=event.target.elements.contact_stall.value;
    
    // console.log(a,b);

    switch(requestType){
        case 'post':
          return axios.post('http://127.0.0.1:8000/api/editstall',{
              name:name,
              description:description,
              contact_stall:contact_stall
          })
          .then(res=> console.log(res))
          .catch(error=> console.error(error));

        case 'put':
          return axios.put(`http://127.0.0.1:8000/api/${stallID}/`,{
            name:name,
            description:description,
            contact_stall:contact_stall
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
            this.props.stallID)}>
            <Form.Item label="NAME:">
              <Input name="name" placeholder="input the title" />
            </Form.Item>
            
            <Form.Item label="DESCRIPTION:">
              <Input name="description" placeholder="input some content" />
            </Form.Item>
            <Form.Item label="Whatsapp Contact:">
              <Input name="contact_stall" placeholder="input some content" />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
}

export default StallCRUDView;

