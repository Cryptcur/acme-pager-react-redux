import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { loadEmployees } from "./store/thunks";
import Table from "./components/table";
import PageNum from "./components/pageNum";

class App extends Component {
  constructor() {
    super();
  }
  // componentDidMount() {
  //   this.props.load();
  //   console.log("APP!!!!!", this.props);
  // }
  render() {
    return (
      <div>
        <h1>Acme Pager</h1>
        <HashRouter>
          <Route
            path="/:page?"
            render={props => (
              <main>
                {this.props.load(props.match.params.page)}
                <Table {...props} />
                <PageNum {...props} />
              </main>
            )}
          ></Route>
        </HashRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: page => {
      dispatch(loadEmployees(page));
    }
  };
};
export default connect(null, mapDispatchToProps)(App);
