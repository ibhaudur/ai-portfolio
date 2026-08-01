import { NextResponse } from "next/server";
import connectMangoDB from "../../../../lib/mangodb";
import Enquiry from "../../../../models/enquiry.model";

export const GET = async (req, { params }) => {
  const { id } = params;
  await connectMangoDB();
  try {
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return NextResponse.json(
        { message: "Enquiry not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ enquiry });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
export const DELETE = async (req, { params }) => {
  const { id } = params;
  await connectMangoDB();
  try {
    const enquiry = await Enquiry.findByIdAndDelete(id);
    if (!enquiry) {
      return NextResponse.json(
        { message: "Enquiry not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Deleted Successfully!" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
