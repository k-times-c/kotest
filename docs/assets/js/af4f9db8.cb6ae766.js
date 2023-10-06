"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[35254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},s=void 0,i={unversionedId:"extensions/junit_xml",id:"version-5.7/extensions/junit_xml",title:"JUnit XML Format Reporter",description:"Latest Release",source:"@site/versioned_docs/version-5.7/extensions/junit_xml.md",sourceDirName:"extensions",slug:"/extensions/junit_xml.html",permalink:"/docs/extensions/junit_xml.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/extensions/junit_xml.md",tags:[],version:"5.7",frontMatter:{id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},sidebar:"extensions",previous:{title:"MockServer",permalink:"/docs/extensions/mockserver.html"},next:{title:"HTML Reporter",permalink:"/docs/extensions/html_reporter.html"}},l={},u=[{value:"Parameters",id:"parameters",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest/kotest-extensions-junitxml"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-extensions-junitxml",alt:"Latest Release"}))),(0,o.kt)("p",null,"JUnit includes an XML report generator that it calls\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/5.5.0-RC2/api/org/junit/platform/reporting/legacy/xml/LegacyXmlReportGeneratingListener.html"},"legacy xml report"),"\n. Many tools integrate with this format so it is very useful. However, this report has no concept of nesting tests.\nTherefore when used with a nested ",(0,o.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"test style")," in Kotest, it will include parent tests as\norphans."),(0,o.kt)("p",null,"To solve this, Kotest has it's own implementation of the same format, that is configurable on whether to include parent\ntests and/or collapse the names."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following module is needed: ",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest:kotest-extensions-junitxml")," in your build. Search maven central for latest version ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-extensions-junitxml"},"here"),".")),(0,o.kt)("p",null,"To configure in your project, you need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"JunitXmlReporter")," using ",(0,o.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project config"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyConfig : AbstractProjectConfig() {\n  override fun extensions(): List<Extension> = listOf(\n    JunitXmlReporter(\n      includeContainers = false, // don\'t write out status for all tests\n      useTestPathAsName = true, // use the full test path (ie, includes parent test names)\n      outputDir = "../target/junit-xml" // include to set output dir for maven\n    )\n  )\n}\n')),(0,o.kt)("p",null,"Additionally, the reporter needs to know where your build output folder is by setting a system property.\nGradle also needs to know that it should not generate JUnit XML reports by itself.\nWe configure that in the tests block in gradle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named<Test>("test") {\n  useJUnitPlatform()\n  reports {\n    junitXml.required.set(false)\n  }\n  systemProperty("gradle.build.dir", project.buildDir)\n}\n')),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The reporter has three parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"includeContainers")," when true, all intermediate tests are included in the report as tests in their own right. Defaults\nto false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useTestPathAsName")," when true, the full test path will be used as the name. In other words the name will include the\nname of any parent tests as a single string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"outputDir")," when set, the reports are generated in that folder, default value is: test-results/test")))}m.isMDXComponent=!0}}]);