import{aj as i,ak as o,am as n,an as l,ao as r,al as t,ap as d,aq as p,ar as a}from"./app-BkblVdII.js";const u={},c={class:"table-of-contents"};function m(b,e){const s=d("router-link");return p(),o("div",null,[e[2]||(e[2]=n("h1",{id:"architecture-mvc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#architecture-mvc"},[n("span",null,"Architecture MVC")])],-1)),n("nav",c,[n("ul",null,[n("li",null,[l(s,{to:"#principes"},{default:r(()=>e[0]||(e[0]=[a("Principes")])),_:1})]),n("li",null,[l(s,{to:"#mise-en-place-dans-un-projet"},{default:r(()=>e[1]||(e[1]=[a("Mise en place dans un projet")])),_:1})])])]),e[3]||(e[3]=n("p",null,[n("a",{href:"https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur",target:"_blank",rel:"noopener noreferrer"},"L'article Wikipédia sur le MVC")],-1)),e[4]||(e[4]=n("h2",{id:"principes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#principes"},[n("span",null,"Principes")])],-1)),e[5]||(e[5]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/444c50527d2d4c518f472e2d9e59c8c4",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),e[6]||(e[6]=t('<p>Le modèle <abbr title="Model View Controller">MVC</abbr> (Modèle Vue Contrôleur) est une manière de ranger et concevoir le code pour le séparer autant que possible en 3 éléments distincts :</p><ul><li>Le modèle, c&#39;est-à-dire les éléments liés aux données (les classes liées à nos tables de <abbr title="Base de Données">BdD</abbr> par exemple)</li><li>Les vues, c&#39;est-à-dire les fichiers purement dédiés à l&#39;affichage (contenu d&#39;une page)</li><li>Les contrôleurs, c&#39;est-à-dire un ensemble de fichiers &quot;chefs d&#39;orchestre&quot; qui vont recevoir la requête de l&#39;utilisateur et appeler le modèle et la vue, pour construire la réponse finale.</li></ul><p><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Modèle-vue-contrôleur_(MVC)_-_fr.png" alt="Schéma présentant le modèle MVC"></p><p>Détails du schéma (honteusement piqué sur <a href="https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur" target="_blank" rel="noopener noreferrer">Wikipédia</a> 😉 ) :</p><ol><li>L&#39;utilisateur envoie une requête HTTP (demande une URL), qui va être reçue par un contrôleur</li><li>Le contrôleur va demander des données au modèle (généralement, la <abbr title="Base de Données">BdD</abbr>)</li><li>Le contrôleur reçoit les données, fait d&#39;éventuels calculs avec</li><li>Le contrôleur transmet les données à la vue, qui va les exploiter pour créer l&#39;affichage</li><li>Cet affichage est renvoyé à l&#39;utilisateur qui avait fait la requête HTTP (une réponse HTTP est renvoyée)</li></ol><p>Ce découpage facilite la maintenabilité du code, force une séparation entre les éléments et permet divers rangements pour retrouver plus efficacement les fichiers.</p><h2 id="mise-en-place-dans-un-projet" tabindex="-1"><a class="header-anchor" href="#mise-en-place-dans-un-projet"><span>Mise en place dans un projet</span></a></h2><p>Pour plus d&#39;exemples et de détails, je vous conseille <a href="https://openclassrooms.com/fr/courses/4670706-adoptez-une-architecture-mvc-en-php" target="_blank" rel="noopener noreferrer">le tuto dédié au MVC sur Open ClassRoom</a></p>',8)),e[7]||(e[7]=n("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{src:"https://www.loom.com/embed/2d33b6fca8694c5dac87171284420aa8",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),e[8]||(e[8]=t(`<p>Concrètement, dans la plupart des projets, vous pouvez utiliser des frameworks (comme Symfony) pour le mettre en place. Dans un premier temps, nous allons voir comment organiser du code Php procédural, pour passer en mode <abbr title="Modèle Vue Contrôleur">MVC</abbr>.</p><p>La plupart du temps, nous allons nous baser sur des objets et des classes pour organiser tout ça. Voici un exemple de structure minimale pour un projet <abbr title="Modèle Vue Contrôleur">MVC</abbr> :</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">- src/</span>
<span class="line">| - Controller/</span>
<span class="line">| - Model/</span>
<span class="line">| - View/</span>
<span class="line">- index.php</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour ajouter une page dans cette structure, nous aurions besoin d&#39;ajouter un fichier dans chacun des dossiers <code>Controller</code>, <code>Model</code> et <code>View</code>. Prenons l&#39;exemple d&#39;un site référençant toutes les races de chien et des informations sur chacune.</p><p>Pour ajouter une page listant les listes de chiens, il nous faudrait :</p><ul><li>Une table <code>breed</code> (race) dans notre <abbr title="Base de Données">BdD</abbr> et une entité <code>Breed</code> correspondante</li><li>Une vue <code>list-breeds.php</code> pour afficher le contenu de la liste des races de chiens</li><li>Un controller <code>ListBreedController</code> pour gérer l&#39;appel aux données et à l&#39;affichage de la liste</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">- src/</span>
<span class="line">| - Controller/</span>
<span class="line">| | - ListBreedController.php</span>
<span class="line">| - Model/</span>
<span class="line">| | - Breed.php</span>
<span class="line">| - View/</span>
<span class="line">| | - list-breeds.php</span>
<span class="line">- index.php</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dans <code>ListBreedController</code>, on peut s&#39;attendre à un appel à la <abbr title="Base de Données">BdD</abbr> pour récupérer les différentes races <code>Breed</code> et un appel à la vue <code>list-breeds</code>.</p><p>Bien sûr, pour que tout ça fonctionne, il faut que notre front controller (<code>index.php</code>) reçoive la requête et puisse faire le lien entre ce qu&#39;il reçoit et un contrôleur.</p>`,9))])}const f=i(u,[["render",m],["__file","40-mvc.html.vue"]]),h=JSON.parse('{"path":"/php/40-mvc.html","title":"Architecture MVC","lang":"fr-FR","frontmatter":{"date":"2022-02-15T00:00:00.000Z"},"headers":[{"level":2,"title":"Principes","slug":"principes","link":"#principes","children":[]},{"level":2,"title":"Mise en place dans un projet","slug":"mise-en-place-dans-un-projet","link":"#mise-en-place-dans-un-projet","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"php/40-mvc.md"}');export{f as comp,h as data};