/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

let self = require('sdk/self');

let { Cc, Cu, Ci } = require('chrome');

let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
let ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
let uri = ios.newURI('chrome://no-close-buttons/content/style.css', null, null);

exports.main = function (options, callbacks) {
  sss.loadAndRegisterSheet(uri, sss.USER_SHEET);  
};

exports.onUnload = function (reason) {
  sss.unregisterSheet(uri, sss.USER_SHEET);  
};
