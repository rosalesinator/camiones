var elixir = require('laravel-elixir'),
    jade  =  require('laravel-elixir-jade'),
    livereload  =  require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.rubySass("styles.sass", "public/css/styles.css");

    mix.jade({
        //baseDir: "./resources/assets",
        src: "/assets/jade/",
        search: "**/*.jade"
    });

    mix.scripts([
      "jquery.min.js",
      "plugins/*.js",
      "functions.js",
    ], "public/js/min/functions.min.js", "resources/assets/js");

    mix.livereload();
});
