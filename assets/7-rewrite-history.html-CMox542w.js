import{aj as r,ak as l,am as e,ar as o,al as t,aq as s}from"./app-BkblVdII.js";const d={};function a(m,i){return s(),l("div",null,i[0]||(i[0]=[e("h1",{id:"reecrire-l-historique",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reecrire-l-historique"},[e("span",null,"Réécrire l'historique")])],-1),e("h2",{id:"commit-amend-modifier-le-dernier-commit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commit-amend-modifier-le-dernier-commit"},[e("span",null,"Commit --amend - Modifier le dernier commit")])],-1),e("p",null,[o("La commande "),e("code",null,"git commit --amend"),o(" permet de modifier le dernier commit.")],-1),e("p",null,"En vidéo :",-1),e("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/95e059f894e5489f8adf01f9963f2211",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),t('<ul><li><em>(optionnel)</em> Vous pouvez ajouter des modifications au commit précédent en les ajoutant à l&#39;index (<code>git add .</code> ou <code>git add nomDuFichier</code>)</li><li><code>git commit --amend</code> vous ouvre l&#39;éditeur de texte pour modifier le message du dernier commit (le fermer pour valider)</li><li>Votre dernier commit a été modifié (et n&#39;a plus le même identifiant)</li></ul><p>⚠️ Si vous aviez déjà envoyé le commit sur le dépôt distant, il faudra utiliser l&#39;option <code>--force</code> lors du <code>push</code>. Veillez donc à ne pas perdre des commits sur le distant !</p><h2 id="rebase-modifier-tout-l-historique" tabindex="-1"><a class="header-anchor" href="#rebase-modifier-tout-l-historique"><span>Rebase - Modifier tout l&#39;historique</span></a></h2><p>La commande <code>git rebase</code> permet de modifier l&#39;historique de la branche en cours. Non seulement d&#39;en changer la &quot;base&quot; (son commit de départ), mais aussi de réécrire les commits eux-mêmes.</p><p>En vidéo :</p>',5),e("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/a26a0e8551fd4e56a6efd185f07cb79a",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),t("<p>L&#39;utilisation la plus complète est <code>git rebase -i main</code> (remplacer <code>main</code> par une autre branche si besoin), qui vous ouvre un éditeur pour définir ce que vous souhaitez faire pour chaque commit présent entre la tête de lecture et le dernier commit de la branche <code>main</code>.</p><p>Vous pouvez, <strong>entre autre</strong> :</p><ul><li>utiliser le commit en utilisant <code>p</code> ou <code>pick</code> sur la ligne de votre commit (il sera utilisé sans modification)</li><li>supprimer le commit en utilisant <code>d</code> ou <code>drop</code> sur la ligne de votre commit (il sera supprimé, ainsi que les modifications qu&#39;il contient). Notez que c&#39;est équivalent à supprimer la ligne du commit</li><li>modifier le message de commit en utilisant <code>r</code> ou <code>reword</code> sur la ligne de votre commit (vous ouvrira un éditeur de texte pour modifier le message)</li><li>fusionner un commit avec le précédent en utilisant <code>s</code> ou <code>squash</code> sur la ligne de votre commit (un seul des deux commits sera conservé, mais <strong>toutes</strong> les modifications seront conservées)</li></ul><p>Une fois que vous avez choisi quoi faire de chaque commit, les commandes indiquées et les commits seront appliqués l&#39;un après l&#39;autre.</p><p>⚠️ Si vous aviez déjà envoyé les commits sur le dépôt distant, il faudra utiliser l&#39;option <code>--force</code> lors du <code>push</code>. Veillez donc à ne pas perdre des commits sur le distant !</p>",5)]))}const c=r(d,[["render",a],["__file","7-rewrite-history.html.vue"]]),u=JSON.parse(`{"path":"/git/7-rewrite-history.html","title":"Réécrire l'historique","lang":"fr-FR","frontmatter":{"date":"2021-10-08T00:00:00.000Z"},"headers":[{"level":2,"title":"Commit --amend - Modifier le dernier commit","slug":"commit-amend-modifier-le-dernier-commit","link":"#commit-amend-modifier-le-dernier-commit","children":[]},{"level":2,"title":"Rebase - Modifier tout l'historique","slug":"rebase-modifier-tout-l-historique","link":"#rebase-modifier-tout-l-historique","children":[]}],"git":{"updatedTime":1736283917000},"filePathRelative":"git/7-rewrite-history.md"}`);export{c as comp,u as data};