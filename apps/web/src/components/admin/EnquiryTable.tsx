"use client";
import moment from "moment";
// import { RiDeleteBin5Line } from "react-icons/ri";
import type { EnquiryItem } from "@/types/admin";

interface EnquiryTableProps {
  list?: EnquiryItem[];
  handleDelete: (message: string, open: boolean, id: string | null) => void;
}

export default function EnquiryTable({ list = [], handleDelete }: EnquiryTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Email Id</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Message</th>
              {/* <th className="px-4 py-3 text-left font-semibold text-gray-700">Action</th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {list.map((row) => (
              <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{row.name}</td>
                <td className="px-4 py-3 text-gray-800">{row.email}</td>
                <td className="px-4 py-3 text-gray-800">
                  {moment(row.createdAt).format("MMM Do YYYY, h:mm a")}
                </td>
                <td className="px-4 py-3 text-gray-800">{row.description}</td>
                {/* <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete("Are you sure you want to Delete?", true, row.id)}
                    className="rounded-md p-2 text-red-600 transition hover:bg-red-50"
                    aria-label="Delete enquiry"
                  >
                    <RiDeleteBin5Line className="text-lg" />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {list.length === 0 ? (
        <p className="py-4 text-center text-sm text-gray-500">No Results Found!</p>
      ) : null}
    </div>
  );
}
