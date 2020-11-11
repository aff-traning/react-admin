import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table, Pagination } from 'semantic-ui-react'
import { useParams } from 'react-router';
import {
  fetchUserByRole
} from '../../../actions/user-role';

const RoleUserPage = (props) => {

  const dispatch = useDispatch();
  const { roleId } = useParams();
  const data = useSelector(state => state.userRole.usersByRole);
  const params = {
    roleId: roleId,
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
    dispatch(fetchUserByRole(_params));
  }

  return (
    <Fragment>
      <h3>Role-Users({data.total})</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.items.map((item, i) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.username}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>{item.createdAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <Pagination
                size="mini"
                floated="right"
                boundaryRange={0}
                defaultActivePage={data.page}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={Math.ceil(data.total / data.limit)}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Fragment>
  )
}

export default RoleUserPage;