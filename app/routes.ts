import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("ask-question", "routes/question.tsx"),
  route("check-response", "routes/response.tsx"),
  route("book-appointment", "routes/appointment.tsx"),
  route("login", "routes/doctorLogin.tsx"),
  route("register", "routes/registerDoctor.tsx"),
  route("doctor/dashboard", "routes/doctorDashboard.tsx"),
] satisfies RouteConfig;
