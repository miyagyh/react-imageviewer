import React, { Component } from 'react';
import ReactImageViewer from './react-imageviewer';
const items=[
  {url:'https://fengyuanchen.github.io/viewer/img/tibet-2.jpg'},
  {url:'https://fengyuanchen.github.io/viewer/img/tibet-1.jpg'},
  {url:'https://fengyuanchen.github.io/viewer/img/tibet-4.jpg'},
  {url:'https://fengyuanchen.github.io/viewer/img/tibet-7.jpg'},
  {url:'https://fengyuanchen.github.io/viewer/img/tibet-8.jpg'},
  {url:'https://fengyuanchen.github.io/viewer/img/tibet-9.jpg'}
]
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
	  	    <ReactImageViewer type="dom">
            <image class="xxx" src="https://fengyuanchen.github.io/viewer/img/tibet-4.jpg"/>
          </ReactImageViewer>
      </div>
    )
  }
}
