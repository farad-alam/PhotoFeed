import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const defaultLocal = "en";
const locales = ["en", "bn"];

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language");
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocal);
}

export async function middleware(request) {
  console.log("middleware called");
  const pathName = request.nextUrl.pathname;

  // Skip middleware for static files and Next.js internals
  if (
    pathName.startsWith("/_next/") ||
    pathName.includes(".") || // static files
    pathName.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  const isLocalMissinginPath = locales.every(
    (local) =>
      !pathName.startsWith(`/${local}`) && !pathName.startsWith(`/${local}/`)
  );
  if (isLocalMissinginPath) {
    const local = getLocale(request);
    return NextResponse.redirect(new URL(`/${local}/${pathName}`, request.url));
  }

  return NextResponse.next();
}
