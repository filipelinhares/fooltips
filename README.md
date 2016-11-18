# funkcss tooltip [![funkcss-tooltip npm](https://img.shields.io/npm/v/funkcss-tooltip.svg)](https://www.npmjs.com/package/funkcss-tooltip) [![Build Status](https://travis-ci.org/filipelinhares/funkcss-tooltip.svg?branch=master)](https://travis-ci.org/filipelinhares/funkcss-tooltip)

## Usage
```html
<span class="tooltip tooltipT" aria-label="Meu tooltip">Tooltip</span>
```

## Classes
**Base**
- `.tooltip`

**Direction**
- `.tooltipT`
- `.tooltipR`
- `.tooltipB`
- `.tooltipL`
- `.tooltipTR`
- `.tooltipTL`
- `.tooltipBR`
- `.tooltipBL`
- `.tooltip-multiline`

**States**
- `is-tooltiped`


## Development
```
$ git clone https://github.com/filipelinhares/funkcss-tooltip.git
$ cd funkcss-tooltip
$ npm run setup
```

_More commands can be found in the [contributing guide](https://github.com/filipelinhares/funkcss/blob/master/CONTRIBUTING.md)_.


### Test
```
npm test
```

**cssguard test**
```
python -m SimpleHTTPServer -p 8080
http://localhost:8080/test
```

## License
[MIT](LICENSE.md) © Filipe Linhares
