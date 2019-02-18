var gulp = require("gulp");
var webserver = require("gulp-webserver");
var fs = require("fs");
var url = require("url");
var path = require("path");

gulp.task("server", function() {
    return gulp.src("./src")
        .pipe(webserver({
            port: 9999,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = decodeURI(url.parse(req.url, true).pathname);
                if (pathname === "/favicon.ico") {
                    return res.end("")
                }
                pathname = pathname === "index.html" ? "/" : pathname;
                if (pathname == "/") {
                    res.end(fs.readFileSync(path.join(__dirname, "src", "index.html")))
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                }
            }
        }))
})