declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV_MODE: 'development' | 'staging' | 'production'
    }
  }
}

export { }