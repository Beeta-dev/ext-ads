System.register('beeta-dev/ext-ads/main', ['flarum/extend', 'flarum/app', 'flarum/components/Page'], function (_export) {
    'use strict';

    var extend, app, Page;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage['default'];
        }],
        execute: function () {

            app.initializers.add('beeta-dev-ext-ads', function () {
                extend(Page.prototype, 'init', function () {
                    var ads = '<li class="TagTile colored" style="background-color: #14191f;"><a class="TagTile-info" href="#"><h3 class="TagTile-name">Ads</h3><p class="TagTile-description"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Beeta 2.0 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3763973333557675" data-ad-slot="1731508684" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></p><div class="TagTile-children"></div></a><span class="TagTile-lastDiscussion"></span></li>';
                    setTimeout(function () {
                        $(".TagsPage-content .TagTiles").append(ads);
                        console.log(ads);
                    }, 3000);
                });
            });
        }
    };
});