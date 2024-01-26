import React, { useState, useEffect } from 'react';
import FieldOptions from './FieldOptions';
import { MenuItem, Select, TextField } from '@mui/material';

const AddFields = ({ setFieldData, clearAll }) => {
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const [fieldType, setFieldType] = useState('');
  const [fieldDisplayName, setFieldDisplayName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('');
  const [validation, setValidation] = useState('');
  const [isMandatory, setIsMandatory] = useState('No');

  useEffect(() => {
    setFieldType('');
    setFieldDisplayName('');
    setFieldDataType('');
    setValidation('');
    setIsMandatory('');
  }, [buttonClickCount]);

  // const clearAll = () => {};

  const handleConfirm = () => {
    // Print all values in the console
    const fieldData = {
      FieldType: fieldType,
      FieldDisplayName: fieldDisplayName,
      FieldDataType: fieldDataType,
      Validation: validation,
      IsMandatory: isMandatory,
    };

    setFieldData(fieldData);
  };

  useEffect(() => {
    setValidation();
  }, [fieldDataType]);

  return (
    <div>
      <button
        onClick={() =>
          buttonClickCount < 4 && setButtonClickCount(buttonClickCount + 1)
        }
      >
        Add Field ({buttonClickCount}/4)
      </button>

      {buttonClickCount > 0 && (
        <div className="flex gap-4 mt-12">
          <div className="flex flex-col items-start">
            Field Type:
            <Select
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
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
              value={fieldDataType}
              label="Field Data Type"
              sx={{ minWidth: '12rem', textAlign: 'left' }}
              onChange={(e) => setFieldDataType(e.target.value)}
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
            sendData={setValidation}
          />

          <div className="flex flex-col items-start">
            Mandatory:
            <Select
              value={isMandatory}
              onChange={(e) => setIsMandatory(e.target.value)}
              sx={{ minWidth: '6rem', textAlign: 'left' }}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </div>

          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default AddFields;
