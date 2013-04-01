montageDefine("883ab9d","docs/Spec:-Globalization.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Globalization - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Globalization   Editor Stuart Knightley and António Afonso</p>\n\n<p>Index\nIntroduction\nLanguage\nLocale\nFunctional Description\nManifest\nmontage_manifest_version\nfiles\n...and back to the Functional Description\nAPI\nString Format\nstrings.json\nJavascript\nSerialization\nConsiderations\nResources\nAlternative serializations\n\nIntroduction</p>\n\n<p>The goal of this specification is to detail a solution for JS Framework localization. The localization is needed at a Component’s level for user visible UI with localized HTML templates, and for other resources with localized strings per locale. The Locale class will encapsulate the current locale used in a page and the locale level constants such as units, currencies, date or number formats.</p>\n\n<p>The goal is to provide a structure that enforces good practices and encapsulate all Components’ resources in the same place, while being efficient when deploying code in production.\nLanguage</p>\n\n<p>The term "language" indicates a collection of properties used in spoken and written communication.</p>\n\n<p>A neutral language is indicated by a name such as "en" for English. A more geographically specific language can be indicated by a name that includes both locale and country/region information. For example, the locale English (United States) has the language name "en-US".\nLocale</p>\n\n<p>Locales encapsulate information about linguistic, cultural, and technological conventions and standards. Examples of information encapsulated by a locale include the symbol used for the decimal separator in numbers and the way dates are formatted.</p>\n\n<p>Locales are typically used to provide, format, and interpret information about and according to the user’s customs and preferences. They are frequently used in conjunction with formatters (Formatter class). Although you can use many locales, you usually use the one associated with the current user.</p>\n\n<p>Functional Description</p>\n\n<p>A .reel folder contains all UI related data for a component. In order to support multiple languages while providing encapsulation, we need to organize resources in locale-named directories. These directories must be under a “locales” directory next to the component’s .js file.</p>\n\n<p>Because we cannot see the contents of the server filesystem a manifest must be provided, either in a manifest.json file next to the component or in the package.json. The boolean property “hasManifest” on the component specifies whether manifest.json exists. Any manifest.json files in subdirectories should be loaded if needed and take precedence for that directory.\nManifest</p>\n\n<p>The manifest file takes the following format (if we decide this is the way to go this should be split into a separate spec. This also applied to package.json. I’ve written a prototype manifest generator.):\nmontage_manifest_version</p>\n\n<p>Number. The version of the manifest file. Currently 1.\nfiles</p>\n\n<p>Object. Each key is a file name that maps to the following:\nObject | Null. If null then the file exists, but no other information has been provided. Alternatively the object can have the following keys:</p>\n\n<p>directory: Boolean. Whether this file is a directory.\nfiles: “files” Object. If the file is a directory this contains its children.\nsize: Number. The size of the file in bytes. [It would be great for the loader to have this information, so that it can have a proper progress bar]\nwe can expand this if we want more file metadata. </p>\n\n<p>Example:\n{\n    "montage_manifest_version": 1,\n    "files": {\n        "button.html": {"size": 423},\n        "button.js": null,\n        "locales": {\n            "directory": true,\n            "files": {\n                "en-US": {\n                    "directory": true,\n                    "files": {\n                        "strings.json": {"size": 42}\n                    }\n                },\n                "fr": {\n                    "directory": true,\n                    "files": {\n                        "strings.json": {"size": 143}\n                    }\n                }\n            }\n        }\n    }\n}</p>\n\n<p>...and back to the Functional Description</p>\n\n<p>Using the data loaded from the manifest the logic will look for resources matching the most specific language code to the least specific, if none is found then use the resources available at the root level.</p>\n\n<p>An example: if the language code is set to "hz-hans-cn" (Simplified Han Chinese) resources will be first looked up in "hz-hans-cn" then "hz-hans" and finally "hz", if it is not found on any of these folders (either the file or the folder doesn’t exist) then it will default to the resource found at the root of the component.</p>\n\n<p>Language codes are case-sensitive and are listed here: <a href="http://tools.ietf.org/html/rfc5646#section-2.1">http://tools.ietf.org/html/rfc5646#section-2.1</a></p>\n\n<p>Where the files are stored, how they will be loaded will be based on further ResourceManager discussions </p>\n\n<p>Here’s the proposed layout on disk:</p>\n\n<p>my-project/\n    package.json\n    index.html\n    locale/\n        en/\n            strings.json\n        fr/\n            strings.json\n    my-component.reel/\n        manifest.json\n        my-component.css\n        my-component.html\n        my-component.js\n        flag.png\n        locales/\n            en/\n                strings.json \n            fr/\n                strings.json\n                flag.png</p>\n\n<p>Load my-component.reel/my-component.js (same as currently)\nIf hasManifest is true on the component load manifest.json\notherwise use the manifest from package.json if it has one\notherwise stop these localization steps.\nAssert which languages and files are available from 2.\nMake a list of \nIf the template is available in the current language then load my-component.reel//my-component.html and go to step 7.\nCompute the best match and if found load my-component.reel//my-component.html and go to step 7.\nUse my-component.reel/my-component.html\nRepeat steps 4-6 for any CSS files found in the HTML template\nRepeat steps 4-6 for a strings.json file</p>\n\n<p>It\'s also important to notice that a change in the preferred language will only come into effect after an application reload (restart).\nAPI</p>\n\n<p>String Format</p>\n\n<p><a href="http://site.icu-project.org/">http://site.icu-project.org/</a>\nstrings.json</p>\n\n<p>The strings.json contains localized values for known strings structured as an anonymous object. Each string maps to an object containing “message” and, optionally,  “description” properties.</p>\n\n<p>{\n"title": {\n"message": "Reproductor Multimedia",\n},\n"play": {\n"message": "Reproducir",\n"description": "Label for a button to start playing the media"\n},\n"pause": {\n"message": "Pausa"\n},\n"num_videos": {\n    "message": "{num_videos, plural, one {1 vídeo} other {# vídeos}}"\n    "description": "How many pieces of video media there are available"\n}\n}</p>\n\n<p>The available strings files must be added to the manifest at build time.\nJavascript</p>\n\n<p>var _ = require("core/i18n").localizer;</p>\n\n<p>var Alert = {\n    _alert: {\n        value: _("Alert")\n    },\n    _ok: {\n        value: _("OK")\n    },\n    _xAlerts: {\n        value: _("{num_alerts, plural, one (1 alert} other {# alerts}}")\n    },</p>\n\n<pre><code>draw: {\n    value: function() {\n        this._titleEl.textContent = this._alert;\n        this._buttonEl.textContent = this._ok;\n        this._statusEl.textContent = this._xAlerts({num_alerts: this._num_alerts});\n    }\n}\n</code></pre>\n\n<p>};</p>\n\n<p>Serialization</p>\n\n<p>A new deserialization unit is added: “localizations”. This unit contains mappings from a property name to a object containing a translation string or key (marked with “_”, and bindings for the arguments. Example: </p>\n\n<p>"deleteButton": {\n    "prototype": "montage/ui/button.reel",\n    "properties": {\n        "element": {"#": "deleteButton"}\n    },\n    "localizations": {\n        "value": {"_": "OK"}\n        "label": {<br>\n            "_": "delete_albums",\n    "_default": "Delete {num_albums, plural, one {album} other {all albums}}",\n            "num_albums": "@albums.objects.count()"\n        },\n        "title": {\n            "_": "{num_albums, plural, one {1 album} other {# albums}}",\n            "num_albums": "@albums.objects.count()"\n        }\n    }\n},</p>\n\n<p>To translate elements without needing to create a component for each, you can use a localizer object. This will do a one-time localization of the properties on any object.</p>\n\n<p>If you give “true” as a value to any of the properties then the existing value of the property will be translated.</p>\n\n<p>"translate": {\n    "object": "montage/core/localizer",\n    "localizations": [\n        {\n            "object": {"@": "action_ok"},\n            "properties": {\n                "label": "OK"\n            }\n        },\n        {\n            "object": {"#": "link"},\n            "properties": {\n                "title": true,\n                "textContent": true\n            }\n        }\n    ]\n}</p>\n\n<p><a href="%E2%80%9Dmore.html%E2%80%9D" title="”More">More</a>\nConsiderations</p>\n\n<p>Resources</p>\n\n<p>Components such as the Image will need to be made localization-aware, so the they can load images from the correct locale directory if available.</p>\n\n<p>Alternative serializations</p>\n\n<p>"deleteButton": {<br>\n"localizations": {\n        "label": "Delete {num_albums, plural, one {album} other {all albums}}",\n"title": "{num_albums, plural, one {1 album} other {# albums}}"\n    },\n"bindings": {\n        "_.num_albums": {"&lt;-": "@albums.objects.count()"}\n    }\n}</p>\n\n<p>"deleteButton": {\n    "bindings": {\n        "_.num_albums": {"&lt;-": "@albums.objects.count()"}\n        "label" {"&lt;-": "@_.Delete {num_albums, plural, one {album} other {all albums}}"},\n        "title" {"&lt;-": "@_.{num_albums, plural, one {1 album} other {# albums}}"}\n    }\n},</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})