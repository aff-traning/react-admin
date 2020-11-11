import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table, Pagination } from 'semantic-ui-react';
import { useParams } from 'react-router';
import {
  fetchRoleByUser
} from '../../../actions/user-role';

const UserRolePage = (props) => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const data = useSelector(state => state.userRole.rolesByUser);
  const params = {
    userId: userId,
    page: 1,
    limit: 10,
    search: ''
  };

  useEffect(() => {
    onFetchRoles(params);
    return () => {
    }
  }, []);

  const onFetchRoles = (_params) => {
    dispatch(fetchRoleByUser(_params));
  }

  return (
    <Fragment>
      <h3>Roles({data.total})</h3>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.items.map((item, i) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
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
                totalPages={Math.ceil(data.total/data.limit)}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Fragment>
  )
}

export default UserRolePage;