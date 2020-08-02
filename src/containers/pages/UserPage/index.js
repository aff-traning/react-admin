import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table, Pagination } from 'semantic-ui-react'
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
      <h3>Users({pagedUser.total})</h3> 
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
              <Pagination
                floated='right'
                boundaryRange={0}
                defaultActivePage={pagedUser.page}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={Math.ceil(pagedUser.total/pagedUser.limit)}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Fragment>
  )
}

export default UserPage;