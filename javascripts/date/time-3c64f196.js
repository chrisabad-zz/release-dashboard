/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
var TimeSpan=function(t,e,s,i,n){for(var o="days hours minutes seconds milliseconds".split(/\s+/),r=function(t){return function(){return this[t]}},h=function(t){return function(e){return this[t]=e,this}},u=0;u<o.length;u++){var a=o[u],l=a.slice(0,1).toUpperCase()+a.slice(1);TimeSpan.prototype[a]=0,TimeSpan.prototype["get"+l]=r(a),TimeSpan.prototype["set"+l]=h(a)}if(4==arguments.length)this.setDays(t),this.setHours(e),this.setMinutes(s),this.setSeconds(i);else if(5==arguments.length)this.setDays(t),this.setHours(e),this.setMinutes(s),this.setSeconds(i),this.setMilliseconds(n);else if(1==arguments.length&&"number"==typeof t){var c=0>t?-1:1;this.setMilliseconds(Math.abs(t)),this.setDays(Math.floor(this.getMilliseconds()/864e5)*c),this.setMilliseconds(this.getMilliseconds()%864e5),this.setHours(Math.floor(this.getMilliseconds()/36e5)*c),this.setMilliseconds(this.getMilliseconds()%36e5),this.setMinutes(Math.floor(this.getMilliseconds()/6e4)*c),this.setMilliseconds(this.getMilliseconds()%6e4),this.setSeconds(Math.floor(this.getMilliseconds()/1e3)*c),this.setMilliseconds(this.getMilliseconds()%1e3),this.setMilliseconds(this.getMilliseconds()*c)}return this.getTotalMilliseconds=function(){return 864e5*this.getDays()+36e5*this.getHours()+6e4*this.getMinutes()+1e3*this.getSeconds()},this.compareTo=function(t){var e,s=new Date(1970,1,1,this.getHours(),this.getMinutes(),this.getSeconds());return e=null===t?new Date(1970,1,1,0,0,0):new Date(1970,1,1,t.getHours(),t.getMinutes(),t.getSeconds()),e>s?-1:s>e?1:0},this.equals=function(t){return 0===this.compareTo(t)},this.add=function(t){return null===t?this:this.addSeconds(t.getTotalMilliseconds()/1e3)},this.subtract=function(t){return null===t?this:this.addSeconds(-t.getTotalMilliseconds()/1e3)},this.addDays=function(t){return new TimeSpan(this.getTotalMilliseconds()+864e5*t)},this.addHours=function(t){return new TimeSpan(this.getTotalMilliseconds()+36e5*t)},this.addMinutes=function(t){return new TimeSpan(this.getTotalMilliseconds()+6e4*t)},this.addSeconds=function(t){return new TimeSpan(this.getTotalMilliseconds()+1e3*t)},this.addMilliseconds=function(t){return new TimeSpan(this.getTotalMilliseconds()+t)},this.get12HourHour=function(){return this.getHours()>12?this.getHours()-12:0===this.getHours()?12:this.getHours()},this.getDesignator=function(){return this.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator},this.toString=function(t){this._toString=function(){return null!==this.getDays()&&this.getDays()>0?this.getDays()+"."+this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds()):this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds())},this.p=function(t){return t.toString().length<2?"0"+t:t};var e=this;return t?t.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,function(t){switch(t){case"d":return e.getDays();case"dd":return e.p(e.getDays());case"H":return e.getHours();case"HH":return e.p(e.getHours());case"h":return e.get12HourHour();case"hh":return e.p(e.get12HourHour());case"m":return e.getMinutes();case"mm":return e.p(e.getMinutes());case"s":return e.getSeconds();case"ss":return e.p(e.getSeconds());case"t":return(e.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator).substring(0,1);case"tt":return e.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator}}):this._toString()},this};Date.prototype.getTimeOfDay=function(){return new TimeSpan(0,this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds())};var TimePeriod=function(t,e,s,i,n,o,r){for(var h="years months days hours minutes seconds milliseconds".split(/\s+/),u=function(t){return function(){return this[t]}},a=function(t){return function(e){return this[t]=e,this}},l=0;l<h.length;l++){var c=h[l],g=c.slice(0,1).toUpperCase()+c.slice(1);TimePeriod.prototype[c]=0,TimePeriod.prototype["get"+g]=u(c),TimePeriod.prototype["set"+g]=a(c)}if(7==arguments.length)this.years=t,this.months=e,this.setDays(s),this.setHours(i),this.setMinutes(n),this.setSeconds(o),this.setMilliseconds(r);else if(2==arguments.length&&arguments[0]instanceof Date&&arguments[1]instanceof Date){var d=t.clone(),M=e.clone(),f=d.clone(),p=d>M?-1:1;if(this.years=M.getFullYear()-d.getFullYear(),f.addYears(this.years),1==p?f>M&&0!==this.years&&this.years--:M>f&&0!==this.years&&this.years++,d.addYears(this.years),1==p)for(;M>d&&d.clone().addDays(Date.getDaysInMonth(d.getYear(),d.getMonth()))<M;)d.addMonths(1),this.months++;else for(;d>M&&d.clone().addDays(-d.getDaysInMonth())>M;)d.addMonths(-1),this.months--;var m=M-d;if(0!==m){var D=new TimeSpan(m);this.setDays(D.getDays()),this.setHours(D.getHours()),this.setMinutes(D.getMinutes()),this.setSeconds(D.getSeconds()),this.setMilliseconds(D.getMilliseconds())}}return this};