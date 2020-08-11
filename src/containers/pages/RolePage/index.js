import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table, Pagination } from 'semantic-ui-react'
import {
  fetchRole
} from '../../../actions/role';
import { viewPage } from "../../../actions/view";

const RolePage = (props) => {

  const dispatch = useDispatch();
  const view = 'roles';
  const viewSelected = () => dispatch(viewPage({view}));
  viewSelected();
  const pagedRole = useSelector(state => state.role.paged);
  const params = {
    page: 1,
    limit: 10,
    search: ''
  };

  useEffect(() => {
    onFetchRoles(params)
    return () => {
    }
  }, []);

  const onFetchRoles = (_params) => {
    dispatch(fetchRole(_params));
  }

  return (
    <Fragment>
      <h3>Roles({pagedRole.total})</h3> 
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {pagedRole.items.map((item, i) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.createdAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Pagination
                floated='right'
                boundaryRange={0}
                defaultActivePage={pagedRole.page}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={Math.ceil(pagedRole.total/pagedRole.limit)}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Fragment>
  )
}

export default RolePage;