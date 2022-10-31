export const copy = () => {
	return app.gulp.src(app.path.src.js) //.files
		.pipe(app.gulp.dest(app.path.build.js)) //.files
}