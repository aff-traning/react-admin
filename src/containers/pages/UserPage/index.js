import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import {
  fetchUser
} from '../../../actions/user';

const UserPage = (props) => {

  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const pagedUser = useSelector(state => state.user.paged);
  console.log(pagedUser);
  const params = {
    page: 1,
    limit: 10,
    search: ''
  };

  useEffect(() => {
    onFetchUsers(params)
    return () => {
    }
  }, []);

  const onFetchUsers = (_params) => {
    dispatch(fetchUser(_params));
  }

  return (
    <Fragment>
      <h3>Users</h3> {pagedUser.total}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>User Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {pagedUser.items.map((item, i) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.userName}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell>{item.createdAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Fragment>
  )
}

export default UserPage;