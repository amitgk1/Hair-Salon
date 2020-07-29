import React from "react";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

const appointmentOptions = [
  { id: 0, text: "haircut appointment" },
  { id: 1, text: "hair color appointment" },
  { id: 2, text: "hair straightening appointment" },
];

const BaseLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const titleFieldChange = (nextValue) =>
    onFieldChange({ title: appointmentOptions[nextValue].text });

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Details" type="title" />
      <AppointmentForm.Select
        readOnly={appointmentData.readOnly}
        type="filledSelect"
        text="title"
        onValueChange={titleFieldChange}
        value={
          appointmentData.title !== undefined
            ? appointmentOptions.filter(
                (obj) => obj.text === appointmentData.title
              )[0].id
            : -1
        }
        availableOptions={appointmentOptions}
      />
      <AppointmentForm.DateEditor
        readOnly={appointmentData.readOnly}
        value={appointmentData.startDate}
        onValueChange={(nextValue) => {
          if (nextValue.getMinutes() !== 0) {
            console.error("שעה עגולה");
          }
          let endDate = new Date(nextValue);
          endDate.setTime(endDate.getTime() + 60 * 60 * 1000);
          onFieldChange({ startDate: new Date(nextValue), endDate });
        }}
      />
      <AppointmentForm.DateEditor
        style={{ marginLeft: 35 }}
        value={appointmentData.endDate}
        readOnly={true}
      />
      <AppointmentForm.Label text="Name" type="title" />
      <AppointmentForm.TextEditor
        readOnly={appointmentData.readOnly}
        onValueChange={(nextValue) => onFieldChange({ name: nextValue })}
        value={appointmentData.name}
      />
    </AppointmentForm.BasicLayout>
  );
};

export default BaseLayout;
