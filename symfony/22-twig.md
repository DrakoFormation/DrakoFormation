# Twig

<div style="position: relative; padding-bottom: 52.916666666666664%; height: 0;"><iframe src="https://www.loom.com/embed/03f9d867c736446caddf9c542a070c3d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Pour résumer

- Twig est un moteur de template, il permet d'écrire du HTML plus confortablement, avec de nombreux outils dans nos fichiers `.twig`
  - les tags `{% %}` pour des calculs (dont `{% extends 'nomDUneAutreVue.twig' %}`)
  - les moustaches `{{}}` pour afficher des éléments
  - les filtres `|unFiltre()`
  - les fonctions `uneFonction()`
  - des tests
  - les macros
- Pour utiliser Twig, il faut utiliser `$this->render('nomDuTemplate.twig', [])` dans un controller ou appeler le service de rendu de Twig

## Définition

[La documentation officielle de Twig](https://twig.symfony.com/doc/) (qui présente également séparément ce qui vient de Twig ou qui est présent uniquement pour Symfony)

Twig est un moteur de rendu (avec Symfony, vous pouvez tout aussi bien continuer à utiliser PHP, comme nous l'avons vu jusqu'à maintenant) dont le but est de vous simplifier la vie dans la gestion de votre HTML.

## Syntaxe

Twig a sa propre syntaxe, basée sur 5 éléments :
- les tags `{% unExempleDeTag %}{% endunExempleDeTag %}` qui vont vous permettre de faire des calculs divers
- les moustaches (appellation non-officielle) `{{}}` qui sont là pour afficher du contenu (le contenu d'une variable, le retour d'une fonction ou d'un filtre, etc.)
- les filtres `uneValeurOuVariable | unFiltre(unParamètreDuFiltre)` sont des fonctions dont le premier paramètre se trouve avant le `|` et les suivants dans les parenthèses
- les fonctions `uneFonction(unParamètreDeLaFonction, unSecondParamètre)` plus classiques
- les tests `if uneValeur is unTest(unParamètreDuTest)` vont servir dans des conditions (ainsi que les divers opérateurs, que je vous invite à aller voir par vous-même dans la documentation)

Voyons quelques exemples avec la page d'accueil d'un blog.

Un premier fichier `templates/base.html.twig` :

```Twig
{# Ceci est un commentaire dans Twig #}
<!DOCTYPE html>
<html dir="ltr" lang="fr">
    <body>
        {# Ici, nous définissons un ensemble de blocs, qui seront modifiables dans les templates qui héritent de templates/base.html.twig #}
        {% block bodyHeader %}{% endblock %}
        {% block body %}{% endblock body %}
        {% block bodyFooter %}{% endblock %}
        
        {% block javascripts %}{% endblock %}
    </body>
</html>
```

Un second fichier `templates/blog/layout.html.twig` :

```Twig
{# On étend base.html.twig, on en récupère donc tout le contenu, mais nous ne pouvons plus écrire des choses en dehors de blocks #}
{% extends 'base.html.twig' %}

{% block body %}

    {# Ici, nous partons du principe que nous avons une variable articles (un tableau contenant des objets Article, par exemple) #}
    <h1>
        {# on utilise le filtre |length qui nous renvoie la quantité d'élements dans le tableau #}
        {{ articles|length }}
        articles sur ce blog
    </h1>
    
    {# la syntaxe du for est encore différente du PHP, mais permet aussi beaucoup plus de souplesse (voir la doc pour les différentes utilisations possibles) #}
    {% for article in articles %}
        {# on utilise une condition et un test ici, pour vérifier que notre article n'est pas vide #}
        {% if article is not empty %}
        
            {# On inclue un autre template en lui transmettant des paramètres #}
            {# Ici, on lui dit qu'il n'aura que les paramètres globaux (app) et la variable article #}
            {% include 'blog/_article.html.twig' with { article: article } only %}

        {# Notez ici que les tags ont souvent un début et une fin, mais que l'on utilise plus d'accolades #}
        {% endif %} 
    {% endfor %}
    
{# Il n'est pas obligatoire d'indiquer le nom du block qu'on ferme, c'est simplement plus pratique pour s'y retrouver si le block contient beaucoup de choses #}
{% endblock body %}
```

Si, pour une raison ou une autre, vous voulez conserver le contenu du bloc parent, vous pouvez appeler la fonction `parent()`.

```twig
{# On étend base.html.twig, on en récupère donc tout le contenu, mais nous ne pouvons plus écrire des choses en dehors de blocks #}
{% extends 'base.html.twig' %}

{% block body %}
  {{ parent() }}
  
  Je rajoute du contenu après le contenu de mon parent
{% endblock body %}
```

## Spécifiques à Symfony

Il y a quelques filtres et fonctions utiles à connaître pour travailler avec Twig dans Symfony : 

`asset()` qui permet de récupérer un fichier (css, image, javascript, etc.) dans le dossier `public` ou l'un de ses sous-dossiers
```twig
{# Ici, on charge l'image qui se trouve dans le dossier public/chemin/vers/une/image.jpg. L'avantage est que nous n'avons plus à gérer le dossier dans lequel nous nous trouvons, Symfony le fait pour nous #}
{{ asset('/chemin/vers/une/image.jpg') }}
```

`path()` qui permet d'avoir l'URi vers une de vos routes
```twig
{{ path('blog_show', { slug: article.slug }) }}
```

`url()` qui permet d'avoir une url (complète, avec le http(s), le nom de domaine, etc.)
```twig
{# path prend en premier paramètre le nom d'une route, et en second un "objet" avec les paramètres de la route #}
{{ url('blog_show', { slug: article.slug }) }}
```

`trans` (filtre ou tag, les deux existent) qui va nous permettre d'appeler nos traductions
```twig
{# le filtre trans s'applique sur une chaine de caractère (qui peut venir d'une variable), et prend 2 paramètres #}
{# Le premier est une liste de paramètres nécessaires à la traduction (que nous verrons dans une partie sur les traductions) #}
{# Le second est le nom du fichier où se trouve la traduction (ici, blog.fr.yaml si l'on est en français) #}
{{ "Lire l'article"|trans({}, 'blog') }}
```

Poursuivons notre exemple avec le fichier `blog/_article.html.twig` :

```Twig
<article>
    <header>
        <h2>
            {# Pour récupérer une propriété d'un objet, on utilise généralement cette notation : nomDeLaVariable.nomDeSaPropriete #}
            {# Dans les faits, c'est la méthode getTitle() de notre objet Article qui va être appelée, il faut donc qu'elle soit définie. #}
            {{ article.title }}{# on aurait aussi pu écrire article.getTitle() pour bien montrer l'appel au getter #}
        </h2>
        {# Ici, on charge l'image qui se trouve dans le dossier public/chemin/vers/une/image.jpg. L'avantage est que nous n'avons plus à gérer le dossier dans lequel nous nous trouvons, Symfony le fait pour nous #}
        <img src="{{ asset('/chemin/vers/une/image.jpg') }}" alt="">
    </header>
    {# path nous permet d'avoir le lien (relatif) vers notre article. On utilise généralement le lien relatif car il est plus court à calculer et éviter beaucoup de calculs au navigateur. #}
    {# path prend en premier paramètre le nom d'une route, et en second un "objet" avec les paramètres de la route #}
    <a href="{{ path('blog_show', { slug: article.slug }) }}">
        {# le filtre trans s'applique sur une chaine de caractère (qui peut venir d'une variable), et prend 2 paramètres #}
        {# Le premier est une liste de paramètres nécessaires à la traduction (que nous verrons dans une partie sur les traductions) #}
        {# Le second est le nom du fichier où se trouve la traduction (ici, blog.fr.yaml si l'on est en français) #}
        {{ "Lire l'article"|trans({}, 'blog') }}
    </a>
    {# url prend les mêmes paramètres que path, mais retourne une url absolue #}
    Lien partageable vers l'article : {{ url('blog_show', { slug: article.slug }) }}
</article>
```

## Transmettre des paramètres

Depuis un controller (qui va *rendre* la vue, en utilisant la méthode `render()` disponible dans le `AbstractController` de Symfony), vous pouvez transmettre un tableau de paramètres à la vue. L'index dans ce tableau correspondra au nom de la variable dans le fichier Twig, la valeur à sa valeur.

```php
public function index(int $page = 1): Response 
{
    $listeDesArticles = [];
    return $this->render('blog/index.html.twig', [
        'page'     => $page,
        // Ici, la vue Twig aura un paramètre articles,
        // indépendant du nom de la variable dans le controller
        'articles' => $listeDesArticles, 
    ]);
}
```

## Factoriser le code avec des macros

[Documentation sur les macros](https://twig.symfony.com/doc/3.x/tags/macro.html)

Les macros sont des fonctions, écrites en Twig, permettant de simplifier l'affichage de fragments de code.

L'exemple suivant est directement récupéré de la documentation.

Une déclaration de macro (fichier `forms.html.twig` par exemple) :

```twig
{# On déclare la macro en tant que tag, on lui donne un nom et des paramètres #}
{% macro input(name, value, type = "text", size = 20) %}
    {# Le contenu va être un twig classique, utilisant les paramètres de la macro uniquement #}
    <input type="{{ type }}" name="{{ name }}" value="{{ value|e }}" size="{{ size }}"/>
{% endmacro %}
```

Pour appeler une macro, il faut inclure son fichier dans le fichier où l'on souhaite l'appeler (un exemple dans `index.html.twig`, dans le même dossier) :

```twig
{# On importe toutes les macros du fichier et on les met dans une variable forms #}
{% import "forms.html" as forms %}

{# ... #}

{# On appelle notre macro, depuis la variable forms (la macro fonctionne ici comme une méthode de forms) #}
{% forms.input('unNom', 'uneValeur') %}
```

Il y a de nombreuses manières d'appeler une macro, je vous conseille de vous référer à [la documentation sur les macros](https://twig.symfony.com/doc/3.x/tags/macro.html) pour plus d'informations.

### Personnaliser les pages d'erreur

[La documentation officielle sur le sujet](https://symfony.com/doc/current/controller/error_pages.html)

Pendant le développement (mode `dev` de Symfony), les pages d'erreur sont gérées par Symfony et vous affichent les détails de l'erreur. Bien pratique pour le développement, mais loin de la réalité en production.

Vous pouvez tester le mode `prod` en modifiant la variable `APP_ENV` de votre `.env`. Vous verrez ainsi le site comme vous le verriez sur un serveur, y compris les erreurs.

Il est plus simple de le tester en mode `dev` (changer de mode peut être pénible, surtout pour des questions de cache), et Symfony a tout prévu : 

Créez un fichier `config/routes/dev/framework.yaml` avec le contenu suivant :

```yaml
_errors:
    resource: '@FrameworkBundle/Resources/config/routing/errors.xml'
    prefix:   /_error
```

Pour tester, aller sur `_error/{statusCode}` où `{statusCode}` est le numéro d'erreur de vous voulez tester (404, 500, etc.).

Pour personnaliser les vues, nous pouvons créer des fichiers comme ci-dessous :

```
templates/
└─ bundles/
   └─ TwigBundle/
      └─ Exception/
         ├─ error404.html.twig
         ├─ error403.html.twig
         └─ error.html.twig      # Toutes les autres erreurs HTML (dont les 500)
```

Notez que ce rangement nous permet de [surcharger/modifier les templates de n'importe quel bundle](https://symfony.com/doc/current/bundles/override.html#override-templates).

### Dé-buguer

Dans les vues Twig, vous disposez d'une fonction `dump()` qui vous permet d'afficher le contenu d'une variable et d'en voir le détail (un peu comme un `var_dump`, mais plus complet et mieux mis en forme). Utilisée sans paramètre, la fonction `dump()` affiche toutes es variables disponibles dans la vue.

Il existe également une commande pour vérifier la validité de vos vues Twig

## Exercice

Maintenant, il est temps de passer à l'affichage ! Même si nous n'allons pas utiliser des données réelles, nous allons préparer l'affichage général de nos vues.

Toutes ces vues vont étendre `base.html.twig`.

- Modifier `base.html.twig` pour :
  - inclure Bootstrap (css et js)
  - Créer une navbar avec des liens vers
    - La page d'accueil
    - La liste des articles
- Pour la page de liste des articles :
  - Créer un fichier pour créer un faux extrait d'article avec :
    - Un titre
    - Un nom d'utilisateur
    - Un texte (Lorem Ipsum par exemple)
    - Une date (date du jour, au format français)
    - Un lien vers l'article (avec un id arbitraire, comme `12`)
  - Inclure ce fichier en 5 exemplaires
- Pour la page d'un article :
  - Créer un contenu, comme précédemment, mais avec un texte plus long et sans le lien. Est-il nécessaire de créer un nouveau fichier pour ça ? Peut-on utiliser le fichier créé auparavant ?
- Pour la page d'accueil :
  - Ajouter des liens vers des articles, dont les identifiants vont de 32 à 64

Nous allons ignorer les pages de création et modification des articles pour le moment.