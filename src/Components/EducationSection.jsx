import React from 'react';
import { Controller } from 'react-hook-form';

const EducationSection = ({ control, errors }) => (
  <div>
    <h3>Education Section</h3>
    <div>
      <label>Highest Qualification</label>
      <Controller
        name="highestQualification"
        control={control}
        rules={{ required: 'Highest Qualification is required' }}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        )}
      />
      {errors.highestQualification && <span>{errors.highestQualification.message}</span>}
    </div>

    <div>
      <label>Field of Study</label>
      <Controller
        name="fieldOfStudy"
        control={control}
        rules={{ required: 'Field of Study is required' }}
        render={({ field }) => <input {...field} />}
      />
      {errors.fieldOfStudy && <span>{errors.fieldOfStudy.message}</span>}
    </div>
  </div>
);

export default EducationSection;
