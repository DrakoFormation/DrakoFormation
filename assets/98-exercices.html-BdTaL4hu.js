import{aj as n,ak as i,al as s,aq as a}from"./app-BkblVdII.js";const l={};function t(r,e){return a(),i("div",null,e[0]||(e[0]=[s(`<h1 id="exercices" tabindex="-1"><a class="header-anchor" href="#exercices"><span>Exercices</span></a></h1><h2 id="manipuler-les-bases-de-git-et-github" tabindex="-1"><a class="header-anchor" href="#manipuler-les-bases-de-git-et-github"><span>Manipuler les bases de Git et GitHub</span></a></h2><p>Dans un premier temps, voyons pour manipuler Git sur un projet individuel, pour personnaliser votre profil GitHub et en faire un CV.</p><ul><li><p>Créer un dépôt sur GitHub, portant le même nom que votre compte (mon pseudo GitHub est <code>Dreeckan</code>, je crée un dépôt <code>Dreeckan</code>).</p></li><li><p>Récupérer ce projet sur votre machine</p></li><li><p>Ouvrir le projet dans VS Code</p></li><li><p>Créer/modifier le fichier <code>README.md</code></p><ul><li>Ajouter/modifier un titre de niveau 1 cohérent (par exemple, votre nom)</li><li>Ajouter un autre titre, de niveau 2 (par exemple, &quot;Mes compétences&quot;)</li><li>Ajouter d&#39;autres titres pour définir un squelette/plan pour votre profil</li></ul></li><li><p>Créer un commit avec ces nouvelles informations</p></li><li><p>Ajouter du contenu dans les différentes sections créées (par exemple, une liste de vos compétences). Créer au moins :</p><ul><li>une liste à puce</li><li>un paragraphe de texte</li><li>une image et/ou un lien</li></ul></li><li><p>Créer un commit avec ces nouvelles informations</p></li><li><p>Pousser ces modifications sur GitHub</p></li><li><p>Vérifier que toutes vos modifications sont présentes sur GitHub et visible sur votre profil publique (<a href="https://github.com/Dreeckan" target="_blank" rel="noopener noreferrer">https://github.com/Dreeckan</a> dans mon cas)</p></li></ul><h2 id="bonnes-pratiques-git" tabindex="-1"><a class="header-anchor" href="#bonnes-pratiques-git"><span>Bonnes pratiques Git</span></a></h2><p>Nous allons maintenant créer un nouveau projet en solitaire, pour nous habituer aux bonnes pratiques de Git et GitHub.</p><h3 id="demarrage-du-projet" tabindex="-1"><a class="header-anchor" href="#demarrage-du-projet"><span>Démarrage du projet</span></a></h3><ul><li><p>Créer un dépôt privé sur GitHub</p></li><li><p>Récupérer ce projet sur votre machine</p></li><li><p>Ouvrir le projet dans VS Code</p></li><li><p>Créer un fichier <code>README.md</code></p></li><li><p>Lui donner un titre principal (comme <code>Une documentation intéressante</code>)</p></li><li><p>Créer un commit</p></li><li><p>Pousser ces modifications sur GitHub</p></li><li><p>Créer deux nouveaux fichiers <code>index.html</code> et <code>index.js</code></p></li><li><p>Ajouter un titre secondaire (comme <code>Une section passionnante</code>)</p></li><li><p>Modifier le commit précédent pour intégrer ces modifications</p></li><li><p>Pousser ces modifications sur GitHub (s&#39;attendre à un souci, nous avons modifié l&#39;historique 😉 )</p></li></ul><h3 id="de-la-branche-a-la-pr" tabindex="-1"><a class="header-anchor" href="#de-la-branche-a-la-pr"><span>De la branche à la <abbr title="Pull Request">PR</abbr></span></a></h3><ul><li>Créer une nouvelle branche <code>2-la-suite</code></li><li>Ajouter du contenu dans <code>index.js</code> :</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Ajouter du contenu dans <code>index.html</code> :</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Un texte de test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Pousser cette branche et créer une Pull Request</li></ul><h3 id="pr-et-conflits" tabindex="-1"><a class="header-anchor" href="#pr-et-conflits"><span>PR et conflits</span></a></h3><ul><li>Revenir sur la branche principale (<code>main</code>)</li><li>Créer une nouvelle branche <code>3-gestion-de-conflit</code></li><li>Ajouter du contenu dans <code>index.js</code> :</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Conflit en approche&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Ajouter du contenu dans <code>index.html</code> :</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Un texte de test, qui va poser problème, non ?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Pousser cette branche et créer une Pull Request</li><li>Fusionner une première Pull Request</li><li>Constater le conflit empêchant de fusionner la seconde Pull Request</li><li>Résoudre le conflit sur votre machine</li><li>Pousser à nouveau la branche</li><li>Fusionner la Pull Request correspondante</li></ul><h2 id="travailler-en-equipe" tabindex="-1"><a class="header-anchor" href="#travailler-en-equipe"><span>Travailler en équipe</span></a></h2><p>Maintenant que nous avons travaillé en solo, créons un projet à plusieurs et gérons des conflits.</p><ul><li><p>Former une équipe (au moins 2 personnes)</p></li><li><p>Créer un dépôt <strong>publique</strong> sur GitHub (une seule personne le crée) et inviter les autres en tant que collaborateurs sur le projet.</p></li><li><p>Configurer le projet pour :</p><ul><li>protéger la branche <code>main</code> (on ne doit pas pouvoir faire de <code>push --force</code> sur cette branche)</li><li>obliger les <code>Pull Requests</code> à être relues par tous les membres du projet - 1 (si vous êtes 4, il doit y avoir 3 approbations)</li></ul></li><li><p>Un membre de l&#39;équipe va créer le projet en local (sur sa machine), y créer un fichier <code>README.md</code>, un premier commit et le pousser.</p></li><li><p>Les autres pourront alors récupérer le projet en le clonant.</p></li><li><p>Chacun va créer une branche (portant votre nom, par exemple). Par convention, on écrit les noms de branche en snake-case (tout en minuscule, en séparant les mots par des tirets <code>-</code>).</p></li><li><p>Dans votre branche :</p><ul><li>Créer un fichier portant votre nom (sans espace dans le nom), au format MarkDown</li><li>Y ajouter un peu de contenu (titre, un peu de texte, une image... Comme vous le souhaitez 😉 )</li><li>Ajouter un lien <strong>relatif</strong> vers ce fichier dans le fichier <code>README.md</code></li><li>Créer un dossier <code>images</code> dans le projet, y ajouter une image et l&#39;appeler dans le fichier portant votre nom.</li><li>Créer un ou des commits, puis pousser les modifications</li><li>Créer une <code>Pull Request</code> sur GitHub</li><li>La faire relire par vos collègues</li></ul></li><li><p>Une fois une <code>Pull Request</code> validée, elle peut être fusionnée</p><ul><li>Si vous avez des conflits, les résoudre (conseil : faites-le en groupe 😉 )</li></ul></li></ul>`,23)]))}const u=n(l,[["render",t],["__file","98-exercices.html.vue"]]),p=JSON.parse('{"path":"/git/98-exercices.html","title":"Exercices","lang":"fr-FR","frontmatter":{"date":"2022-11-03T00:00:00.000Z"},"headers":[{"level":2,"title":"Manipuler les bases de Git et GitHub","slug":"manipuler-les-bases-de-git-et-github","link":"#manipuler-les-bases-de-git-et-github","children":[]},{"level":2,"title":"Bonnes pratiques Git","slug":"bonnes-pratiques-git","link":"#bonnes-pratiques-git","children":[{"level":3,"title":"Démarrage du projet","slug":"demarrage-du-projet","link":"#demarrage-du-projet","children":[]},{"level":3,"title":"De la branche à la PR","slug":"de-la-branche-a-la-pr","link":"#de-la-branche-a-la-pr","children":[]},{"level":3,"title":"PR et conflits","slug":"pr-et-conflits","link":"#pr-et-conflits","children":[]}]},{"level":2,"title":"Travailler en équipe","slug":"travailler-en-equipe","link":"#travailler-en-equipe","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"git/98-exercices.md"}');export{u as comp,p as data};