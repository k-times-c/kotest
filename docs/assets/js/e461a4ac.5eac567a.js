"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[45435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"config_dump",title:"Config Dump",slug:"config-dump.html"},i=void 0,s={unversionedId:"framework/config_dump",id:"version-5.3/framework/config_dump",title:"Config Dump",description:"Kotest can optionally print the configuration that will be used for the test run when the test engine starts up.",source:"@site/versioned_docs/version-5.3/framework/config_dump.md",sourceDirName:"framework",slug:"/framework/config-dump.html",permalink:"/docs/5.3/framework/config-dump.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/config_dump.md",tags:[],version:"5.3",frontMatter:{id:"config_dump",title:"Config Dump",slug:"config-dump.html"},sidebar:"framework",previous:{title:"Fail On Empty Test Suite",permalink:"/docs/5.3/framework/fail-on-empty-test-suite.html"}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest can optionally print the configuration that will be used for the test run when the test engine starts up.\nTo do this, set a system property or environment variable, with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.dump.config")," and the value ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"For example, with gradle, you set the system property inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," task configuration block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'test {\n  systemProperty "kotest.framework.dump.config", "true"\n}\n')),(0,o.kt)("p",null,"When activated, you should find output like the following in standard out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"~~~ Kotest Configuration ~~~\n-> Parallelization factor: 1\n-> Concurrent specs: null\n-> Global concurrent tests: 1\n-> Dispatcher affinity: true\n-> Coroutine debug probe: false\n-> Spec execution order: Lexicographic\n-> Default test execution order: Sequential\n-> Default test timeout: 600000ms\n-> Default test invocation timeout: 600000ms\n-> Default isolation mode: SingleInstance\n-> Global soft assertions: false\n-> Write spec failure file: false\n-> Fail on ignored tests: false\n-> Fail on empty test suite: false\n-> Duplicate test name mode: Warn\n-> Remove test name whitespace: false\n-> Append tags to test names: false\n-> Extensions\n  - io.kotest.engine.extensions.SystemPropertyTagExtension\n")))}p.isMDXComponent=!0}}]);