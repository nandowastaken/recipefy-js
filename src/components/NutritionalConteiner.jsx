import React, { Component } from 'react';

const styles = {
    topicLine: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

class NutritionalConteiner extends Component {
    state = { }
    render() {
        return (
            <div style={{backgroundColor: this.props.color}}>
                { [...Array(this.props.size)].map((_, index) => 
                    <div key={index}>
                        <hr size='2' color='black'/>
                        <div style={styles.topicLine}>
                            <span>
                                {this.props.topicName[index]}
                                <span>...g</span>
                            </span>
                            <span>...%</span>
                        </div>
                    </div>)
                }
                <hr size='2' color='black'/>
            </div>
        );
    } 
}

export default NutritionalConteiner;