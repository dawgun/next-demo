import { NextRequest, NextResponse } from "next/server";

export const middlewareChainer = (middlewares: any[]) => {
  return async function middleware(request: NextRequest) {
    for (const fn of middlewares) {
      const response = await fn(request);
      if (response) return response;
    }

    return NextResponse.next();
  };
};
