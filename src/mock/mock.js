import axios from 'axios';
import Mock from 'mockjs';
import{
    Todos
} from './data/todoList';
import MockAdapter from 'axios-mock-adapter';
export default{
    star(){
        let mock = new MockAdapter(axios);
        mock.onGet('./todo/list').reply(config => {
            let mockTodo = Todos.map(tode =>{
                
            });
        });
    }
}