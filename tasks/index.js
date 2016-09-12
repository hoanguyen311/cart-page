import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import * as webpack from 'start-webpack';
import env from 'start-env';
import path from 'path';
const start = Start(reporter());

const root = path.resolve(__dirname, '..');
const DEV_PORT = 8000;

export function dev() {
    return start(
        env('development', () => {
            const cfg = require(root + '/webpack/development').default(DEV_PORT);
            return start(
                webpack.dev(cfg, DEV_PORT)
            );
        })
    );
}


export function build() {
    return start(
        env('production', () => {
            const cfg = require(root + '/webpack/production').default;

            return start(
                webpack.build(cfg)
            );
        })
    );
}

export function buildDemo() {
    return start(
        files(['dist']),
        clean(),
        env('production', () => {
            const cfg = require(root + '/webpack/demo').default;

            return start(
                webpack.build(cfg)
            );
        })
    );
}
