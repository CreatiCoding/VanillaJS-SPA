import App from "./components/App.js";
const VanillaJSSPA = {
  components: [],
  registerComponent(component) {
    component.created();
    component.render();
    if (component.components && component.components.length) {
      component.components.map((component) => component.render());
    }
    component.mounted();
    this.components.push(component);
  },
};

VanillaJSSPA.registerComponent(new App("#app"));
