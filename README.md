# ParcelJS with React and Tailwind Boilerplate

## Features

- Autoprefixer
- Babel
- SCSS compilation
  - Includes ability to pass dynamic variables into SCSS before compilation using the [data](https://github.com/sass/node-sass#data) property of the Sass compiler. Look at the `.sassrc.js` file for an example.
  - [Tailwind CSS](https://tailwindcss.com/) and default config file
- [parcel-plugin-asset-copier](https://github.com/tiaanduplessis/parcel-plugin-asset-copier) to copy assets so they can be referenced by path from inside React. Otherwise you have [this problem](https://github.com/parcel-bundler/parcel/issues/1668)!

## Getting Started

### Install dependencies
```
$ yarn
```

### Dev build
```
$ yarn run dev
```

### Production build
```
$ yarn run prod
```