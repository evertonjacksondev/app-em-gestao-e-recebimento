import React from 'react'
import styled from 'styled-components'

const Table = ({ id, columns, data }) => {
  const Table = styled.table`
    border: 1px solid black;
    width: 100%;
    height: 200px;
    border-collapse: collapse;
  `
  const TableHeader = styled.th`
    border: '1px solid black';
  `
  const TableData = styled.td`
    border: 1px solid black;
    text-align: center;
    :hover {
      box-shadow: 0 0 10px #808080;
    }
  `  

  columns = [
    { path: 'id', name: 'ID' },
    { path: 'name', name: 'Name' },
    { path: 'age', name: 'Age' },
    { path: 'city', name: 'Cidade' },
    { path: 'favFruit', name: 'favFruit' }
  ]

  data = [
    { id: 1, name: 'Kate', age: 25, favFruit: '🍏' },
    { id: 2, name: 'Tom', age: 23, favFruit: '🍌' },
    { id: 3, name: 'Ann', age: 26, favFruit: '🍊' },
    { id: 4, name: 'Jack', age: 21, favFruit: '🍒' },
    { id: 5, name: 'Everton', age: 21,city:'Arujá', favFruit: '🍒' }
  ]

  return (
    <Table>
      <tbody>
        <tr>
          {columns.map(({ path, name }) => (
            <TableHeader key={path}>{name}</TableHeader>
          ))}
        </tr>
        {data.map(rowData => (
          <tr key={rowData['id']}>
            {columns.map(({ path }) => (
              <TableData key={path}>{rowData[path]}</TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Table
