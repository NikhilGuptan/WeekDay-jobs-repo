import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Chip } from '@mui/material';

const JobFilter = () => {
  const [minExperience, setMinExperience] = useState([]);
  const [companyName, setCompanyName] = useState([]);
  const [location, setLocation] = useState([]);
  const [remote, setRemote] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="min-exp-label">Min Experience</InputLabel>
        <Select
          labelId="min-exp-label"
          id="min-exp-select"
          multiple
          value={minExperience}
          onChange={handleChange(setMinExperience)}
        >
          <MenuItem value={1}>1 year</MenuItem>
          <MenuItem value={3}>3 years</MenuItem>
          <MenuItem value={5}>5 years</MenuItem>
          <MenuItem value={10}>10 years</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="company-name-label">Company Name</InputLabel>
        <Select
          labelId="company-name-label"
          id="company-name-select"
          multiple
          value={companyName}
          onChange={handleChange(setCompanyName)}
        >
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Amazon">Amazon</MenuItem>
          <MenuItem value="Microsoft">Microsoft</MenuItem>
          <MenuItem value="Apple">Apple</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          id="location-select"
          multiple
          value={location}
          onChange={handleChange(setLocation)}
        >
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Bangalore">Bangalore</MenuItem>
          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
          <MenuItem value="Chennai">Chennai</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="remote-label">Remote/On-site</InputLabel>
        <Select
          labelId="remote-label"
          id="remote-select"
          multiple
          value={remote}
          onChange={handleChange(setRemote)}
        >
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="On-site">On-site</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="tech-stack-label">Tech Stack</InputLabel>
        <Select
          labelId="tech-stack-label"
          id="tech-stack-select"
          multiple
          value={techStack}
          onChange={handleChange(setTechStack)}
          renderValue={(selected) => (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ margin: '2px' }} />
              ))}
            </div>
          )}
        >
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="Angular">Angular</MenuItem>
          <MenuItem value="Vue">Vue</MenuItem>
          <MenuItem value="Node.js">Node.js</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          id="role-select"
          multiple
          value={role}
          onChange={handleChange(setRole)}
        >
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
          <MenuItem value="Full-stack">Full-stack</MenuItem>
          <MenuItem value="DevOps">DevOps</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: '8px', minWidth: '180px', maxWidth: '220px' }}>
        <InputLabel id="min-base-pay-label">Min Base Pay</InputLabel>
        <Select
          labelId="min-base-pay-label"
          id="min-base-pay-select"
          multiple
          value={minBasePay}
          onChange={handleChange(setMinBasePay)}
        >
          <MenuItem value={50000}>$50,000</MenuItem>
          <MenuItem value={75000}>$75,000</MenuItem>
          <MenuItem value={100000}>$100,000</MenuItem>
          <MenuItem value={150000}>$150,000</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default JobFilter;
