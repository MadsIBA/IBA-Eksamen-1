'use strict';
/*
 * first.mjs
 */
export function doSomething(text) {
    const elem = document.createElement('p');
    elem.textContent = text;
    document.body.appendChild(elem);
}