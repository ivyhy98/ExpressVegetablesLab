const React  = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render(){
        const fruit = this.props.fruit
        return (
          <DefaultLayout title={fruit.name}>
            <h3><a href={'/fruits'}> Back to Fruits Index Page</a></h3>
            The {fruit.name} is {fruit.color} <br />
            {fruit.readyToEat ? " It is ready to eat!" : "It is not ready to eat... don't touch"}
          </DefaultLayout>
        );
    }
}

module.exports = Show;