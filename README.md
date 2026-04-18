# 🌍 World Dashboard

Un **dashboard React moderne** qui affiche des informations sur les pays du monde à partir d’une API publique.  
Le projet met l’accent sur la **compréhension de React**, une **architecture propre**, et un **design professionnel**.

👉 Démo en ligne :  
 https://wesslove.github.io/world-dashboard/

---

## ✨ Fonctionnalités

- 📊 Statistiques globales (nombre de pays, régions, population)
- 🗺️ Affichage des pays sous forme de **cartes visuelles**
- 🏷️ Badge de région pour chaque pays
- 🌙 **Dark mode** avec persistance (`localStorage`)
- 📱 Design **responsive**
- ⚡ Performances optimisées (state dérivé, hooks personnalisés)
- 🧩 Architecture claire (pages / components / hooks)

---

## 🛠️ Stack technique

- **React** (hooks : `useState`, `useEffect`)
- **Vite** (build rapide et moderne)
- **JavaScript (ES6+)**
- **CSS pur** (pas de framework UI)
- **API REST Countries**
- **GitHub Pages** (déploiement)

---

## 📁 Structure du projet

```txt
src/
├─ components/
│  ├─ CountryCard.jsx
│  ├─ StatCard.jsx
│
├─ hooks/
│  └─ useCountries.js
│
├─ pages/
│  └─ Dashboard.jsx
│
├─ styles/
│  └─ index.css
│
├─ App.jsx
├─ main.jsx




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
