import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import NutritionalHeader from '../components/NutritionalHeader';
import NutritionalConteiner from '../components/NutritionalConteiner';

const styles = {
    nutritionalMainConteiner: {
        padding: '1em'
    }
}

const 
    pinkTopicCategory = ['Total Fat', 'Satured Fat', 'Trans Fat', 'Cholestrol', 'Sodium'],
    yellowTopicCategory = [ 'Total Carbohydrate', 'Dietary Fiber', 'Sugars'],
    blueTopicCategory = ['Protein', 'Vitamin A', 'Vitamin C', 'Calcium', 'Iron']


class NutritionalFacts extends Component {
    state = { }
    render() {
        return (
            <div style={styles.nutritionalMainConteiner}>
                <HeaderBack/>
                <NutritionalHeader/>
                <NutritionalConteiner topicName={pinkTopicCategory} size={pinkTopicCategory.length} color='#FFE2F5' />
                <NutritionalConteiner topicName={yellowTopicCategory}  size={yellowTopicCategory.length}  color='#FDFFE2'/>
                <NutritionalConteiner topicName={blueTopicCategory} size={blueTopicCategory.length}  color='#E2EEFF'/>
                <br/>
                <hr size='5' color='black'style={{backgroundColor: 'black'}}/>
            </div>
        );
    }
}

export default NutritionalFacts