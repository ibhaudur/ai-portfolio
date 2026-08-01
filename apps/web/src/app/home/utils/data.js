import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Icons = [
  {
    tag: FaLinkedin,
    link: "https://www.linkedin.com/in/ibhaudur-rahman-0b3a71205/",
  },
  {
    tag: FaWhatsapp,
    link: "https://wa.me/qr/7WB6N6VWZEZFD1", // Corrected WhatsApp link
  },
  {
    tag: FaInstagram,
    link: "https://www.instagram.com/_ibhaudur__/", // Corrected Instagram link
  },
  {
    tag: CiFacebook,
    link: "https://www.facebook.com/ibhaudurrahman1999", // Corrected Facebook link
  },
];

export const Experience = () => {
  const currentDate = new Date();
  const pastDate = new Date("2021-09"); // YYYY-MM format

  // Calculate year and month differences
  const yearsDifference = currentDate.getFullYear() - pastDate.getFullYear();
  const monthsDifference = currentDate.getMonth() - pastDate.getMonth() + 1;

  // Total experience in months
  let totalMonths = yearsDifference * 12 + monthsDifference;

  // Convert months to years and months
  const experienceInYears = Math.floor(totalMonths / 12);
  const experienceInMonths = totalMonths % 12;

  // Format as "X years Y months"
  let experienceString = `${experienceInYears}`;

  if (experienceInMonths > 0) {
    experienceString += `.${experienceInMonths}`;
  }

  return experienceString;
};
