const ngtools = require('@ngtools/webpack');
const path = require('path');

module.exports = {
    entry: {
        server: './src/main.server.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.join(process.cwd(), "dist"),
        filename: '[name].ssr.js'
    },
    plugins: [
        new ngtools.AotPlugin({
            "entryModule": "app/app.module#AppModule",
            "hostReplacementPaths": {
                "environments/environment.ts": "environments/environment.ts"
            },
            "exclude": [],
            "tsConfigPath": "src/tsconfig.app.json",
            "skipCodeGeneration": true
        })
    ],
    module: {
        rules: [{
                test: /\.ts$/,
                loader: '@ngtools/webpack',
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader']
            }
        ]
    }
}
