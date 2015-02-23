
var getURL = function(jsEnv) {
    var url = jsEnv.getSiteURL();
    return url.replace("https://", "http://");
};

var path = require("path"),
    jsApi = require("jumpstarterapi"),
    jsEnv = jsApi.env,
    config = {
        production: {
            url: getURL(jsEnv),
            mail: {},
            database: {
                client: "sqlite3",
                connection: {
                    filename: "/app/state/ghost/db/db.sqlite"
                },
                debug: false
            },
            server: {
                host: "127.0.0.1",
                port: "1026"
            },
            paths: {
                contentPath: "/app/state/ghost/content/"
            }
        }
    };

module.exports = config;
