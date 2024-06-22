import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const SurveyForm = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [formStyle, setFormStyle] = useState({});
  const surveyTopic = watch('surveyTopic');

  useEffect(() => {
    if (surveyTopic) {
      fetchAdditionalQuestions(surveyTopic);
      setFormStyle(getDynamicStyle(surveyTopic));
    }
  }, [surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setAdditionalQuestions(response.data.slice(0, 5).map(post => ({ label: post.title })));
    } catch (error) {
      console.error('Error fetching additional questions:', error);
    }
  };

  const getDynamicStyle = (topic) => {
    switch (topic) {
      case 'Technology':
        return {
          border: '2px solid #007bff',
          backgroundColor: '#e6f2ff',
        };
      case 'Health':
        return {
          border: '2px solid #28a745',
          backgroundColor: '#e9f7ef',
        };
      case 'Education':
        return {
          border: '2px solid #ffc107',
          backgroundColor: '#fff9e6',
        };
      default:
        return {};
    }
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div style={{ ...formContainerStyle, ...formStyle }}>
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={formGroupStyle}>
          <label htmlFor="fullName">Full Name</label>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: 'Full Name is required' }}
            render={({ field }) => <input {...field} id="fullName" style={inputStyle} />}
          />
          {errors.fullName && <span style={errorStyle}>{errors.fullName.message}</span>}
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email format',
              },
            }}
            render={({ field }) => <input {...field} id="email" style={inputStyle} />}
          />
          {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="surveyTopic">Survey Topic</label>
          <Controller
            name="surveyTopic"
            control={control}
            rules={{ required: 'Survey Topic is required' }}
            render={({ field }) => (
              <select {...field} id="surveyTopic" style={selectStyle}>
                <option value="">Select a topic</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>
            )}
          />
          {errors.surveyTopic && <span style={errorStyle}>{errors.surveyTopic.message}</span>}
        </div>

        {surveyTopic === 'Technology' && (
          <>
            <div style={formGroupStyle}>
              <label htmlFor="favoriteProgrammingLanguage">Favorite Programming Language</label>
              <Controller
                name="favoriteProgrammingLanguage"
                control={control}
                rules={{ required: 'Favorite Programming Language is required' }}
                render={({ field }) => (
                  <select {...field} id="favoriteProgrammingLanguage" style={selectStyle}>
                    <option value="">Select a language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                  </select>
                )}
              />
              {errors.favoriteProgrammingLanguage && <span style={errorStyle}>{errors.favoriteProgrammingLanguage.message}</span>}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="yearsOfExperience">Years of Experience</label>
              <Controller
                name="yearsOfExperience"
                control={control}
                rules={{ required: 'Years of Experience is required' }}
                render={({ field }) => <input type="number" {...field} id="yearsOfExperience" style={inputStyle} />}
              />
              {errors.yearsOfExperience && <span style={errorStyle}>{errors.yearsOfExperience.message}</span>}
            </div>
          </>
        )}

        {surveyTopic === 'Health' && (
          <>
            <div style={formGroupStyle}>
              <label htmlFor="exerciseFrequency">Exercise Frequency</label>
              <Controller
                name="exerciseFrequency"
                control={control}
                rules={{ required: 'Exercise Frequency is required' }}
                render={({ field }) => (
                  <select {...field} id="exerciseFrequency" style={selectStyle}>
                    <option value="">Select frequency</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Rarely">Rarely</option>
                  </select>
                )}
              />
              {errors.exerciseFrequency && <span style={errorStyle}>{errors.exerciseFrequency.message}</span>}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="dietPreference">Diet Preference</label>
              <Controller
                name="dietPreference"
                control={control}
                rules={{ required: 'Diet Preference is required' }}
                render={({ field }) => (
                  <select {...field} id="dietPreference" style={selectStyle}>
                    <option value="">Select diet</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                  </select>
                )}
              />
              {errors.dietPreference && <span style={errorStyle}>{errors.dietPreference.message}</span>}
            </div>
          </>
        )}

        {surveyTopic === 'Education' && (
          <>
            <div style={formGroupStyle}>
              <label htmlFor="highestQualification">Highest Qualification</label>
              <Controller
                name="highestQualification"
                control={control}
                rules={{ required: 'Highest Qualification is required' }}
                render={({ field }) => (
                  <select {...field} id="highestQualification" style={selectStyle}>
                    <option value="">Select qualification</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                )}
              />
              {errors.highestQualification && <span style={errorStyle}>{errors.highestQualification.message}</span>}
            </div>
          </>
        )}

        <button type="submit" style={submitButtonStyle}>Submit</button>

        <div style={additionalQuestionsStyle}>
          {additionalQuestions.length > 0 && <h2>Additional Questions</h2>}
          <p>Based on your selection, we have some additional questions for you:</p>
          <p>Feel free to answer them if you wish to provide more information.</p>
          <p>These questions are optional.</p>
          <br />
          <h3>Additional Questions:</h3>
          <br />
          <h4>Technology:</h4>
          <ul>
            {additionalQuestions.map((question, index) => (
              <li key={index} style={questionStyle}>{question.label}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '600px',
  width: '100%',
  padding: '30px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const formGroupStyle = {
  marginBottom: '25px',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '1em',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease',
};

const selectStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '1em',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.875em',
  marginTop: '5px',
  display: 'block',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '12px 20px',
  cursor: 'pointer',
  fontSize: '1em',
  width: '100%',
  marginTop: '20px',
  transition: 'background-color 0.3s ease',
};

const additionalQuestionsStyle = {
  marginTop: '20px',
};

const questionStyle = {
  backgroundColor: '#f9f9f9',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default SurveyForm;
