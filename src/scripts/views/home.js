module.exports = {
    getPosList: function (cb) {
        $.ajax({
            url: '/api/listmore.json',
            success: function (res) {
                cb(res)
            }
        })
    }
}