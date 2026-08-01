import React from "react";

const InputField = ({ register, errors, type, label, key_name }: any) => {
  return (
    <React.Fragment>
      {type === "text" && (
        <div className="mb-2">
          <label className="text-white block" htmlFor={key_name}>
            {label}
          </label>
          <input
            className="h-[40px] p-2 w-100 rounded"
            id={key_name}
            placeholder={`Enter your ${label}`}
            {...register(key_name, { required: `${label} is required` })}
          />
          {errors?.[key_name] && (
            <p className="text-red-600">{errors?.[key_name]?.message}</p>
          )}
        </div>
      )}
      {type === "email" && (
        <div className="mb-2">
          <label className="text-white block" htmlFor={key_name}>
            {label}
          </label>
          <input
            className="h-[40px] p-2 w-100 rounded"
            id={key_name}
            placeholder={`Enter your ${label}`}
            type="email"
            {...register(key_name, {
              required: `${label} is required`,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors?.[key_name] && (
            <p className="text-red-600">{errors?.[key_name]?.message}</p>
          )}
        </div>
      )}
      {type === "textarea" && (
        <div className="mb-2">
          <label className="text-white block" htmlFor={key_name}>
            {label}
          </label>
          <textarea
            className="p-2 w-100 rounded"
            id={key_name}
            placeholder={`Enter your ${label}`}
            {...register(key_name, {
              required: `${label} is required`,
            })}
          />
          {errors?.[key_name] && (
            <p className="text-red-600">{errors?.[key_name]?.message}</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default InputField;
