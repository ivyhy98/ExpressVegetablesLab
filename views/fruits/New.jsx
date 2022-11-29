const React = require('react');
const DefaultLayout = require('../layout/Default');

class New extends React.Component{

    render(){
        return (
          <DefaultLayout title="Create New Fruit">
            <form action="/fruits" method="POST">
              Name: <input type="text" name="name" /> <br />
              Color: <input type="text" name="color" /> <br />
              Is ready to eat: <input type="checkbox" name="readyToEat" /> <br />
              <input type="submit" name="" value="Create Fruit" />
            </form>
          </DefaultLayout>
        );
    }
}

module.exports = New;