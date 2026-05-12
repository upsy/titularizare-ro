"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AUTH_COOKIE = "tit-auth";
const AUTH_VALUE = "ok";
const PASSWORD = "7304";

function secondsUntilMidnightBucharest(): number {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Bucharest",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  const h = get("hour") % 24;
  const m = get("minute");
  const s = get("second");
  const elapsed = h * 3600 + m * 60 + s;
  const remaining = 86400 - elapsed;
  return remaining > 0 ? remaining : 60;
}

function safeRedirectTarget(from: FormDataEntryValue | null): string {
  const raw = typeof from === "string" ? from : "";
  if (!raw.startsWith("/") || raw.startsWith("//") || raw.startsWith("/login")) {
    return "/";
  }
  return raw;
}

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");
  const target = safeRedirectTarget(formData.get("from"));

  if (password !== PASSWORD) {
    const params = new URLSearchParams({ error: "1" });
    if (target !== "/") params.set("from", target);
    redirect(`/login?${params.toString()}`);
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, AUTH_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: secondsUntilMidnightBucharest(),
    path: "/",
  });

  redirect(target);
}
