import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [statusFilter, setStatusFilter] = useState('Upcoming');

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => event.status === statusFilter);

  return (
    <div>
      <h1>Eventor</h1>
      <input type="text" placeholder="Search events" />
      <select onChange={e => setStatusFilter(e.target.value)} value={statusFilter}>
        <option value="Upcoming">Upcoming</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Archive">Archive</option>
      </select>
      <ul>
        {filteredEvents.map(event => (
          <li key={event._id}>{event.title} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;