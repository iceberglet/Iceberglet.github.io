import React from 'react';
import { FancyTabPanel, Tab } from 'fancy-tab-panel';

const TabPanel = React.createClass({

  getInitialState(){
    let items = [new Tab('Intro'),
            new Tab('Tab 1'),
            new Tab('Tab 2'),
            new Tab('Tab 3')]
    return {
      items, selected: items[0].id
    }
  },

  onSelectTab(id){
    this.setState({selected: id})
  },

  onAddTab(){
    this.setState(s=>{
      let tab = new Tab('New Tab')
      s.items.push(tab);
      s.selected = tab.id
      return s;
    })
  },

  onRemoveTab(id){
    this.setState(s=>{
      let deleted = s.items.findIndex(item=>item.id === id)
      s.items.splice(deleted, 1)
      if(id === s.selected){
        if(s.items.length > 0)
          s.selected = s.items[s.items.length - 1].id
      }
      return s;
    })
  },

  onFinishDrag(items){
    this.setState({
      items
    })
  },

  render(){
    let item = this.state.items.find(item=>item.id === this.state.selected) || {};
    return (<div>
        <FancyTabPanel onSelectTab = {this.onSelectTab}
                       onAddTab = {this.onAddTab}
                       onRemoveTab = {this.onRemoveTab}
                       onFinishDrag = {this.onFinishDrag}
                       selected = {this.state.selected}
                       items = {this.state.items}
          />
        <div>{'You Just Selected ' + item.title}</div>
      </div>)
  }
})

export const ItemTabPanel = {
  title: 'Fancy Tab Panel',
  boxItem: TabPanel,
  description: ['A Dynamic Tab Panel mimicking the chrome\'s design.',
    'This is just a crude version, but it has everything a tab panel can ask for:',
    '- Dynamically add and delete tabs',
    '- Drag and Drop for tab re-arrangement',
    'Does not use HTML5 DnD, but animation and SVG are still not IE8 friendly',
    'Leaves the entire freedom (Tab transition, naming, etc.) to further design'],
  bottomLine: <div>
    <a href = 'https://github.com/Iceberglet/Iceberglet.github.io/tree/master/source/modules/fancy-tab-panel'>
      <i className='fa fa-github fa-fw'/>
    </a>
  </div>
}
