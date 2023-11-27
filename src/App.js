import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Appointments from './pages/Appointments';
import Layout from './components/Layout';
import appointmentInitialData from './constants/appointmentList'

function App() {

  const [appointmentList, setAppointmentList] = useState(appointmentInitialData);

  const filterOutAppointmentById = (appointmentList, id) => {
    return appointmentList.filter(obj => obj.id !== id);
  };

  const deleteAppointment = ({ id }) => {
    const updatedData = filterOutAppointmentById(appointmentList, id)
    setAppointmentList(updatedData);
  }

  const updateAppointment = (appointment) => {
    const updatedData = filterOutAppointmentById(appointmentList, appointment.id)
    setAppointmentList([...updatedData, appointment]);
  }

  const addAppointment = (appointment) => {
    setAppointmentList((prevList) => [...prevList, appointment]);
  }

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Layout>
              <Home appointmentList={appointmentList} />
            </Layout>
          </Route>
          <Route path='/appointment/:id' exact>
            <Layout>
              <Appointments appointmentList={appointmentList} updateAppointmentList={updateAppointment} deleteAppointment={deleteAppointment} />
            </Layout>
          </Route>
          <Route path='/appointment' exact>
            <Layout>
              <Appointments appointmentList={appointmentList} addAppointmentList={addAppointment} />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
