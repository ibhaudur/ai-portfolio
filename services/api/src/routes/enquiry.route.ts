import { Router } from "express";
import {
  getEnquiries,
  createEnquiry,
} from "../controllers/enquiry.controller";
import { validateCreateEnquiry } from "../validation/enquiry.validation";

const router = Router();

router.get("/", getEnquiries);

router.post("/", validateCreateEnquiry, createEnquiry);

export default router;