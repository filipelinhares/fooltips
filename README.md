# fooltips [![npm version](https://img.shields.io/npm/v/fooltips.svg)](https://www.npmjs.com/package/fooltips) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/fooltips)

## Usage

```html
<span data-tooltip="top" aria-label="Lorem ipsum">Simple text</span>
```

## Attributes

**Base**
- `data-tooltip`

**Direction**
- `data-tooltip="top"`
- `data-tooltip="top-right"`
- `data-tooltip="top-left"`
- `data-tooltip="left"`
- `data-tooltip="right"`
- `data-tooltip="bottom-right"`
- `data-tooltip="bottom-left"`
- `data-tooltip="bottom"`

**Multiline**
- `data-tooltip-multiline`

**States**
- `data-is-tooltiped`

### Classes
**States**
- `is-tooltiped`

### Variables
```css
:root {
  --tooltip-multiline-width: 250px;
  --tooltip-background-color: rgba(0, 0, 0, .8);
  --tooltip-color: #fff;
  --tooltip-padding: 5px 8px;
  --tooltip-border-radius: 4px;
  --tooltip-font-size: 0.7rem;
  --tooltip-z-index: 10;
  --tooltip-content: aria-label;
}
```

## License

[MIT](LICENSE.md) © Filipe Linhares
