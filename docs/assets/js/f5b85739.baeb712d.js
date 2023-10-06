"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,b=d["".concat(u,".").concat(p)]||d[p]||g[p]||i;return n?o.createElement(b,a(a({ref:t},l),{},{components:n})):o.createElement(b,a({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={id:"coroutine_debugging",title:"Coroutine Debugging",slug:"coroutine-debugging.html",sidebar_label:"Coroutine Debugging"},a=void 0,c={unversionedId:"framework/coroutines/coroutine_debugging",id:"version-5.6/framework/coroutines/coroutine_debugging",title:"Coroutine Debugging",description:"kotlinx-coroutines-debug is a module that provides debugging capabilities for coroutines on the JVM. When enabled, a debug agent",source:"@site/versioned_docs/version-5.6/framework/coroutines/coroutine_debugging.md",sourceDirName:"framework/coroutines",slug:"/framework/coroutines/coroutine-debugging.html",permalink:"/docs/5.6/framework/coroutines/coroutine-debugging.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/framework/coroutines/coroutine_debugging.md",tags:[],version:"5.6",frontMatter:{id:"coroutine_debugging",title:"Coroutine Debugging",slug:"coroutine-debugging.html",sidebar_label:"Coroutine Debugging"},sidebar:"framework",previous:{title:"Test Coroutine Dispatcher",permalink:"/docs/5.6/framework/coroutines/test-coroutine-dispatcher.html"},next:{title:"Exceptions",permalink:"/docs/5.6/framework/exceptions.html"}},u={},s=[{value:"Spec level config",id:"spec-level-config",level:3},{value:"Project wide config",id:"project-wide-config",level:3}],l={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.coroutines/tree/master/kotlinx-coroutines-debug"},"kotlinx-coroutines-debug")," is a module that provides debugging capabilities for coroutines on the JVM. When enabled, a debug agent\nis installed by ByteBuddy and captures information on coroutines as they are created, started, suspended and resumed."),(0,r.kt)("p",null,"Kotest provides the ability to enable debugging per test. We can do this by enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"coroutineDebugProbes")," in test config."),(0,r.kt)("p",null,'Once enabled, any coroutines launched inside the test will be included in a "coroutine dump" after the test completes, or as soon\nas an exception is thrown.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CoroutineDebugging : FunSpec() {\n   init {\n      test("foo").config(coroutineDebugProbes = true) {\n         someMethodThatLaunchesACoroutine() // launches a new coroutine\n      }\n   }\n}\n')),(0,r.kt)("p",null,"The coroutine dump will look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Coroutines dump 2021/11/27 22:17:43\n\nCoroutine DeferredCoroutine{Active}@71f1906, state: CREATED\n    (Coroutine creation stacktrace)\n    at kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted(IntrinsicsJvm.kt:122)\n    at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:30)\n    at kotlinx.coroutines.BuildersKt__Builders_commonKt.async$default(Builders.common.kt:82)\n    at kotlinx.coroutines.BuildersKt.async$default(Unknown Source)\n    at com.sksamuel.kotest.engine.coroutines.Wibble$1.invokeSuspend(CoroutineDebugTest.kt:37)\n    at com.sksamuel.kotest.engine.coroutines.Wibble$1.invoke(CoroutineDebugTest.kt)\n")),(0,r.kt)("h3",{id:"spec-level-config"},"Spec level config"),(0,r.kt)("p",null,"Coroutine debugging can be enabled for all tests in a spec by overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"coroutineDebugProbes")," setting\ninside a spec:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CoroutineDebugging : FunSpec() {\n  init {\n\n    coroutineDebugProbes = true\n\n    test("foo") {\n      // debugging enabled here\n    }\n\n    test("bar") {\n      // debugging enabled here\n    }\n\n  }\n}\n')),(0,r.kt)("h3",{id:"project-wide-config"},"Project wide config"),(0,r.kt)("p",null,"Coroutine debugging can be enabled for all tests in a project by using ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.6/framework/project-config.html"},"ProjectConfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig : AbstractProjectConfig() {\n  override val coroutineDebugProbes = true\n}\n")))}g.isMDXComponent=!0}}]);