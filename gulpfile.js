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
gulp.task("cli", () => {
  gulp
    .src("cli/*.js")
    .pipe(rigger())
    .pipe(rename({ basename: "cli" }))
    .pipe(gulp.dest("dist/cli"));
});
gulp.task("default", ["src", "cli"]);
