import{a as b}from"./chunk-QZEEOMFT.js";import{j as _,k as n,l as w,m as E,n as S,o as g,q as R,r as j,s as k,u as G}from"./chunk-TYDQPGPQ.js";import{Gb as y,Ha as s,Hb as h,Ia as c,Ib as F,Ja as C,M as m,Pa as f,R as v,S as a,Ya as d,ka as l,la as p,ya as r,yb as N}from"./chunk-BQNWQ6CD.js";var D=(()=>{let t=class t{constructor(i,o){this.authService=i,this.router=o,this.form=new S({email:new g("@mail.ru",{nonNullable:!0,validators:[n.required,n.email]}),password:new g("123456",{nonNullable:!0,validators:[n.required,n.minLength(8)]})})}login(){let i=this.form.getRawValue();this.authService.login(i)}toReg(){this.router.navigate([F.REG])}};t.\u0275fac=function(o){return new(o||t)(p(b),p(y))},t.\u0275cmp=v({type:t,selectors:[["app-login-page"]],decls:10,vars:4,consts:[[3,"formGroup"],[1,"form__controls"],["type","email","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443",1,"form__control","font-basic",3,"formControlName"],["type","text","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",1,"form__control","font-basic",3,"formControlName"],[1,"form__footer"],[1,"form__btn","font-basic",3,"click","disabled"],[3,"click"]],template:function(o,u){o&1&&(s(0,"form",0)(1,"div",1),C(2,"input",2)(3,"br")(4,"input",3),c(),s(5,"div",4)(6,"button",5),f("click",function(){return u.login()}),d(7,"\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"),c()()(),s(8,"p",6),f("click",function(){return u.toReg()}),d(9,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),c()),o&2&&(r("formGroup",u.form),l(2),r("formControlName","email"),l(2),r("formControlName","password"),l(2),r("disabled",u.form.invalid))},dependencies:[R,_,w,E,j,k]});let e=t;return e})();var x=[{path:"",component:D}],I=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a({type:t}),t.\u0275inj=m({imports:[h.forChild(x),h]});let e=t;return e})();var X=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a({type:t}),t.\u0275inj=m({imports:[N,I,G]});let e=t;return e})();export{X as LoginPageModule};
