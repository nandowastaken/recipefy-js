import React, { Component } from 'react';

class NutritionalConteiner extends Component {
    state = { }
    render() {
        return (
            <div style={{backgroundColor: this.props.color}}>
                { [...Array(this.props.size)].map((_, index) => 
                    <div key={index}>
                        <hr size='2' color='black'/>
                        <span>{this.props.topicName[index]}</span>
                    </div>)
                }
                <hr size='2' color='black'/>
            </div>
        );
    } 
}

export default NutritionalConteiner;