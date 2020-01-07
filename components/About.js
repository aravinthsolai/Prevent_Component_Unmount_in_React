import React, { Component } from "react";
import { Prompt } from "react-router-dom";
class About extends Component {
  state = {
    save_status: "Not Saved"
  };

  render() {
    return (
      <div>
        <Prompt
          when={!!this.state.save_status}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <h1> it is a about page</h1>
        <div>
          <button onClick={() => this.setState({ save_status: "" })}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default About;
