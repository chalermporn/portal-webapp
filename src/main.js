import Vue from "vue";
import App from "./App";
import { Button, message } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import store from "./store";

Vue.component(Button.name, Button);
Vue.prototype.$message = message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount("#app");
