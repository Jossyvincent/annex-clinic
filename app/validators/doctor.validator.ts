// export type ValidDoctor = {
//   name?: string;
//   email?: string;
//   password?: string;
// };

export function validateDoctor(data: {
  name: string;
  email: string;
  password: string;
}) {
  const errors: Record<string, string> = {};
  const values: Record<string, string> = {};

  const name = data.name.trim();
  const email = data.email.trim().toLowerCase();
  const password = data.password;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  // validating name
  if (!name || name.split(/\s+/).length < 2) {
    errors.name =
      "Name must be a non-empty string with at least first and last name";
  } else {
    values.name = name;
  }

  // validating email

  if (!email || !emailRegex.test(email)) {
    errors.email = "Invalid email format";
  } else {
    values.email = email;
  }
  // Validate password

  if (!password || !passwordRegex.test(password)) {
    errors.password =
      "Password must be at least 8 characters long and include both letters and numbers.";
  } else {
    values.password = password;
  }

  return { errors, values };
}
