const React  = require('react');

class Show extends React.Component {
    render(){
        const fruit = this.props.fruit
        return (
          <div>
            <h1>Show Page</h1>
            <h3>Back To <a href={'/fruits'}>Fruits Index Page</a></h3>
            The {fruit.name} is {fruit.color} <br />
            {fruit.readyToEat ? " It is ready to eat!" : "It is not ready to eat... don't touch"}
          </div>
        );
    }
}

module.exports = Show;