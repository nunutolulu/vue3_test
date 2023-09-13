// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";

// 创建应用实例对象——app（类似于之前vue2中的vm，但app比vm更轻，没有那么多属性和方法）
const app = createApp(App);
// console.log(app);

// 挂载
app.mount("#app");

// 卸载
// setTimeout(() => {
//   app.unmount("#app");
// }, 1000);

// 并不兼容之前的vue2的写法
/* const vm = new Vue({
  render: (h) => h(App),
});
vm.$mount("#app"); */
