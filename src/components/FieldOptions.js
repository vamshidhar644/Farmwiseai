import { TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const FieldOptions = ({ fieldType, fieldDataType, sendData }) => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [maxLimit, setMaxLimit] = useState('');

  // const sendtoParent = () => {
  useEffect(() => {
    if (fromDate && toDate) {
      const dates = { fromDate, toDate };
      sendData(dates);
    }

    if (maxLimit) {
      sendData({ maxLimit });
    }
  }, [fromDate, toDate, maxLimit]);

  const fieldOptionss = () => {
    switch (fieldDataType) {
      case 'String':
        return (
          fieldType === 'dropdown' && (
            <Typography variant="p">No validation</Typography>
          )
        );
      case 'Date':
        return (
          fieldType === 'date' && (
            <div className="flex gap-2 h-full">
              <div className="flex flex-col">
                From Date:
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                  <input
                    datepicker
                    type="date"
                    onChange={(e) => setFromDate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                To Date:
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                  <input
                    datepicker
                    type="date"
                    onChange={(e) => setToDate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>
          )
        );
      case 'Number':
        return (
          fieldType === 'text' && (
            <div className="flex flex-col">
              Max Limit:
              <TextField
                id="filled-basic"
                label="Field max length allowed"
                variant="filled"
                // value={validation}
                onChange={(e) => setMaxLimit(e.target.value)}
              />
            </div>
          )
        );

      default:
        return null;
    }
  };

  return <div className="flex items-center">{fieldOptionss()}</div>;
};

export default FieldOptions;
