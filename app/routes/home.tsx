import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import Hero from "~/components/heroSection";
import Question from "~/components/question";
import Response from "~/components/doctorResponse";
import Appointment from "~/components/bookAppointment";
import Footer from "~/components/footer";
import { db } from "~/lib/db.server";
import crypto from "crypto";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Annex Medical Clinic" },
    {
      name: "description",
      content:
        "Anonymous medical consultations and appointment booking at Annex Clinic.",
    },
  ];
}
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const question = formData.get("question");
  const rawAge = formData.get("age");
  const gender = formData.get("gender");

  const errors: Record<string, string> = {};
  const values: Record<string, any> = {};

  //validating the title
  if (!title || typeof title !== "string" || title.trim() === "") {
    errors.title = "Title is required";
  } else if (title.length > 255) {
    errors.title = "Title must be 255 characters or less";
  } else {
    values.title = title.trim();
  }

  // validating the question
  if (!question || typeof question !== "string" || question.trim() === "") {
    errors.question = "Question is required";
  } else {
    values.question = question.trim();
  }
  // validating age
  let finalAge: number | null = null;

  if (rawAge !== null && typeof rawAge === "string" && rawAge.trim() !== "") {
    const parsedAge = Number(rawAge);
    if (!Number.isInteger(parsedAge)) {
      errors.age = "age must be a whole number";
    } else {
      finalAge = parsedAge;
      values.age = finalAge;
    }
  }
  // validating gender
  let finalGender: string | null = null;
  if (gender && typeof gender === "string" && gender.trim() !== "") {
    if (gender.length > 20) {
      errors.gender = "Gender must be 20 characters or less";
    } else {
      finalGender = gender.trim();
      values.gender = finalGender;
    }
  }
  const token = crypto.randomUUID();

  try {
    await db.query(
      `INSERT INTO questions (token, title, question, age, gender) 
       VALUES ($1, $2, $3, $4, $5)`,
      [token, values.title, values.question, values.age, finalGender],
    );
    return {
      success: true,
      questionLink: `/question/${token}`,
    };
  } catch (error) {
  console.error(error);
  // Throw a Response object with JSON body and 500 status
  
}   
}

export default function Home() {
  return (
    <main>
      {/* the NavBar */}
      <Navbar />
      {/* Hero section */}
      <Hero />
      {/* patient question section */}
      <Question />
      {/* Doctors Response section */}
      <Response />
      {/* Book appointment section */}
      <Appointment />
      {/* The footer */}
      <Footer />
    </main>
  );
}
