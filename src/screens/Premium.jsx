import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import PremiumList from '../components/PremiumList';
import Button from '../components/Button';
import money from '../assets/imgs/money.jpg'

var styles = {
    head: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    premiumContainerList: {
        fontSize: '1.1em'
    },
    premiumPurchase: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Button:{
        backgroundColor: '#90F394',
    }
}

class Premium extends Component{
    state = {};
    render() {
        return(
            <div>
                <HeaderBack/>
                <h1 style={styles.head}>Premium</h1>
                <div className='premiumContainerList' style={styles.premiumContainerList}>
                    <PremiumList text='Receitas exclusivas'/>
                    <PremiumList text='Sem anúncios'/>
                    <PremiumList text='Sem anúncios'/>
                    <PremiumList text='Sem anúncios'/>
                </div>  
                <div className='premiumPurchase' style={styles.premiumPurchase}>
                    <h3>USD$ 0,99</h3>
                    <Button name='BUY NOW' style={styles.Button}/>
                    <img src={money} ></img>
                </div>
            </div>
        );
    }
}

export default Premium;