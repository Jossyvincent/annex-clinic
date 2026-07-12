import { Form, Link, useNavigation, useActionData, data } from "react-router";
import { validateDoctor } from "~/validators/doctor.validator";
import { createDoctor } from "~/models/doctors.server";
import type { Route } from "./+types/registerDoctor";

export async function action({ request }: Route.ActionArgs) {
  const formdata = await request.formData();
  const Data = {
    name: String(formdata.get("name")),
    email: String(formdata.get("email")),
    password: String(formdata.get("password")),
  };

  const { errors, values } = validateDoctor(Data);
  if (Object.keys(errors).length > 0) {
    return data({ errors, values }, { status: 400 });
  }
  const sanitizedData = {
    name: values.name,
    email: values.email,
    password: values.password,
  };
  try {
    await createDoctor(sanitizedData);
    return data({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === "Email already exist") {
      return data(
        {
          errors: {
            email: "An account with this email already exists.",
          },
        },
        { status: 400 },
      );
    }
    return data(
      {
        errors: {
          general: "Something went wrong. Please try again.",
        },
      },
      { status: 500 },
    );
  }
}

export default function RegisterDoctor() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-linear-to-br from-violet-950 via-violet-900 to-indigo-900">
      {/* ── Decorative blobs ─────────────────────────────────────── */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-175 h-175 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      {/* ── Navbar ───────────────────────────────────────────────── */}
      <nav className="relative z-10 border-b border-white/10 bg-violet-950/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-extrabold text-xl tracking-tight"
          >
            <span className="text-emerald-400">+</span> Annex Clinic
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-violet-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* ── Register Card ────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Register Doctor
            </h1>
            <p className="mt-2 text-violet-300 text-sm">
              Create a new doctor account for Annex Clinic
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <Form method="post" className="space-y-5 ">
              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={actionData?.values?.name ?? ""}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                {actionData?.errors?.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {actionData.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={actionData?.values?.email ?? ""}
                  placeholder="doctor@annexclinic.com"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                {actionData?.errors?.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {actionData.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  defaultValue={actionData?.values?.password ?? ""}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                {actionData?.errors?.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {actionData.errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 mt-2"
              >
                {isSubmitting ? "Submitting..." : "REGISTER"}
              </button>
              {actionData?.success && (
                <div>
                  <p className="text-center text-sm text-gray-500 mt-1">
                    Your Account was created successfully
                  </p>
                </div>
              )}
              {actionData?.errors?.general && (
                <p className="mt-1 text-sm text-red-600">
                  {actionData.errors.general}
                </p>
              )}
            </Form>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-violet-400 mt-6">
            Access restricted to authorised Annex Clinic staff only.
          </p>
        </div>
      </div>
    </main>
  );
}
