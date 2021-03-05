import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import Prel from "./Preloader";
import Button from "./BUTT";
class App extends React.Component {
  state = { user: undefined, loading: false };

  async gettusers() {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const resultsJSON = await response.json();

    this.setState({ user: resultsJSON.results, loading: false });
  }

  componentDidMount() {
    //this.gettusers();
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <Prel />;
    return (
      <div>
        <Button start={() => this.gettusers()} label={" Download "} />
        <div>
          <UsersList user={user} />
        </div>
      </div>
    );
  }
}

const rootelement = document.getElementById("root");
ReactDOM.render(<App />, rootelement);
