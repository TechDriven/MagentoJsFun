define(['vue', 'jquery', 'Techdriven_MagentoJsFun/js/jquery-log'], function (Vue, $) {
    'use strict'

    $.log("Testing output to the dev console");

    return function (config, element) {
        return new Vue({
            el: '#'+element.id,
            data: {
                message: config.message
            }
        })
    }
})
