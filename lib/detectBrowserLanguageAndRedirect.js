import { locales, defaultLocale } from "../lang";

export function detectBrowserLanguage(headers) {
  let userLang;

  const acceptLanguagesArray = headers["accept-language"]?.split(",") || [];
  if (acceptLanguagesArray && acceptLanguagesArray[0]) {
    [userLang] = acceptLanguagesArray[0]?.split("-");

    if (locales.some((l) => l === userLang)) {
      return userLang;
    }
  }

  return defaultLocale;
}

export function detectBrowserLanguageAndRedirect(context) {
  const detectedLanguage = detectBrowserLanguage(context.req.headers);

  if (
    context.locale === defaultLocale &&
    detectedLanguage &&
    detectedLanguage !== defaultLocale
  ) {
    context.res.setHeader(
      "Location",
      `/${detectedLanguage}${context.resolvedUrl}`
    );
    context.res.statusCode = 307;
    context.res.end();
    return true;
  }

  return false;
}
