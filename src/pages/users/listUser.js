import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Divider, Tag, Card } from 'antd';

@connect(({ newpage, loading }) => ({ newpage, loading: loading.models.newpage }))
class listUsers extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'newpage/get' });
  }

  render() {
    const columns = [
      {
        title: 'Username',
        dataIndex: 'username',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Password',
        dataIndex: 'password',
      },

      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];
    const {
      newpage: { listUser, pagination },
    } = this.props;
    return (
      <Card>
        <Table columns={columns} dataSource={listUser} rowKey="id" pagination={pagination} />
      </Card>
    );
  }
}

export default listUsers;
