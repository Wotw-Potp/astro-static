/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_APP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
