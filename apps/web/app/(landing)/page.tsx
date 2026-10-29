import { redirect } from "next/navigation";

// Personal self-hosted instance: the marketing site is gone, the root goes straight to sign-in.
export default function Page() {
  redirect("/login");
}
