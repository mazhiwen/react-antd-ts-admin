import * as React from 'react';
import './index.less';
import {Card, Form, Icon, Input, Button, Checkbox } from 'antd';
// import { FormComponentProps } from 'antd/lib/form';
import {  connect } from 'react-redux';

class LoginOrigin extends React.Component <any>{
  
  public handleSubmit = (e:any) => {
    e.preventDefault();
    this.props["form"].validateFields((err:any, values:any) => {
      if (!err) {
        this.props['onIncreaseClick']();
        window.console.log('Received values of form: ', values);
      }
    });
  }
  public render(){
    const {value} = this.props;
    const { getFieldDecorator } = this.props['form'];
    return(
      <div className="login">
        <Card>
          {value}
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>

        </Card>
      </div>
      
    )
  }
}

// Map Redux state to component props
function mapStateToProps(state:any) {
  return {
      value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch:any) {
  return {
      onIncreaseClick: () => dispatch({
        type: 'increase'
      })
  };
}






const Login = connect(mapStateToProps,mapDispatchToProps)(Form.create()(LoginOrigin));

export default Login