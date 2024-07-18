/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PARTICLE_PROJECT_ID: string
  readonly VITE_APP_PARTICLE_CLIENT_KEY: string
  readonly VITE_APP_PARTICLE_APP_ID: string
  readonly VITE_APP_WALLETCONNECT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}