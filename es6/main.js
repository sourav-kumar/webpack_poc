var moment = require('lodash');
import Point from './Point.js';
var body = document.getElementById('content');
body.textContent = 'Good point: ' + new Point(1, 23);