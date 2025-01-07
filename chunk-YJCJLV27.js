import{A as D,G as xe,H as Me,I as be,J as Ie,K as ye,L as H,M as we,a as V,c as F,d as le,e as N,f as O,n as L,o as ve,p as _e,q as ge,v as B,w as Ce,x as Se,y as R,z}from"./chunk-V6K56X2N.js";import"./chunk-WXI33M2S.js";import{a as fe}from"./chunk-QZEEOMFT.js";import{a as me,c as de,e as pe,g as he,h as ue}from"./chunk-TYDQPGPQ.js";import{Da as y,Db as ne,Ea as te,Fa as ie,Fb as se,Ga as re,Ha as d,Hb as J,Ia as p,Ib as ce,Ja as _,M as C,Ma as k,Pa as w,Qa as f,R as j,S,U as Q,X as M,Xa as oe,Y as b,Ya as v,Za as ae,_a as q,ca as Y,d as Re,fb as E,gb as U,hb as X,ia as Z,ib as W,ja as ee,ka as u,la as m,pc as A,wa as I,ya as x,yb as P}from"./chunk-BQNWQ6CD.js";var Ee=Re((nt,ze)=>{ze.exports={name:"webchat",version:"0.0.32",scripts:{ng:"ng",start:"ng serve --host 0.0.0.0 --port 4300 --disable-host-check",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test"},private:!0,dependencies:{"@angular/animations":"^17.2.0","@angular/common":"^17.2.0","@angular/compiler":"^17.2.0","@angular/core":"^17.2.0","@angular/fire":"^17.1.0","@angular/forms":"^17.2.0","@angular/material":"^17.2.0","@angular/platform-browser":"^17.2.0","@angular/platform-browser-dynamic":"^17.2.0","@angular/router":"^17.2.0","@ctrl/ngx-emoji-mart":"^9.2.0","crypto-js":"^4.2.0",dexie:"^4.0.8","is-emoji-supported":"^0.0.5","ngx-toastr":"^19.0.0",rxjs:"~7.8.0","short-unique-id":"^5.2.0",tslib:"^2.3.0","zone.js":"~0.14.3"},devDependencies:{"@angular-devkit/build-angular":"^17.2.0","@angular/cli":"^17.2.0","@angular/compiler-cli":"^17.2.0","@types/crypto-js":"^4.2.2","@types/jasmine":"~5.1.0","@types/node":"^22.5.1","jasmine-core":"~5.1.0",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0",prettier:"^3.2.5",typescript:"~5.3.2"}}});var Te={version:Ee().version,production:!0};var ke=(()=>{let e=class e{constructor(r,i){this.messageService=r,this._sanitizer=i}transform(r,i,o){let s=i[r.id];if(!s)return null;let h=l=>this._sanitizer.bypassSecurityTrustHtml(l);switch(o){case V.AVATAR:return this.messageService.getMessageAvatarSlot(s,r);case V.TEXT:return h(this.messageService.getMessageTextSlot(s))}}};e.\u0275fac=function(i){return new(i||e)(m(L,16),m(ne,16))},e.\u0275pipe=Q({name:"lastMessage",type:e,pure:!0});let t=e;return t})(),Pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({});let t=e;return t})();function Xe(t,e){t&1&&_(0,"img",6),t&2&&x("src",e,ee)("alt","\u0410\u0432\u0430\u0442\u0430\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")}function We(t,e){t&1&&(d(0,"span",8),v(1),p()),t&2&&(u(),ae(e))}function Je(t,e){if(t&1&&I(0,We,2,1,"span",8),t&2){let n,r=e,i=f(3).$implicit;y(0,(n=r[i.id]==null?null:r[i.id].unread)?0:-1,n)}}function Ke(t,e){if(t&1&&I(0,Je,1,1),t&2){let n,r=f(3);y(0,(n=r.roomService.roomsMap[e])?0:-1,n)}}function Qe(t,e){if(t&1&&(d(0,"div",5),I(1,Xe,1,2,"img",6),E(2,"lastMessage"),_(3,"span",7),p(),I(4,Ke,1,1)),t&2){let n,r,i=f().$implicit,o=f();u(),y(1,(n=W(2,3,i,o.messageService.lastChatMessagesMap,o.messageSlot.AVATAR))?1:-1,n),u(2),x("innerHTML",e,Z),u(),y(4,(r=o.userService.userId)?4:-1,r)}}function Ye(t,e){if(t&1){let n=k();d(0,"app-list-item",4),E(1,"chatInfo"),E(2,"chatInfo"),E(3,"online"),w("onClick",function(){let i=M(n).$implicit,o=f();return b(o.onChatClick.emit(i))}),I(4,Qe,5,7),E(5,"lastMessage"),p()}if(t&2){let n,r,i=e.$implicit,o=f();x("avatar",X(1,6,i,o.chatInfo.AVATAR))("caption",X(2,9,i,o.chatInfo.NAME))("online",U(3,12,i))("dateTs",(n=o.messageService.lastChatMessagesMap[i.id]==null?null:o.messageService.lastChatMessagesMap[i.id].createTs)!==null&&n!==void 0?n:0)("selected",i.id===o.chatService.currentChatId),u(4),y(4,(r=W(5,14,i,o.messageService.lastChatMessagesMap,o.messageSlot.TEXT))?4:-1,r)}}function Ze(t,e){t&1&&(d(0,"span",3),v(1,"\u0427\u0430\u0442\u044B \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442"),p())}var Oe=(()=>{let e=class e{constructor(r,i,o,s){this.userService=r,this.roomService=i,this.chatService=o,this.messageService=s,this.chats=[],this.onChatClick=new Y,this.urlCategory=de,this.messageSlot=V,this.chatInfo=le}getFilteredChats(r){return r.sort((i,o)=>{let s=this.messageService.lastChatMessagesMap,h=s[i.id]?.createTs||0;return(s[o.id]?.createTs||0)-h}),r}};e.\u0275fac=function(i){return new(i||e)(m(A),m(N),m(O),m(L))},e.\u0275cmp=j({type:e,selectors:[["app-chat-list"]],inputs:{chats:"chats"},outputs:{onChatClick:"onChatClick"},decls:5,vars:1,consts:[[1,"chat-list"],[1,"chat-list__items"],[1,"chat-list__item",3,"avatar","caption","online","dateTs","selected"],[1,"font-basic-14"],[1,"chat-list__item",3,"onClick","avatar","caption","online","dateTs","selected"],[1,"message"],[1,"message__avatar",3,"src","alt"],[1,"message__text","font-basic-14",3,"innerHTML"],[1,"message__badge","font-head-12"]],template:function(i,o){i&1&&(d(0,"div",0)(1,"div",1),ie(2,Ye,6,18,"app-list-item",2,te,!1,Ze,2,0,"span",3),p()()),i&2&&(u(2),re(o.getFilteredChats(o.chats)))},dependencies:[B,ke,Ce,R],styles:[".chat-list__item[_ngcontent-%COMP%]{display:block}.chat-list__item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--gray-500)}.message[_ngcontent-%COMP%]{display:flex;align-items:end;gap:6px;overflow:hidden}.message__avatar[_ngcontent-%COMP%]{--avatar-size: 20px;width:var(--avatar-size);height:var(--avatar-size);border-radius:50%}.message__text[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}@supports (-webkit-line-clamp: 1){.message__text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:initial;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}}.message__badge[_ngcontent-%COMP%]{display:inline-block;background-color:var(--gray-500);border-radius:20px;padding:2px 12px}"]});let t=e;return t})();var Le=(()=>{let e=class e{constructor(r,i,o,s){this.userService=r,this.chatService=i,this.selectionService=o,this.fileService=s,this.users=[],this.chatType=F}addChat(r){let i=r===F.PRIVATE?D.SINGLE:D.MULTIPLE,o=[],s="",h;switch(r){case F.PRIVATE:{let c=this.chatService.getAllPrivateChatsPartners();o=this.users.filter(g=>!c.some(G=>G.id===g.id)),s="\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0441 \u043A\u0435\u043C \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043B\u0438\u0447\u043D\u044B\u0439 \u0447\u0430\u0442";break}case F.GROUP:case F.CHANNEL:{o=this.users,s="\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u0443\u0441\u0442",h={name:"",avatar:""};break}}let l={caption:`\u0412\u044B\u0431\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B${i===D.SINGLE?"\u044F":"\u0435\u0439"}`,mode:i,items:o,noItemsText:s,expr:{id:"id",caption:"name",avatar:"avatarShortUrl"},form:h};this.selectionService.openDialog(l).afterClosed().subscribe(c=>{console.log(c);let g=this.userService.userId;if(c&&g){let G=c.form?c.form.avatar:null;this.fileService.uploadAvatar(G).subscribe(K=>{console.log(`avatar: ${K}`);let Be={type:r,members:[g,...c.items.map($=>$.id)],admins:[g],name:c.form?String(c.form.name):"",avatarShortUrl:K};this.chatService.createChat(Be).subscribe($=>{$&&this.chatService.openChat($)})})}})}};e.\u0275fac=function(i){return new(i||e)(m(A),m(O),m(xe),m(ue))},e.\u0275cmp=j({type:e,selectors:[["app-add-chat"]],inputs:{users:"users"},decls:12,vars:1,consts:[["addChatMenu","matMenu"],[1,"add-chat",3,"matMenuTriggerFor"],[3,"click"]],template:function(i,o){if(i&1){let s=k();d(0,"button",1),v(1,"+"),p(),d(2,"mat-menu",null,0)(4,"button",2),w("click",function(){return M(s),b(o.addChat(o.chatType.PRIVATE))}),v(5,"\u041B\u0438\u0447\u043D\u044B\u0439 \u0447\u0430\u0442"),p(),_(6,"br"),d(7,"button",2),w("click",function(){return M(s),b(o.addChat(o.chatType.GROUP))}),v(8,"\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u0447\u0430\u0442"),p(),_(9,"br"),d(10,"button",2),w("click",function(){return M(s),b(o.addChat(o.chatType.CHANNEL))}),v(11,"\u041A\u0430\u043D\u0430\u043B"),p()()}if(i&2){let s=oe(3);x("matMenuTriggerFor",s)}},dependencies:[Me,be],styles:[".add-chat[_ngcontent-%COMP%]{cursor:pointer;font-size:24px}"]});let t=e;return t})();function it(t,e){if(t&1){let n=k();d(0,"div",0)(1,"div",1)(2,"h1",2),v(3," WebChat "),d(4,"span",3),v(5),p()(),d(6,"div",4),v(7),_(8,"app-list-item",5),E(9,"online"),d(10,"button",6),w("click",function(){M(n);let i=f(2);return b(i.logout())}),v(11,"\u0412\u044B\u0439\u0442\u0438"),p()()(),d(12,"div",7)(13,"div",8)(14,"app-chat-list",9),w("onChatClick",function(i){M(n);let o=f(2);return b(o.chatService.openChat(i.id))}),p(),_(15,"app-add-chat",10),p(),d(16,"div",11),_(17,"router-outlet"),p()()()}if(t&2){let n=f(),r=f();u(5),q("v.",r.version,""),u(2),q(" id: ",n.id," "),u(),x("avatar",n.avatarShortUrl)("caption",n.name)("online",U(9,8,n.id))("minimize",!0),u(6),x("chats",r.allChats),u(),x("users",r.availableUsers)}}function rt(t,e){t&1&&_(0,"app-loader")}function ot(t,e){if(t&1&&I(0,it,18,10,"div",0)(1,rt,1,0),t&2){let n=f();y(0,n.loaded.users&&n.loaded.chats&&n.loaded.rooms&&n.loaded.messages&&n.loaded.reacts?0:1)}}var Ve=(()=>{let e=class e{constructor(r,i,o,s,h,l,a,c,g){this.messageService=r,this.eventService=i,this.authService=o,this.databaseService=s,this.activityService=h,this.roomService=l,this.reactService=a,this.userService=c,this.chatService=g,this.version=Te.version,this.loaded={users:!1,chats:!1,rooms:!1,messages:!1,reacts:!1},this.allChats=[],this.availableUsers=[]}ngOnInit(){this.initApp()}logout(){this.authService.logout()}initApp(){let r=this.databaseService.users$,i=this.databaseService.chats$,o=this.databaseService.rooms$,s=this.databaseService.messages$,h=this.databaseService.reacts$;r.subscribe(l=>{if(this.userService.userId){this.availableUsers=l.filter(c=>c&&c.id!==this.userService.userId),l.forEach(c=>{this.userService.usersMap[c.id]=c});let a=this.userService.userId;this.userService.usersMap[a]&&(this.userService.currentUser=this.userService.usersMap[a]),this.loaded.users===!1&&(this.loaded.users=!0,this.activityService.handleUserActivity())}}),i.subscribe(l=>{this.allChats=l,l.forEach(a=>{this.chatService.chatsMap[a.id]=a}),this.loaded.chats===!1&&(this.loaded.chats=!0)}),o.subscribe(l=>{l.forEach(a=>{this.roomService.roomsMap[a.userId]===void 0&&(this.roomService.roomsMap[a.userId]={[a.chatId]:a});let c=this.roomService.roomsMap[a.userId];c&&(c[a.chatId]=a)}),this.loaded.rooms===!1&&(this.loaded.rooms=!0)}),s.subscribe(l=>{this.messageService.lastChatMessagesMap=this.messageService.getLastChatMessagesMap(l),this.loaded.messages===!1&&(this.loaded.messages=!0)}),h.subscribe(l=>{this.reactService.reactsMap={},l.forEach(a=>{this.reactService.reactsMap[a.chatId]===void 0&&(this.reactService.reactsMap[a.chatId]={[a.msgId]:{[a.reactId]:a}});let c=this.reactService.reactsMap[a.chatId];if(c){c[a.msgId]===void 0&&(c[a.msgId]={});let g=c[a.msgId];g&&(g[a.reactId]=a)}}),this.loaded.reacts===!1&&(this.loaded.reacts=!0)}),this.eventService.eventsReceived$.subscribe(l=>{let a=l.filter(c=>c.type===me.SEND_MESSAGE);this.messageService.onMessagesReceived(a)}),this.eventService.init()}};e.\u0275fac=function(i){return new(i||e)(m(L),m(he),m(fe),m(pe),m(ve),m(N),m(_e),m(A),m(O))},e.\u0275cmp=j({type:e,selectors:[["app-home-page"]],decls:1,vars:1,consts:[[1,"home"],[1,"home__header"],[1,"home__caption","font-head-20"],[1,"home__version","font-basic-12"],[1,"home__controls"],[1,"home__user",3,"avatar","caption","online","minimize"],[1,"home__logout",3,"click"],[1,"home__body"],[1,"home__aside"],[1,"home__chat-list",3,"onChatClick","chats"],[1,"home__add-chat",3,"users"],[1,"home__content"]],template:function(i,o){if(i&1&&I(0,ot,2,1),i&2){let s;y(0,(s=o.userService.currentUser)?0:-1,s)}},dependencies:[se,ge,Oe,Le,B,R],styles:[".home[_ngcontent-%COMP%]{height:100dvh;display:flex;flex-direction:column;max-width:1200px;margin:0 auto;border:1px solid var(--gray-500);--aside-width: 300px;--header-height: 48px;--header-padding: 12px}.home__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--gray-500);min-height:var(--header-height);max-height:var(--header-height);padding:0 var(--header-padding)}.home__controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.home__body[_ngcontent-%COMP%]{display:flex;height:100%;overflow:hidden}.home__aside[_ngcontent-%COMP%]{position:relative;border-right:1px solid var(--gray-500);min-width:var(--aside-width);max-width:var(--aside-width)}.home__add-chat[_ngcontent-%COMP%]{position:absolute;right:16px;bottom:16px}.home__content[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden}"]});let t=e;return t})();var at=[{path:"",component:Ve,children:[{path:`${ce.CHAT}/:id`,loadChildren:()=>import("./chunk-HGAN76AE.js").then(t=>t.ChatPageModule)}]}],$e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({imports:[J.forChild(at),J]});let t=e;return t})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({imports:[P,H,Pe,Se,z]});let t=e;return t})();var Ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({imports:[P,Ie,we]});let t=e;return t})();var ni=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({imports:[P,$e,ye,Ue,Ne,H,z]});let t=e;return t})();export{ni as HomePageModule};
