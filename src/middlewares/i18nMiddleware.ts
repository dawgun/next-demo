import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

export const i18nMiddleware = createMiddleware(routing);
