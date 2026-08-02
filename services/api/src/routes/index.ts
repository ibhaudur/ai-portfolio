import { Router } from "express";
import enquiryRouter from "./enquiry.route";

const router = Router();

router.use("/enquiries", enquiryRouter);

export default router;