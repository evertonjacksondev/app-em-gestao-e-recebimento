import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'material-icons/iconfont/material-icons.css'
import '../Home/home.css'
import Image0 from './../../images/apartamento0.jpg'
import Image1 from './../../images/apartamento1.jpg'
import Image2 from './../../images/apartamento3.webp'
import Image3 from './../../images/portaria.jpg'
import Table from '../../Components/DesignSystem/Combinations/Table'
import styled from 'styled-components'
import { Icon } from '../../Components/DesignSystem/Elements/Icon'
import { useLocation } from 'react-router-dom'

const Home = () => {
  let location = useLocation();

  const Typography = styled.h1`
    font-size: 26px;
    box-shadow: 0 5px #808080;
  `

  const columns = [
    { path: 'name', name: 'Nome' },
    { path: 'phoneNumber', name: 'Telefone' },
    { path: 'type', name: 'Categoria' }
  ]
  return (
    <div>
      {location.pathname != '/' && <NavBar />}
      <div className='slider-container'>
        <Carousel
          showArrows={true}
          style={{ height: '100% !important' }}
          showThumbs={false}
          showStatus={true}
          interval={2000}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div>
            <img src={Image0} />
          </div>
          <div>
            <img src={Image1} />
          </div>
          <div>
            <img src={Image2} />
          </div>
          <div>
            <img src={Image3} />
          </div>
        </Carousel>
      </div>
      <div style={{ display: 'flex' }}>
        <Icon name={'call'} />
        <Typography>Telefones úteis</Typography>
      </div>
      <Table
        data={[
          {
            name: 'Bombeiro',
            phoneNumber: '11997831826',
            type: 'Serviço Público'
          },
          {
            name: 'Emergência',
            phoneNumber: '11997831826',
            type: 'Serviço Público'
          },
          { name: 'Portaria', phoneNumber: '11997831826', type: 'Condominio' },
          { name: 'Sindico', phoneNumber: '11997831826', type: 'Condominio' }
        ]}
        columns={columns}
      ></Table>
    </div>
  )
}

export default Home
