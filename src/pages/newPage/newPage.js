import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import { connect } from 'dva';

/**
 * @connect conecta a classe ao namespace do model
 * Ao efetuar o connect, ela ja abstrai os namespace e ja sabe qual model ele pertence
 * Pode-se passar varios namespace no connect exp
 * connect(({ namespace1, namespace2, namespace3, loading }) =>
 * ({ namespace1, namespace2, namespace3, loading1: loading.models.namespace1, loading.models.namespace2, loading.models.namespace3 }))
 * Pra cada namespace, é necessario ter um loading se não, nenhum load será executado nos namespace subjacentes
 * Loading é a proprieade para fazer o carregamento na tela em quanto algo acontece
 * @formcreate inicializa o form
 */
@connect(({ newpage, loading }) => ({ newpage, loading: loading.models.newpage }))
@Form.create()
class newPage extends Component {
  handleSubmit = () => {
    /**
     * O dispatch é uma propriedade global do ant design (DVA), por isso está nas props por default
     */
    /**
     *  const { dispatch, form:{validateFields} } = this.props;
     *  const { dispatch, form:{getFieldDecorator} } = this.props;
     *
     */
    const { dispatch, form } = this.props;
    form.validateFields((err, values) => {
      try {
        /**
         * Parâmetro do dispatch (1º namespace desejado setado acima (Namespace na model), /post é o efeito disponéivel na model)
         */
        dispatch({ type: 'newpage/post', payload: values });
      } catch (error) {
        console.log(error);
      }
    });
  };

  render() {
    // Abstração do form para montálo e chamar o getFieldDecorator
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
