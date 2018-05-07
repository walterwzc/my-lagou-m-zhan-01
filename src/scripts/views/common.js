var indexTpl = require('../../templates/home.html')
var searchTpl = require('../../templates/search.html')
var mineTpl = require('../../templates/mine.html')

var poslistTpl = require('../../templates/poslist.html')

var home = require('./home')
var scrollUtil = require('../utils/iscroll.util.js')

module.exports = {
    changeTab: function () {
        var that = this

        $('footer li').on('tap', function () {
            location.href = $(this).attr('data-url')
            $(this).addClass('active').siblings().removeClass('active')
            that.render()
        })
    },

    renderPage: function (page) {
        switch (page) {
            case "":
            case 'index':
                home.getPosList(function (res) {
                    poslist = template.render(poslistTpl, res.content.data.page)
                    $('#main').html(indexTpl)
                    $('#main main ul li:eq(0)').after(poslist)

                    // IScroll
                    scrollUtil.scroll({
                        tpl: poslistTpl,
                        loadmoreSize: 10
                    })
                })
                break;
            case 'search':
                $('#main').html(searchTpl)
                break;
            case 'mine':
                $('#main').html(mineTpl)
                break;
            default:

        }
    },

    render: function () {
        var hash = location.hash
        this.renderPage(hash.substr(1))
    }
}