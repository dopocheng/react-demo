import React from 'react';

/**
 * 生成多个随机圆
 * @author pitcher
 * @class ShowCircles
 * @extends {React.Component}
 */
class ShowCircles extends React.Component {

  constructor() {
    super();
    this.state = {
      bgColor : this.showCircle()
    }
  }

  //生成随机颜色
  showCircle() {
    //随机颜色圆组件集合
    var circleCompts = [];
    var colors = ["#39E411", "#E94F37", "#1C9BF1", "#A1D363", "#85FFC7", "#FF8552", "#297373", "#A40E40"];
    for(var i = 0;i < colors.length; i++) {
      var ran = Math.floor(Math.random() * colors.length);
      //将得到的圆组件放到集合 key 多个组件唯一标识
      circleCompts.push (<Circle key={i + colors[ran]} bgColor={colors[ran]}/>);
    }
    console.info(circleCompts)
    return (circleCompts)
  }

  render(){
    return(
      //清除浮动
      <div style={{overflow:"hidden"}}>{this.showCircle()}</div>
    )
  }
}

class Circle extends React.Component {
  
  render() {
    // 定义一个圆形
    var circleStyle = {
      padding: 10,
      margin: 20,
      // display: "inline-block",
      float: "left",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height:  100
    };
    return (
      <div style={circleStyle}></div>
    );
  }
}

export default ShowCircles;
