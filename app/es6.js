import $ from 'jquery'
import _ from 'lodash'

var hello = function() {
    console.log('ES6 jquery', $);
    console.log('ES6 lodash', _);
}

export { hello }
