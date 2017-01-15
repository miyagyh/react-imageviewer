import React,{Component} from 'react';
import Viewer from 'viewerjs';
const ImageList=(props)=>{
  return (
    <div>
      {props.items.map(item=><img key={item.id} src={item.src} className={item.className}/>)}
    </div>
  )
}
export default class ReactImageViewer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let dom=this.renderViewerDom();
        this.viewer = new Viewer(dom,this.getOptions());
    }
    componentDidUpdate(){
        if(this.viewer){
            this.viewer.update();
        }else{
            let dom=this.renderViewerDom();
            this.viewer = new Viewer(dom,this.getOptions());
        }
    }
    componentWillUnmount(){
        this.viewer && this.viewer.destroy();
    }
    getOptions(){
        return {};
    }
    renderViewerDom(){
        return this.refs.viewer;
    }
    renderImageViewerContent(){
      let props=this.props;
      if(props.type==='data' && props.items){
        return props.items.map(item=><img src={item.url} key={item.url}/>);
      }else if(props.type==='dom' && props.children){
        let _children = props.children;
        if(Array.isArray(props.children)){
          let count=0;
          let items=props.children.map(item=>{return {id:count++,src:item.props.src,className:item.props['class']}})
          _children = <ImageList items={items}/>
        }else {
          let items=[{id:0,src:props.children.props.src,className:props.children.props['class']}]
          _children = <ImageList items={items}/>
        }
        return _children;
    }
  }
    render(){
        return (
            <div className="react-imageviewer-container" ref="viewer">
                {this.renderImageViewerContent()}
            </div>
        )
    }
}
