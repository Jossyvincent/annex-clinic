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

export type Doctor = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export async function findDoctorByEmail(email: string): Promise<Doctor | null> {
  try {
    const results = await db.query<Doctor>(
      `SELECT id, name, email, password FROM doctors WHERE email = $1`,
      [email],
    );
    if (results.rows.length === 0) {
      return null;
    }
    return results.rows[0];
  } catch (error) {
    console.error("Database query error:", error);
    throw new Error("Failed to fetch doctor details");
  }
}
