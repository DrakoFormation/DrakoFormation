import{aj as t,ak as i,am as s,an as e,ao as p,al as o,ap as c,aq as r,ar as l}from"./app-BkblVdII.js";const u={},d={class:"table-of-contents"};function m(k,n){const a=c("router-link");return r(),i("div",null,[n[2]||(n[2]=s("h1",{id:"les-services-et-l-injection-de-dependances",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#les-services-et-l-injection-de-dependances"},[s("span",null,"Les services et l'injection de dépendances")])],-1)),s("nav",d,[s("ul",null,[s("li",null,[e(a,{to:"#pour-resumer"},{default:p(()=>n[0]||(n[0]=[l("Pour résumer")])),_:1})]),s("li",null,[e(a,{to:"#comprendre-l-injection-de-dependances"},{default:p(()=>n[1]||(n[1]=[l("Comprendre l'injection de dépendances")])),_:1})])])]),n[3]||(n[3]=s("p",null,[s("a",{href:"https://symfony.com/doc/current/service_container.html",target:"_blank",rel:"noopener noreferrer"},"La documentation spécifique aux services")],-1)),n[4]||(n[4]=s("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[s("iframe",{src:"https://www.loom.com/embed/58f0891c518540cfbb7966680bd79a1a",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),n[5]||(n[5]=o(`<h2 id="pour-resumer" tabindex="-1"><a class="header-anchor" href="#pour-resumer"><span>Pour résumer</span></a></h2><ul><li>Un service est une classe, dont une instance est créé par Symfony au chargement (on ne fait jamais nous-même un <code>new</code> sur un service)</li><li>Toutes les classes dans le dossier <code>src</code>, à part les entités (et quelques autres éléments) sont des services</li><li>Un service est une fonctionnalité, qui peut être <strong>injectée</strong> dans le constructeur de <strong>n&#39;importe quel autre service</strong> ou dans des actions de controller.</li></ul><h2 id="comprendre-l-injection-de-dependances" tabindex="-1"><a class="header-anchor" href="#comprendre-l-injection-de-dependances"><span>Comprendre l&#39;injection de dépendances</span></a></h2><p>Avec Symfony, tout est service. Un service est une fonctionnalité (peut être seulement une classe), comme l&#39;affichage d&#39;un template, l&#39;envoie des emails, etc. Il en existe déjà de nombreux dans Symfony, déjà fournis (comme Twig, plusieurs éléments de Doctrine ou un Mailer).</p><p>Dans les faits, l&#39;exemple suivant <code>return $this-&gt;render(&#39;blog/index.html.twig&#39;, [&#39;page&#39; =&gt; 3]);</code> fait appel, en interne, au service Twig pour construire le HTML et le met dans un objet <code>Response</code>.</p><p>Nous avons donc déjà utilisé un service !</p><p>Dans les faits, une partie des services sont disponibles dans ce que l&#39;on appelle le Container (ni plus ni moins un tableau d&#39;objets utilisables).</p><p>Dans les faits, la déclaration des services est faite dans le fichier <code>config/services.yaml</code>.</p><p>Ce sont ces lignes qui se chargent du plus gros du travail :</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># La configuration de base sur Symfony</span></span>
<span class="line">    <span class="token key atrule">_defaults</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">autowire</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># Injection de dépendance automatique (il suffit de déclarer dans le controller d&#39;un service d&#39;autres service dont on va avoir besoin pour effectivement les avoir dans ce premier service)</span></span>
<span class="line">        <span class="token key atrule">autoconfigure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># Nous pouvons déclarer des services spéciaux, cette configuration assure qu&#39;ils seront déclarés comme tels automatiquement</span></span>
<span class="line">        <span class="token key atrule">public</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># Par défaut, aucun de nos services ne sont publiques (c&#39;est à dire que très peu de services sont disponibles directement depuis le controller) </span></span>
<span class="line">        </span>
<span class="line">    <span class="token comment"># Ce que disent ces lignes : toutes les classes dans le dossier source sont définies comme des services.</span></span>
<span class="line">    <span class="token comment"># À l&#39;exception du contenu des dossiers DependencyInjection, Entity, Migrations et Tests et du fichier Kernel.php, qui ne sont donc pas considérés comme des services</span></span>
<span class="line">    <span class="token key atrule">App\\</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">resource</span><span class="token punctuation">:</span> <span class="token string">&#39;../src/*&#39;</span></span>
<span class="line">        <span class="token key atrule">exclude</span><span class="token punctuation">:</span> <span class="token string">&#39;../src/{DependencyInjection,Entity,Migrations,Tests,Kernel.php}&#39;</span></span>
<span class="line">        </span>
<span class="line">    <span class="token comment"># Ces lignes viennent modifier la configuration pour le dossier src/Controller. Elles associent le tag controller.service_arguments aux controllers, qui permet de leur donner un comportement spécifique (être liés à des routes par exemple)</span></span>
<span class="line">    <span class="token key atrule">App\\Controller\\</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">resource</span><span class="token punctuation">:</span> <span class="token string">&#39;../src/Controller&#39;</span></span>
<span class="line">        <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;controller.service_arguments&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ainsi, un service de génération de mail pourra être déclaré comme suit :</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// src/Service/MailGenerator.php</span></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Service</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Mailer<span class="token punctuation">\\</span>MailerInterface</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Mime<span class="token punctuation">\\</span>Email</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">MailGenerator</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">MailerInterface</span> */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$mailer</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// On demande un service qui implémente l&#39;interface MailerInterface (voir la doc de Symfony pour la liste des services disponibles ;) )</span></span>
<span class="line">    <span class="token comment">// Le service correspondant est automatiquement injecté</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">MailerInterface</span> <span class="token variable">$mailer</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mailer</span> <span class="token operator">=</span> <span class="token variable">$mailer</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">generateAndSend</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$emailDest</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;you@example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$email</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin@example.com&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">$emailDest</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">subject</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Un message !&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Nous pouvons utiliser notre service $mailer où bon nous chante, comme dans n&#39;importe quel objet</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mailer</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$email</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maintenant, imaginons que nous voulions ajouter un deuxième paramètre à notre constructeur, mais pas un service. Par exemple, l&#39;adresse utilisée pour l&#39;envoi, que nous voulons récupérer dans la configuration. Il faut alors modifier notre service et le déclarer <strong>manuellement</strong>.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// src/Service/MailGenerator.php</span></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Service</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Mailer<span class="token punctuation">\\</span>MailerInterface</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Mime<span class="token punctuation">\\</span>Email</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">MailGenerator</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">MailerInterface</span> */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$mailer</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span> */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$fromEmail</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// On demande un service qui implémente l&#39;interface MailerInterface (voir la doc de Symfony pour la liste des services disponibles ;) )</span></span>
<span class="line">    <span class="token comment">// Le service correspondant est automatiquement injecté</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">MailerInterface</span> <span class="token variable">$mailer</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$fromEmail</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mailer</span> <span class="token operator">=</span> <span class="token variable">$mailer</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fromEmail</span> <span class="token operator">=</span> <span class="token variable">$fromEmail</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">generateAndSend</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$emailDest</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;you@example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$email</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fromEmail</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">$emailDest</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">subject</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Un message !&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Nous pouvons utiliser notre service $mailer où bon nous chante, comme dans n&#39;importe quel objet</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mailer</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$email</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour déclarer manuellement notre service, tout en profitant (quand même) de l&#39;autowiring, il suffit d&#39;ajouter un paramètre pour tous nos services, ou de surcharger la déclaration de notre service. Les deux possibilités sont présentées ci-dessous, il suffit d&#39;en choisir une.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">_defaults</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">autowire</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> </span>
<span class="line">        <span class="token key atrule">autoconfigure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> </span>
<span class="line">        <span class="token key atrule">public</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  </span>
<span class="line">        <span class="token key atrule">bind</span><span class="token punctuation">:</span> <span class="token comment"># Ici, nous pouvons directement associer TOUS les paramètres $fromEmail qui sont à injecter dans des services</span></span>
<span class="line">            <span class="token comment"># Dès qu&#39;une variable $fromEmail est déclarée dans le constructeur d&#39;un service (ou une action de contrôleur)</span></span>
<span class="line">            <span class="token comment"># on lui donnera une valeur</span></span>
<span class="line">            <span class="token key atrule">$fromEmail</span><span class="token punctuation">:</span> <span class="token string">&#39;admin@example.com&#39;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># ...</span></span>
<span class="line">    <span class="token comment"># Tout ce qui était avant est inchangé</span></span>
<span class="line">    <span class="token comment"># ...</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># Ou nous pouvons surcharger la définition de notre service, pour modifier ses paramètres</span></span>
<span class="line">    <span class="token key atrule">App\\Service\\MailGenerator</span><span class="token punctuation">:</span> <span class="token comment"># L&#39;identifiant de notre service est son FQCN (nom complet de la classe)</span></span>
<span class="line">        <span class="token key atrule">arguments</span><span class="token punctuation">:</span> <span class="token comment"># On modifie le comportement de l&#39;injection en lui disant de modifier les arguments (du constructeur) du service</span></span>
<span class="line">            <span class="token key atrule">$fromEmail</span><span class="token punctuation">:</span> <span class="token string">&#39;admin@example.com&#39;</span> <span class="token comment"># on fait alors correspondre notre paramètre $fromEmail à une valeur</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Et voilà ! Notre service est configuré et prêt à l&#39;emploi. Nous pouvons maintenant l&#39;appeler dans un controller ou n&#39;importe quel autre service (en utilisant là encore l&#39;autowiring pour l&#39;appeler) :</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token comment">// src/Controller/MailController.php</span></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Service<span class="token punctuation">\\</span>MailGenerator</span><span class="token punctuation">;</span> <span class="token comment">// On va avoir besoin de cette classe et on va utiliser son nom court</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Bundle<span class="token punctuation">\\</span>FrameworkBundle<span class="token punctuation">\\</span>Controller<span class="token punctuation">\\</span>AbstractController</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Routing<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">MailController</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractController</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * @Route(&quot;/email/envoie&quot;, name=&quot;mail_send&quot;)</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sendMail</span><span class="token punctuation">(</span><span class="token class-name type-declaration">MailGenerator</span> <span class="token variable">$mailGenerator</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$mailGenerator</span><span class="token operator">-&gt;</span><span class="token function">generateAndSend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Un message à caractère informatif !&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;toto@example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mail/sendMail.html.twig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>L&#39;un des services que nous allons le plus souvent injecter dans les controllers et l&#39;objet <code>Request</code> de Symfony, mais nous en parlerons dans la partie sur les formulaires.</p><p>Pour résumer, dans les paramètres de notre action, nous pouvons récupérer :</p><ul><li>les paramètres de notre route</li><li>des services que nous injectons pour les utiliser dans l&#39;action.</li></ul><p>L&#39;un des principaux objectifs de ce découpage en services est de réduire le controller à son minimum et ce pourquoi il est fait : être un chef d&#39;orchestre entre la requête et le rendu final.</p>`,22))])}const b=t(u,[["render",m],["__file","23-injection.html.vue"]]),f=JSON.parse(`{"path":"/symfony/23-injection.html","title":"Les services et l'injection de dépendances","lang":"fr-FR","frontmatter":{"date":"2021-02-22T00:00:00.000Z"},"headers":[{"level":2,"title":"Pour résumer","slug":"pour-resumer","link":"#pour-resumer","children":[]},{"level":2,"title":"Comprendre l'injection de dépendances","slug":"comprendre-l-injection-de-dependances","link":"#comprendre-l-injection-de-dependances","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"symfony/23-injection.md"}`);export{b as comp,f as data};