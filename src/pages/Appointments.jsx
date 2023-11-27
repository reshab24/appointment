import React from "react";
import { useParams } from "react-router-dom";
import AddAppointment from "../components/AddAppointment";
import EditAppointment from "../components/EditAppointment";

const Appointments = ({
  appointmentList,
  updateAppointmentList,
  addAppointmentList,
  deleteAppointment
}) => {
  const { id } = useParams();
  return (
    <>
      {id ? (
        <EditAppointment
          id={Number(id)}
          appointmentList={appointmentList}
          updateAppointmentList={updateAppointmentList}
          deleteAppointment={deleteAppointment}
        />
      ) : (
        <AddAppointment addAppointmentList={addAppointmentList} />
      )}
    </>
  );
};

export default Appointments;
