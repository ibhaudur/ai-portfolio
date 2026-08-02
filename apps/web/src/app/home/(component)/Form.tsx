"use client";
import Toast from "@/components/Alert/Toast";
import InputField from "@/components/Fields/InputField";
import { usePostData } from "@/hooks/useResponsequery";
import useSnackbar from "@/hooks/useSnackbar";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BackdropLoader from "@/components/UI/BackdropLoader";
import { postEnquiryUrl } from "@/service/apiUrls";

interface FormValues {
  name: string;
  email: string;
  description: string;
}

const MyForm: React.FC = () => {
  const { open, message, openSnackBar, type } = useSnackbar();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate: PostEnquiry, isPending } = usePostData({
    key: postEnquiryUrl,
    url: postEnquiryUrl,
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    PostEnquiry(data, {
      onSuccess: () => {
        openSnackBar("Submitted Successfully!", "success");
        reset();
      },
      onError: () => {
        openSnackBar("Retry!", "error");
      },
    });
  };

  return (
    <React.Fragment>
      <BackdropLoader loader={isPending} />
      <Toast open={open} message={message} type={type} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
          className="w-full rounded-full border border-emerald-400 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/25"
          type="submit"
        >
          Submit enquiry
        </button>
      </form>
    </React.Fragment>
  );
};

export default MyForm;