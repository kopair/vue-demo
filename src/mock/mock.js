import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import{
    Todos
} from './data/todoList';
import { toUnicode } from 'punycode';
export default{
    start(){
        let mock=new MockAdapter(axios);

        mock.onGet('/todo/list').reply(config => { //  config 指 前台传过来的值
            let mockTodo = Todos.map(tode => { // 重组 Todos数组，变成我们想要的数据
              return {
                id: tode.id, 
                title: tode.title,
                count: tode.record.filter((data) => {
                  if (data.checked === false) return true;
                  return false;
                }).length, // 过滤到record里面 ‘checked’ 为true的数据，因为它们已经被完成了
                locked: tode.locked,
                isDelete: tode.isDelete
              };
            }).filter(tode => {
              if (tode.isDelete === true) return false; // 过滤掉 ‘isDelete’为true，因为已经被删除了。
              return true;
            });
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve([200,{
                    todos:mockTodo
                }]);
            },200);
            });
        });

        mock.onPost('/todo/addTodo').reply(config=>{
            Todos.push({
                id:Mock.Random.guid(),
                title:'newList',
                isDelete:false,
                locked:false,
                record:[]
            });
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([200]);
                },200);
            });
        });
        
        mock.onPost('/todo/addRecord').reply(config=>{
            let{
                id,
                text
            }=JSON.parse(config.data);

            Todos.some((t,index)=>{
                if(t.id===id){
                    t.record.push({
                        text:text,
                        isDelete:false,
                        checked:false
                    });
                    return true;
                }
            });
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([200]);
                },200);
            });
        });
    }
};
