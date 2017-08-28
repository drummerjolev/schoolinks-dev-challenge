import React, { Component } from 'react';
import Select from 'react-select';
import Table from './Table.js';
import data from './data.js';

import './bootstrap/css/bootstrap.min.css';
import 'react-select/dist/react-select.css';
import './App.css';

function emptyTable() {
  return [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
}

class App extends Component {

  state = {
    options: [],
    selected: [],
    table: emptyTable(),
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

  createTable = (courses) => {
    // matrix holds courses per day per week
    const table = emptyTable();
    courses.forEach(course =>
      course.schedule.forEach(time =>
        table[time.slot - 1][time.day - 1] = course.name
      )
    );
    return table;
  }

  handleOptionChange = (opt) => {
    const currentSchedule = opt.map(course => course.schedule);
    // disable options based on time table clashes
    const options = this.state.options.slice().map(option => {
      var clashes = 0;
      currentSchedule.forEach(schedule =>
        schedule.forEach(time =>
          option.schedule.forEach(currentTime => {
            if (currentTime.day === time.day && currentTime.slot === time.slot) {
              clashes++;
            }
          })
        )
      )
      const newOpt = {...option};
      if (clashes > 0) {
        newOpt.disabled = true;
      } else {
        newOpt.disabled = false;
      }
      return newOpt;
    });
    const table = this.createTable(opt);
    this.setState({
      selected: opt,
      options: options,
      table: table,
    });
  }

  render() {
    const { options, selected, table } = this.state;
    // constraint checker for one course per category
    const chosenCategories = selected.map(course => course.category);
    const missingCategories = ['English', 'Math', 'Science', 'History', 'Elective'].filter(cat =>
      !chosenCategories.includes(cat)
    );
    return (
      <div className="container App">
        <h1>Class registration</h1>
        <div className="col-md-4 col-md-offset-4">
          <Select
            className="selector"
            name="form-field-name"
            value={selected.map(x => x.value)}
            multi={true}
            clearable={false}
            options={options}
            onChange={this.handleOptionChange}
          />
        </div>
        <Table
          data={{
            headers: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            rows: table,
          }}
        />
        <h4>{missingCategories.length === 0 ? 'Awesome! You can now register for classes 🎉' : 'Choose one course for each of the remaining categories: ' + missingCategories.join(', ')}</h4>
        {missingCategories.length === 0 ? <a href="https://www.youtube.com/watch?v=XkCyMDrH0us"><button type="button" className="btn btn-primary btn-lg btn-register">Register</button></a> : null}
      </div>
    );
  }
}

export default App;
