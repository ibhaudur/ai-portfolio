import React from "react";

const InputField = ({ register, errors, type, label, key_name }: any) => {
  return (
    <React.Fragment>
      {type === "text" && (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor={key_name}>
            {label}
          </label>
          <input
            className="h-[44px] w-full rounded-2xl border border-white/10 bg-slate-900/80 px-3 text-sm text-white outline-none ring-0 transition focus:border-emerald-400"
            id={key_name}
            placeholder={`Enter your ${label}`}
            {...register(key_name, { required: `${label} is required` })}
          />
          {errors?.[key_name] && (
            <p className="mt-1 text-sm text-red-400">{errors?.[key_name]?.message}</p>
          )}
        </div>
      )}
      {type === "email" && (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor={key_name}>
            {label}
          </label>
          <input
            className="h-[44px] w-full rounded-2xl border border-white/10 bg-slate-900/80 px-3 text-sm text-white outline-none transition focus:border-emerald-400"
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
            <p className="mt-1 text-sm text-red-400">{errors?.[key_name]?.message}</p>
          )}
        </div>
      )}
      {type === "textarea" && (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor={key_name}>
            {label}
          </label>
          <textarea
            className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
            id={key_name}
            placeholder={`Enter your ${label}`}
            {...register(key_name, {
              required: `${label} is required`,
            })}
          />
          {errors?.[key_name] && (
            <p className="mt-1 text-sm text-red-400">{errors?.[key_name]?.message}</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default InputField;
