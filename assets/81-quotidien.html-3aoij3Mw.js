import{aj as l,ak as u,am as r,an as s,ao as n,al as d,ap as t,aq as c,ar as o}from"./app-BkblVdII.js";const p={},m={class:"table-of-contents"};function v(f,e){const a=t("router-link"),i=t("Mermaid");return c(),u("div",null,[e[6]||(e[6]=r("h1",{id:"symfony-au-quotidien",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#symfony-au-quotidien"},[r("span",null,"Symfony au quotidien")])],-1)),r("nav",m,[r("ul",null,[r("li",null,[s(a,{to:"#que-faire-devant-un-bug"},{default:n(()=>e[0]||(e[0]=[o("Que faire devant un bug ?")])),_:1})]),r("li",null,[s(a,{to:"#creer-un-nouveau-projet"},{default:n(()=>e[1]||(e[1]=[o("Créer un nouveau projet")])),_:1})]),r("li",null,[s(a,{to:"#git-et-les-projets-symfony"},{default:n(()=>e[2]||(e[2]=[o("Git et les projets Symfony")])),_:1})]),r("li",null,[s(a,{to:"#demarrer-le-serveur-symfony-au-demarrage"},{default:n(()=>e[3]||(e[3]=[o("Démarrer le serveur Symfony au démarrage")])),_:1}),r("ul",null,[r("li",null,[s(a,{to:"#en-cas-de-soucis"},{default:n(()=>e[4]||(e[4]=[o("En cas de soucis")])),_:1})]),r("li",null,[s(a,{to:"#processus-de-travail-en-groupe"},{default:n(()=>e[5]||(e[5]=[o("Processus de travail en groupe")])),_:1})])])])])]),e[7]||(e[7]=r("h2",{id:"que-faire-devant-un-bug",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#que-faire-devant-un-bug"},[r("span",null,"Que faire devant un bug ?")])],-1)),s(i,{id:"mermaid-9",code:"eJx9ks1ugkAUhfc+xQ0b26SWfUMwioo1/bGtO+JiCleZdmDowNgm2nfpsj4HL9bLgJHGRDbAOTNnvnsyKyE/w5ipAhajDtAzCO4xz9kaIeqiUqjVEno9F4bb53KfS12AaHTof5sdw8rfPch0B15geTIt8KtAuAFHC9cR3H3SKASCos0Ifccm6SBDtVxJsinunyMwh0imabmnj1Nro4+yTedYS8PiGdZZMJfElwlNGQhhg3QFzquy3RQhYznENA4v6NzyhxYlLI1QGZ/+fSnXAm0vZoU/X9TRMxM92lqnPVh1ESNTxKPmO7g9ClBXMw6sl4KF77BQLGy3c4cfVRHEmdBIKx7GHNXpyCD4mshruZl2bPInZ5AmNUGLqVEMkx9Yg7dqX9TVKUTRxaUd6SSjFxbh9aEMwSBTmPDyVzUUxpEaNAHlmm8Y9dsg+SZ+egZp2gZoKy3I+krVQjDh6bLzBwUI1uw="}),e[8]||(e[8]=d(`<h2 id="creer-un-nouveau-projet" tabindex="-1"><a class="header-anchor" href="#creer-un-nouveau-projet"><span>Créer un nouveau projet</span></a></h2><p>Dans un terminal (Powershell par exemple, sous Windows), aller dans le dossier où vous voulez créer votre projet et lancer la commande :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">  symfony new <span class="token parameter variable">--webapp</span> my_project</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Remplacer <code>my_project</code> par le nom de votre projet. Vous aurez alors un dossier <code>my_project</code>, que vous pouvez ouvrir dans votre IDE.</p><h2 id="git-et-les-projets-symfony" tabindex="-1"><a class="header-anchor" href="#git-et-les-projets-symfony"><span>Git et les projets Symfony</span></a></h2><p>Par défaut, le programme en ligne de commande de Symfony crée un projet avec un repository (local uniquement) Git. Vous pouvez donc le lier à un projet sur Github, Gitlab, Bitbucket ou autre.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin urlDeVotreRepository</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--all</span> origin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Noter également la présence d&#39;un fichier <code>.gitignore</code> à la racine du projet. Il pourra servir si vous voulez éviter de versionner certains fichiers. Si vous utilisez PHPStorm, je vous recommande de <strong>toujours</strong> ajouter le dossier <code>.idea</code> à votre fichier <code>.gitignore</code> (c&#39;est un dossier de PHPStorm qui retient vos recherches, certains éléments de configuration locale, etc.).</p><h2 id="demarrer-le-serveur-symfony-au-demarrage" tabindex="-1"><a class="header-anchor" href="#demarrer-le-serveur-symfony-au-demarrage"><span>Démarrer le serveur Symfony au démarrage</span></a></h2><p>Après avoir ouvert un projet Symfony dans votre IDE, faites quelques étapes simples et vous êtes prêts à travailler.</p><ul><li>Ouvrir un terminal (Sur PHPStorm : cliquer sur <code>terminal</code> en bas de la fenêtre, sur VSCode, dans le menu du haut, cliquer sur <code>Terminal</code> &gt; <code>New Terminal</code> ou &quot;tirer&quot; le terminal depuis le bas de l&#39;écran)</li><li>Lancer la commande <code>symfony serve</code></li></ul><p>Vous pouvez la laisser tourner en tâche de fond (et y revenir de temps en temps si vous avez des erreurs) et pour utiliser la ligne de commande, vous pouvez ouvrir un nouveau terminal (avec les deux IDE, il y a un bouton <code>+</code>). Et vous pouvez utiliser votre site à l&#39;adresse indiquée par le serveur (en général <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8000</a> ou <a href="https://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">https://127.0.0.1:8000</a>).</p><p>Pour utiliser un nom de domaine, ajouter dans le fichier <code>/etc/hosts</code> (Linux et Mac) ou <code>C:\\windows\\system32\\drivers\\etc\\hosts</code> sous Windows :</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">127.0.0.1       www.test.test</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>et votre site sera accessible sur <code>www.test.test:8000</code></p><h3 id="en-cas-de-soucis" tabindex="-1"><a class="header-anchor" href="#en-cas-de-soucis"><span>En cas de soucis</span></a></h3><p>Si votre site local n&#39;est pas accessible (ni sur <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8000</a> ou <a href="https://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">https://127.0.0.1:8000</a>), vérifiez :</p><ul><li>que vous avez lancé votre serveur dans le bon dossier (la racine de votre projet Symfony)</li><li>qu&#39;il n&#39;y a pas (trop) d&#39;erreurs lors du lancement de la commande <code>symfony serve</code></li><li>l&#39;url sur laquelle le serveur doit répondre (ce serveur permet également d&#39;avoir plusieurs serveurs en parallèle, chacun aura son propre port)</li></ul><p>Si vous avez vérifié tout ça, essayer de redémarrer le serveur :</p><ul><li><code>symfony server:stop</code> pour l&#39;arrêter</li><li><code>symfony serve</code> pour le relancer</li></ul><h3 id="processus-de-travail-en-groupe" tabindex="-1"><a class="header-anchor" href="#processus-de-travail-en-groupe"><span>Processus de travail en groupe</span></a></h3><p>Au quotidien, je travaille sur des tickets, afin de savoir les tâches à effectuer.</p><p>Quand je commence à travailler sur un nouveau ticket,</p><ul><li>Je marque le ticket comme &quot;en cours&quot;</li><li>Je crée une branche contenant le numéro et le but du ticket (ex : <code>42-connexion-utilisateur</code>)</li></ul><p>Lorsque je crée des commits, j&#39;inclus le numéro de ticket dans le message de commit (ex : <code>42 - Création de l&#39;entité User</code>)</p><p>Je push quand je le souhaite, la fonctionnalité terminée ou non.</p><p>Une fois la fonctionnalité terminée, je crée une <abbr title="Pull Request">PR</abbr>, que je m&#39;assigne, et je demande à mes collègues de la relire (je peux les ajouter en tant que reviewers).</p><p>Si la branche principale a été modifiée entre temps ou si des conflits sont indiqués par GitHub, je mets à jour ma branche :</p><ul><li>Je mets à jour la branche principale <code>git checkout main</code> et <code>git pull</code></li><li>Je retourne sur ma branche <code>git checkout -</code></li><li>Je rebase ma branche sur la branche principale <code>git rebase main</code></li></ul><p>Si des conflits apparaissent pendant le rebase :</p><ul><li>Je les vois avec <code>git status</code>, ce sont les fichiers en rouge <code>modifié des deux côtés</code>/<code>both modified</code></li><li>Je les corrige dans mon <abbr title="Integrated Development Environment">IDE</abbr></li><li>Je signale à git que les conflits sont corrigés <code>git add nomDuFichier</code></li><li>Je continue le rebase (je passe au commit suivant) <code>git rebase --continue</code></li></ul><p>Une fois le rebase fait, je push le nouvel historique <code>git push --force</code></p><p>⚠️ Vérifiez bien que vous n&#39;avez rien cassé <strong>avant</strong> de push en force.</p><p>J&#39;attends que mes collègues aient relu et validé ma <abbr title="Pull Request">PR</abbr>. C&#39;est en général le moment pour moi de relire les <abbr title="Pull Request">PR</abbr> de mes collègues ou commencer un nouveau ticket.</p><p>⚠️ Quand vous souhaitez fusionner des branches, n&#39;hésitez pas à le faire en groupe, pour gérer les conflits ensemble.</p>`,35))])}const g=l(p,[["render",v],["__file","81-quotidien.html.vue"]]),b=JSON.parse('{"path":"/symfony/81-quotidien.html","title":"Symfony au quotidien","lang":"fr-FR","frontmatter":{"date":"2021-02-22T00:00:00.000Z"},"headers":[{"level":2,"title":"Que faire devant un bug ?","slug":"que-faire-devant-un-bug","link":"#que-faire-devant-un-bug","children":[]},{"level":2,"title":"Créer un nouveau projet","slug":"creer-un-nouveau-projet","link":"#creer-un-nouveau-projet","children":[]},{"level":2,"title":"Git et les projets Symfony","slug":"git-et-les-projets-symfony","link":"#git-et-les-projets-symfony","children":[]},{"level":2,"title":"Démarrer le serveur Symfony au démarrage","slug":"demarrer-le-serveur-symfony-au-demarrage","link":"#demarrer-le-serveur-symfony-au-demarrage","children":[{"level":3,"title":"En cas de soucis","slug":"en-cas-de-soucis","link":"#en-cas-de-soucis","children":[]},{"level":3,"title":"Processus de travail en groupe","slug":"processus-de-travail-en-groupe","link":"#processus-de-travail-en-groupe","children":[]}]}],"git":{"updatedTime":1736283917000},"filePathRelative":"symfony/81-quotidien.md"}');export{g as comp,b as data};