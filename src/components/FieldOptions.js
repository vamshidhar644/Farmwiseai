import { MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const FieldOptions = ({
  fieldType,
  fieldDataType,
  validation,
  setValidation,
  dropdownOptions,
  setDropdownOptions,
}) => {
  const fieldOptionss = () => {
    switch (fieldDataType) {
      case 'Date':
        return (
          fieldType === 'date' && (
            <div className="flex gap-2 h-full">
              <div className="flex flex-col">
                From Date:
                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                  <input
                    datepicker
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                To Date:
                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                  <input
                    datepicker
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>
          )
        );
      case 'Number':
        return (
          <div className="flex flex-col">
            Max Limit:
            <TextField
              id="filled-basic"
              label="Field max length allowed"
              variant="filled"
              value={validation}
              onChange={(e) => setValidation(e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {fieldType === 'dropdown' && fieldDataType === 'String' ? (
        <div className="flex flex-col">
          Field Type Options:
          <Select
            value={dropdownOptions}
            onChange={(e) => setDropdownOptions([e.target.value])}
            sx={{ minWidth: '12rem', textAlign: 'left' }}
          >
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="ECE">ECE</MenuItem>
            <MenuItem value="Mech">Mech</MenuItem>
            <MenuItem value="EEE">EEE</MenuItem>
          </Select>
        </div>
      ) : (
        <></>
      )}

      {fieldOptionss()}
    </div>
  );
};

export default FieldOptions;
