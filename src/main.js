// require('./threeTestDemo/threeBox')
import { CommentWebGL } from './utils/commenWebGL'

const dom = document.getElementById('app')
const instance = new CommentWebGL(dom)
instance.initCanvas(dom)
