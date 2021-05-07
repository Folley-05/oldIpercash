import React, { Component } from 'react'

class Comp extends Component {

    state={
        sec: 0
    }
    go=()=>{
        let a=this.state.sec+1
        this.setState({sec: a})
    }
    componentDidMount() {
        setInterval(this.go, 1000);
    }
    
    render() {
        return (
            <div>
                {this.state.sec}
            </div>
        )
    }
}

export default Comp
