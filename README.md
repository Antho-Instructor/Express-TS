<h1 align="center">Bienvenue sur express-ts 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/Gorski_anthony" target="_blank">
    <img alt="Twitter: Gorski_anthony" src="https://img.shields.io/twitter/follow/Gorski_anthony.svg?style=social" />
  </a>
</p>

> Un projet pour démarrer un serveur express en TypeScript

## 🚀 Installation

## Les dépendances

Nous avons besoin de typescript bien sûr pour la compilation de notre code.

```sh
npm install typescript
```

Nous avons l'habitude de faire un `npm install express` et de l'utiliser en vanilla, mais en TS, nous avons besoin de plus de choses. Les types par exemple.

```sh
npm install express @types/express
```

Nous avons aussi besoin, bas de `ts-node` pour lancer notre serveur.

```sh
npm install ts-node
```

## ⚙️ Configuration de TS

```sh
npx tsc --init
```

Nous allons ajouter une ligne dans le fichier `tsconfig.json` pour dire à TS de compiler en mode module.

```json
{
	"outDir": "./dist",
	"rootDir": "./src"
}
```

## 📝 Scripts

```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```

## ↗️ Utilisation

```sh
npm start
```

## Auteur

👤 **Anthony Gorski**

-   𝕏 - (Twitter): [@Gorski_Anthony](https://twitter.com/Gorski_Anthony)
-   GitHub: [@GorskiAnthony](https://github.com/GorskiAnthony)

## Affichez votre soutien

## Donnez un ⭐️ si ce projet vous a aidé !

### 🗃️ Version

-   **v1.0.0** - First commit

---

### 👋 Qui suis-je ?

Je suis **Anthony Gorski**, développeur web et formateur à la [Wild Code School](https://www.wildcodeschool.com/fr-FR).
