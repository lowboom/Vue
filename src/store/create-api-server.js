import LRU from 'lru-cache'
import Axios from 'axios'
import qs from "qs"

export default function createApi(url){
    let api
    if (process.__API__) {
        api = process.__API__
    } else {
        api = {
            // url: 'http://127.0.0.1:8089/api/',
            onServer: true,
            cachedItems: LRU({
                max: 1000,
                maxAge: 1000 * 60 * 15
            }),

            cachedIds: {},
            jsonp: function(opt) {
                const options = {
                    //callback: "ServerCall",
                    service : null,
                    body : null,
                    head : null
                }
                const data = Object.assign({},options,opt);
                const params = {};
                // 处理参数
                for ( var i in data ){
                    if (data[i])
                        params[i] = typeof data[i] === 'object'? JSON.stringify(data[i]) : data[i];
                }
                return Axios.get(url, {
                    params: data
                }).then(data => {return data.data}).catch(console.error)
            }
        }
        process.__API__ = api
    }
    return api
}
