import React, { Fragment } from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

const Table = ({ id, columns, data }) => {
  const Table = styled.table`
    border: 1px solid black;
    width: 100%;
    padding: 10px;
    height: 200px;
    align-item: 'center';
    box-shadow: 10px 5px 5px #587fa6;
    border-radius: 7px;
    border-collapse: collapse;
  `
  const TableHeader = styled.th`
    border: '1px solid black';
    background-color: #2B4D5C;
    color:white;
    height: 40px;
  `
  const TableData = styled.td`
    border: 1px solid black;
    text-align: center;
    :hover {
      box-shadow: 10px 5px 5px #ABA6A2;
    }
  `
  const Pagination = styled.div`
    bottom: 20;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  `
  const Button = styled.button`
    border: 1px solid #587fa6;
    border-radius: 6px;
    width: 30px;
    position: relative;
    margin: 2px;
    margin-top: 10px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: 'center';
  `

  columns = [
    { path: 'id', name: 'ID' },
    { path: 'name', name: 'Name' },
    { path: 'age', name: 'Age' },
    { path: 'city', name: 'Cidade' },
    { path: 'favFruit', name: 'favFruit' }
  ]

  data = {
    pages: 5,
    offset: 0,
    total: 5,
    limit: 5,
    items: [
      { id: 1, name: 'Kate', age: 25, favFruit: '🍏' },
      { id: 2, name: 'Tom', age: 23, favFruit: '🍌' },
      { id: 3, name: 'Ann', age: 26, favFruit: '🍊' },
      { id: 4, name: 'Jack', age: 21, favFruit: '🍒' },
      { id: 5, name: 'Everton', age: 21, city: 'Arujá', favFruit: '🍒' }
    ]
  }

  return (
    <Fragment>
      <Table>
        <tbody>
          <tr>
            {columns.map(({ path, name }) => (
              <TableHeader key={path}>{name}</TableHeader>
            ))}
          </tr>
          {data.items.map(rowData => (
            <tr key={rowData['id']}>
              {columns.map(({ path }) => (
                <TableData key={path}>{rowData[path]}</TableData>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {data.offset} de {data.pages}
        <Button>
          <i class='material-icons'>keyboard_double_arrow_left</i>
        </Button>
        <Button>
          <i class='material-icons'>keyboard_double_arrow_right</i>
        </Button>
      </Pagination>
    </Fragment>
  )
}

export default Table
