import { Request, Response } from "express";
import { enquiryService } from "../services/enquiry.service";

export const getEnquiries = async (req: Request, res: Response) => {
  const enquiries = await enquiryService.getEnquiries();

  res.json(enquiries);
};

export const createEnquiry = async (req: Request, res: Response) => {
  const enquiry = await enquiryService.createEnquiry(req.body);

  res.status(201).json(enquiry);
};