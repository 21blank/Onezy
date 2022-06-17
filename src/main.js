// 模块化
import { marquee } from './marquee.js'
import { tab } from './tab.js'
tab()
marquee()

import "./styles/index.css";
import "./styles/tab.less";

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 创建图片的节点
const gif = document.createElement('img');
const png = document.createElement('img');
// 给src赋值
gif.src = gifSrc;
png.src = pngSrc;
//插入节点
document.body.appendChild(gif);
document.body.appendChild(png);

//引入字体图标
import './assets/fonts/iconfont.css'

const jss = () => console.log('处理高版本js语法')
console.log(jss) 