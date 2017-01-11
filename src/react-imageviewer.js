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
    render(){
        return (
            <div className="react-imageviewer-container" ref="viewer">
                {
                    this.props.items.map((item)=>{
                        return (
                            <img src={item.url} key={item.url}/>
                        )
                    })
                }
            </div>
        )
    }
}