define([], function () {
    'use strict'

    return function (originalMessage) {
        return originalMessage.extend({
            defaults: {
                hideTimeout: 2000,
                hideSpeed: 100,
            }
        })
    }
})
