<center>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) [![size](https://img.shields.io/bundlephobia/min/@small-components/flying-menu-plugin)](https://img.shields.io/bundlephobia/min/@small-components/flying-menu-plugin) [![npm](https://img.shields.io/npm/v/@small-components/flying-menu-plugin)](https://img.shields.io/npm/v/@small-components/flying-menu-plugin)

</center>

# Flying Menu

This project was inspired on a linkedin post from [SuryaKant Borad](https://www.linkedin.com/in/suryakant-borad-085361240?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADvaUSUBtg3w6iu4S3aSauDjigA37HyFZ_c&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BDZdPN6kpTQefe8GxJEuaxA%3D%3D) where he created a similar animation, seen that I also wanted to experiment and give it a try on my own.

## Preview

https://user-images.githubusercontent.com/13966565/235767865-5916af51-1fcb-4d9f-920b-e2d7b88c06c6.mp4

## Run Locally

[Install Node](https://nodejs.org/en/download), [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) and then clone the project:

```bash
  git clone https://github.com/samuelsilvadev/flying-menu-inspiration
```

Go to the project directory

```bash
  cd ./flying-menu-inspiration
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```

## Deployment

The examples are deployed automatically using github pages

## API Reference

After installing the package, you can import the functions and tweak them to your needs.

### Install

```bash
    yarn add @small-components/flying-menu-plugin
```

### Start the animation

```typescript
    import { initFlyingAnimation } from "@small-components/flying-menu-plugin";

    initFlyingAnimation()
```

### Connect with your elements

You can include the default selector from the plugin on any text element that you have and they will be animated on hover and on focus.

```html
    <p data-jumpy-animation>Some text</p>
```

...or by using the `selector` configuration you can apply any other selector you want.

```typescript
    import { initFlyingAnimation } from "@small-components/flying-menu-plugin";

    initFlyingAnimation({
        selector: '.my-selector'
    })
```

### Configuration

| Parameter | Type     | Description                | Default |
| :-------- | :------- | :------------------------- | :-------- |
| `selector` | `string` | Any css selector that will match the elements you want to animation | [data-jumpy-animation] |
| `duration` | `string` | Desired animation time, given in css units | '1s' |

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [Suryakant Borad](https://github.com/Suryaset)
