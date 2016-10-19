import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
require('react-big-calendar/lib/css/react-big-calendar');

BigCalendar.momentLocalizer(moment);

class App extends Component {
  render() {
    return (
      <div className="calendar-app">
        <BigCalendar
          events={[]}
          startAccessor='startDate'
          endAccessor='endDate'
          timeslots={3}>
        </BigCalendar>
      </div>
    )
  }
}

export default App;
