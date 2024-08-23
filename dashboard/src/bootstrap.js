import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If development, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// Running through container
export { mount };
