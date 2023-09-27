import React, { Component }from 'react';
import ReactDOM from 'react-dom/client';

import Count from './Count';
import Button from './Button';

//App component
class App extends Component {
    state = {
        count : 0
    }

    incrementCount = value => {
        this.setState( prevState => {
           return {
            count : prevState.count +value
           }
        })
    }

    render() {
        return(
            <div style={{textAlign : 'center'}}>
                <br />
                <Count counter={this.state.count} />
                <br />

                <Button incrementCount={this.incrementCount} value={1}/>
                <Button incrementCount={this.incrementCount} value={2}/>
                <Button incrementCount={this.incrementCount} value={5}/>
                <Button incrementCount={this.incrementCount} value={10}/>
                <Button incrementCount={this.incrementCount} value={20}/>
                <Button incrementCount={this.incrementCount} value={50}/>
                <Button incrementCount={this.incrementCount} value={100}/>
            </div>
        );
    };
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);