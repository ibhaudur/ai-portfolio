"use client";
import React, { useEffect } from "react";
import AlertDialog from "@/components/Alert/AlertDialog";
import Toast from "@/components/Alert/Toast";
import CustomizedTables from "@/components/CustomizedTables";
import useDeleteBox from "@/hooks/useDeleteBox";
import { useDeleteData, useFetchData } from "@/hooks/useResponsequery";
import useSnackbar from "@/hooks/useSnackbar";
import BackdropLoader from "@/components/UI/BackdropLoader";

const Admin = () => {
  const { open, message, openDelete, deleteId } = useDeleteBox();
  const {
    open: openSnack,
    message: snackMessage,
    openSnackBar,
    type,
  } = useSnackbar();
  const { data: enquiryList, refetch } = useFetchData({
    key: "enquiry",
    url: "enquiry",
  });

  const {
    mutate: deleteEnquiry,
    isSuccess,
    isError,
    error,
    isPending,
  } = useDeleteData({
    key: "enquiry",
    url: "enquiry",
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      openSnackBar("Deleted Successfully!", "success");
    } else if (isError) {
      console.error(error);
      openSnackBar("Retry!", "error");
    }
  }, [isSuccess, isError]);

  const handleDelete = (confirm: boolean) => {
    if (confirm) {
      deleteEnquiry(deleteId);
    }
    openDelete("", false, "");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <BackdropLoader loader={isPending} />
      <AlertDialog
        title="Delete Confirmation"
        open={open}
        message={message}
        deleteBranches={handleDelete}
      />
      <Toast open={openSnack} message={snackMessage} type={type} />
      <p className="mt-5 text-3xl sm:mt-0 md:mt-0">Mail List</p>
      <div className="mt-6">
        <CustomizedTables List={enquiryList?.enquiry} handleDelete={openDelete} />
      </div>
    </div>
  );
};

export default Admin;
