import { useCounterStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
    msg2: String,
  },
  setup(props) {
    const store = useCounterStore();
    return () => (
      <div class="hello-world">
        <div>消息：{props.msg}</div>

        <div>count :{store.count}</div>

        <div>
          <button onClick={store.increment}>点击+1</button>
        </div>
      </div>
    );
  },
});
