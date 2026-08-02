import { Request, Response, NextFunction } from "express";

export const validateCreateEnquiry = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, description } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({
      message: "Name, Email, and Description are required",
    });
  }

  next();
};