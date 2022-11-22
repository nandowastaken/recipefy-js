import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import women from '../assets/imgs/women.jpg'
import BoxInfo from '../components/BoxInfo';

var styles = {
    profilePicture: {
        width: '250px',
        height: '250px',
        borderRadius: '200px'
    },

    userProfile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    weightText: {
        opacity: '0.8'
    }
}

class Profile extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>
                <div className='userProfile' style={styles.userProfile}>
                    <img src={women} style={ styles.profilePicture }></img>
                    <h3>{this.props.name}</h3>
                    <p style={styles.weightText}>{this.props.bodyDesc}</p>
                </div>

                <div className='userInfo' style={styles.userInfo}>
                    <BoxInfo name='Diet' description='Gluten free'/>
                    <BoxInfo name='Intolerances' description='Seafood, Milk, Gluten, Water'/>
                </div>
                
            </div>
        );
    }
}
 
export default Profile;