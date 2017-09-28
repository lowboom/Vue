import createApi from 'create-api'
import Axios from 'axios'

const url = "http://test.hongbaodai.com:39083/p2p/soa";
//const url = "https://service.hongbaodai.com/p2p/soa";

const api = createApi(url);

export function fetchItem(p) {
    return api.jsonp({
        service: "uc.classroomService.classroomDetail_OPEN",
        //body:{"id": p.id,"belong_type":p.type}
        body:{"id": p.id,"belong_type":p.type}
    })
}
