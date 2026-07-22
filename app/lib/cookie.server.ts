import { createCookie } from "react-router";

export const authCookie = createCookie("doctorSessionCookie", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 4,
  path: "/doctor",
  sameSite: "lax",
});

export async function createSessionCookie(token: string) {
  const cookie = await authCookie.serialize(token);
  return cookie;
}
