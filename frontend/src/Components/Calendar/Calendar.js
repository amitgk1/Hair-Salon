import React, { useEffect } from "react";
import axios from "../../axios-intance";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import BaseLayout from "./AppointmentBaseLayout";
import usePrevios from "../../hoc/usePrevios";
import { differenceBy, every as ldEvery } from "lodash";

const Calendar = ({
  appointments,
  setAppointments,
  changeModalState,
  editable,
}) => {
  const prevAppointments = usePrevios(appointments);

  const isValidHour = (oldAppointments, newAppointment) => {
    if (newAppointment.hasOwnProperty("startDate")) {
      // let valid = oldAppointments.every(
      //   (obj) => obj.startDate.getTime() !== newAppointment.startDate.getTime()
      // );
      let valid = ldEvery(oldAppointments, (obj) => {
        console.log(obj, newAppointment);
        return obj.startDate.getTime() !== newAppointment.startDate.getTime();
      });
      if (!valid) {
        changeModalState({
          open: true,
          description: "you can't add or edit appointments at a booked hour",
          title: "error",
        });
      }
      return valid;
    }
    return true;
  };

  const commitChanges = ({ added, changed, deleted }) => {
    setAppointments((prevAppointments) => {
      let data = [...prevAppointments];
      if (added) {
        if (!isValidHour(data, added)) {
          return prevAppointments;
        }
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id] && isValidHour(data, changed[appointment.id])
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return data;
    });
  };

  useEffect(() => {
    console.log("previos apmts: ", prevAppointments);
    if (prevAppointments && prevAppointments[0] !== "placeholder") {
      //!isEmpty(prevAppointments)
      if (prevAppointments.length < appointments.length) {
        axios
          .post("/api/appointments/", appointments[appointments.length - 1])
          .then((results) => console.log(results));
      } else if (prevAppointments.length === appointments.length) {
        // console.log(
        //   "change",
        //   differenceBy(prevAppointments, appointments, "title")
        // );
        let id;
        prevAppointments.every((obj, index) => {
          id = obj.id;
          return ["title", "startDate", "name"].every(
            (key) => obj[key] === appointments[index][key]
          );
        });
        axios
          .put(
            `api/appointments/${id}`,
            appointments.find((obj) => obj.id === id)
          )
          .then((results) => console.log(results));
      } else if (prevAppointments.length > appointments.length) {
        const id = differenceBy(prevAppointments, appointments, "id")[0].id;
        axios
          .delete(`api/appointments/${id}`)
          .then((results) => console.log(results));
      }
    }
  }, [appointments]);

  return (
    <Paper>
      <Scheduler data={appointments} height={660}>
        <ViewState defaultCurrentDate={new Date()} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton={editable} />
        <AppointmentForm
          readOnly={!editable}
          basicLayoutComponent={BaseLayout}
          textEditorComponent={() => null}
          dateEditorComponent={() => null}
          booleanEditorComponent={() => null}
          messages={{
            moreInformationLabel: null,
            detailsLabel: null,
            dividerLabel: null,
          }}
        />
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
