export interface AlertTypes {
  message: string;
  open: boolean;
  deleteBranches: (confirm: boolean) => void;
  title?: string;
}

export interface EnquiryItem {
  id: string;
  name: string;
  email: string;
  description: string;
  createdAt?: string;
}

export interface EnquiryListResponse {
  enquiry?: EnquiryItem[];
}

export interface DeleteBoxState {
  open: boolean;
  message: string;
  deleteId: string | null;
  openDelete: (msg: string, bool: boolean, id: string | null) => void;
}

export interface SnackbarState {
  open: boolean;
  message: string;
  type: string;
  openSnackBar: (msg: string, type: string) => void;
}

export interface RequestConfig {
  key: string;
  url: string;
}
