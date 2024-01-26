import React, { useRef, useState } from 'react';
import AddField from './AddFields';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import CreateField from './CreateField';

const Home = () => {
  const [selection, setSelection] = useState(null);
  const [fieldData, setFieldData] = useState();



  return (
    <div className="px-[2rem]">
      <h1>Farmwiseai Assignment</h1>

      <div className="p-3 w-fit">
        <Typography variant="p">Dynamic Data Collection</Typography>
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            value={selection}
            label="Data Collection"
            sx={{ minWidth: '12rem' }}
            onChange={(e) => setSelection(e.target.value)}
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Salaried">Salaried</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
        </FormControl>
      </div>

      <AddField setFieldData={setFieldData} />

      {fieldData && (
        <CreateField
          FieldType={fieldData.FieldType}
          FieldDisplayName={fieldData.FieldDisplayName}
          FieldDataType={fieldData.FieldDataType}
          Validation={fieldData.Validation}
          IsMandatory={fieldData.IsMandatory}
        />
      )}
    </div>
  );
};

export default Home;
