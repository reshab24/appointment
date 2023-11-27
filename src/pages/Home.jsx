import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useHistory } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import buildDateTime, { fromDateTimeToDateAndTime } from "../helper/dateformater";

const Home = ({ appointmentList }) => {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const transformedAppointments = appointmentList.map((appointment) => ({
      id: appointment.id,
      title: `${appointment.patientName} | ${appointment.doctorName}`,
      start: buildDateTime(
        appointment.appointmentDate,
        appointment?.appointmentStartTime,
      ),
      end: buildDateTime(
        appointment.appointmentDate,
        appointment?.appointmentEndTime,
      ),
    }));
    setEvents(transformedAppointments);
  }, [appointmentList]);

  const handleSelectEvent = ({ id }) => {
    history.push(`/appointment/${id}`);
  };

  const handleSlotSelect = (event) => {
    const { formattedDate, formattedTime } = fromDateTimeToDateAndTime(event.start);

    const stateData = {
      appointmentDate: formattedDate,
      appointmentStartTime: event.slots.length > 1 ? formattedTime : ""
    };
    history.push(`/appointment`, stateData);
  };


  return (
    <>
      <Calendar
        localizer={localizer}
        views={['month', 'week', 'day']}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: 300, cursor: 'pointer' }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSlotSelect}
        selectable={true}
      />
    </>
  );
};

export default Home;
