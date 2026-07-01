import { Form, useNavigation, useActionData, data } from "react-router";
import type { Route } from "./+types/question";

import { validateQuestion } from "~/validators/question.validator";
import { createQuestion } from "~/models/questions.server";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const Data = {
    title: String(formData.get("title")),
    question: String(formData.get("question")),
    age: String(formData.get("age")),
    gender: String(formData.get("gender")),
  };

  const { values, errors } = validateQuestion(Data);

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 });
  } else {
    const validValues = {
      title: values.title,
      question: values.question,
      age: values.age,
      gender: values.gender,
    };
    const { questionLink } = await createQuestion(validValues);
    return data({ success: true, questionLink });
  }
}
export default function Question() {
  const actionData = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  return (
    <section
      id="ask"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20 scroll-mt-16"
    >
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            Step 1
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Ask a Question
          </h2>
          <p className="text-gray-500 mt-3">
            Your identity stays private. No account needed.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/80 border border-gray-100 p-8">
          <Form method="post" className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Question Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={actionData?.values?.title ?? ""}
                placeholder="e.g. What causes recurring headaches?"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              {actionData?.errors?.title && (
                <p className="mt-1 text-sm text-red-600">
                  {actionData.errors.title}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Describe Your Concern
              </label>
              <textarea
                name="question"
                defaultValue={actionData?.values?.question ?? ""}
                placeholder="Describe your symptoms or concern in detail..."
                rows={7}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
              />
              {actionData?.errors?.question && (
                <p className="mt-1 text-sm text-red-600">
                  {actionData.errors.question}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  defaultValue={actionData?.values?.age ?? ""}
                  placeholder="Your age"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                {actionData?.errors?.age && (
                  <p className="mt-1 text-sm text-red-600">
                    {actionData.errors.age}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Gender{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <select
                  name="gender"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all bg-white"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-bold text-base py-4 rounded-xl shadow-md shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 mt-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Question"}
              Submit Question
            </button>
            {actionData?.success && (
              <div>
                <p className="text-center text-sm text-gray-500 mt-1">
                  📋 Copy the link — you'll need it to view the doctor's
                  response.
                </p>
                <p>{actionData.questionLink}</p>
              </div>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
}
