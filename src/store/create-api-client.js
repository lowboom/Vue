import $ from "jquery"

export default function createApi(server_url){
    var _id = ""
    return {
        jsonp: function(opt){
            return new Promise(function(res, err){
                const params = {};
                // 处理参数
                for ( var i in opt ){
                    const val = opt[i];
                    if (val)
                        params[i] = typeof val === 'object'? JSON.stringify(val) : val;
                }
                // 处理回调函数

                if ( params.service ) {
                    $.ajax({
                        type : 'post',
                        dataType : 'jsonp',
                        jsonp : 'callback',
                        url : server_url,
                        data : params,
                        timeout : 15000,
                        success : res,
                        error : err,
                        complete : function(e){
                            // console.log(e);
                        }
                    });
                }
            })

        }
    }
}
