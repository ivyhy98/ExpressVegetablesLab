const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const { name, color, readyToEat } = this.props.vegetable;
    return (
      <DefaultLayout title="Edit Page">
        <form
          action={`/vegetables/${this.props.vegetable._id}?_method=PUT`}
          method="POST"
        >
          Name: <input type="text" name="name" defaultValue={name} />
          Color: <input type="text" name="color" defaultValue={color} />
          Is Ready To Eat:
          {readyToEat ? (
            <input type="checkbox" name="readyToEat" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToEat" />
          )}
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;