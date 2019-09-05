const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(proxy("/apis", { 
        target: "http://127.0.0.1:8080/api/v1/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/apis": "/"
        },
    }));
};