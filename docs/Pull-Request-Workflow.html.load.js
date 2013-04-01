montageDefine("883ab9d","docs/Pull-Request-Workflow.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Pull Request Workflow - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>The idea is that the way you add code to montage is by creating a branch in your GitHub fork and asking for it to be merged into master, this is a pull request.</p>\n\n<h2>Keeping in sync<a class=anchor id=Keeping-in-sync href="#Keeping-in-sync"></a>\n</h2>\n\n<p>Assuming your local repository/directory has two remotes</p>\n\n<ul>\n<li>\n<strong>montage</strong> Montage main repo on GitHub</li>\n<li>\n<strong>personal</strong> Your fork repo on GitHub\nWith the pull request workflow, there are now 3 masters to keep in sync, montage/master, personal/master, and master - Montage’s master, your fork’s master and the local one.</li>\n</ul><p>Without having master checked out run the following command.</p>\n\n<p><code>\ngit fetch montage &amp;&amp; git branch -f master montage/master &amp;&amp; git     fetch personal &amp;&amp; git push personal montage/master:master\n</code>\n<strong>git fetch montage</strong> Gets all the new commits from the main montage remote.\n<strong>git branch -f master montage/master</strong> Move your local master branch’s ref so that is pointing to    the same ref as montage/master is.\n<strong>git fetch personal</strong> Gets all the new commits from your personal fork’s remote.\n<strong>git push personal montage/master:master</strong> Pushing the commits that we learnt about from montage into your personal fork.\nWhat is this git push command with 2 parameters? It is simply a more explicit syntax:\n<code>\ngit push REMOTE_NAME LOCAL_BRANCH_NAME:BRANCH_NAME_ON_REMOTE\n</code></p>\n\n<h2>Doing some work<a class=anchor id=Doing-some-work href="#Doing-some-work"></a>\n</h2>\n\n<p>Create a feature/work branch for every new thing you want to add or modify. A single development branch should represent changes related to a single issue. It is a lot easier if you never commit anything to master directly. The important part to remember is that any ancestors of montage/master are not going to change therefore it is safe (stable) to branch from them. If you branch from a commit that isn’t yet in the main montage repository you run the risk of having that commit not be integrated as is. You would then have to do a rebase or cherry-pick of your changes so that they can be integrated themselves.</p>\n\n<p>btw: If you want to refer to an Issue in your commit message use gh-## where ## is the issue number.</p>\n\n<h2>Branching<a class=anchor id=Branching href="#Branching"></a>\n</h2>\n\n<p>So at this point if you want to do some new work, create a branch off master and check it out.\n<code>git checkout -b SOMETHING_DESCRIPTIVE</code>\nOnce you have done some work and have one or more commits on your branch, you want to push the changes to your fork so that you have backup and maybe you can share your changes with someone else.\n<strong>REVIEW BEFORE YOU PUSH</strong>, you should at least run the automated tests.\n<code>git push personal SOMETHING_DESCRIPTIVE:SOMETHING_DESCRIPTIVE</code>\nRinse and repeat. While you are doing this work, many days may have gone by or you might have noticed some changes on master that might create conflicts with your changes. At that point it is a good idea to do a merge of the master branch into your own work branch. see Merging</p>\n\n<p>Do not repeatedly merge master into your branch, instead simply rollback your previous merge:\n    <strong>WARNING</strong>, this will delete all your local changes so stash them before you do this.\n<code>git reset --hard HEAD^1</code>\nThen you can merge master again. see Merging</p>\n\n<h2>Merging<a class=anchor id=Merging href="#Merging"></a>\n</h2>\n\n<p>At this point it is important not to have any local changes or untracked files.\n<code>git merge --no-commit master</code></p>\n\n<p>What you are doing here is staging a merge commit, if there are any conflicts to resolve the console will indicate this. The merge is intentionally split into two steps to reduce the variability of the process. Once the conflicts are resolved, you will need to stage the resolved conflicts.\n<code>git add PATH_TO_FILE</code></p>\n\n<p>If there are no conflicts you have nothing to add and you will need to commit the merge:\n<code>git commit -m "Merge branch master"</code></p>\n\n<p>Merge commits should follow the naming conventions: Merge Commit Messages</p>\n\n<h2>The pull request<a class=anchor id=The-pull-request href="#The-pull-request"></a>\n</h2>\n\n<p>When you are happy with what you have in your fork’s branch, you can go to GitHub, navigate to your branch and send a pull request.\nIf you want to change some things within the content of the pull request, because you found a bug or because someone left a comment, you can simply push to that branch again and the pull request will get the new changes automatically. The rule there would be don’t add anything without adding a comment yourself or if it isn’t a response to a comment from somebody. Once the pull request is closed, don’t use that branch again.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})