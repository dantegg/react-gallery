import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDOM from 'react-dom';

const Test = React.createClass({
  getInitialState() {
    return {
      show: true,
      count:0,
      pic:false
    };
  },
  componentDidMount(){
    setInterval(this.onClick,5000);
  },
  onClick() {
    if(this.state.count%2){
      this.setState({
        pic: !this.state.pic
      })
    }
    this.setState({
      show: !this.state.show,
      count:this.state.count+1
    });
  },
  render() {
    var pic1 = this.state.pic?<img src="../images/chrome.png" style={{height:'50px'}} />:<img src="../images/ie.png" style={{height:'50px'}} />
    var pic2 = this.state.pic?<img src="../images/firefox.png" style={{height:'50px'}} />:<img src="../images/safari.png" style={{height:'50px'}} />
    return (
      <div>
        <p className="buttons" style={{display:'none'}}>
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content"
        animConfig={[
                    { opacity: [1, 0], translateY: [0, 50] },
                    { opacity: [1, 0], translateY: [0, -50] }
                  ]}>
          {this.state.show ? [
            <div className="demo-kp" key="a">
              {pic1}
            </div>,
            <div className="demo-listBox" key="b">
              <div className="demo-list">
                <div className="title"></div>
                {pic2}
              </div>
            </div>
          ] : null}
        </QueueAnim>
      </div>
    );
  }
});

ReactDOM.render(<Test />, document.getElementById('gallery'));
