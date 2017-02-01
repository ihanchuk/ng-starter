if (TEST_ENV) {
    var x = require("./tests/hello.test.js");
    console.log(x());
}

module.exports = function() {
    require("./css/hello.style.scss");
    require("./css/hello.style.css");
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
