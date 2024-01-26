import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const CustomInput = ({
  FieldType,
  FieldDisplayName,
  FieldDataType,
  Validation,
  IsMandatory,
}) => {
  let inputComponent;

  if (FieldType === 'dropdown') {
    inputComponent = (
      <div className="flex flex-col">
        <Select sx={{ minWidth: '12rem', textAlign: 'left' }}>
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="CSE">CSE</MenuItem>
          <MenuItem value="ECE">ECE</MenuItem>
          <MenuItem value="Mech">Mech</MenuItem>
          <MenuItem value="EEE">EEE</MenuItem>
        </Select>
      </div>
    );
  } else if (FieldType === 'text') {
    const inputType = FieldDataType === 'Number' ? 'number' : 'text';

    if (Validation && Validation.maxLimit) {
      inputComponent = (
        <TextField
          type={inputType}
          maxLength={Validation.maxLimit}
          required={IsMandatory === 'Yes'}
        />
      );
    } else {
      inputComponent = (
        <TextField type={inputType} required={IsMandatory === 'Yes'} />
      );
    }
  } else if (FieldType === 'date') {
    inputComponent = (
      <TextField
        type="date"
        min={Validation && Validation.fromDate}
        max={Validation && Validation.toDate}
        required={IsMandatory === 'Yes'}
      />
    );
  } else {
    // Show an alert if none of the conditions are satisfied
    alert('Invalid conditions!');
    return null;
  }

  const handleSubmit = () => {
    console.log(
      FieldType,
      FieldDisplayName,
      FieldDataType,
      Validation,
      IsMandatory
    );
  };

  return (
    <div className="p-12 items-center flex flex-col w-[40%]">
      <Typography variant="h4">Give your input here</Typography>
      <div className="flex items-center gap-4 p-4">
        <Typography variant="h6">{FieldDisplayName}</Typography>
        {inputComponent}
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default CustomInput;
