import React from "react";
import RouteConfig from "routes/RouteConfig";
import ScrollToTop from "utils/scrollToTop";
import { Toaster } from "react-hot-toast";
import BackToTop from "website/BackToTop";

function App() {
  return (
    <React.Fragment>
      <BackToTop />
      <ScrollToTop />
      <Toaster toastOptions={{ duration: 4000 }} />
      <RouteConfig />
    </React.Fragment>
  );
}

export default App;
