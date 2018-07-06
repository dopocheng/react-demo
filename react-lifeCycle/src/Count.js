import React from 'react';


/**
 * 点击按钮计数，键盘按键事件
 * @pitcher
 * @class CountParent
 * @extends {React.Component}
 */
class CountParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this);
    }

    increase(e) {
        var currentCount = this.state.count;
        //react 对键盘按键的封装
        if (e.shiftKey === true) {
            currentCount += 10;
        }else {
            currentCount += 1;
        }
        this.setState({
            // count: this.state.count,
            count: currentCount
        })
    }

    render() {
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineWeight: "3px"
        }

        return(
            <div style={backgroundStyle}>
            <Count display={this.state.count}/>
            <button style={buttonStyle} onClick={this.increase}>+</button>
            </div>
        );
    }
}

//子组件
class Count extends React.Component {
    CountStyle = {

    }

    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        }
        return(
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}

export default CountParent