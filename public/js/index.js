import { log1, log2} from './log.js';

import css from '../css/index.less';

let test = 'test es2015 working';

function testing() {
    // test that the css was loaded thanks to css-loader and style-loader
    console.log(css);

    // test that es2015 features were transpiled thanks to babel-preset-env
    console.log(test);
}

testing();

// test that we are able to use functions from another file
log1();
log2();
