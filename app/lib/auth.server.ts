import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET_SECURE } from "./env.server";
import { authCookie } from "./cookie.server";
import { redirect } from "react-router";

interface CustomPayload extends JwtPayload {
  doctorId: number;
  email: string;
}

// generating the token
export function generateToken(doctorId: number, email: string) {
  const payload: CustomPayload = { doctorId, email };
  return jwt.sign(payload, JWT_SECRET_SECURE, {
    expiresIn: "4h",
  });
}

// verifying the token
//TO DO
//How is verifyToken handling errors it has to have a string as a returm type
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET_SECURE) as CustomPayload;
}

// require doctor.
// ensuring that each incoming request belong to an authenticated doctor

export async function requireDoctor(request: Request) {
  const cookieHeader = request.headers.get("cookie");
  const token = await authCookie.parse(cookieHeader);
  if (!token) {
    throw redirect("/login");
  }
  try {
    const payload = verifyToken(token);
    return payload;
  } catch {
    throw redirect("/login");
  }
}
