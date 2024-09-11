import { i18nMiddleware } from "./middlewares/i18nMiddleware";
import { cookieLanguageRedirectMiddleware } from "./middlewares/cookieLanguageRedirectMiddleware";
import { middlewareChainer } from "./middlewares/middlewareChainer";

const middlewareList = [cookieLanguageRedirectMiddleware, i18nMiddleware];

export default middlewareChainer(middlewareList);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(es|en)/:path*`],
};
