import Vue from 'vue'
import App from './App'
import './mock'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  VueResource  from 'vue-resource'
import url from 'url';
import settle from 'axios/lib/core/settle';
import buildURL from 'axios/lib/helpers/buildURL';
import buildFullPath from 'axios/lib/core/buildFullPath';
import createError from 'axios/lib/core/createError';

Vue.config.productionTip = false
Vue.prototype.$api='http://192.168.43.229:8888'
// Vue.use(VueResource)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()


// export const http = axios.create({
//   baseURL: 'http://localhost:3000',
// });
// const uniRequestAdapter = config => {
//   return new Promise((resolve, reject) => {
//     // Parse url
//     const fullPath = buildFullPath(config.baseURL, config.url);
//     const parsed = url.parse(fullPath);

//     // 选项
//     const options = {
//       // // 方法
//       // method: config.method.toUpperCase(),
//       // // 地址
//       // url: buildURL(
//       //   parsed.href,
//       //   config.params,
//       //   config.paramsSerializer,
//       // ).replace(/^\?/, ''),
//       // // 头部
//       // header: config.headers,
//       // // 数据
//       // data: config.data,
//       // // 数据类型
//       // dataType: config.dataType,
//       // // 响应类型
//       // responseType: config.responseType,
//       // // 验证 SSL 证书
//       // sslVerify: config.sslVerify,
//       // // 成功
//       // success(response) {
//       //   settle(resolve, reject, {
//       //     data: response.data,
//       //     status: response.statusCode,
//       //     headers: response.header,
//       //     config,
//       //   });
//       // },
//       // // 失败
//       // fail() {
//       //   reject(createError('网络连接失败！', config, 'FAIL'));
//       // },
//     };

//     // uni.request(options);
//   });
// };

// axios.defaults.adapter = uniRequestAdapter;
