import 'material-icons/iconfont/material-icons.css'
import { ImageHome } from './Home'

export const Icon = props => {
  return (
    <ImageHome>
      <i class='material-icons'>{props.name ? props.name : ''}</i>
    </ImageHome>
  )
}
