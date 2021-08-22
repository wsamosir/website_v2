const path = require("path");

module.exports = (env, argv) => {

	const production = !!(argv.mode == "production");
  
    var config = {

            mode: production ? "production" : "development",

        entry: [
            "./scripts/root.js",
            "./styles/style.scss"
        ],

        target: 'web',

        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, 'dist')
        },

        module: {
        rules: [
            {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'file-loader',
                    options: { outputPath: '/', name: 'bundle.min.css'}
                }, 'sass-loader'
                ]
            }
            
        ],
        },

        watchOptions: {
            aggregateTimeout: 1000,
            poll: 500,
            ignored: /node_modules/,
        }


    }

    return config;

};