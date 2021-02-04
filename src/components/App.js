export default class {
  components = {};
  state = {
    a: 1,
  };
  constructor(identifier) {
    console.log("constructor is called");
    this.identifier = identifier;
  }
  created() {
    console.log("created");
  }
  mounted() {
    console.log("mounted");
  }
  render() {
    console.log("render");
    document.querySelector(this.identifier).innerHTML = `
      <h1>Hello World!</h1>
    `;
  }
}
