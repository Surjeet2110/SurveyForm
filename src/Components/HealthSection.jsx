import React from 'react';
import { Controller } from 'react-hook-form';

const HealthSection = ({ control, errors }) => (
  <div>
    <h3>Health Section</h3>
    <div>
      <label>Exercise Frequency</label>
      <Controller
        name="exerciseFrequency"
        control={control}
        rules={{ required: 'Exercise Frequency is required' }}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Rarely">Rarely</option>
          </select>
        )}
      />
      {errors.exerciseFrequency && <span>{errors.exerciseFrequency.message}</span>}
    </div>

    <div>
      <label>Diet Preference</label>
      <Controller
        name="dietPreference"
        control={control}
        rules={{ required: 'Diet Preference is required' }}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select a preference</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
        )}
      />
      {errors.dietPreference && <span>{errors.dietPreference.message}</span>}
    </div>
  </div>
);

export default HealthSection;
