"use client";

import EnquiryTable from "@/components/admin/EnquiryTable";
import type { EnquiryItem } from "@/types/admin";

interface CustomizedTablesProps {
  List?: EnquiryItem[];
  handleDelete: (message: string, open: boolean, id: string | null) => void;
}

export default function CustomizedTables({ List = [], handleDelete }: CustomizedTablesProps) {
  return <EnquiryTable list={List} handleDelete={handleDelete} />;
}
