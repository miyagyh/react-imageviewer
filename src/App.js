import React, { Component } from 'react';
import ReactImageViewer from './react-imageviewer';
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
	  	<ReactImageViewer items={[{url:'https://fengyuanchen.github.io/viewer/img/tibet-1.jpg'}]}/>
      </div>
    )
  }
}