import React, { useState, useEffect } from 'react';
import FieldOptions from './FieldOptions';
import { MenuItem, Select, TextField } from '@mui/material';

const DynamicForm = () => {
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [fieldType, setFieldType] = useState('');
  const [fieldDisplayName, setFieldDisplayName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('String');
  const [validation, setValidation] = useState('');
  const [isMandatory, setIsMandatory] = useState('No');
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    // Reset field values on button click
    setFieldDisplayName('');
    setFieldDataType('String');
    setValidation('');
    setIsMandatory('No');
    setDropdownOptions([]);
  }, [buttonClickCount]);

  const handleButtonClick = () => {
    if (buttonClickCount < 4) {
      setButtonClickCount(buttonClickCount + 1);
    }
  };

  const handleFieldTypeChange = (type) => {
    setFieldType(type);
    setFieldDisplayName('');
    setFieldDataType('String');
    setValidation('');
    setIsMandatory('No');
    setDropdownOptions([]);
  };

  const handleDataTypeChange = (dataType) => {
    setFieldDataType(dataType);
    setValidation('');
    setIsMandatory('No');
  };

  const handleConfirm = () => {
    // Print all values in the console
    console.log({
      FieldType: fieldType,
      FieldDisplayName: fieldDisplayName,
      FieldDataType: fieldDataType,
      Validation: validation,
      IsMandatory: isMandatory,
      DropdownOptions: dropdownOptions,
    });
  };

  // console.log(fieldType);

  return (
    <div>
      <button onClick={handleButtonClick}>
        Click me ({buttonClickCount}/4)
      </button>

      {buttonClickCount > 0 && (
        <div className="flex gap-4 mt-12">
          <div className="flex flex-col items-start">
            Field Type:
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={fieldType}
              onChange={(e) => handleFieldTypeChange(e.target.value)}
              label="Field Type"
              sx={{ minWidth: '12rem', textAlign: 'left' }}
            >
              <MenuItem value="text">Text</MenuItem>
              <MenuItem value="dropdown">Dropdown</MenuItem>
              <MenuItem value="date">Date</MenuItem>
            </Select>
          </div>

          <div className="flex flex-col items-start">
            Field Display Name:
            <TextField
              id="filled-basic"
              label="Field Display name"
              variant="filled"
              value={fieldDisplayName}
              onChange={(e) => setFieldDisplayName(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-start">
            Field Data Type:
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={fieldDataType}
              label="Field Data Type"
              sx={{ minWidth: '12rem', textAlign: 'left' }}
              onChange={(e) => handleDataTypeChange(e.target.value)}
            >
              <MenuItem value="String">String</MenuItem>
              <MenuItem value="Date">Date</MenuItem>
              <MenuItem value="Number">Number</MenuItem>
            </Select>
          </div>

          <FieldOptions
            fieldType={fieldType}
            fieldDataType={fieldDataType}
            validation={validation}
            isMandatory={isMandatory}
            fieldDisplayName={fieldDisplayName}
            setValidation={setValidation}
            setIsMandatory={setIsMandatory}
          />

          <div className="flex flex-col items-start">
            Mandatory:
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isMandatory}
              onChange={(e) => setIsMandatory(e.target.value)}
              sx={{ minWidth: '6rem', textAlign: 'left' }}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </div>
        </div>
      )}

      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default DynamicForm;
