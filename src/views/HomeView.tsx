import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld";
export default defineComponent({
  name: "HomeView",
  setup() {
    return () => (
      <div class="home">
        <img alt="Vue logo" src={require("../assets/logo.png")} />
        <HelloWorld msg="This a Home Page" msg2="This a Home Page"></HelloWorld>
      </div>
    );
  },
});
