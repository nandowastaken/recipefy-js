import React, { Component } from 'react';
import breadBanner from '../assets/imgs/breadBanner.jpg'

const styles = {
    imgConteiner: {
        height: '100px',
        overflow: 'hidden',
        borderBottom: '5px solid black'
    },

    banner: {
        width: '100%',
        overflow: 'hidden'
    },
    
    titleNutritional: {
        lineHeight: '1.5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    calories: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    basicInformations: {
        backgroundColor: '#EBFFE2',
    }
}

class NutritionalHeader extends Component {
    state = { }
    render() {
        return (
            <div>
                <div>
                    <div className="titleNutritional" style={styles.titleNutritional}>
                        <h2>Bread</h2>
                        <span>100g</span>
                    </div>

                    <div className="imgConteiner" style={styles.imgConteiner}>
                        <img src={breadBanner} alt="some breads" style={styles.banner}/>
                    </div>

                    <div className="basicInformations" style={styles.basicInformations}>

                        <span>Amount per serving</span> 

                        <hr size='1' color='black'/>
                        
                        <div className="calories" style={styles.calories}>
                            <span>Calories</span>
                            <span>265kcal</span>
                        </div>

                        <hr size='5' color='black'style={{backgroundColor: 'black'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NutritionalHeader