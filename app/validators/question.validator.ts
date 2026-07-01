type ValidQuestion = {
  title?: string;
  question?: string;
  age?: number;
  gender?: string;
};

export function validateQuestion(data: {
  title: string;
  question: string;
  age: string;
  gender: string;
}) {
  const errors: Record<string, string> = {};
  const values: ValidQuestion = {};

  const title = data.title.trim();
  const question = data.question.trim();
  const gender = data.gender.trim();
  const age = data.age.trim();

  //validating the title
  if (!title || title === "") {
    errors.title = "Title is required";
  } else if (title.length > 255) {
    errors.title = "Title too long";
  } else {
    values.title = title;
  }

  // validating the question
  if (!question || question === "") {
    errors.question = "Question is required";
  } else {
    values.question = question;
  }

  // validating age

  if (age !== "") {
    const parsedAge = Number(age);
    if (!Number.isInteger(parsedAge)) {
      errors.age = "age must be a whole number";
    } else if (parsedAge < 0 || parsedAge > 120) {
      errors.age = "enter a valid age";
    } else {
      values.age = parsedAge;
    }
  }
  // validating gender

  if (gender && gender !== "") {
    if (gender.length > 20) {
      errors.gender = "Gender must be 20 characters or less";
    } else {
      values.gender = gender;
    }
  }
  return { errors, values };
}
