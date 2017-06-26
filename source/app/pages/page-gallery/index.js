import React from 'react'
import ReactDOM from 'react-dom'
import { Items } from './items'
import { scrollElement } from 'util'
import './index.scss'

const style = {
//   background: '#1f0050',
//   color: 'white'
  background: '#e4e4e4 url("./resources/textures/1.jpg")',
  // filter: 'hue-rotate(180deg)',
  color: '#333'
}

const PageGallery = React.createClass({
  scrollToTop(){
    let el = ReactDOM.findDOMNode(this.refs.pageDiv)
    scrollElement(el, el.scrollTop, 0, 300)
  },
  scrollToBottom(){
    let el = ReactDOM.findDOMNode(this.refs.pageDiv)
    scrollElement(el, el.scrollTop, el.scrollHeight - el.offsetHeight, 510)
  },
  renderItem(item){
    let I = item.boxItem
    return (<div className='item' key={item.title}>
        <div className='itemTitle bradley'>
          <div className='horizontal-bar'/>
          {item.title}
          <div className='horizontal-bar'/>
        </div>
        <div className='itemRow'>
          <div className='itemBox'><I/></div>
          <div className='itemDescription'>{
            item.description.map((line, idx)=><div key={idx}>{line}</div>)
          }</div>
        </div>
      </div>)
  },

  render(){
    return (<div className='page' style={style} ref={'pageDiv'}>
        <div className='page-content'>
          {Items.map(this.renderItem)}
        </div>
      </div>)
  }
})

export const Gallery = {
  title: 'Gallery',
  page: PageGallery,
  style,
  cursorColor: {
    active: [0, 255, 200],
    inactive: [0, 255, 200],
    enlarged: [255, 0, 0]
  }
}