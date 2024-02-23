/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // ... you can define other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
