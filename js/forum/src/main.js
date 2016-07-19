import { extend } from 'flarum/extend';
import app from 'flarum/app';
import WelcomeHero from 'flarum/components/WelcomeHero'

app.initializers.add('beeta-dev-ext-ads', function() {
    extend(WelcomeHero.prototype, 'init', function() {
        var ads = '<li class="TagTile colored" style="background-color: #14191f;"><a class="TagTile-info" href="#"><h3 class="TagTile-name">Ads</h3><p class="TagTile-description"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Beeta 2.0 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3763973333557675" data-ad-slot="1731508684" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></p><div class="TagTile-children"></div></a><span class="TagTile-lastDiscussion"></span></li>';
        $(".TagsPage-content .TagTiles").append(ads);
    });
});