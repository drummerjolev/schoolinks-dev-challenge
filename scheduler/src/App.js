import React, { Component } from 'react';
import logo from './logo.svg';

import './bootstrap/css/bootstrap.min.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import data from './data.js';
import './App.css';

class App extends Component {

  state = {
    options: [],
    selected: [],
  }

  componentDidMount() {
    this.setState({
      options: data.classes.map(course => {
        return {
          value: course.id,
          label: course.name,
          clearableValue: true,
          ...course
        }
      })
    })
  }

  handleOptionChange = (opt) => {
    // TODO: update unselectedable options based on clashes
    this.setState({
      selected: opt,
    })
  }

  render() {
    const { options, selected } = this.state;
    return (
      <div className="container App">
        <h1>Class registration</h1>
        <div className="col-md-4 col-md-offset-4">
          <Select
            name="form-field-name"
            value={selected.map(x => x.value)}
            multi={true}
            clearable={false}
            options={options}
            onChange={this.handleOptionChange}
          />
        </div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
            <td>Body content 3</td>
            <td>Body content 4</td>
            <td>Body content 5</td>
          </tr>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
            <td>Body content 3</td>
            <td>Body content 4</td>
            <td>Body content 5</td>
          </tr>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
            <td>Body content 3</td>
            <td>Body content 4</td>
            <td>Body content 5</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
