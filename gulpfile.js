const gulp = require("gulp");
const rigger = require("gulp-rigger");
const rename = require("gulp-rename");
gulp.task("src", () => {
  gulp
    .src("src/*.js")
    .pipe(rigger())
    .pipe(rename({ basename: "trowler" }))
    .pipe(gulp.dest("dist"));
});
gulp.task("default", ["src"]);
