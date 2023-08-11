let get_data = (url, cb) => {    
    // https://github.com/lil-js/http

    http.get(url, {
        headers: {
            'X-Version': '0.1.0'
        }},
        function (err, res) {
            cb(err, res);
        }
    )
}

get_data('https://dummyjson.com/products/1', (err, res) => {
    if (res.status == 200) {
        console.log(res.data);
    }
})
