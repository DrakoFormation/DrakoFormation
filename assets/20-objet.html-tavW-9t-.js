import{aj as i,ak as o,am as n,an as e,ao as t,al as p,ap as c,aq as r,ar as l}from"./app-BkblVdII.js";const u={},d={class:"table-of-contents"};function k(m,s){const a=c("router-link");return r(),o("div",null,[s[7]||(s[7]=n("h1",{id:"php-oriente-objet",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-oriente-objet"},[n("span",null,"PHP Orienté objet")])],-1)),n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#une-classe"},{default:t(()=>s[0]||(s[0]=[l("Une classe")])),_:1})]),n("li",null,[e(a,{to:"#utiliser-nos-classes"},{default:t(()=>s[1]||(s[1]=[l("Utiliser nos classes")])),_:1})]),n("li",null,[e(a,{to:"#documenter"},{default:t(()=>s[2]||(s[2]=[l("Documenter")])),_:1})]),n("li",null,[e(a,{to:"#this-pseudo-variable-vraie-utilite"},{default:t(()=>s[3]||(s[3]=[l("$this : pseudo-variable, vraie utilité")])),_:1})]),n("li",null,[e(a,{to:"#constructeur"},{default:t(()=>s[4]||(s[4]=[l("Constructeur")])),_:1})]),n("li",null,[e(a,{to:"#constantes-de-classe"},{default:t(()=>s[5]||(s[5]=[l("Constantes de classe")])),_:1})]),n("li",null,[e(a,{to:"#this-ou-self"},{default:t(()=>s[6]||(s[6]=[l("$this ou self ?")])),_:1})])])]),s[8]||(s[8]=n("p",null,[n("a",{href:"https://www.php.net/manual/fr/language.oop5.basic.php",target:"_blank",rel:"noopener noreferrer"},"La documentation PHP"),n("a",{href:"https://openclassrooms.com/fr/courses/1665806-programmez-en-oriente-objet-en-php",target:"_blank",rel:"noopener noreferrer"},"Sur OpenClassRooms")],-1)),s[9]||(s[9]=n("h2",{id:"une-classe",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#une-classe"},[n("span",null,"Une classe")])],-1)),s[10]||(s[10]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/6fca744165694a70bd531306742ad942",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),s[11]||(s[11]=p(`<p>En PHP, une classe se nomme en PascalCase, est l&#39;unique contenu d&#39;un fichier (par convention, ça n&#39;est pas obligatoire) et peut avoir :</p><ul><li>des constantes</li><li>des propriétés</li><li>des méthodes</li><li>des appels de traits</li></ul><p>⚠️ Ne pas confondre classe et objet. Une classe est un plan de fabrication, l&#39;objet est une instance (une version concrète) de cette classe. On peut également faire un parallèle avec les <abbr title="Base de Données">BdD</abbr> : les classes peuvent être comparées aux tables, là où les objets sont des lignes de cette table.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token comment">// classes/Beanie.php</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Nom avec une majuscule entre chaque mot et dès le premier mot</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Une propriété.</span></span>
<span class="line">    <span class="token comment">// On ne peut pas en définir le type directement,</span></span>
<span class="line">    <span class="token comment">// mais on peut l&#39;indiquer en annotation </span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$material</span><span class="token punctuation">;</span> </span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> </span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Wool&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">     <span class="token comment">// Une méthode</span></span>
<span class="line">     <span class="token comment">// sans type de retour, mais on pourrait l&#39;ajouter</span></span>
<span class="line">     <span class="token comment">// et/ou l&#39;indiquer en annotation</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getMaterial</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">null</span></span> <span class="token parameter">$material</span></span>
<span class="line">     * <span class="token keyword">@return</span> $this</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setMaterial</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$material</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Beanie</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">         <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span> <span class="token operator">=</span> <span class="token variable">$material</span><span class="token punctuation">;</span></span>
<span class="line">         </span>
<span class="line">         <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// index.php</span></span>
<span class="line"><span class="token comment">// Instanciation d&#39;un objet</span></span>
<span class="line"><span class="token comment">// Et appel d&#39;une méthode</span></span>
<span class="line"><span class="token variable">$beanie</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Beanie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$beanie</span><span class="token operator">-&gt;</span><span class="token function">setMaterial</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Wool&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$beanie</span><span class="token operator">-&gt;</span><span class="token function">getMaterial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="utiliser-nos-classes" tabindex="-1"><a class="header-anchor" href="#utiliser-nos-classes"><span>Utiliser nos classes</span></a></h2><p>En vidéo :</p>`,6)),s[12]||(s[12]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/0da07d720ac748278bc68214d3c92ebc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),s[13]||(s[13]=p(`<p>En PHP, par défaut, les classes ne sont pas chargées automatiquement, il faut les charger nous-même (soit avec <code>require</code>/<code>require_once</code>, soit avec un autoloader qui le fera pour nous).</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">require</span> <span class="token string single-quoted-string">&#39;classes/MaClasse.php&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Ou utiliser un autoloader :</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token function">spl_autoload_register</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;classes/<span class="token interpolation"><span class="token variable">$class</span></span>.php&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si vous utilisez un Mac, avec Mamp, utilisez plutôt ce code :</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token function">spl_autoload_register</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$class</span> <span class="token operator">=</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\\\\&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token variable">$class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;classes/<span class="token interpolation"><span class="token variable">$class</span></span>.php&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documenter" tabindex="-1"><a class="header-anchor" href="#documenter"><span>Documenter</span></a></h2><p>Les annotations et le typage sont très utiles pour définir les types des propriétés, paramètres et valeurs de retour. Hélas, en PHP 7, nous ne pouvons pas toujours typer directement les propriétés. Nous sommes obligés d&#39;utiliser les annotations pour le faire (c&#39;est disponible à partir de PHP 7.4 seulement).</p><p>En PHP, une variable peut également avoir plusieurs types possibles. On notera alors ces types en annotation, dans la plupart des cas (<code>int|float</code> par exemple). Pour le cas d&#39;une valeur pouvant être <code>null</code>, on ajoutera un <code>?</code> avant le type (<code>?int</code> par exemple).</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;int, string&gt; */</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$material</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// On indique le(s) type(s) attendu(s)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">bool</span></span> <span class="token parameter">$aCondition</span></span>
<span class="line">     * </span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getMaterial</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$aCondition</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this-pseudo-variable-vraie-utilite" tabindex="-1"><a class="header-anchor" href="#this-pseudo-variable-vraie-utilite"><span><code>$this</code> : pseudo-variable, vraie utilité</span></a></h2><p>En vidéo :</p>`,12)),s[14]||(s[14]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/7f6a2fce59f349e891e4f5f4970f4696",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),s[15]||(s[15]=p(`<p><code>$this</code> permet d&#39;accéder à l&#39;objet en cours. Toujours utile pour le mettre à jour ! Il est nécessaire pour assurer l&#39;encapsulation de nos propriétés (on ne les modifie jamais directement, mais toujours <em>via</em> des méthodes).</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$material</span><span class="token punctuation">;</span></span>
<span class="line">     </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getMaterial</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Une méthode</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// $this, utilisée dans un objet permet d&#39;accéder à l&#39;objet en cours</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructeur" tabindex="-1"><a class="header-anchor" href="#constructeur"><span>Constructeur</span></a></h2><p>En vidéo :</p>`,4)),s[16]||(s[16]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/aaccabba313c4c9d89846e058161249d",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),s[17]||(s[17]=p(`<p>On peut définir des valeurs par défaut (ou d&#39;initialisation) pour les propriétés d&#39;un objet dans le constructeur ou dans les propriétés. Les deux sont équivalents la plupart du temps, mais pas pour des valeurs complexes (par exemple, si vous devez instancier un objet pour l&#39;un des propriétés, il est nécessaire de le faire dans le constructeur).</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// On peut donner une valeur par défaut directement sur la propriété</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$material</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wool&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// La même chose, mais, ici, on peut faire des calculs,</span></span>
<span class="line">        <span class="token comment">// appeler des méthodes de l&#39;objet, etc.</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wool&#39;</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vous pouvez également, si vous le souhaitez, définir des paramètres à votre constructeur (y compris pour définir les propriétés).</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$material</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// On permet de définir la valeur directement lors du new</span></span>
<span class="line">    <span class="token comment">// et on peut donner une valeur par défaut directement au paramètre</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$material</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;wool&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">material</span> <span class="token operator">=</span> <span class="token variable">$material</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constantes-de-classe" tabindex="-1"><a class="header-anchor" href="#constantes-de-classe"><span>Constantes de classe</span></a></h2><p>En vidéo :</p>`,6)),s[18]||(s[18]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/5f6d80ecbe3c443a80164f0852deab58",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),s[19]||(s[19]=p(`<p>La <a href="https://www.php.net/manual/fr/language.oop5.constants.php" target="_blank" rel="noopener noreferrer">documentation sur les constantes</a></p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token constant">AVAILABLE_SIZES</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;S&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;XL&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Une constante de classe</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAvailableSizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">AVAILABLE_SIZES</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token class-name static-context">Beanie</span><span class="token operator">::</span><span class="token constant">AVAILABLE_SIZES</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this-ou-self" tabindex="-1"><a class="header-anchor" href="#this-ou-self"><span>$this ou self ?</span></a></h2><p>En vidéo :</p>`,4)),s[20]||(s[20]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/c8e3bd5d9cae40048161b17e8c1749d6",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),s[21]||(s[21]=p(`<ul><li>Les deux s&#39;utilisent dans la classe,</li><li><code>$this</code> si vous êtes dans le contexte d&#39;un objet instancié (&quot;j&#39;ai des propriétés/méthodes, je vais m&#39;en servir&quot;)</li><li><code>self</code> pour appeler des éléments dits <code>static</code> (constantes, méthodes statiques) (&quot;Des éléments sont définis par la classe, je veux m&#39;en servir dans mon objet&quot;)</li></ul><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Beanie</span> </span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token constant">AVAILABLE_SIZES</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;S&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;XL&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Appelée avec Beanie::AVAILABLE_SIZES</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token variable">$property</span><span class="token punctuation">;</span> <span class="token comment">// Appelée avec Beanie::$property</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAvailableSizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">AVAILABLE_SIZES</span><span class="token punctuation">;</span> <span class="token comment">// appelée avec $b-&gt;getAvailableSizes()</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">availableSizes</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">AVAILABLE_SIZES</span><span class="token punctuation">;</span> <span class="token comment">// appelée avec Beanie::availableSizes()</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const b=i(u,[["render",k],["__file","20-objet.html.vue"]]),h=JSON.parse('{"path":"/php/20-objet.html","title":"PHP Orienté objet","lang":"fr-FR","frontmatter":{"date":"2023-01-11T00:00:00.000Z"},"headers":[{"level":2,"title":"Une classe","slug":"une-classe","link":"#une-classe","children":[]},{"level":2,"title":"Utiliser nos classes","slug":"utiliser-nos-classes","link":"#utiliser-nos-classes","children":[]},{"level":2,"title":"Documenter","slug":"documenter","link":"#documenter","children":[]},{"level":2,"title":"$this : pseudo-variable, vraie utilité","slug":"this-pseudo-variable-vraie-utilite","link":"#this-pseudo-variable-vraie-utilite","children":[]},{"level":2,"title":"Constructeur","slug":"constructeur","link":"#constructeur","children":[]},{"level":2,"title":"Constantes de classe","slug":"constantes-de-classe","link":"#constantes-de-classe","children":[]},{"level":2,"title":"$this ou self ?","slug":"this-ou-self","link":"#this-ou-self","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"php/20-objet.md"}');export{b as comp,h as data};