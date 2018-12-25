import React, { Component } from "react";
import Modal from "./Modal/Modal.js";
import "./App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>Show Modal Box</button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default App;
