import React, { Fragment } from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from './ButtonDefault'
import { SectionButton, SectionForm } from '../Elements/Section'
import imageProcess from '../../../images/processing.gif'

export const Table = ({ id, columns, data }) => {
  const navigate = useNavigate()
  const Table = styled.table`
    font-size: 12px;
    width: 100%;
    align-item: 'center';
    border-collapse: collapse;
    @media screen and (max-width: 768px) {
      overflow-x: auto;
    }
  `
  const TableHeader = styled.th`
    align-item: 'center';
    border: '1px solid black';
    background-color: #2b4d5c;
    color: white;
    height: 40px;
  `
  const Overflow = styled.div`
    @media screen and (max-width: 768px) {
      overflow: 'auto';
    }
  `
  const TableData = styled.td`
  align-item: 'center';
    border: 0px solid black;
    text-align: center;
  `
  const TableRow = styled.tr`
  align-item: 'center';
    // :hover {
    //   box-shadow: 10px 5px 5px #aba6a2;
    // }
    :nth-child(even) {
      background-color: #cbd8f0;
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

  return (
    <Fragment>
      <Overflow>
        <Table>
          <tbody>
            <tr>
              {columns.length > 0 &&
                columns.map(({ path, name }) => (
                  <TableHeader key={path}>{name}</TableHeader>
                ))}
            </tr>
            {data.length > 0 &&
              data.map(rowData => (
                <TableRow key={rowData['id']}>
                  {columns.length > 0 &&
                    columns.map(({ path }) => (
                      <Fragment>
                        {path == 'button' ? (
                          <SectionButton>
                            <ButtonDefault
                              key={'button'}
                              name='Detalhes'
                              onClick={() =>
                                navigate(`/encomenda/${rowData._id}`)
                              }
                            />
                          </SectionButton>
                        ) : (
                          <TableData key={path}>{rowData[path]} </TableData>
                        )}
                      </Fragment>
                    ))}
                </TableRow>
              ))}
          </tbody>
        </Table>
        <SectionForm>
          {!data.length && <img src={imageProcess}></img>}
        </SectionForm>
      </Overflow>
    </Fragment>
  )
}

export default Table
