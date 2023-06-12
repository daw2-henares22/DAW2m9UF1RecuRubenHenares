import './scss/styles.scss'
import { home } from './vistas/home'
import { header } from './vistas/header'
import { footer } from './vistas/footer'

document.querySelector('header').innerHTML=header.template
document.querySelector('main').innerHTML=home.template
document.querySelector('footer').innerHTML=footer.template