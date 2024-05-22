declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV_MODE: "development" | "staging" | "production";
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_API_ROUTE: string;
    }
  }
}

export {};
