import{aj as s,ak as a,am as r,an as l,ao as n,al as i,ap as d,aq as u,ar as t}from"./app-BkblVdII.js";const c={},p={class:"table-of-contents"};function m(f,e){const o=d("router-link");return u(),a("div",null,[e[10]||(e[10]=r("h1",{id:"pense-betes",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#pense-betes"},[r("span",null,"Pense-bêtes")])],-1)),r("nav",p,[r("ul",null,[r("li",null,[l(o,{to:"#demarrer-un-projet-symfony-de-zero"},{default:n(()=>e[0]||(e[0]=[t("Démarrer un projet Symfony (de zéro)")])),_:1})]),r("li",null,[l(o,{to:"#recuperer-un-projet-clone"},{default:n(()=>e[1]||(e[1]=[t("Récupérer un projet (clone)")])),_:1})]),r("li",null,[l(o,{to:"#travailler-sur-un-projet"},{default:n(()=>e[2]||(e[2]=[t("Travailler sur un projet")])),_:1})]),r("li",null,[l(o,{to:"#creer-une-page"},{default:n(()=>e[3]||(e[3]=[t("Créer une page")])),_:1})]),r("li",null,[l(o,{to:"#commandes-composer"},{default:n(()=>e[4]||(e[4]=[t("Commandes composer")])),_:1})]),r("li",null,[l(o,{to:"#de-buguer"},{default:n(()=>e[5]||(e[5]=[t("Dé-buguer")])),_:1})]),r("li",null,[l(o,{to:"#generer-des-entites-et-des-migrations"},{default:n(()=>e[6]||(e[6]=[t("Générer des entités et des migrations")])),_:1})]),r("li",null,[l(o,{to:"#doctrine"},{default:n(()=>e[7]||(e[7]=[t("Doctrine")])),_:1})]),r("li",null,[l(o,{to:"#formulaires"},{default:n(()=>e[8]||(e[8]=[t("Formulaires")])),_:1})]),r("li",null,[l(o,{to:"#bundles-utiles"},{default:n(()=>e[9]||(e[9]=[t("Bundles utiles")])),_:1})])])]),e[11]||(e[11]=r("h2",{id:"demarrer-un-projet-symfony-de-zero",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#demarrer-un-projet-symfony-de-zero"},[r("span",null,"Démarrer un projet Symfony (de zéro)")])],-1)),e[12]||(e[12]=r("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[r("iframe",{src:"https://www.loom.com/embed/6f2ef2737c6c42ebb5bdc837e34c8214",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),e[13]||(e[13]=i('<ul><li><code>symfony new --webapp nomDeVotreProjet</code></li><li><code>cd nomDeVotreProjet</code></li><li><code>git remote add origin UrlVersLeRepository</code></li><li><code>git branch -M main</code></li><li><code>git push -u origin main</code></li></ul><h2 id="recuperer-un-projet-clone" tabindex="-1"><a class="header-anchor" href="#recuperer-un-projet-clone"><span>Récupérer un projet (clone)</span></a></h2>',2)),e[14]||(e[14]=r("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[r("iframe",{src:"https://www.loom.com/embed/39f3f96a690f401cb77610c2c0b58739",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1)),e[15]||(e[15]=i('<ul><li><code>git clone UrlVersLeRepository chemin/vers/le/repository</code> (exemple : <code>git clone git@github.com:Dreeckan/symfony-computer.git symfony-computer</code>)</li><li><code>cd chemin/vers/le/repository</code> (exemple : <code>cd symfony-computer</code>)</li><li><code>composer install</code> (pour mettre à jour le contenu du dossier <code>vendor</code> et récupérer les dépendances, telles que Symfony)</li><li>Vous êtes prêts à travailler</li></ul><p>S&#39;il a déjà une BdD initialisée (avec des migrations), il faut aussi les appliquer (pour mettre à jour votre BdD) :</p><ul><li><code>php bin/console doctrine:database:create</code> (si vous n&#39;avez pas déjà la BdD)</li><li><code>php bin/console doctrine:migrations:migrate -n</code></li></ul><p>Si le projet a des Fixtures, les appliquer avec :</p><ul><li><code>php bin/console doctrine:fixtures:load -n</code></li></ul><h2 id="travailler-sur-un-projet" tabindex="-1"><a class="header-anchor" href="#travailler-sur-un-projet"><span>Travailler sur un projet</span></a></h2><ul><li>Ouvrir Wamp/Mamp pour la BdD et PhpMyAdmin (ou les avoir installés)</li><li>Ouvrir un terminal (dans votre IDE par exemple)</li><li><code>symfony serve</code> qui vous dira sur quelle adresse vous connecter pour tester votre site</li></ul><h2 id="creer-une-page" tabindex="-1"><a class="header-anchor" href="#creer-une-page"><span>Créer une page</span></a></h2><ul><li>Créer un controller ou une action dans un controller existant</li><li>Ajouter/modifier la ou les routes liées à votre action</li><li>Adapter le contenu de l&#39;action (s&#39;assurer que les noms sont cohérents)</li><li>Créer/modifier le template associé, s&#39;il y en a un.</li></ul><h2 id="commandes-composer" tabindex="-1"><a class="header-anchor" href="#commandes-composer"><span>Commandes composer</span></a></h2><ul><li><code>composer install</code> pour récupérer les dépendances définies dans le <code>.lock</code></li><li><code>composer update</code> pour mettre à jour les dépendances et le <code>.lock</code></li><li><code>composer require nomDuPaquet</code> pour installer une dépendance (suivre la doc de la dépendance)</li></ul><h2 id="de-buguer" tabindex="-1"><a class="header-anchor" href="#de-buguer"><span>Dé-buguer</span></a></h2><ul><li><code>dump</code> ou <code>dd</code> dans un fichier PHP</li><li><code>dump</code> dans un Twig</li><li><code>php bin/console</code> montre l&#39;intégralité des commandes dont dispose Symfony (dont plusieurs commencent par <code>debug:</code> ou <code>lint:</code>)</li></ul><h2 id="generer-des-entites-et-des-migrations" tabindex="-1"><a class="header-anchor" href="#generer-des-entites-et-des-migrations"><span>Générer des entités et des migrations</span></a></h2><ul><li>Pour générer/modifier une entité : <code>php bin/console make:entity</code></li><li>Répéter autant que nécessaire</li><li>Générer une migration <code>php bin/console make:migration</code></li><li>Appliquer les migrations <code>php bin/console doctrine:migrations:migrate -n</code></li><li>Votre BdD est à jour</li></ul><h2 id="doctrine" tabindex="-1"><a class="header-anchor" href="#doctrine"><span>Doctrine</span></a></h2><ul><li>Pour faire des requêtes <code>SELECT</code>, utiliser un repository (lié à une table/entité)</li><li>Pour les <code>UPDATE</code> / <code>DELETE</code>, utiliser l&#39;Entity Manager (<code>EntityManagerInterface</code>)</li></ul><h2 id="formulaires" tabindex="-1"><a class="header-anchor" href="#formulaires"><span>Formulaires</span></a></h2><ul><li>Souvent lié à une classe / entité</li><li>Un <code>FormType</code> pour gérer les différents champs, leurs types et leurs options</li><li>Des assertions directement dans la classe / entité pour la validation</li><li>Dans un controller, utiliser <code>$this-&gt;createForm()</code> pour générer un formulaire (objet de traitement), puis utiliser <code>-&gt;createView()</code> sur ce formulaire pour le transmettre à une vue Twig (objet <code>FormView</code>)</li><li>Afficher le formulaire et ses différentes lignes avec <code>form_start</code>, <code>form_end</code> et <code>form_row</code></li></ul><h2 id="bundles-utiles" tabindex="-1"><a class="header-anchor" href="#bundles-utiles"><span>Bundles utiles</span></a></h2><ul><li><a href="https://github.com/dustin10/VichUploaderBundle/blob/master/docs/index.md" target="_blank" rel="noopener noreferrer">VichUploader</a> pour utiliser des images liées à vos entités</li><li><a href="https://symfony.com/doc/current/bundles/EasyAdminBundle/index.html" target="_blank" rel="noopener noreferrer">EasyAdmin</a> pour générer un espace d&#39;administration pour vos entités</li><li><a href="https://symfony.com/doc/current/bundles/StofDoctrineExtensionsBundle/index.html" target="_blank" rel="noopener noreferrer">Doctrine extensions</a> pour ajouter des comportements à vos entités (Timestampable, Sluggable, etc.)</li><li><a href="https://github.com/KnpLabs/KnpPaginatorBundle" target="_blank" rel="noopener noreferrer">Knp Paginator</a> pour gérer la pagination de vos listes</li><li><a href="https://github.com/KnpLabs/KnpMenuBundle/" target="_blank" rel="noopener noreferrer">Knp Menu</a> pour gérer vos menus sous forme d&#39;objets <strong>propres</strong></li><li><a href="https://api-platform.com/docs/distribution/#using-symfony-and-composer" target="_blank" rel="noopener noreferrer">ApiPlatform</a> vous permet de créer une API rapidement dans votre Symfony, à partir de vos entités.</li></ul>',21))])}const h=s(c,[["render",m],["__file","80-cheat-sheet.html.vue"]]),b=JSON.parse('{"path":"/symfony/80-cheat-sheet.html","title":"Pense-bêtes","lang":"fr-FR","frontmatter":{"date":"2021-02-25T00:00:00.000Z"},"headers":[{"level":2,"title":"Démarrer un projet Symfony (de zéro)","slug":"demarrer-un-projet-symfony-de-zero","link":"#demarrer-un-projet-symfony-de-zero","children":[]},{"level":2,"title":"Récupérer un projet (clone)","slug":"recuperer-un-projet-clone","link":"#recuperer-un-projet-clone","children":[]},{"level":2,"title":"Travailler sur un projet","slug":"travailler-sur-un-projet","link":"#travailler-sur-un-projet","children":[]},{"level":2,"title":"Créer une page","slug":"creer-une-page","link":"#creer-une-page","children":[]},{"level":2,"title":"Commandes composer","slug":"commandes-composer","link":"#commandes-composer","children":[]},{"level":2,"title":"Dé-buguer","slug":"de-buguer","link":"#de-buguer","children":[]},{"level":2,"title":"Générer des entités et des migrations","slug":"generer-des-entites-et-des-migrations","link":"#generer-des-entites-et-des-migrations","children":[]},{"level":2,"title":"Doctrine","slug":"doctrine","link":"#doctrine","children":[]},{"level":2,"title":"Formulaires","slug":"formulaires","link":"#formulaires","children":[]},{"level":2,"title":"Bundles utiles","slug":"bundles-utiles","link":"#bundles-utiles","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"symfony/80-cheat-sheet.md"}');export{h as comp,b as data};