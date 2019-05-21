/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { Redirect } from 'react-router-dom';
import styled from '@emotion/styled';

const Img = styled.img`
  width: 80%;
  max-width: 500px;
`;

const Input = styled.input`
  width: 250px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid red;
  font-size: 28px;
  font-weight: bold;
`;

const Button = styled.button`
  border: 2px solid #f44336;
  padding: 12px 12px;
  margin: 10px;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  background: #f44336;
  color: white;
  &:hover {
    color: red;
    background-color: transparent;
  }
`;

const H1 = styled.h1`
  display: inline-block;
`;

const Div = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 50%;
  margin: 20px;
`;

class DetailsPage extends Component {
  state = { showForm: false, input: '' };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem(
      this.props.currentCharacter.id,
      JSON.stringify({
        ...this.props.currentCharacter,
        name: this.state.input
      })
    );
    this.setState({ showForm: false });
  };

  enableEdit = () => {
    this.setState({
      showForm: true,
      input: JSON.parse(localStorage[this.props.currentCharacter.id]).name
    });
  };
  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input value={this.state.input} onChange={this.handleChange} />
        <Button type="submit">Save</Button>
      </form>
    );
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    //use localStorage newName for characters
  }

  render() {
    if (this.props.currentCharacter) {
      return (
        <Fragment>
          <Nav />
          <Div>
            <Column>
              {/* <h1> {JSON.parse(localStorage[this.props.currentCharacter.id]).name}</h1> */}
              {this.state.showForm ? (
                this.renderForm()
              ) : (
                <div>
                  <H1> {JSON.parse(localStorage[this.props.currentCharacter.id]).name}</H1>
                  <Button onClick={this.enableEdit}>Edit</Button>
                </div>
              )}
              <Img
                src={`${this.props.currentCharacter.thumbnail.path}.${
                  this.props.currentCharacter.thumbnail.extension
                }`}
              />
            </Column>
            <Column>
              <h4>Description</h4>
              <p>
                {this.props.currentCharacter.description || `There isn't a description available`}
              </p>

              <h4>Series</h4>
              <ul>
                {this.props.currentCharacter.series.items.map(serie => {
                  return <li>{serie.name}</li>;
                })}
              </ul>
            </Column>
          </Div>
        </Fragment>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentCharacter: state.Characters.currentCharacter
  };
};

export default connect(mapStateToProps)(DetailsPage);
