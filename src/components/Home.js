import React, { useState } from 'react';
import AddField from './AddFields';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

const Home = () => {
  const [selection, setSelection] = useState(null);

  return (
    <div className="px-[6rem]">
      <h1>Farmwiseai Assignment</h1>

      <div className="p-6 w-fit">
        <Typography variant="p">Dynamic Data Collection</Typography>
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selection}
            label="Age"
            sx={{ minWidth: '12rem' }}
            onChange={(e) => setSelection(e.target.value)}
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Salaried">Salaried</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
        </FormControl>
      </div>

      <AddField />
    </div>
  );
};

export default Home;
