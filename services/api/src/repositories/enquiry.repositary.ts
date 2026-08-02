import {prisma} from "@ai-portfolio/database";

export const enquiryRepository = {
  async getAll() {
    return await prisma.enquiry.findMany();
  },

  async getById(id: string) {
    return await prisma.enquiry.findUnique({
      where: {
        id,
      },
    });
  },

  async create(data: {
    name: string;
    email: string;
    description: string;
  }) {
    return await prisma.enquiry.create({
      data,
    });
  },

  async update(
    id: string,
    data: {
      name?: string;
      email?: string;
      description?: string;
    }
  ) {
    return await prisma.enquiry.update({
      where: {
        id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.enquiry.delete({
      where: {
        id,
      },
    });
  },
};