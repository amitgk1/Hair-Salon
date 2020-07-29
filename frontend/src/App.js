import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Calendar from "./Components/Calendar/Calendar";
import Modal from "./Components/Modal/Modal";
import Homepage from "./Components/Homepage/Homepage";
import axios from "./axios-intance";
import AppointmentList from "./Components/AppointmentList/AppointmentList";

const App = () => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    description: "",
  });
  const [appointments, setAppointments] = useState(["placeholder"]);

  useEffect(() => {
    axios.get("api/appointments/").then((results) => {
      const newAppointments = results.data.map((obj) => ({
        ...obj,
        startDate: new Date(obj.startDate),
        endDate: new Date(obj.endDate),
      }));
      setAppointments(newAppointments);
      console.log("data loaded from BE: ", newAppointments);
    });
  }, []);

  const handleModalClose = () => setModal((prev) => ({ ...prev, open: false }));

  return (
    <Layout>
      <Switch>
        <Route path="/book">
          <Calendar
            editable
            changeModalState={setModal}
            {...{ appointments, setAppointments }}
          />
        </Route>
        <Route path="/myAppointments">
          {appointments[0] !== "placeholder" ? (
            <AppointmentList {...{ appointments }} />
          ) : null}
        </Route>
        <Route path="" exact component={Homepage} />
      </Switch>
      <Modal {...modal} onClose={handleModalClose} />
    </Layout>
  );
};

export default App;
