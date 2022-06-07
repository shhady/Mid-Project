import React, { Component } from "react";

export default class Person extends Component {
  //   state = { value: "" };
  //   handleOnChange = ({ target }) => {
  //     this.setState({ value: target.value });
  //   };
  //   handleUpdateClick = () => {
  //     this.props.handleUpdate(this.props.id, this.state.value);
  //     this.setState({ value: "" });
  //   };
  render() {
    return (
      <div className="item">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            alt="#"
            src={this.props.img}
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
          <h2>{this.props.name}</h2>
        </div>
        <div>{this.props.Questions}</div>
        <div>{this.props.Answers}</div>
        {/* <div>
          <input onChange={this.handleOnChange} value={this.state.value} />
        </div> */}
        <div>
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            Delete
          </button>
          {/* <button onClick={this.handleUpdateClick}>Update</button>*/}
        </div>
      </div>
    );
  }
}
