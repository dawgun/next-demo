import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const cookieLanguageRedirectMiddleware = async (
  request: NextRequest
) => {
  const appCookies = cookies();
  const customLanguage = appCookies.get("language");

  console.log(request.url);
  const language = request.url.split("/");
  //console.log("prueba", prueba);

  if (customLanguage?.value && customLanguage.value !== language[3]) {
    language[3] = customLanguage.value;
    const finalUrl = language.join("/");
    console.log("finalUrl", finalUrl);
    return NextResponse.redirect(finalUrl);
  }

  return null;
};
