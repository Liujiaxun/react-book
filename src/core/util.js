import axios from './axios';
export const SStorage = {
  set:(key,value) =>{
    sessionStorage.setItem(key,value);
  },
  get:key => {
      return sessionStorage.getItem(key)
  },
  del:key => {
      sessionStorage.setItem(key,null);
  }
}

export const copy = function (value) {
  var oInput = document.createElement('input');
      oInput.value = value;
      document.body.appendChild(oInput);
      oInput.select();// 选择对象
      document.execCommand("Copy");// 执行浏览器复制命令
      oInput.className ='oInput';
      oInput.style.display='none';
}
// format(shijianchuo)
//   {
//     //shijianchuo是整数，否则要parseInt转换
//     var time = new Date(shijianchuo);
//     var y = time.getFullYear();
//     var m = time.getMonth()+1;
//     var d = time.getDate();
//     var h = time.getHours();
//     var mm = time.getMinutes();
//     var s = time.getSeconds();
//     // return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
//   }


export function remoteLoad(url, hasCallback) {
  return createScript(url);
  /**
   * 创建script
   * @param url
   * @returns {Promise}
   */
  function createScript(url) {

    var scriptElement = document.createElement('script');
    document.body.appendChild(scriptElement);

    var promise = new Promise((resolve, reject) => {
      scriptElement.addEventListener('load', e => {
        removeScript(scriptElement);
        if(!hasCallback){
          resolve(e);
        }
      }, false);

      scriptElement.addEventListener('error', e => {
        removeScript(scriptElement);
        reject(e);
      }, false);

      if(hasCallback){
        window.____callback____ = function() {
          resolve();
          window.____callback____ = null;
        }
      }

    });

    if(hasCallback){
      url += '&callback=____callback____'
    }

    scriptElement.src = url;

    return promise;
  }

  /**
   * 移除script标签
   * @param scriptElement script dom
   */
  function removeScript(scriptElement) {
    document.body.removeChild(scriptElement);
  }
}


export const addRoute = (data) => {
  //这里之所以要重新遍历一下，是因为，通常我们动态路由的时候，是获取服务端数据，这个component属性是一个字符串，或者可能连字段名都是其他的key
  //所以这里要做一些转换
  return generaMenu(data)
}

export const request = (url,methods='get',data={}) => {
  return new Promise((resolve,reject)=>{
    axios[methods](url,data).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

export const isLogin = () => {
  const ybadmin_token = sessionStorage.getItem('ybadmin_token');
  if(ybadmin_token === '' || ybadmin_token === 'undefined' || !ybadmin_token || ybadmin_token === 'null'){
    return false;
  }
  return true;
}
export const getValue = (data,key) => {
  for(let i=0;i<data.length;i++){
      if(data[i].key === key){
          return data[i];
      }
  }
  return {};
}

/**
 *  chat get Session  account
 */

export const getChatSessionAccount = ( data ) => {
  let account = [];
  for(let i=0;i<data.length;i++){
    if(data[i].to){ 
      account.unshift(data[i].to);
    }
  }
  return account;
}

export const mergeChatSessionAndUserInfo = (data,users) => {
    for(let i=0;i<data.length;i++){
      let account = data[i].to;
      let userData =  users && users.filter(item => item.account === account);
      data[i].users = userData[0];
    }
  return data;
}

function add0(m){return m<10?'0'+m:m }
export const format = (shijianchuo)=>
{
  //shijianchuo是整数，否则要parseInt转换
  var time = new Date(shijianchuo);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}

export const getQueryString = function(name,search) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = search.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  }
  return null;
}