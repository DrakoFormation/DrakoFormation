import{aj as i,ak as o,am as n,an as a,ao as s,al as t,ap as u,aq as p,ar as r}from"./app-BkblVdII.js";const d={},c={class:"table-of-contents"};function m(f,e){const l=u("router-link");return p(),o("div",null,[e[12]||(e[12]=n("h1",{id:"exercices-panier-et-validation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#exercices-panier-et-validation"},[n("span",null,"Exercices - Panier et validation")])],-1)),n("nav",c,[n("ul",null,[n("li",null,[a(l,{to:"#_18-0-afficher-les-details-d-un-bonnet"},{default:s(()=>e[0]||(e[0]=[r("18.0. Afficher les détails d'un bonnet")])),_:1})]),n("li",null,[a(l,{to:"#_18-1-creer-un-front-controller"},{default:s(()=>e[1]||(e[1]=[r("18.1. Créer un front controller")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#correction"},{default:s(()=>e[2]||(e[2]=[r("Correction")])),_:1})])])]),n("li",null,[a(l,{to:"#_19-ajouter-des-elements-au-panier"},{default:s(()=>e[3]||(e[3]=[r("19. Ajouter des éléments au panier")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#exemple-de-format-non-obligatoire-de-session-cart"},{default:s(()=>e[4]||(e[4]=[r("Exemple de format (non obligatoire) de $_SESSION['cart']")])),_:1})])])]),n("li",null,[a(l,{to:"#_20-afficher-les-elements-du-panier"},{default:s(()=>e[5]||(e[5]=[r("20. Afficher les éléments du panier")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#creer-une-pr-pull-request"},{default:s(()=>e[6]||(e[6]=[r("Créer une PR (Pull Request)")])),_:1})]),n("li",null,[a(l,{to:"#correction-des-exercices-19-et-20"},{default:s(()=>e[7]||(e[7]=[r("Correction des exercices 19 et 20")])),_:1})])])]),n("li",null,[a(l,{to:"#_21-ajouter-un-formulaire-de-contact"},{default:s(()=>e[8]||(e[8]=[r("21. Ajouter un formulaire de contact")])),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#indices"},{default:s(()=>e[9]||(e[9]=[r("Indices")])),_:1})]),n("li",null,[a(l,{to:"#pull-request"},{default:s(()=>e[10]||(e[10]=[r("Pull Request")])),_:1})]),n("li",null,[a(l,{to:"#correction-1"},{default:s(()=>e[11]||(e[11]=[r("Correction")])),_:1})])])])])]),e[13]||(e[13]=t(`<p>Pré-requis :</p><ul><li>avoir un environnement de travail (<a href="https://www.wampserver.com/" target="_blank" rel="noopener noreferrer">Wamp</a> / <a href="https://www.apachefriends.org/fr/index.html" target="_blank" rel="noopener noreferrer">Xampp</a> / <a href="https://www.mamp.info/en/downloads/" target="_blank" rel="noopener noreferrer">Mamp</a> ou équivalent)</li><li>avoir des bases de PHP</li></ul><p>Correction :</p><ul><li>En vidéo, tout le long des exercices (après l&#39;énoncé correspondant)</li><li>Dans le code, sur <a href="https://github.com/Dreeckan/beanies/pulls?q=is%3Apr" target="_blank" rel="noopener noreferrer">le repository dédié aux corrections sur GitHub</a>.</li></ul><h2 id="_18-0-afficher-les-details-d-un-bonnet" tabindex="-1"><a class="header-anchor" href="#_18-0-afficher-les-details-d-un-bonnet"><span>18.0. Afficher les détails d&#39;un bonnet</span></a></h2><p>Créer une nouvelle page pour afficher les informations complètes sur un bonnet.</p><ul><li>Créer une page <code>beanie.php</code></li><li>Cette page doit récupérer un identifiant de bonnet dans l&#39;url (en utilisant <code>$_GET</code>)</li><li>Dans cette page, ajouter toutes les informations disponibles pour un bonnet (⚠️ penser à la mettre à jour dans les autres exercices)</li></ul><h2 id="_18-1-creer-un-front-controller" tabindex="-1"><a class="header-anchor" href="#_18-1-creer-un-front-controller"><span>18.1. Créer un front controller</span></a></h2><p>Le but du front controller est de réduire (encore) les répétitions de code, en gérant <strong>tous</strong> les éléments constants (inclusions, démarrage de session, etc.).</p><ul><li>Nous allons maintenant utiliser notre fichier <code>index.php</code> en tant qu&#39;unique script PHP appelé. C&#39;est-à-dire que nous n&#39;appellerons plus <code>list.php</code> (et les autres pages) directement, mais en passant par elle. (en appelant <code>index.php?page=list</code> ou <code>?page=list</code>)</li><li>Renommer le fichier <code>index.php</code> en <code>home.php</code> et créer un nouveau fichier <code>index.php</code></li><li>Ranger les fichiers de pages qu&#39;on a jusqu&#39;à présent (list, login, home, etc.) dans un dossier <code>pages</code></li><li>Dans <code>index.php</code>, nous allons récupérer un paramètre <code>GET</code>, nommé <code>page</code>, qui contiendra la page à charger (page d&#39;accueil, liste des produits, panier, etc.)</li><li>Mettre à jour les autres pages en conséquence pour réduire autant que possible le code des pages</li><li>Ajouter la temporisation de sortie pour permettre les éventuelles redirections</li></ul><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token function">ob_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">// ... contenu du script ...</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token function">ob_end_flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="correction" tabindex="-1"><a class="header-anchor" href="#correction"><span>Correction</span></a></h3>`,12)),e[14]||(e[14]=n("iframe",{class:"yt-video",src:"https://www.youtube.com/embed/n4AFYOcgNrU",title:"Exercice 1",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; web-share",allowfullscreen:""},null,-1)),e[15]||(e[15]=t(`<h2 id="_19-ajouter-des-elements-au-panier" tabindex="-1"><a class="header-anchor" href="#_19-ajouter-des-elements-au-panier"><span>19. Ajouter des éléments au panier</span></a></h2><p>Nous avons des produits, il ne nous reste plus qu&#39;à les acheter ! (faire semblant de les acheter, plutôt)</p><ul><li>Sur la page de liste (<code>list.php</code>), ajouter un bouton &quot;Ajouter au panier&quot; (on ajoute un seul élément à la fois dans le panier)</li><li>Gérer l&#39;ajout au panier d&#39;un élément (passer un identifiant (à ajouter dans la liste des produits) qui sera récupéré avec <code>$_GET</code>)</li><li>Les éléments doivent être présents dans la session</li></ul><h3 id="exemple-de-format-non-obligatoire-de-session-cart" tabindex="-1"><a class="header-anchor" href="#exemple-de-format-non-obligatoire-de-session-cart"><span>Exemple de format (non obligatoire) de <code>$_SESSION[&#39;cart&#39;]</code></span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token number">666</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 2 éléments avec l&#39;id 666 sont dans le panier</span></span>
<span class="line">    <span class="token number">32</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 1 élément avec l&#39;id 32 est présent dans le panier</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-afficher-les-elements-du-panier" tabindex="-1"><a class="header-anchor" href="#_20-afficher-les-elements-du-panier"><span>20. Afficher les éléments du panier</span></a></h2><ul><li>Créer une page <code>cart.php</code> (si ça n&#39;est pas déjà fait) dans laquelle vous allez afficher le panier</li><li>Ajouter des boutons (liens) pour ajouter ou supprimer des éléments déjà présents</li><li>Calculer et afficher le prix pour chaque ligne (<code>$price * $quantity</code>)</li><li>Calculer et afficher le prix total du panier</li><li>Ajouter un bouton pour vider le panier</li><li>Le panier doit être disponible même si l&#39;utilisateur n&#39;est pas connecté</li></ul><h3 id="creer-une-pr-pull-request" tabindex="-1"><a class="header-anchor" href="#creer-une-pr-pull-request"><span>Créer une PR (Pull Request)</span></a></h3><ul><li>Créez une Pull Request</li><li>Invitez quelqu&#39;un.e sur votre projet</li><li>Faites vous inviter par cette personne également</li><li>Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-1 <strong>et</strong> PSR-12, par exemple)</li><li>Approuvez (ou non) sa PR</li><li>Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)</li></ul><h3 id="correction-des-exercices-19-et-20" tabindex="-1"><a class="header-anchor" href="#correction-des-exercices-19-et-20"><span>Correction des exercices 19 et 20</span></a></h3>`,10)),e[16]||(e[16]=n("iframe",{class:"yt-video",src:"https://www.youtube.com/embed/mHznhFvGDps",title:"Exercice 1",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; web-share",allowfullscreen:""},null,-1)),e[17]||(e[17]=t('<h2 id="_21-ajouter-un-formulaire-de-contact" tabindex="-1"><a class="header-anchor" href="#_21-ajouter-un-formulaire-de-contact"><span>21. Ajouter un formulaire de contact</span></a></h2><ul><li>Trois champs : <ul><li>Sujet (champ de type text)</li><li>Email (pour recontacter la personne) (champ de type email)</li><li>Message (champ de type textarea)</li></ul></li><li>Contraintes (valider que les champs correspondent à ces critères, tant en html que PHP) : <ul><li>Sujet non vide (Attention au cas <code>&#39; &#39;</code>)</li><li>Email valide (non vide et de la forme <code>test@test.test</code>)</li><li>Message non vide (Attention au cas <code>&#39; &#39;</code>)</li></ul></li></ul><h3 id="indices" tabindex="-1"><a class="header-anchor" href="#indices"><span>Indices</span></a></h3><ul><li>Il existe une fonction PHP qui va vérifier la validité d&#39;une variable (dont un email)</li><li>Il faut passer les données en POST dans votre formulaire</li><li>Vous pouvez ajouter une validation au niveau du HTML, mais il faudra quand même faire la validation PHP (il est facile de contourner la validation HTML)</li></ul><h3 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request"><span>Pull Request</span></a></h3><ul><li>Créez une Pull Request</li><li>Invitez quelqu&#39;un.e sur votre projet</li><li>Faites vous inviter par cette personne également</li><li>Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-1 <strong>et</strong> PSR-12, par exemple)</li><li>Approuvez (ou non) sa PR</li><li>Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)</li></ul><h3 id="correction-1" tabindex="-1"><a class="header-anchor" href="#correction-1"><span>Correction</span></a></h3>',7)),e[18]||(e[18]=n("iframe",{class:"yt-video",src:"https://www.youtube.com/embed/iGNXQ66WOkw",title:"Exercice 1",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; web-share",allowfullscreen:""},null,-1))])}const v=i(d,[["render",m],["__file","83-cart-get-session.html.vue"]]),b=JSON.parse(`{"path":"/php/83-cart-get-session.html","title":"Exercices - Panier et validation","lang":"fr-FR","frontmatter":{"date":"2023-04-06T00:00:00.000Z"},"headers":[{"level":2,"title":"18.0. Afficher les détails d'un bonnet","slug":"_18-0-afficher-les-details-d-un-bonnet","link":"#_18-0-afficher-les-details-d-un-bonnet","children":[]},{"level":2,"title":"18.1. Créer un front controller","slug":"_18-1-creer-un-front-controller","link":"#_18-1-creer-un-front-controller","children":[{"level":3,"title":"Correction","slug":"correction","link":"#correction","children":[]}]},{"level":2,"title":"19. Ajouter des éléments au panier","slug":"_19-ajouter-des-elements-au-panier","link":"#_19-ajouter-des-elements-au-panier","children":[{"level":3,"title":"Exemple de format (non obligatoire) de $_SESSION['cart']","slug":"exemple-de-format-non-obligatoire-de-session-cart","link":"#exemple-de-format-non-obligatoire-de-session-cart","children":[]}]},{"level":2,"title":"20. Afficher les éléments du panier","slug":"_20-afficher-les-elements-du-panier","link":"#_20-afficher-les-elements-du-panier","children":[{"level":3,"title":"Créer une PR (Pull Request)","slug":"creer-une-pr-pull-request","link":"#creer-une-pr-pull-request","children":[]},{"level":3,"title":"Correction des exercices 19 et 20","slug":"correction-des-exercices-19-et-20","link":"#correction-des-exercices-19-et-20","children":[]}]},{"level":2,"title":"21. Ajouter un formulaire de contact","slug":"_21-ajouter-un-formulaire-de-contact","link":"#_21-ajouter-un-formulaire-de-contact","children":[{"level":3,"title":"Indices","slug":"indices","link":"#indices","children":[]},{"level":3,"title":"Pull Request","slug":"pull-request","link":"#pull-request","children":[]},{"level":3,"title":"Correction","slug":"correction-1","link":"#correction-1","children":[]}]}],"git":{"updatedTime":1736283917000},"filePathRelative":"php/83-cart-get-session.md"}`);export{v as comp,b as data};