const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component{
    render(){
        const {fruits} = this.props;
        return(
            <DefaultLayout title={"Fruits Index Page"}>
                <ul>
                {
                    fruits.map((fruit, i)=>{
                        return (
                          <li key={i}>
                            The{" "}
                            <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                            <a href={`/fruits/${fruit._id}/edit`}>Edit this fruit</a>
                            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                              <input type="submit" value="DELETE" />
                            </form>
                          </li>
                        );
                    })
                }
                </ul>
                <h3>Create a <a href='/fruits/new'>New Fruit</a></h3>
                <h3>Back to <a href='/'>Home</a></h3>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
