import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
// import DatePicker from "react-datepicker";

const PortfolioForm = ({ onSubmit }) => {
  const { register, handleSubmit, setValue, control } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          name="title"
          type="text"
          className="form-control"
          id="title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Company</label>
        <input
          {...register("company")}
          name="company"
          type="text"
          className="form-control"
          id="company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Company Website</label>
        <input
          {...register("companyWebsite")}
          name="companyWebsite"
          type="text"
          className="form-control"
          id="companyWebsite"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Location</label>
        <input
          {...register("location")}
          name="location"
          type="text"
          className="form-control"
          id="location"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Job Title</label>
        <input
          {...register("jobTitle")}
          name="jobTitle"
          type="text"
          className="form-control"
          id="jobTitle"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <Controller
            render={() => (
              <input
                {...register("startDate")}
                type="date"
                label="Occurrence Date"
              />
            )}
            name="startDate"
            control={control}
          ></Controller>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <Controller
            render={() => (
              <input
                {...register("endDate")}
                name="endDate"
                type="date"
                label="Occurrence Date"

              />
            )}
            name="endDate"
            control={control}
          ></Controller>
        </div>
      </div>

      <div className="form-group">
        { endDate &&
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDateChange('endDate', setEndDate)(null)}>
            No End Date
          </button>
        }
        { !endDate &&
          <button
            type="button"
            className="btn btn-success"
            onClick={
              () => handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0,0,0,0)))}>
            Set End Date
          </button>
        }
      </div>

      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
