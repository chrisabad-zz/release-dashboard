function setRandomClass(t){var e=t.length,n=Math.floor(Math.random()*e);t.eq(n).addClass("pulse"),setTimeout(function(){t.eq(n).removeClass("pulse")},2e3)}function duplicateHTML(t,e){var n=t.html(),a=n;for(i=0;i<e;i++)a+=n;t.html(a)}var daysUntil=function(t){var e=Date.now(),n=Date.parse(t),a=new Date(n-e),o=a/1e3/60/60/24;return Math.ceil(o)},element=document.getElementById("countdown"),date=element.getAttribute("data-end-date");element.innerHTML=daysUntil(date);var data=[{value:1,color:"#19a9e5"},{value:15,color:"#4f545c"}],ctx=document.getElementById("progress").getContext("2d"),progressChart=new Chart(ctx).Doughnut(data,{segmentShowStroke:!1});!function t(){var e=Math.round(7800*Math.random())+200,n=$(".section--main .list"),a=n.find(".tick");setTimeout(function(){setRandomClass(a),t()},e)}(),$(function(){$(".js-scroll").each(function(){duplicateHTML($(this),300)}),setTimeout(function(){location.reload()},432e5)});