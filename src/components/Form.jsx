import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Appointments = ({ initialData, handleSubmit, controlButtons }) => {
  
  const history = useHistory();
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const convertCamelToNormal = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (s) => s.toUpperCase());
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName]) {
        newErrors[fieldName] = `${convertCamelToNormal(fieldName)} is required`;
      }
    });
    
     if (formData.appointmentStartTime && formData.appointmentEndTime) {
      const startTime = new Date(`1970-01-01T${formData.appointmentStartTime}`);
      const endTime = new Date(`1970-01-01T${formData.appointmentEndTime}`);

      if (endTime <= startTime) {
        newErrors.appointmentEndTime =
          "Appointment End Time should be later than Appointment Start Time";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
     if (isValid) {
      handleSubmit(formData);
      history.push(`/`);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
     setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="patientName" className="form-label">
                Patient Name
              </label>
              <input
                type="text"
                className="form-control"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="doctorName" className="form-label">
                Doctor Name
              </label>
              <input
                type="text"
                className="form-control"
                id="doctorName"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="appointmentDate" className="form-label">
                Appointment Date
              </label>
              <input
                type="date"
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="appointmentStartTime" className="form-label">
                Appointment Start Time
              </label>
              <input
                type="time"
                className="form-control"
                id="appointmentStartTime"
                name="appointmentStartTime"
                value={formData.appointmentStartTime}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="appointmentEndTime" className="form-label">
                Appointment End Time
              </label>
              <input
                type="time"
                className="form-control"
                id="appointmentEndTime"
                name="appointmentEndTime"
                value={formData.appointmentEndTime}
                onChange={handleChange}
              />
            </div>
            {Object.keys(errors).map((fieldName) => (
               errors[fieldName] && (
               <div key={fieldName} className="alert alert-danger">
                {errors[fieldName]}
                </div>
               )
            ))}
            {controlButtons()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
