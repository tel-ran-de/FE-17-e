import React, { Component } from "react";

export default class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
    };
  }

  onChangeHandle = (event) => {
      this.setState( {fName: event.target.value} )
  } 

  render() {
    return (
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="New Member"
            aria-label="New Member"
            aria-describedby="button-addon2"
            value={this.state.fName}
            onChange={(event) => {this.onChangeHandle(event)}}
          />
          <button
            class="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={()=>{
                this.props.onAdd( this.state.fName )
                this.setState({fName: ''})
            }}
          >
            Button
          </button>
        </div>
      </form>
    );
  }
}
