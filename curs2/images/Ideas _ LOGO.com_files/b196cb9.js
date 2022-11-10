(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1821:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(19),n(207),n(23),n(16),n(126)),d=n(161),c=n(21),l=n(30),m=n.n(l);function v(){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.debug("Handling UserSignup UTM params"),e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:if(t=window.$nuxt.$api){e.next=6;break}return e.abrupt("return");case 6:if(n={utm_source:m.a.get("utm_source")||"empty",utm_medium:m.a.get("utm_medium")||"(not set)",utm_campaign:m.a.get("utm_campaign")||null},0!==Object.keys(n).length){e.next=9;break}return e.abrupt("return");case 9:return e.prev=9,e.next=12,t.get("/api/v3/users/me");case 12:return r=e.sent,data=r.data,e.next=16,t.patch("/api/v3/users/".concat(data.id,"/setup"),n);case 16:e.next=24;break;case 18:if(e.prev=18,e.t0=e.catch(9),e.t0.response){e.next=22;break}throw e.t0;case 22:if(404!==e.t0.response.status){e.next=24;break}return e.abrupt("return",v());case 24:case"end":return e.stop()}}),e,null,[[9,18]])})))).apply(this,arguments)}d.a.$on(o.a.UserSignedIn,(function(e){var t,n,r=e.user,l=e.method,v=e.enterprise,w=e.track_analytics,_=void 0===w||w;c.a.debug("Handling UserSignedIn",r);var f="user_".concat(r.attributes.sub);if(_&&d.a.$emit(o.a.AnalyticsGA4Event,{event:"login",userId:f,method:l}),null===(t=window.$nuxt)||void 0===t||null===(n=t.$rollbar)||void 0===n||n.configure({payload:{person:{id:f}}}),m.a.remove("unauthed_cart"),!v.is_whitelabel){var h=r.attributes.given_name||void 0;window.Intercom("boot",{name:h||void 0,app_id:"fuchdm6u",user_id:f,email:r.attributes.email,eid:v.id})}})),d.a.$on(o.a.UserRegistered,(function(e){var t,n,r=e.user,l=e.method,v=e.enterprise;c.a.debug("Handling UserRegistered",r);var w="user_".concat(r.attributes.sub);if(d.a.$emit(o.a.AnalyticsGA4Event,{event:"sign_up",userId:w,method:l}),null===(t=window.$nuxt)||void 0===t||null===(n=t.$rollbar)||void 0===n||n.configure({payload:{person:{id:w}}}),m.a.remove("unauthed_cart"),!v.is_whitelabel){var _=r.attributes.given_name||void 0;window.Intercom("boot",{app_id:"fuchdm6u",user_id:w,name:_,email:r.attributes.email,eid:v.id})}})),d.a.$on(o.a.UserUpdatedAttributes,(function(e){var t=e.user,n=e.enterprise;c.a.debug("Handling UserUpdatedAttributes",t),m.a.remove("unauthed_cart"),n.is_whitelabel||(t.given_name||t.family_name)&&window.Intercom("update",{name:t.given_name+" "+t.family_name})})),d.a.$on(o.a.UserSignedOut,(function(e){var t,n,r=e.enterprise;c.a.debug("Handling UserSignedOut"),null===(t=window.$nuxt)||void 0===t||null===(n=t.$rollbar)||void 0===n||n.configure({payload:{person:null}}),r.is_whitelabel||window.Intercom("shutdown")})),d.a.$on(o.a.UserRegistered,v)}}]);