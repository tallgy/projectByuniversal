import Mock from 'mockjs'
  
  const listVersion = () => {
    let data = {
      respCode: 100,
      rows: [],
      total: 10
    };
  
   for (let index = 0; index < 11; index++) {
     data.rows.push(Mock.mock({
       versionId: '@natural',
       versionName: '@ctitle',
       versionNum:'@ctitle',
       sotaAppName: '@ctitle',
       versionStatus:'',
       updateTime: '@datetime'
     }))
   }
   return data;
 }
 
 export default {
   listVersion
 }