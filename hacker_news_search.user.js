// ==UserScript==
// @name         Hacker News Search
// @namespace    http://www.ryangittins.com/
// @author       Ryan Gittins
// @version      1.0.1
// @description  Adds a simple search box to the top bar of the Hacker News site.
// @match        *://news.ycombinator.com/*
// @copyright    2014
// ==/UserScript==

// Grab the top bar
var selector = document.querySelector('td > table > tbody > tr');

// Insert a new td between the submit link and the login link
var cell = selector.insertCell(2);

// The html of the search box to be inserted
var box = '<span><form method="get" action="//hn.algolia.com/" style="margin:0;"><input style="height:20px;" type="text" name="q" size="16" placeholder="Search"></form></span>';

// Place the search box into the header
cell.innerHTML = box;