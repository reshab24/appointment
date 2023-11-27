import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form";

const EditAppointment = ({
  id,
  appointmentList,
  updateAppointmentList,
  deleteAppointment,
}) => {
  const history = useHistory();
  const initialData = appointmentList.find((res) => res.id === id);

  const handleSubmit = (data) => {
    alert(`Appointment Updated  successfully`);
    updateAppointmentList(data);
  };

  const handleDelete = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (confirmation) {
      alert("Appointment deleted successfully");
      deleteAppointment({ id: id });
      history.push(`/`);
    } else {
      alert("Deletion canceled");
    }
  };

  const controlButtons = () => (
    <>
      <button type="submit" className="btn btn-secondary m-1">
        Update
      </button>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </>
  );

  if (initialData) {
    return (
      <Form
        updateAppointmentList={updateAppointmentList}
        initialData={initialData}
        handleSubmit={handleSubmit}
        controlButtons={controlButtons}
      />
    );
  } else {
    return <h2 className="text-danger">Appointment not found</h2>;
  }
};

export default EditAppointment;
