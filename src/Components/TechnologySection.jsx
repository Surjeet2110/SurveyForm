import React from 'react';
import { Controller } from 'react-hook-form';

const TechnologySection = ({ control, errors }) => (
  <div>
    <h3>Technology Section</h3>
    <div>
      <label>Favorite Programming Language</label>
      <Controller
        name="favoriteProgrammingLanguage"
        control={control}
        rules={{ required: 'Favorite Programming Language is required' }}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select a language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
          </select>
        )}
      />
      {errors.favoriteProgrammingLanguage && <span>{errors.favoriteProgrammingLanguage.message}</span>}
    </div>

    <div>
      <label>Years of Experience</label>
      <Controller
        name="yearsOfExperience"
        control={control}
        rules={{ required: 'Years of Experience is required' }}
        render={({ field }) => <input type="number" {...field} />}
      />
      {errors.yearsOfExperience && <span>{errors.yearsOfExperience.message}</span>}
    </div>
  </div>
);

export default TechnologySection;
