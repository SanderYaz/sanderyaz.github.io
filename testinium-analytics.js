!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(window,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){var i;!function(n,s){"use strict";var o="model",a="name",u="type",c="vendor",d="version",l="mobile",h="tablet",p={extend:function(e,t){var r={};for(var i in e)t[i]&&t[i].length%2==0?r[i]=t[i].concat(e[i]):r[i]=e[i];return r},has:function(e,t){return"string"==typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f={rgx:function(e,t){for(var r,i,n,s,o,a,u=0;u<t.length&&!o;){var c=t[u],d=t[u+1];for(r=i=0;r<c.length&&!o;)if(o=c[r++].exec(e))for(n=0;n<d.length;n++)a=o[++i],"object"==typeof(s=d[n])&&s.length>0?2==s.length?"function"==typeof s[1]?this[s[0]]=s[1].call(this,a):this[s[0]]=s[1]:3==s.length?"function"!=typeof s[1]||s[1].exec&&s[1].test?this[s[0]]=a?a.replace(s[1],s[2]):void 0:this[s[0]]=a?s[1].call(this,a,s[2]):void 0:4==s.length&&(this[s[0]]=a?s[3].call(this,a.replace(s[1],s[2])):void 0):this[s]=a||void 0;u+=2}},str:function(e,t){for(var r in t)if("object"==typeof t[r]&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(p.has(t[r][i],e))return"?"===r?void 0:r}else if(p.has(t[r],e))return"?"===r?void 0:r;return e}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},w={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,d],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[a,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],d],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],d],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],d],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[a,d],[/(QQ)\/([\d\.]+)/i],[a,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,d],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[a,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,d],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[d,f.str,b.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",p.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",p.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",p.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[o,c,[u,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[c,"Apple"],[u,h]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[c,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,o,[u,h]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[o,[c,"Amazon"],[u,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[o,f.str,b.device.amazon.model],[c,"Amazon"],[u,l]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,c,[u,l]],[/\((ip[honed|\s\w*]+);/i],[o,[c,"Apple"],[u,l]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,o,[u,l]],[/\(bb10;\s(\w+)/i],[o,[c,"BlackBerry"],[u,l]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[o,[c,"Asus"],[u,h]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[o,"Xperia Tablet"],[u,h]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[o,[c,"Sony"],[u,l]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,o,[u,"console"]],[/android.+;\s(shield)\sbuild/i],[o,[c,"Nvidia"],[u,"console"]],[/(playstation\s[34portablevi]+)/i],[o,[c,"Sony"],[u,"console"]],[/(sprint\s(\w+))/i],[[c,f.str,b.device.sprint.vendor],[o,f.str,b.device.sprint.model],[u,l]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[c,o,[u,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[o,/_/g," "],[u,l]],[/(nexus\s9)/i],[o,[c,"HTC"],[u,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[o,[c,"Huawei"],[u,l]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,o,[u,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[c,"Microsoft"],[u,"console"]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[c,"Microsoft"],[u,l]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[o,[c,"Motorola"],[u,l]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[c,"Motorola"],[u,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,p.trim],[o,p.trim],[u,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[c,"Samsung"],[u,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[o,[c,"Sharp"],[u,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],o,[u,h]],[/smart-tv.+(samsung)/i],[c,[u,"smarttv"],o],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],o,[u,l]],[/sie-(\w*)/i],[o,[c,"Siemens"],[u,l]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],o,[u,l]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[o,[c,"Acer"],[u,h]],[/android.+([vl]k\-?\d{3})\s+build/i],[o,[c,"LG"],[u,h]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],o,[u,h]],[/(lg) netcast\.tv/i],[c,o,[u,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[o,[c,"LG"],[u,l]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[c,"Lenovo"],[u,h]],[/linux;.+((jolla));/i],[c,o,[u,l]],[/((pebble))app\/[\d\.]+\s/i],[c,o,[u,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,o,[u,l]],[/crkey/i],[[o,"Chromecast"],[c,"Google"]],[/android.+;\s(glass)\s\d/i],[o,[c,"Google"],[u,"wearable"]],[/android.+;\s(pixel c)\s/i],[o,[c,"Google"],[u,h]],[/android.+;\s(pixel xl|pixel)\s/i],[o,[c,"Google"],[u,l]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[o,/_/g," "],[c,"Xiaomi"],[u,l]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[o,/_/g," "],[c,"Xiaomi"],[u,h]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[o,[c,"Meizu"],[u,h]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[o,[c,"OnePlus"],[u,l]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[o,[c,"RCA"],[u,h]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[o,[c,"Dell"],[u,h]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[o,[c,"Verizon"],[u,h]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],o,[u,h]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[o,[c,"NuVision"],[u,h]],[/android.+;\s(k88)\sbuild/i],[o,[c,"ZTE"],[u,h]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[o,[c,"Swiss"],[u,l]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[o,[c,"Swiss"],[u,h]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[o,[c,"Zeki"],[u,h]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],o,[u,h]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[o,[c,"Insignia"],[u,h]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[o,[c,"NextBook"],[u,h]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],o,[u,l]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],o,[u,l]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[o,[c,"Envizen"],[u,h]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,o,[u,h]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[o,[c,"MachSpeed"],[u,h]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,o,[u,h]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[o,[c,"Rotor"],[u,h]],[/android.+(KS(.+))\s+build/i],[o,[c,"Amazon"],[u,h]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,o,[u,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,p.lowerize],c,o],[/(android[\w\.\s\-]{0,9});.+build/i],[o,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[d,f.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[d,f.str,b.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[a,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],d],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,d],[/(haiku)\s(\w+)/i],[a,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[a,d]]},g=function(e,t){if("object"==typeof e&&(t=e,e=void 0),!(this instanceof g))return new g(e,t).getResult();var r=e||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),i=t?p.extend(w,t):w;return this.getBrowser=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,r,i.browser),e.major=p.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return f.rgx.call(e,r,i.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return f.rgx.call(e,r,i.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,r,i.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,r,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this};g.VERSION="0.7.18",g.BROWSER={NAME:a,MAJOR:"major",VERSION:d},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:o,VENDOR:c,TYPE:u,CONSOLE:"console",MOBILE:l,SMARTTV:"smarttv",TABLET:h,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:d},g.OS={NAME:a,VERSION:d},void 0!==t?(void 0!==e&&e.exports&&(t=e.exports=g),t.UAParser=g):r(2)?void 0===(i=function(){return g}.call(t,r,t,e))||(e.exports=i):n&&(n.UAParser=g);var m=n&&(n.jQuery||n.Zepto);if(void 0!==m){var v=new g;m.ua=v.getResult(),m.ua.get=function(){return v.getUA()},m.ua.set=function(e){v.setUA(e);var t=v.getResult();for(var r in t)m.ua[r]=t[r]}}}("object"==typeof window?window:this)},,function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,r){"use strict";r.r(t);var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s,o="undefined"!=typeof window&&window,a="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,u="undefined"!=typeof global&&global,c=o||u||a,d={e:{}};function l(){try{return s.apply(this,arguments)}catch(e){return d.e=e,d}}function h(e){return s=e,l}function p(e){return"function"==typeof e}var f=!1,b={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){f=e},get useDeprecatedSynchronousErrorHandling(){return f}};function w(e){setTimeout(function(){throw e})}var g={closed:!0,next:function(e){},error:function(e){if(b.useDeprecatedSynchronousErrorHandling)throw e;w(e)},complete:function(){}},m=Array.isArray||function(e){return e&&"number"==typeof e.length};function v(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(e,t){return t+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}v.prototype=Object.create(Error.prototype);var y=v,x=function(){function e(e){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var e,t=!1;if(!this.closed){var r=this._parent,i=this._parents,n=this._unsubscribe,s=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var o,a=-1,u=i?i.length:0;r;)r.remove(this),r=++a<u&&i[a]||null;if(p(n)&&h(n).call(this)===d&&(t=!0,e=e||(d.e instanceof y?S(d.e.errors):[d.e])),m(s))for(a=-1,u=s.length;++a<u;){var c=s[a];if(null!=(o=c)&&"object"==typeof o&&h(c.unsubscribe).call(c)===d){t=!0,e=e||[];var l=d.e;l instanceof y?e=e.concat(S(l.errors)):e.push(l)}}if(t)throw new y(e)}},e.prototype.add=function(t){if(!t||t===e.EMPTY)return e.EMPTY;if(t===this)return this;var r=t;switch(typeof t){case"function":r=new e(t);case"object":if(r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if("function"!=typeof r._addParent){var i=r;(r=new e)._subscriptions=[i]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(r),r._addParent(this),r},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}},e.prototype._addParent=function(e){var t=this._parent,r=this._parents;t&&t!==e?r?-1===r.indexOf(e)&&r.push(e):this._parents=[e]:this._parent=e},e.EMPTY=((t=new e).closed=!0,t),e}();function S(e){return e.reduce(function(e,t){return e.concat(t instanceof y?t.errors:t)},[])}var E="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),T=function(e){function t(r,i,n){var s=e.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,s._parentSubscription=null,arguments.length){case 0:s.destination=g;break;case 1:if(!r){s.destination=g;break}if("object"==typeof r){r instanceof t?(s.syncErrorThrowable=r.syncErrorThrowable,s.destination=r,r.add(s)):(s.syncErrorThrowable=!0,s.destination=new _(s,r));break}default:s.syncErrorThrowable=!0,s.destination=new _(s,r,i,n)}return s}return n(t,e),t.prototype[E]=function(){return this},t.create=function(e,r,i){var n=new t(e,r,i);return n.syncErrorThrowable=!1,n},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parent,t=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=e,this._parents=t,this._parentSubscription=null,this},t}(x),_=function(e){function t(t,r,i,n){var s,o=e.call(this)||this;o._parentSubscriber=t;var a=o;return p(r)?s=r:r&&(s=r.next,i=r.error,n=r.complete,r!==g&&(p((a=Object.create(r)).unsubscribe)&&o.add(a.unsubscribe.bind(a)),a.unsubscribe=o.unsubscribe.bind(o))),o._context=a,o._next=s,o._error=i,o._complete=n,o}return n(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;b.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,r=b.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):w(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;w(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};b.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),b.useDeprecatedSynchronousErrorHandling)throw e;w(e)}},t.prototype.__tryOrSetError=function(e,t,r){if(!b.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(t){return b.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(w(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(T),R="function"==typeof Symbol&&Symbol.observable||"@@observable";function O(){}var k=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var i=this.operator,n=function(e,t,r){if(e){if(e instanceof T)return e;if(e[E])return e[E]()}return e||t||r?new T(e,t,r):new T(g)}(e,t,r);if(i?i.call(n,this.source):n.add(this.source||b.useDeprecatedSynchronousErrorHandling&&!n.syncErrorThrowable?this._subscribe(n):this._trySubscribe(n)),b.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable&&(n.syncErrorThrowable=!1,n.syncErrorThrown))throw n.syncErrorValue;return n},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){b.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){var t=e,r=t.closed,i=t.destination,n=t.isStopped;if(r||n)return!1;e=i&&i instanceof T?i:null}return!0}(e)&&e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=A(t))(function(t,i){var n;n=r.subscribe(function(t){try{e(t)}catch(e){i(e),n&&n.unsubscribe()}},i,t)})},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[R]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:function(e){return e?1===e.length?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}:O}(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=A(e))(function(e,r){var i;t.subscribe(function(e){return i=e},function(e){return r(e)},function(){return e(i)})})},e.create=function(t){return new e(t)},e}();function A(e){if(e||(e=b.Promise||Promise),!e)throw new Error("no Promise impl found");return e}var D=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new q(e,this.project,this.thisArg))},e}(),q=function(e){function t(t,r,i){var n=e.call(this,t)||this;return n.project=r,n.count=0,n.thisArg=i||n,n}return n(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(T);function N(e,t){return void 0===t&&(t=null),new B({method:"GET",url:e,headers:t})}function j(e,t,r){return new B({method:"POST",url:e,body:t,headers:r})}function I(e,t){return new B({method:"DELETE",url:e,headers:t})}function P(e,t,r){return new B({method:"PUT",url:e,body:t,headers:r})}function L(e,t,r){return new B({method:"PATCH",url:e,body:t,headers:r})}var M=function(e,t){return function(t){return t.lift(new D(e,void 0))}}(function(e,t){return e.response});function C(e,t){return M(new B({method:"GET",url:e,responseType:"json",headers:t}))}var B=function(e){function t(t){var r=e.call(this)||this,i={async:!0,createXHR:function(){return this.crossDomain?function(){if(c.XMLHttpRequest)return new c.XMLHttpRequest;if(c.XDomainRequest)return new c.XDomainRequest;throw new Error("CORS is not supported by your browser")}():function(){if(c.XMLHttpRequest)return new c.XMLHttpRequest;var e=void 0;try{for(var t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],r=0;r<3;r++)try{if(e=t[r],new c.ActiveXObject(e))break}catch(e){}return new c.ActiveXObject(e)}catch(e){throw new Error("XMLHttpRequest is not supported by your browser")}}()},crossDomain:!0,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"==typeof t)i.url=t;else for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return r.request=i,r}var r;return n(t,e),t.prototype._subscribe=function(e){return new H(e,this.request)},t.create=((r=function(e){return new t(e)}).get=N,r.post=j,r.delete=I,r.put=P,r.patch=L,r.getJSON=C,r),t}(k),H=function(e){function t(t,r){var i=e.call(this,t)||this;i.request=r,i.done=!1;var n=r.headers=r.headers||{};return r.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),"Content-Type"in n||c.FormData&&r.body instanceof c.FormData||void 0===r.body||(n["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),r.body=i.serializeBody(r.body,r.headers["Content-Type"]),i.send(),i}return n(t,e),t.prototype.next=function(e){this.done=!0;var t=this.xhr,r=this.request,i=this.destination,n=new z(e,t,r);n.response===d?i.error(d.e):i.next(n)},t.prototype.send=function(){var e=this.request,t=this.request,r=t.user,i=t.method,n=t.url,s=t.async,o=t.password,a=t.headers,u=t.body,c=h(e.createXHR).call(e);if(c===d)this.error(d.e);else{if(this.xhr=c,this.setupEvents(c,e),(r?h(c.open).call(c,i,n,s,r,o):h(c.open).call(c,i,n,s))===d)return this.error(d.e),null;if(s&&(c.timeout=e.timeout,c.responseType=e.responseType),"withCredentials"in c&&(c.withCredentials=!!e.withCredentials),this.setHeaders(c,a),(u?h(c.send).call(c,u):h(c.send).call(c))===d)return this.error(d.e),null}return c},t.prototype.serializeBody=function(e,t){if(!e||"string"==typeof e)return e;if(c.FormData&&e instanceof c.FormData)return e;if(t){var r=t.indexOf(";");-1!==r&&(t=t.substring(0,r))}switch(t){case"application/x-www-form-urlencoded":return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");case"application/json":return JSON.stringify(e);default:return e}},t.prototype.setHeaders=function(e,t){for(var r in t)t.hasOwnProperty(r)&&e.setRequestHeader(r,t[r])},t.prototype.setupEvents=function(e,t){var r,i,n=t.progressSubscriber;function s(e){var t=s,r=t.subscriber,i=t.progressSubscriber,n=t.request;i&&i.error(e);var o=new G(this,n);o.response===d?r.error(d.e):r.error(o)}(e.ontimeout=s,s.request=t,s.subscriber=this,s.progressSubscriber=n,e.upload&&"withCredentials"in e)&&(n&&(r=function(e){r.progressSubscriber.next(e)},c.XDomainRequest?e.onprogress=r:e.upload.onprogress=r,r.progressSubscriber=n),i=function(e){var t=i,r=t.progressSubscriber,n=t.subscriber,s=t.request;r&&r.error(e);var o=new X("ajax error",this,s);o.response===d?n.error(d.e):n.error(o)},e.onerror=i,i.request=t,i.subscriber=this,i.progressSubscriber=n);function o(e){}function a(e){var t=a,r=t.subscriber,i=t.progressSubscriber,n=t.request;if(4===this.readyState){var s=1223===this.status?204:this.status,o="text"===this.responseType?this.response||this.responseText:this.response;if(0===s&&(s=o?200:0),s<400)i&&i.complete(),r.next(e),r.complete();else{i&&i.error(e);var u=new X("ajax error "+s,this,n);u.response===d?r.error(d.e):r.error(u)}}}e.onreadystatechange=o,o.subscriber=this,o.progressSubscriber=n,o.request=t,e.onload=a,a.subscriber=this,a.progressSubscriber=n,a.request=t},t.prototype.unsubscribe=function(){var t=this.done,r=this.xhr;!t&&r&&4!==r.readyState&&"function"==typeof r.abort&&r.abort(),e.prototype.unsubscribe.call(this)},t}(T),z=function(e,t,r){this.originalEvent=e,this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.response=F(this.responseType,t)};function V(e,t,r){return Error.call(this),this.message=e,this.name="AjaxError",this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.response=F(this.responseType,t),this}V.prototype=Object.create(Error.prototype);var X=V;function U(e){return"response"in e?e.responseType?e.response:JSON.parse(e.response||e.responseText||"null"):JSON.parse(e.responseText||"null")}function F(e,t){switch(e){case"json":return h(U)(t);case"xml":return t.responseXML;case"text":default:return"response"in t?t.response:t.responseText}}var G=function(e,t){return X.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this},J=B.create,K=function(){return"undefined"!=typeof crypto&&crypto.getRandomValues?(1e7.toString(10)+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){var t=new Uint8Array(1);return(e^crypto.getRandomValues(t)[0]&15>>e/4).toString(16)}):"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},W=function(e,t){this.data=e,this.partitionKey=t},Y=function(e){this.records=e},Q=function(e,t,r,i,n,s){this.recordType=e,this.event=t,this.domainId=r,this.tabId=i,this.sessionId=n,this.language=s},$=function(e,t,r,i,n,s,o){this.recordType=e,this.browser=t,this.device=r,this.engine=i,this.os=n,this.screen=s,this.sessionId=o},Z=function(e,t){this.name=e,this.version=t},ee=function(e,t){this.name=e,this.version=t},te=function(e,t,r){this.vendor=e,this.type=t,this.model=r},re=function(e,t,r){this.name=e,this.version=t,this.major=r},ie=function(e,t,r,i){this.href=e,this.origin=t,this.path=r,this.title=i},ne=function(e,t,r,i,n,s,o,a,u){this.id=e,this.type=t,this.selectors=r,this.pageX=i,this.pageY=n,this.target=s,this.time=o,this.page=a,this.error=u},se=function(e,t){this.type=e,this.value=t},oe=function(e,t){this.tagName=e,this.value=t},ae=function(e,t,r,i,n){this.pixelRatio=e,this.width=t,this.height=r,this.availableWidth=i,this.availableHeight=n},ue=function(e,t,r,i){this.message=e,this.stack=t,this.lineNo=r,this.colNo=i},ce=r(0),de=function(){function e(){}return e.getBrowser=function(){var e=new ce.UAParser(navigator.userAgent).getBrowser();return new re(e.name,e.version,e.major)},e.getDevice=function(){var e=new ce.UAParser(navigator.userAgent).getDevice();return new te(e.vendor,e.type,e.model)},e.getEngine=function(){var e=new ce.UAParser(navigator.userAgent).getEngine();return new ee(e.name,e.version)},e.getOs=function(){var e=new ce.UAParser(navigator.userAgent).getOS();return new Z(e.name,e.version)},e.getScreen=function(){return new ae(window.devicePixelRatio,window.screen.width,window.screen.height,window.screen.availWidth,window.screen.availHeight)},e}(),le=["load"],he=["change","mousedown","contextmenu","dblclick","touchstart"],pe=new(function(){function e(){this.batchEventRequests=[],this.batchSize=6,this.batchIntervalTime=5e3,this.batchSendingFrequency=3e4,this.batchLatestSendingTime=(new Date).getTime(),this.domainValidationFrequency=36e5}return e.postData=function(e,t,r){!function(e,t,r){"beacon"===r&&navigator&&navigator.sendBeacon?(navigator.sendBeacon(""+e,JSON.stringify(t)),sessionStorage.removeItem("latestRecEvent")):J.post(e,t,{"Content-Type":"application/json"}).subscribe(function(e){sessionStorage.removeItem("latestRecEvent")})}(e,t,r)},e.getDomain=function(){var e=localStorage.getItem("tst-domain");return e?JSON.parse(e):void 0},e.getDomainId=function(){var e=localStorage.getItem("tst-domain"),t=e?JSON.parse(e):void 0;return t?t.id:void 0},e.getSessionId=function(){return localStorage.getItem("tst-sessionId")},e.getDomainLatestValidationTime=function(){return localStorage.getItem("tst-dm-vld-time")},e.setDomainLatestValidationTime=function(e){localStorage.setItem("tst-dm-vld-time",String(e))},e.prototype.init=function(e){var t=e.code;t&&(this.code=t,this.initDomain())},e.prototype.initDomain=function(){var t=e.getDomain();if(t){this.domainId=t.id;var r=e.getDomainLatestValidationTime(),i=r?+r:void 0;if(!i){var n=(new Date).getTime();e.setDomainLatestValidationTime(n),i=n}i&&(new Date).getTime()>+i+this.domainValidationFrequency?this.initDomainAndSessionParameters():this.isDomainEnabled(t)&&this.initParameters()}else this.initDomainAndSessionParameters()},e.prototype.isDomainEnabled=function(e){return e.id&&e.enabled},e.prototype.initParameters=function(){var t=this,r=e.getSessionId();r?(this.sessionId=r,this.sendLatesetRecord(),this.generateTabId(),this.startRecording()):(this.generateSessionId(),this.startSession().subscribe(function(e){localStorage.setItem("tst-sessionId",t.sessionId),t.generateTabId(),t.startRecording()},function(e){}))},e.prototype.startSession=function(){var e=new $("session",de.getBrowser(),de.getDevice(),de.getEngine(),de.getOs(),de.getScreen(),this.sessionId),t=this.generateAwsKinesisSessionRequestObject(e);return J.post("https://c4rungxrvh.execute-api.eu-west-1.amazonaws.com/analytics/stream/api/v1/record",t,{"Content-Type":"application/json"})},e.prototype.startRecording=function(){var e=this;le.forEach(function(t){window.addEventListener(t,function(r){e.initBatchRequest(t,r)})}),he.forEach(function(t){document.body.addEventListener(t,function(r){e.initBatchRequest(t,r)})}),window.addEventListener("beforeunload",function(t){e.batchEventRequests&&e.batchEventRequests.length>0&&e.sendBatchRequest()}),this.initBatchRequestInterval()},e.prototype.initDomainAndSessionParameters=function(){var t=this;this.authenticate().subscribe(function(e){if(e.response&&e.response.id){var r=e.response;localStorage.setItem("tst-domain",JSON.stringify(r)),t.isDomainEnabled(r)&&(t.domainId=r.id,t.initParameters())}},function(e){}),e.setDomainLatestValidationTime((new Date).getTime())},e.prototype.initBatchRequest=function(e,t){var r=this.generateJsonObject(e,t);r&&r instanceof Q&&(this.batchEventRequests.push(r),this.setLatesetRecord(this.batchEventRequests),this.batchEventRequests&&this.batchEventRequests.length>=this.batchSize&&this.sendBatchRequest())},e.prototype.initBatchRequestInterval=function(){var e=this;setInterval(function(){e.batchEventRequests&&e.batchEventRequests.length>0&&(new Date).getTime()>e.batchLatestSendingTime+e.batchSendingFrequency&&e.sendBatchRequest()},this.batchIntervalTime)},e.prototype.sendBatchRequest=function(){var t=Object.assign([],this.batchEventRequests);this.batchEventRequests=[];var r=this.generateAwsKinesisEventRequestObject(t);this.batchLatestSendingTime=(new Date).getTime(),e.postData("https://c4rungxrvh.execute-api.eu-west-1.amazonaws.com/analytics/stream/api/v1/records",r,"beacon")},e.prototype.setLatesetRecord=function(e){navigator&&navigator.sendBeacon||sessionStorage.setItem("tst-latestRecEvent",JSON.stringify(e))},e.prototype.sendLatesetRecord=function(){if(!navigator||!navigator.sendBeacon){var t=sessionStorage.getItem("tst-latestRecEvent"),r=t?JSON.parse(t):void 0;if(r){var i=this.generateAwsKinesisEventRequestObject(r);e.postData("https://c4rungxrvh.execute-api.eu-west-1.amazonaws.com/analytics/stream/api/v1/records",i,"xhr")}}},e.prototype.generateJsonObject=function(e,t){var r,i,n=Date.now();if(t instanceof ErrorEvent){if(t.error instanceof X&&String(t.error.request.url).startsWith("https://c4rungxrvh.execute-api.eu-west-1.amazonaws.com/analytics/stream/api/v1/record"))return!1;r=new ue(t.error.message,t.error.stack,t.lineno,t.colno)}i=window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var s,o=new ie(window.location.href,i,window.location.pathname,document.title);s=t.target.dataset&&t.target.dataset.hasOwnProperty("tstNotrack")||"INPUT"===t.target.tagName?"****":t.target.value;var a=new oe(t.target.tagName,s),u="load"===e?"document":this.getElementXPath(t.target),c=t.target.innerText?t.target.innerText.substring(0,100):void 0,d=[];if(t.target.id&&d.push(new se("ID",t.target.id)),t.target.name&&d.push(new se("NAME",t.target.name)),t.target.classList&&t.target.classList.length){var l=t.target.classList.toString();d.push(new se("CLASS_NAME",l))}if(c&&d.push(new se("TEXT",c)),u&&d.push(new se("XPATH",u)),t.target.tagName&&t.target.classList&&t.target.classList.length){var h=t.target.tagName?t.target.tagName.toLowerCase():"";h=t.target.id?h+"#"+t.target.id:h,t.target.classList.forEach(function(e){e.length&&(h=h+"."+e)}),d.push(new se("CSS_SELECTOR",h))}n="change"===(e="mousedown"===e?"click":e)?n-80:n;var p=new ne(K(),e,d,t.pageX,t.pageY,a,n,o,r),f=window.navigator,b=f.language?f.language:f.userLanguage;return new Q("event",p,this.domainId,this.tabId,this.sessionId,b)},e.prototype.generateTabId=function(){var e=sessionStorage.getItem("tst-tabId");this.tabId=e||K(),sessionStorage.setItem("tst-tabId",this.tabId)},e.prototype.generateSessionId=function(){this.sessionId=K()},e.prototype.generatePartitionKey=function(){return window.location.origin+"#"+e.getDomainId()+"#"+K()},e.prototype.generateAwsKinesisSessionRequestObject=function(e){var t=JSON.stringify(e),r=this.generatePartitionKey();return new W(t,r)},e.prototype.generateAwsKinesisEventRequestObject=function(e){var t=this,r=[];return e.forEach(function(e){var i={};i.data=JSON.stringify(e),i.partitionKey=t.generatePartitionKey(),r.push(i)}),new Y(r)},e.prototype.getElementXPath=function(e){if(""!==e.id)return"//*[@id='"+e.id+"']";if(e===document.body)return e.tagName.toLowerCase();try{for(var t=0,r=e.parentNode.childNodes,i=0;i<r.length;i++){var n=r[i];if(n===e)return this.getElementXPath(e.parentNode)+"/"+e.tagName.toLowerCase()+"["+(t+1)+"]";1===n.nodeType&&n.tagName===e.tagName&&t++}}catch(e){return"~"}},e.prototype.authenticate=function(){var e="https://ai.testinium.io/main/auth?code="+this.code;return J.post(e,{"Content-Type":"application/json"})},e}());r.d(t,"testinium",function(){return pe})}])});
