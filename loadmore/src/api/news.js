import reqwest from 'reqwest'
// import axios from 'axios'

const domain = 'https://cnodejs.org/api/v1/topics'

export default {
    getList (data , callback){
        reqwest({
            url:domain,
            data:data
        })
        .then(val => callback(null,val))
        .catch(e => callback(e))
    }
}