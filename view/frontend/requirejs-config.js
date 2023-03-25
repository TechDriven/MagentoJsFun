var config = {
    "map": {
        "*": {
            "fadeInElement": "Techdriven_MagentoJsFun/js/fade-in-element"
        }
    },
    "paths": {
        "vue": [
            "https://cdn.jsdelivr.net/npm/vue@2/dist/vue",
            "Techdriven_MagentoJsFun/js/vue"
        ]
    },
    "shim": {
        "Techdriven_MagentoJsFun/js/jquery-log": [
            "jquery"
        ]
    },
    "deps": [
        "Techdriven_MagentoJsFun/js/every-page"
    ],
    "config": {
        "mixins": {
            "Magento_Ui/js/view/messages": {
                "Techdriven_MagentoJsFun/js/messages-mixin": true
            }
        }
    }
}
