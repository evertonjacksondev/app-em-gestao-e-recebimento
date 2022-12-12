import styled from 'styled-components'

export const SectionInput = styled.div`
  margin: 2px;
  display: 'flex';
  flex-direction: 'column';
`

export const SectionText = styled.div`
  display: flex;
  flex-direction: collum;
  margin: 10px;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`
export const SectionButton = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  margin: 10px;
  @media screen and (max-width: 768px) {
    align-items: flex-end;
    flex-direction: column;
  }
`

export const SectionForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: collumn;
  }
`
