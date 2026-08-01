"use client";
import Toast from "@/components/Alert/Toast";
import InputField from "@/components/Fields/InputField";
import { useFetchData, usePostData } from "@/hooks/useResponsequery";
import useSnackbar from "@/hooks/useSnackbar";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BackdropLoader from "@/components/UI/BackdropLoader";

interface FormValues {
  name: String;
  email: String;
  description: String;
}

const MyForm: React.FC = () => {
  const { open, message, openSnackBar, type } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { data: welcome } = useFetchData({
    key: "welcome",
    url: "",
  });
  const {
    mutate: PostEnquiry,
    data,
    isSuccess,
    isPending,
    isError,
  } = usePostData({
    key: "enquiry",
    url: "enquiry",
  });
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    PostEnquiry(data);
  };
  useEffect(() => {
    if (isSuccess) {
      openSnackBar("Submited Successfully!", "success");
    } else if (isError) {
      openSnackBar("Retry!", "error");
    }
  }, [isSuccess, isError]);
  return (
    <React.Fragment>
      <BackdropLoader loader={isPending} />
      <Toast open={open} message={message} type={type} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          errors={errors}
          type="text"
          key_name="name"
          label="Name"
        />
        <InputField
          register={register}
          errors={errors}
          type="email"
          key_name="email"
          label="Email Id"
        />
        <InputField
          register={register}
          errors={errors}
          type="textarea"
          key_name="description"
          label="Message"
        />

        <button
          className="w-100 border-2 border-green-500 border-solid text-green-500 p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default MyForm;
