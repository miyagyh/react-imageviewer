import React,{Component} from 'react';
import Viewer from 'viewerjs';
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
        return props.children;
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
