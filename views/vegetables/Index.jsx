const React  = require('react');

class Index extends React.Component{
    render(){
        const vegetables = this.props.vegetables;
        return (
          <div>
            <h1>Fruits Index Page</h1>
            <ul>
              {vegetables.map((veggie, i) => {
                return (
                  <li key={i}>
                    The <a href={`/vegetables/${i}`}>{veggie.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
    }
};

module.exports = Index;