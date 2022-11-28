const React  = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component{
    render(){
        const vegetables = this.props.vegetables;
        return (
          <DefaultLayout title="Vegetables Index PAge">
            <ul>
              {vegetables.map((veggie, i) => {
                return (
                  <li key={i}>
                    The <a href={`/vegetables/${veggie.id}`}>{veggie.name}</a>
                    <a href={`/vegetables/${veggie._id}/edit`}>
                      Edit This Fruit
                    </a>
                    <form action={`/vegetables/${veggie._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="DELETE" />
                    </form>
                  </li>
                );
              })}
            </ul>
            <a href="/vegetables/new">Create a new vegetable</a>
          </DefaultLayout>
        );
    }
};

module.exports = Index;