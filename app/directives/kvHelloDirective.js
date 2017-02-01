if (TEST_ENV) {
    require("./hello.test");
}

module.exports = function() {


    require("./css/hello.style.scss");
    require("./css/hello.style.css");
    return function () {
        return {
            restrict: "E",
            template: require("./templates/helloTemplate.html")
        };
    }
}
