montageDefine("d91c20d","docs/Spec:-Skeleton.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Skeleton - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Skeleton theme  Editor Simon Luthi</p>\n\n<p>Index\nIntroduction\nComponent List\nAPI\nNaming Convention\nExamples\nDependencies\nBrowser Support\nConcerns\nClassitis or Modularitis?\n1. Modularitis\n2. Classitis\n3. Single propertitis\n4. Attributitis\nIntroduction</p>\n\n<p>The Skeleton theme is a very basic, neutral looking Montage theme. It has the following purposes:\nTo be used as a wire-frame, when prototyping.\nMake it easy for developers to customize it or use as a starting point for other themes.\nHave the widest cross-browser support as possible. So it could also serve as a fallback.\nCan be used to test performance with the most minimal styling. If it doesn’t perform well, it sure isn’t gonna improve with performance-hungry box-shadows, gradients..\nComponent List</p>\n\n<p>Each component’s UI will have a Desktop and Mobile version</p>\n\n<p>Form Controls\nButton\nCheckBox\nRadio\nSelect\nRange\nAnchor?\nText Input\nText Area</p>\n\n<h2>Number<a class=anchor id=Number href="#Number"></a>\n</h2>\n\n<p>Date Picker\nColor Picker\nFile Upload + file drop\nToken field\nImage\nAudio\nVideo\nLoader\nProgress\nMeter\nPopup panel - 0.11\nAlert\nDialog\nNotification\nFlows\nslideshows\ncarrousel\nLayout\nFlexbox Component - One component to rule them all \nTabs -   0.11\nSplitter - 0.11\nList - Flow based - 0.11\nTable\nToolBar \nMenuBar\nPage Navigation (like phone left-right navigation ?)\nGeneral\ndrag and drop feed back\nBasic CSS rules, dos and don’t\nAPI</p>\n\n<p>If available the API should be identical to standard elements defined by the W3C. This will allow developers to easier start using the Montage components without having to learn a new API. We might won’t implement everything in a first version, but it’s the goal.</p>\n\n<p>To use the skeleton theme, the "module" path in the serialization has to be changed to "montage/ui/skeleton/xxx.reel".</p>\n\n<p>Examples</p>\n\n<p>Still work in progress:</p>\n\n<p>Dependencies</p>\n\n<p>CSS reset/normalize\nIcon set: <a href="http://fortawesome.github.com/Font-Awesome/">http://fortawesome.github.com/Font-Awesome/</a> Not sure about the licensing.\nLESS/SASS?</p>\n\n<p>Browser Support</p>\n\n<p>The aim is to support as many browsers as possible, but will be determined during creation. Most likely it will be on a per component basis. Or we can group components depending on their browser support. If a component is not available in a certain browser, a developer could choose the following options:\nShow a more simple fallback component. This is already the default behaviour of most/all of the new HTML5 inputs. Example: Show a text-input instead of a slider. Or show a download link of an MP3 file, if the  element is not supported.\nHide the component (if it’s not critical for an app’s functionality or if there is an alternative).\nShow a warning to update/switch the browser. I’m thinking not a global popup.. but just in place of the component. Like the missing Flash cube on iOS.</p>\n\n<p>I tested which of the native components can be used for Skeleton.. Made a screenshot. The order is Firefox, Opera, Chrome on OS X.</p>\n\n<p>Chrome/Safari has this CSS property appearance: none that I\'m using and it lets you remove the native look and restyle however you want. But it Firefox it seems too buggy and other browsers don\'t support it yet. Soo.. the conclusion is:</p>\n\n<p>Yep: <button>, <input>, <textarea>\nMaybe: checkbox, radio, select. Chrome is the desired look, but I think it\'s impossible to restyle the dot and checkmark in the other browsers. And the border/background in Firefox. If we have to redo them with just div\'s that would be a lot of work and maybe accessibly issues. And stuff like how to trigger the scroll wheel on iOS.\nNope: The rest we have to recreate from scratch. Also because they are too new and not implemented in older browsers.</textarea></button></p>\n\n<p>Concerns</p>\n\n<p>How separated or tied together are the Desktop and Mobile version. Are they different files in the same reel or different folders?</p>\n\n<p>Kishore:\nShould Montage detect the availability of input type="range" (using a Modernizr like approach) and automatically polyfill if it is not available?\nShould Polyfills support the exact API or can it be a subset of the component it is polyfilling and evolve slowly to support the complete API ?</p>\n\n<hr><p>Classitis or Modularitis?</p>\n\n<p>With Montage Reels, every component is independent from each other. The only problem, the same CSS properties might get repeated many times. The opposite would be a more OOCSS approach: Trying to specify a CSS property once in a class and then give that class to whichever component needs it. It’s not really an issue for more advanced themes, but maybe for the Skeleton theme where all the components have the same basic look.</p>\n\n<ol>\n<li>Modularitis</li>\n</ol><p>.button     { background: silver; border: 1px solid gold; border-radius: 4px; }\n.radio  { background: silver; border: 1px solid gold; border-radius: 50%; }\n.checkbox   { background: silver; border: 1px solid gold; border-radius: 4px; }</p>\n\n<p><button class="”button”"></button>\n<input type="”radio”" class="”radio”"><input type="”checkbox”" class="”checkbox”"></p>\n\n<p>Pro:\nMore flexible to make changes without breaking other components.\nSmaller file size if only a few components of a theme is used.\nIn the inspector you see all the styles together and not scattered into multiple.</p>\n\n<ol>\n<li>Classitis</li>\n</ol><p>.skeleton-bg        { background: silver; }\n.skeleton-border    { border: 1px solid gold; }\n.rounded-corners    { border-radius: 4px; }\n.circle         { border-radius: 50%; }</p>\n\n<p><button class="”skeleton-bg"></button>\n<input type="”radio”" class="”skeleton-bg"><input type="”checkbox”" class="”skeleton-bg"></p>\n\n<p>Pro:\nMore flexible to change the whole theme at once.\nSmaller file size if lots of different components of a theme are used.\nImages can be used in a sprite.</p>\n\n<p>Conclusion: I would say during development, we should start with the “Classitis” way, just because it makes it easy to tweak the styles globally. Then once we agree on a certain look, we’ll break it down and add it to each component individually. And about the problem with the file-size. I think it’s worse to load the whole package if you just need part of it, than have the ones you use repeated a couple times. And maybe MOP could create a sprite generator or something similar.</p>\n\n<p>More approaches:</p>\n\n<ol>\n<li>Single propertitis</li>\n</ol><p>.radio, \n.button, \n.checkbox,\n..many more { \nbackground: silver;\nborder: 1px solid gold; \n}</p>\n\n<p>Less repeating of same properties, but a huge list of selectors might be slower (needs testing)</p>\n\n<ol>\n<li>Attributitis</li>\n</ol><p>[class^=”montage-action”] { \nbackground: silver;\n}\n[class^=”montage-inputs”] { \nbackground: white;\n}</p>\n\n<p><button class="”montage-action-button”"></button>\n<input type="”radio”" class="”montage-action-inputRadio”"><input type="”text”" class="”montage-inputs-inputText”"><textarea class="”montage-inputs-textarea”"></textarea></p>\n\n<p>Best of both worlds, but is slower and makes the class names even longer.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})