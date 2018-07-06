import React from 'react';
import './ControlDom.css';

/**
 * react 对dom 对象的操作
 * @pitcher
 * @class Colorizer
 * @extends {React.Component}
 */
class Colorizer extends React.Component {
    constructor() {
        super();
        this.state = {
            color: '',
            bgColor: ''
        }
        this.colorValue = this.colorValue.bind(this);
        this.setNerwColor = this.setNerwColor.bind(this);
       
        // this.ref = this.ref.bind(this);
    };
    // 获取输入框内容给color
    colorValue(e) {
        this.setState({
            color: e.target.value
        })
    };

    setNerwColor (e) {
        this.setState({
            bgColor: this.state.color
        });
        this._input.value = "";
        this._input.focus();
        e.preventDefault();
        // 获得是dom对象
        // console.info(this._input);
    };
    
    render() {
        // 不使用箭头函数,要保存下this
        // var self = this;
        var squeryStyle = {
            backgroundColor: this.state.bgColor
        }
        return ( 
            <div className="colorArea">
                <div style={squeryStyle} className="colorSquery"></div>
                <form onSubmit={this.setNerwColor}>
                    <input ref={(el)=>{this._input=el}} onChange={this.colorValue} placeholder="Please enter a color..." />
                    <button type="submit">show</button>
                </form>
            </div>
        );
    }
}

export default Colorizer;