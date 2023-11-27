import React from "react";
import { useLocation } from 'react-router-dom';

import Form from "./Form";
const AddAppointment = ({ addAppointmentList }) => {

    const { state } = useLocation();

    const { appointmentDate, appointmentStartTime } = state || {};

    const initialData = {
        id: Math.floor(1000 + Math.random() * 9000),
        patientName: "",
        doctorName: "",
        appointmentDate: appointmentDate || "",
        appointmentStartTime: appointmentStartTime || "",
        appointmentEndTime: "",
    };

    const handleSubmit = (data) => {
        addAppointmentList(data);
        alert(`Appointment Created successfully`);
    };

    const controlButtons = () => {
        return (
            <button type="submit" className="btn btn-primary">
                Save
            </button>
        );
    };

    return (
        <Form
            addAppointmentList={addAppointmentList}
            initialData={initialData}
            handleSubmit={handleSubmit}
            controlButtons={controlButtons}
        />
    );
};

export default AddAppointment;