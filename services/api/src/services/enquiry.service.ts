import { enquiryRepository } from "../repositories/enquiry.repositary";

export const enquiryService = {
  async getEnquiries() {
    return await enquiryRepository.getAll();
  },

  async createEnquiry(data: any) {
    // Business logic
    return await enquiryRepository.create(data);
  },
};