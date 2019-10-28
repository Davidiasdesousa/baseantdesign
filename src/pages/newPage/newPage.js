import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import { connect } from 'dva';

@connect(({ newpage, loading }) => ({ newpage, loading: loading.models.newpage }))
@Form.create()
class newPage extends Component {
  handleSubmit = () => { 
    const { dispatch, form } = this.props;
    form.validateFields((err, values) => { 
      try {
        dispatch({ type: 'newpage/post', payload: values });
      } catch (error) {
        console.log(error);
      }
    });
  };

  render() {
    const { form } = this.props;

    // Only show error after a field is touched.
    return (
      <Card>
        <Form.Item>
          {form.getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit}>
            Log in
          </Button>
        </Form.Item>
      </Card>
    );
  }
}

export default newPage;
