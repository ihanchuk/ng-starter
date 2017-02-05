module.exports = function() {
    require("./css/hello.scss");
    require("./css/hello.css");
    return function () {
        return {
            restrict: "E",
            scope:{
                "name":"=",
                "greeting":"&"
            },
            template: require("./templates/helloTemplate.html")
        };
    }
}

