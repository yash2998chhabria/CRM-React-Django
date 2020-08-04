import React from 'react';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
// import Password from 'antd/lib/input/Password';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const loginPage = props => {
    
  const onFinish = values => {
    props.onAuth(values.username,values.password)
    console.log('Success:', values);
    props.history.push('/articles')
  };
  

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>

        or

        <NavLink to ='/signup/'>
              Signup
        </NavLink>
      </Form.Item>
    </Form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
    return{
        onAuth:(username,password) =>dispatch(actions.authLogin(username,password))
    }
}

export default connect(null,mapDispatchToProps)(loginPage);