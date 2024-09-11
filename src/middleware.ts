import { i18nMiddleware } from "./middlewares/i18nMiddleware";
import { middlewareChainer } from "./middlewares/middlewareChainer";

const middlewareList = [i18nMiddleware];

export default middlewareChainer(middlewareList);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(es|en)/:path*`],
};
