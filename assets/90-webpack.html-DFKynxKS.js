import{aj as n,ak as e,al as a,aq as p}from"./app-BkblVdII.js";const t={};function l(r,s){return p(),e("div",null,s[0]||(s[0]=[a(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h1><p><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Site officiel</a></p><p>Webpack est un outil de compilation de vos modules javascript, mais il ne se limite pas à ça. Webpack va transformer vos fichiers javascript et faire en sorte de les compiler (convertir les fichiers pour améliorer la compatibilité par exemple) dans des <em>bundles</em> (paquets). Webpack crée un arbre de dépendances, afin de déterminer quelles resources doivent être utilisées dans quel bundle (ce qui permet de réduire la taille de vos fichiers css/js 😉 ).</p><h2 id="pourquoi-webpack" tabindex="-1"><a class="header-anchor" href="#pourquoi-webpack"><span>Pourquoi Webpack ?</span></a></h2><p>Webpack permet de compiler de nombreux fichiers composant un site (JS, Sass, polices d&#39;écritures (fonts), images, etc.) et d&#39;y appliquer diverses opérations très simplement. L&#39;un des principaux objectifs de Webpack est d&#39;optimiser les différentes <em>modules</em> d&#39;un site, pour ne charger que le minimum nécessaire pour chaque page.</p><p>Dans un développement par composants (voir ReactJS, VueJS, Angular, etc.), webpack permet de ne charger que les composants nécessaires, les optimiser, voir améliorer la compatibilité avec les anciens navigateurs.</p><p>Webpack étant un logiciel libre, de nombreux outils supplémentaires ont également été développés, permettant d&#39;étendre encore ses possibilités.</p><h3 id="d-autres-outils-plus-anciens" tabindex="-1"><a class="header-anchor" href="#d-autres-outils-plus-anciens"><span>D&#39;autres outils plus anciens</span></a></h3><p>Historiquement, d&#39;autres outils (qu&#39;on appelle task runners) permettaient de faire la même chose et Webpack en hérite directement.</p><ul><li><a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">Grunt</a></li><li><a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp</a></li></ul><p>Ces task runners avaient la fâcheuse tendance à être plutôt lourds à utiliser, nécessitant beaucoup de configuration pour être utilisable. Ils restent plutôt pratiques pour des sites légers, même si Webpack reste plus simple à mettre en place et à utiliser.</p><h2 id="installer-webpack" tabindex="-1"><a class="header-anchor" href="#installer-webpack"><span>Installer Webpack</span></a></h2><p><a href="https://webpack.js.org/guides/installation/" target="_blank" rel="noopener noreferrer">La documentation d&#39;installation</a></p><p>Pré-requis :</p><ul><li><a href="https://nodejs.org/fr/" target="_blank" rel="noopener noreferrer">Nodejs</a> (version 10 minimum, dernière LTS conseillée)</li></ul><p>Pour lancer l&#39;installation, utiliser les commandes suivantes :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack</span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="concepts-principaux" tabindex="-1"><a class="header-anchor" href="#concepts-principaux"><span>Concepts principaux</span></a></h2><p><a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">La documentation officielle</a></p><p>La configuration de Webpack se fait dans un fichier <code>webpack.config.js</code>, se trouvant généralement à la racine de votre projet.</p><p>Avant toute chose, il nous faut définir ces termes (et voir des applications pratique de configuration) :</p><ul><li>Entrée / Entry</li><li>Sortie / Output</li><li>Loaders</li><li>Plugins</li><li>Mode</li></ul><h3 id="entree-entry" tabindex="-1"><a class="header-anchor" href="#entree-entry"><span>Entrée / Entry</span></a></h3><p><a href="https://webpack.js.org/concepts/entry-points/" target="_blank" rel="noopener noreferrer">La documentation sur les entrée</a> et <a href="https://webpack.js.org/configuration/entry-context/" target="_blank" rel="noopener noreferrer">la configuration complète des entrées</a></p><p>Une entry (ou entrée en français) est un point d&#39;entrée pour la compilation. C&#39;est à partir de <em>ce(s) fichier(s)</em> que Webpack va créer un arbre de dépendances. La plupart du temps, il s&#39;agit d&#39;un fichier Javascript (par défaut, Webpack va chercher le fichier <code>src/index.js</code>).</p><p>Pour définir/changer nos points d&#39;entrée, voici un exemple de <code>webpack.config.js</code> :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/app.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Un autre exemple avec plusieurs points d&#39;entrée :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/app.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/admin.js&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sortie-output" tabindex="-1"><a class="header-anchor" href="#sortie-output"><span>Sortie / Output</span></a></h3><p><a href="https://webpack.js.org/concepts/output/" target="_blank" rel="noopener noreferrer">La documentation sur les sorties</a> et <a href="https://webpack.js.org/configuration/output/" target="_blank" rel="noopener noreferrer">la configuration complète de la propriété output</a></p><p>Cette propriété définie le ou les fichiers créés par Webpack et où les ranger. La propriété output a elle-même 2 propriétés : <code>path</code> (dans quel dossier ranger le fichier en sortie) et <code>filename</code> (comment nommer les fichiers).</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/app.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;app.bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Crée un fichier ./dist/app.bundle.js</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Un autre exemple avec plusieurs points d&#39;entrée :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/app.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/admin.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Crée les fichiers ./dist/app.bundle.js et ./dist/admin.bundle.js</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loaders" tabindex="-1"><a class="header-anchor" href="#loaders"><span>Loaders</span></a></h3><p><a href="https://webpack.js.org/concepts/loaders/" target="_blank" rel="noopener noreferrer">La documentation sur les loaders</a></p><p>Par défaut, Webpack ne comprends que les fichiers JS et JSON. Les loaders lui permettent de traiter d&#39;autres types de fichiers (css, sass, etc.), pour les traiter / compiler. Les loaders ont besoin de 2 propriétés : <code>test</code> pour définir quels fichiers sont concernés et <code>use</code> pour dire quel loader doit être utilisé pour transformer le fichier.</p><p>Imaginons que nous importons des fichiers <code>.scss</code> (<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">langage Sass</a>, préprocesseur CSS) dans nos fichiers Javascript. Pour qu&#39;ils soient traités par Webpack (et donc, compilés en css), nous devons appeler un loader <code>sass-loader</code> :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/app.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;app.bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Crée un fichier ./dist/app.bundle.js</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quand un fichier dont le nom se termine par <code>.scss</code> est rencontré, Webpack va transmettre le fichier pour traitement au <code>sass-loader</code> et l&#39;ajouter au bundle/paquet.</p><p>⚠️ Noter la valeur de test, qui est une expression régulière, qu&#39;on peut écrire <code>/\\.scss$/</code>, <code>&quot;/\\.scss$/&quot;</code> ou <code>&#39;/\\.scss$/&#39;</code></p><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>Plugins</span></a></h3><p><a href="https://webpack.js.org/concepts/plugins/" target="_blank" rel="noopener noreferrer">La documentation sur les plugins</a> et <a href="https://webpack.js.org/plugins/" target="_blank" rel="noopener noreferrer">la liste des plugins officiels disponibles</a></p><p>Webpack compile des modules (fichiers), et les plugins permettent d&#39;ajouter des comportements et fonctionnalités supplémentaires (optimisation du code, gestion de fichiers, etc.).</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Installé avec Npm</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pour accéder aux plugins inclus dans Webpack</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./assets/js/app.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;app.bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Crée un fichier ./dist/app.bundle.js</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Un autre exemple de plugin utile : <a href="https://github.com/Turbo87/webpack-notifier#readme" target="_blank" rel="noopener noreferrer">recevoir des notifications quand le build est terminé</a></p><h3 id="mode" tabindex="-1"><a class="header-anchor" href="#mode"><span>Mode</span></a></h3><p><a href="https://webpack.js.org/configuration/mode" target="_blank" rel="noopener noreferrer">La documentation sur les modes</a></p><p>Le mode fourni un ensemble d&#39;outils prédéfinis (et personnalisables) selon l&#39;environnement (développement ou production).</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span> <span class="token comment">// ou &#39;development&#39; ou &#39;none&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En production, plusieurs plugins d&#39;optimisation sont activés, alors qu&#39;en développement des outils de développement pour aider à débugguer les modules.</p><h2 id="des-outils" tabindex="-1"><a class="header-anchor" href="#des-outils"><span>Des outils</span></a></h2><ul><li><p>Une <a href="https://webpack.js.org/loaders/" target="_blank" rel="noopener noreferrer">liste des loaders</a> est fournie par Webpack et nous utiliserons certains d&#39;entre eux dans un exercice.</p></li><li><p>Des <a href="https://webpack.js.org/guides/" target="_blank" rel="noopener noreferrer">guides sont fournis et permettent de prendre en main Webpack</a></p></li><li><p>Aller plus loin dans <a href="https://webpack.js.org/configuration/" target="_blank" rel="noopener noreferrer">la configuration de Webpack</a></p></li><li><p>Un exemple de <a href="/assets/exemple-webpack.zip" target="_blank" rel="noopener noreferrer">configuration Webpack (très) complexe et complète</a></p></li></ul><h2 id="en-pratique" tabindex="-1"><a class="header-anchor" href="#en-pratique"><span>En pratique</span></a></h2><p>Nous allons maintenant tenter de mettre en place Webpack dans un projet contenant du javascript et du sass et expérimenter sur quelques plugins et outils.</p>`,56)]))}const o=n(t,[["render",l],["__file","90-webpack.html.vue"]]),c=JSON.parse(`{"path":"/js/90-webpack.html","title":"Webpack","lang":"fr-FR","frontmatter":{"date":"2021-05-21T00:00:00.000Z"},"headers":[{"level":2,"title":"Pourquoi Webpack ?","slug":"pourquoi-webpack","link":"#pourquoi-webpack","children":[{"level":3,"title":"D'autres outils plus anciens","slug":"d-autres-outils-plus-anciens","link":"#d-autres-outils-plus-anciens","children":[]}]},{"level":2,"title":"Installer Webpack","slug":"installer-webpack","link":"#installer-webpack","children":[]},{"level":2,"title":"Concepts principaux","slug":"concepts-principaux","link":"#concepts-principaux","children":[{"level":3,"title":"Entrée / Entry","slug":"entree-entry","link":"#entree-entry","children":[]},{"level":3,"title":"Sortie / Output","slug":"sortie-output","link":"#sortie-output","children":[]},{"level":3,"title":"Loaders","slug":"loaders","link":"#loaders","children":[]},{"level":3,"title":"Plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"Mode","slug":"mode","link":"#mode","children":[]}]},{"level":2,"title":"Des outils","slug":"des-outils","link":"#des-outils","children":[]},{"level":2,"title":"En pratique","slug":"en-pratique","link":"#en-pratique","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"js/90-webpack.md"}`);export{o as comp,c as data};