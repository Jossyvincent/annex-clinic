// import type { ValidDoctor } from "~/validators/doctor.validator";
import { db } from "~/lib/db.server";
import bcrypt from "bcryptjs";
export async function createDoctor(data: {
  name: string;
  email: string;
  password: string;
}) {
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const email = data.email;
  const name = data.name;
  try {
    await db.query(
      `INSERT INTO doctors(name,email,password)
       VALUES($1, $2, $3)`,
      [name, email, hashedPassword],
    );
  } catch (error: any) {
    if (error.code === "23505") {
      throw new Error("Email already exist");
    }
    console.error(error);
    throw new Error("Unable to create doctor");
  }
}
