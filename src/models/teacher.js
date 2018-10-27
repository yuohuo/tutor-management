import request from '../utils/request.js';
import { routerRedux } from 'dva/router';
let teacher = {
    namespace:'teacher',
    state:{ 
        isLogin:false,
        teachers:[],
        total:0, //总记录数
    },
    effects:{
        // 更新teachers
        *updateTeacher({payload},{select,put,call}) {
            let res = yield call(request('/teachers',{
                params:payload
            }));
            // 将teacher信息保存到state中
            yield put({type:'update',payload:{teachers:res.data.teachers,total:res.data.total } });
        },
        // 异步action
        *doLogin({payload},{select,put,call }) {   
            
            let res = yield call(request('/signin',{
                method:'post',
                data:payload, // {username,password}
            }));
           
           if(res.data.errcode != 0) {
                return alert('用户名或密码不正确!');
           }
            // 本地的seesion存储 localStorage
            window.sessionStorage.setItem('user',JSON.stringify(res.data.user));

            // 更改登录状态
            yield put({type:'changeLogin', payload:{ isLogin:true } });
            // 跳转页面
            yield put(routerRedux.push('/home/list'))
        }
        
    },
    reducers:{
            update (state,{payload}) {
                return {
                    teachers:payload.teachers,
                    total:payload.total
                }
            },
            changeLogin(state,{payload}) {
                return {
                    isLogin : payload.isLogin
                }
            }
    }
}





export default teacher;