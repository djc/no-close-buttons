/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
var uri = ios.newURI('chrome://no-close-buttons/content/style.css', null, null);

function startup(data, reason) {
    sss.loadAndRegisterSheet(uri, sss.USER_SHEET);
}

function shutdown(data, reason) {
    sss.unregisterSheet(uri, sss.USER_SHEET);
}
