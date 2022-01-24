// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require rails-ujs
//= require turbolinks
//= require jquery/dist/jquery.js
//= require jquery
//= require jquery_ujs
//= require_tree .

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
// import jQuery from 'jquery';
// 上記rails6系で必要?なくても動作確認済み

Rails.start();
Turbolinks.start();
ActiveStorage.start();
// window.$ = jQuery;
// 上記rails6系で必要?なくても動作確認済み
