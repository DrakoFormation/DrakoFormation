import{aj as p,ak as u,am as n,an as a,ao as t,al as o,ar as s,ap as r,aq as d}from"./app-BkblVdII.js";const c={},m={class:"table-of-contents"};function v(h,e){const l=r("router-link"),i=r("RouteLink");return d(),u("div",null,[e[22]||(e[22]=n("h1",{id:"installer-symfony-et-son-environnement-de-travail",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installer-symfony-et-son-environnement-de-travail"},[n("span",null,"Installer Symfony et son environnement de travail")])],-1)),n("nav",m,[n("ul",null,[n("li",null,[a(l,{to:"#plugins-utiles-pour-nos-ide"},{default:t(()=>e[0]||(e[0]=[s("Plugins utiles pour nos IDE")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#phpstorm"},{default:t(()=>e[1]||(e[1]=[s("PHPStorm")])),_:1})]),n("li",null,[a(l,{to:"#vs-code"},{default:t(()=>e[2]||(e[2]=[s("VS Code")])),_:1})])])]),n("li",null,[a(l,{to:"#requis-techniques"},{default:t(()=>e[3]||(e[3]=[s("Requis techniques")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#annotations-et-attributs"},{default:t(()=>e[4]||(e[4]=[s("Annotations et attributs")])),_:1})])])]),n("li",null,[a(l,{to:"#outils-de-qualite-de-code"},{default:t(()=>e[5]||(e[5]=[s("Outils de qualité de code")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#php-cs-fixer"},{default:t(()=>e[6]||(e[6]=[s("Php CS Fixer")])),_:1})]),n("li",null,[a(l,{to:"#phpstan"},{default:t(()=>e[7]||(e[7]=[s("PHPStan")])),_:1})]),n("li",null,[a(l,{to:"#lancer-nos-outils-avec-composer"},{default:t(()=>e[8]||(e[8]=[s("Lancer nos outils avec Composer")])),_:1})])])]),n("li",null,[a(l,{to:"#exercices"},{default:t(()=>e[9]||(e[9]=[s("Exercices")])),_:1})])])]),e[23]||(e[23]=o(`<p>Avant de pouvoir travailler concrètement sur Symfony, il faut mettre en place notre environnement de travail.</p><p>Pour cela, nous allons installer :</p><ul><li><a href="https://getcomposer.org/doc/00-intro.md" target="_blank" rel="noopener noreferrer">Composer, gestionnaire de paquet pour PHP</a> (ou <a href="https://getcomposer.org/Composer-Setup.exe" target="_blank" rel="noopener noreferrer">lien direct vers l&#39;installeur</a>)</li><li><a href="https://scoop.sh/" target="_blank" rel="noopener noreferrer">Installer Scoop</a><ul><li>Ouvrir Powershell et lancer les commandes</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</span>
<span class="line">irm get.scoop.sh | iex</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://symfony.com/download" target="_blank" rel="noopener noreferrer">l&#39;outil en ligne de commande de Symfony</a> (ou <a href="https://get.symfony.com/cli/setup.exe" target="_blank" rel="noopener noreferrer">lien direct vers l&#39;installeur</a>) ou avec Scoop :</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">scoop install symfony-cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Si vous utilisez Windows, je vous conseille d&#39;utiliser Powershell pour éviter des erreurs de rendu.</p><p>Pour créer un projet Symfony, nous pouvons maintenant utiliser notre ligne de commande (PowerShell dans mon cas) :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">  symfony new <span class="token parameter variable">--webapp</span> my_project <span class="token parameter variable">--php</span><span class="token operator">=</span><span class="token number">8.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Vous pouvez alors ouvrir ce nouveau dossier avec votre IDE favori. Les deux sous-parties suivantes sont consacrées à la gestion d&#39;un projet Symfony dans notre IDE. Pour la base de données, nous aurons besoin de Wamp/Mamp.</p><h2 id="plugins-utiles-pour-nos-ide" tabindex="-1"><a class="header-anchor" href="#plugins-utiles-pour-nos-ide"><span>Plugins utiles pour nos IDE</span></a></h2><h3 id="phpstorm" tabindex="-1"><a class="header-anchor" href="#phpstorm"><span>PHPStorm</span></a></h3><p>Pour installer un plugin dans PHPStorm, aller dans les options, partie <code>plugins</code> (<code>File</code> &gt; <code>Settings</code> &gt; <code>Plugins</code>) et chercher dans la partie <code>Marketplace</code></p><ul><li>Symfony Support</li><li>.env files support</li><li>OpenAPI (Swagger) Editor</li></ul><p>Voir également la <a href="https://www.loom.com/share/8660523dee7141a18461dec7a65e3850" target="_blank" rel="noopener noreferrer">vidéo dédiée à la configuration de PHPStorm</a></p><h3 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code"><span>VS Code</span></a></h3><p>Pour installer un plugin dans VSCode, aller dans le menu de gauche, partie Extensions (avec 4 petits carrés). Pour chacun de ces plugins, je vous conseille d&#39;en regarder la doc et de suivre son processus d&#39;installation.</p><ul><li>DotENV pour mettre de la couleur dans les fichiers d&#39;environnement (<code>.env</code>)</li><li>MySQL (de Weijan Chen) pour faire le lien avec votre base de données (<a href="https://www.loom.com/share/09f79db6bd6b4226972ac1017d048257" target="_blank" rel="noopener noreferrer">je vous ai fait une vidéo d&#39;installation et de configuration</a>)</li><li>PHP (de DevSense)</li><li>Symfony for VSCode (de TheNouillet)</li><li>Twig Language 2 (de mblode)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory" target="_blank" rel="noopener noreferrer">Git History</a> (de Don Jayamanne)</li></ul><h2 id="requis-techniques" tabindex="-1"><a class="header-anchor" href="#requis-techniques"><span>Requis techniques</span></a></h2><p>Avant de commencer à créer un site avec Symfony, certaines notions sont nécessaires :</p>`,20)),n("ul",null,[n("li",null,[e[11]||(e[11]=s("Une bonne maîtrise du ")),a(i,{to:"/php/20-objet.html"},{default:t(()=>e[10]||(e[10]=[s("PHP orienté objet")])),_:1}),e[12]||(e[12]=s(" (y compris les espaces de nom)"))]),n("li",null,[e[14]||(e[14]=s("Le ")),a(i,{to:"/php/40-mvc.html"},{default:t(()=>e[13]||(e[13]=[s("principe "),n("abbr",{title:"Model View Controller"},"MVC",-1)])),_:1}),e[15]||(e[15]=s(" pour organiser nos fichiers"))]),e[16]||(e[16]=n("li",null,"Les annotations et attributs en PHP (voir point suivant)",-1))]),e[24]||(e[24]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/f1d89de2d2264c8a8a80fc84c3dc0dad",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),e[25]||(e[25]=n("h3",{id:"annotations-et-attributs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#annotations-et-attributs"},[n("span",null,"Annotations et attributs")])],-1)),e[26]||(e[26]=n("p",null,[s("Je vous invite à lire le "),n("a",{href:"https://www.elao.com/blog/dev/les-attributs-php-8-dans-symfony",target:"_blank",rel:"noopener noreferrer"},"très bon article de Maxime Colin, de la société Elao sur les attributs")],-1)),e[27]||(e[27]=n("p",null,[s("Dans plusieurs langages, et particulièrement en PHP avec Symfony, nous avons besoin de fournir des informations supplémentaires sur des symboles (classes, interfaces, traits, etc.), propriétés ou méthodes. Cela permet notamment de générer une documentation, d'améliorer la complétion des "),n("abbr",{title:"Environnement de développement"},"IDE"),s(" (comme PHP Storm ou VsCode), mais aussi définir le fonctionnement de certaines librairies ! Nous pouvons le faire via des commentaires ou des attributs, 2 éléments du langage PHP que nous allons détailler un peu plus ici.")],-1)),n("p",null,[e[19]||(e[19]=s("C'est le cas en Symfony, notamment pour la ")),a(i,{to:"/symfony/20-routing.html"},{default:t(()=>e[17]||(e[17]=[s("définition des routes")])),_:1}),e[20]||(e[20]=s(" ou la ")),a(i,{to:"/symfony/24-doctrine.html"},{default:t(()=>e[18]||(e[18]=[s("définition des entités")])),_:1}),e[21]||(e[21]=s("."))]),e[28]||(e[28]=o(`<p>Les annotations sont des commentaires spéciaux (au format PHPDoc). Dans l&#39;exemple suivant, on appelle <strong>une classe</strong> Route avec les paramètres de son constructeur, que l&#39;on peut nommer (pour les utiliser dans le désordre). L&#39;inconvénient est le besoin d&#39;un parser (librairie qui va lire nos fichiers PHP pour chercher les annotations) qui, bien que fourni avec Symfony, rajoute un travail supplémentaire dans l&#39;interprétation de notre code.</p><p>Un exemple d&#39;annotation :</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * @Route(&#39;/&#39;, name=&quot;default_index&quot;)</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Un attribut est une expression du langage PHP, qui ne nécessite donc pas l&#39;appel à un parser et qui permet le même fonctionnement.</p><p>Le même exemple, en attribut :</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">#<span class="token punctuation">[</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;default_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="outils-de-qualite-de-code" tabindex="-1"><a class="header-anchor" href="#outils-de-qualite-de-code"><span>Outils de qualité de code</span></a></h2>`,7)),e[29]||(e[29]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/d57e65a6e18a43188c054304bd3daf4b",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),e[30]||(e[30]=o(`<h3 id="php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#php-cs-fixer"><span>Php CS Fixer</span></a></h3><p>Symfony suit <a href="https://www.php-fig.org/psr/" target="_blank" rel="noopener noreferrer">les conventions d&#39;écriture PSR</a>, mais il n&#39;est pas toujours aisé de les appliquer au quotidien. Heureusement, des outils comme <a href="https://cs.symfony.com/" target="_blank" rel="noopener noreferrer">Php CS Fixer</a> ont été créé pour nous aider dans cette tâche. Vous pouvez l&#39;ajouter en dépendance de développement de votre projet avec la commande :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> friendsofphp/php-cs-fixer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Vous pourrez ensuite le lancer avec <code>vendor/bin/php-cs-fixer fix</code> pour mettre à jour votre code, pour respecter les standards de code de Symfony.</p><p>Vous pouvez également trouver la configuration par défaut dans le fichier <code>.php-cs-fixer.dist.php</code> qui a été créé. Si vous souhaitez la modifier, vous pouvez le faire dans ce fichier, ou dans un fichier <code>.php-cs-fixer.php</code> à la racine de votre projet (il ne sera pas versionné).</p><h3 id="phpstan" tabindex="-1"><a class="header-anchor" href="#phpstan"><span>PHPStan</span></a></h3><p><a href="https://phpstan.org/blog/find-bugs-in-your-code-without-writing-tests" target="_blank" rel="noopener noreferrer">PHPStan est un analyseur statique de code</a>. Son but est de détecter autant d&#39;erreurs que possible, simplement en relisant votre code, vérifiant la cohérence des types (de vos variables, paramètres, retours, etc.), des appels, des classes, etc.</p><p>Il aide également à écrire un code solide et compréhensible pour les autres développeurs, en renforçant les typages et d&#39;autres bonnes pratiques.</p><p>PHPStan fournit 10 niveaux de tests (de 0 à 9), plus ou moins exigeants et nécessitant plus ou moins de modifications dans votre code, pour le rendre meilleur. Je recommande un niveau de 5, au minimum, sur les projets Symfony.</p><p>Pour l&#39;installer sur un projet Symfony :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> phpstan/extension-installer phpstan/phpstan-symfony phpstan/phpstan-doctrine phpstan/phpstan-strict-rules</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Je vous conseille de créer un fichier <code>phpstan.neon</code> à la racine de votre projet, pour configurer l&#39;exécution de PHPStan et le lancer plus simplement :</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">parameters</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">level</span><span class="token punctuation">:</span> <span class="token number">9</span></span>
<span class="line">  <span class="token key atrule">paths</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> src</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bien sûr, si vous ne voulez pas affronter le niveau 9 directement, remplacez par le niveau souhaité (il est utile de corriger les problèmes en augmentant le niveau progressivement).</p><p>Pour lancer PHPStan : <code>vendor/bin/phpstan analyse</code></p><h3 id="lancer-nos-outils-avec-composer" tabindex="-1"><a class="header-anchor" href="#lancer-nos-outils-avec-composer"><span>Lancer nos outils avec Composer</span></a></h3><p>Pour éviter de retenir des chemins complexes, nous pouvons préciser des scripts dans notre <code>composer.json</code> (⚠️ ne remplacez pas les scripts existants, ajoutez seulement les vôtres) :</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;php-cs-fixer fix&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;analyse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phpstan analyse&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ajouter les 2 lignes <code>fix</code> et <code>analyse</code> dans vos scripts, permet de définir des raccourcis pour lancer Php CS Fixer et PHPStan, sans avoir à se rappeler le détail des commandes 😉 .</p><p>Ces commandes peuvent être lancées avec <code>composer fix</code> et <code>composer analyse</code></p><h2 id="exercices" tabindex="-1"><a class="header-anchor" href="#exercices"><span>Exercices</span></a></h2><p>Nous allons pratiquer à l&#39;aide d&#39;un petit projet : un blog. Nous allons le construire étape par étape, à chaque section du cours.</p><p>Dans un premier temps, il nous faut :</p><ul><li>initialiser un nouveau projet Symfony</li><li>ajouter <code>php-cs-fixer</code> et <code>phpstan</code> dans les dépendances de <strong>dev</strong> du projet <ul><li>Les configurer</li></ul></li><li>les ajouter aux scripts de composer</li></ul>`,24))])}const g=p(c,[["render",v],["__file","01-installation.html.vue"]]),b=JSON.parse('{"path":"/symfony/01-installation.html","title":"Installer Symfony et son environnement de travail","lang":"fr-FR","frontmatter":{"date":"2021-02-22T00:00:00.000Z"},"headers":[{"level":2,"title":"Plugins utiles pour nos IDE","slug":"plugins-utiles-pour-nos-ide","link":"#plugins-utiles-pour-nos-ide","children":[{"level":3,"title":"PHPStorm","slug":"phpstorm","link":"#phpstorm","children":[]},{"level":3,"title":"VS Code","slug":"vs-code","link":"#vs-code","children":[]}]},{"level":2,"title":"Requis techniques","slug":"requis-techniques","link":"#requis-techniques","children":[{"level":3,"title":"Annotations et attributs","slug":"annotations-et-attributs","link":"#annotations-et-attributs","children":[]}]},{"level":2,"title":"Outils de qualité de code","slug":"outils-de-qualite-de-code","link":"#outils-de-qualite-de-code","children":[{"level":3,"title":"Php CS Fixer","slug":"php-cs-fixer","link":"#php-cs-fixer","children":[]},{"level":3,"title":"PHPStan","slug":"phpstan","link":"#phpstan","children":[]},{"level":3,"title":"Lancer nos outils avec Composer","slug":"lancer-nos-outils-avec-composer","link":"#lancer-nos-outils-avec-composer","children":[]}]},{"level":2,"title":"Exercices","slug":"exercices","link":"#exercices","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"symfony/01-installation.md"}');export{g as comp,b as data};