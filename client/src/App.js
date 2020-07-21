import React from 'react';
import logo from './logo.jpg';

const App = () => {
    return (
        <div className="App">
            <img src={logo} alt="SpaceX" style={styles.image} />
        </div>
    );
}

const styles = {
    image: {
        width: 300,
        display: 'block',
        margin: 'auto',
    }
};

export default App;
