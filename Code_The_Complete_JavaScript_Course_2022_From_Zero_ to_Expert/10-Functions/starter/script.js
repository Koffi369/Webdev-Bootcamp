'use strict';

const myfunc = function (str) {
  console.log(str.replace(/ /g, '').toLowerCase());
};

myfunc('JAVASCRIPT is FUN');
