declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_PUB_KEY: string;
      REACT_APP_SERVICE_ID: string;
      REACT_APP_TEMPLATE_ID: string;
    }
  }
}

export {}
