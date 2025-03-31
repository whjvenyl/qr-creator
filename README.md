# QR Code Encoder

<img src="https://nimiq.github.io/qr-creator/demo/qr-code-example.png"/>

A lightweight library generating stylish QR codes that also support gradient fills and rounded corners in only 12.2kB minified (4.75kB gzipped).
Try out the [demo](https://nimiq.github.io/qr-creator/demo)!

## Origin

This library is a trimmed down version of [Lars Jung's jQuery.qrcode library](https://larsjung.de/jquery-qrcode/). Our library is however not based on jQuery anymore and doesnt make use of it. Lars Jung's library itself is based on this [QR code Generator](https://github.com/kazuhikoarase/qrcode-generator).

Changes for SSR by whjvenyl.

All parts are licensed under the MIT License.

## Installation

To install via npm:

```bash
npm install --save qr-creator-ssr
```

To install via yarn:

```bash
yarn add qr-creator-ssr
```

Or use a cdn like [jsdelivr](http://www.jsdelivr.com/package/npm/qr-creator) or
[unpkg](https://unpkg.com/browse/qr-creator@1.0.0/) (see [usage](#usage)).

## Usage

The library is available as a module and non-module version.
To import it as a module:

```javascript
// from installed package for bundling with a module bundler like webpack:
import QrCreator from 'qr-creator';
// from cdn:
import QrCreator from 'https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js';
```

To use the non-module version:

```html
<!-- from your project's code base -->
<script src="path/to/qr-creator.min.js"></script>
<!-- from cdn -->
<script src="https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.min.js"></script>
```

Call the QrCreator API with a configuration object and a DOM element or canvas to render the QR code into:

```javascript
QrCreator.render({
    text: 'some text',
    minVersion: 1, // 1 to 40
    maxVersion: 40,
    ecLevel: 'H', // L, M, Q, H
    left: 0, // offset in pixels
    top: 0,
    size: 200, // size in pixels
    fill: '#000000', // foreground color or gradient
    background: null, // null for transparent background
    radius: 0.5, // corner radius relative to module width: 0.0 .. 0.5
    quiet: 0, // quiet zone in modules
    cornerColor: '#FF0000', // color for corner modules
    icon: { // optional
        src: 'path/to/icon.png',
        width: 40, // optional, default is size * 0.2
        height: 40, // optional, default is size * 0.2
        crossOrigin: 'anonymous' // optional
    }
}, document.querySelector('#qr-code'));
```

## Options

| Option      | Type             | Default  | Description                                                                                                                                                                                                                                                        |
|-------------|------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| text        | string          | 'no text'| The content to encode in the QR code                                                                                                                                                                                                                                |
| minVersion  | number          | 1        | Minimum QR code version (1-40)                                                                                                                                                                                                                                      |
| maxVersion  | number          | 40       | Maximum QR code version (1-40)                                                                                                                                                                                                                                      |
| ecLevel     | string          | 'L'      | Error correction level ('L': 7%, 'M': 15%, 'Q': 25%, 'H': 30%)                                                                                                                                                                                                      |
| left        | number          | 0        | Left offset in pixels                                                                                                                                                                                                                                               |
| top         | number          | 0        | Top offset in pixels                                                                                                                                                                                                                                                |
| size        | number          | 200      | Size of the QR code in pixels                                                                                                                                                                                                                                       |
| fill        | string/object   | '#000'   | Color or gradient for QR code modules                                                                                                                                                                                                                               |
| background  | string          | null     | Background color (null for transparent)                                                                                                                                                                                                                             |
| radius      | number          | 0.5      | Corner radius of modules (0.0-0.5)                                                                                                                                                                                                                                  |
| quiet       | number          | 0        | Quiet zone size in modules                                                                                                                                                                                                                                          |
| cornerColor | string          | null     | Color for corner modules (null uses fill color)                                                                                                                                                                                                                     |
| icon        | object          | null     | Icon configuration object 

### Gradient Fill

For gradient fills, use the following format:

```javascript
fill: {
    type: 'linear-gradient', // or 'radial-gradient'
    position: [x0, y0, x1, y1], // relative coordinates 0-1
    colorStops: [
        [0, '#000000'],
        [1, '#ffffff']
    ]
}
```

Where the position is specified as in [createLinearGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) / [createRadialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient). However, each value is relative to the QR code size, i.e. will be multiplied by that size to yield the absolute position.

### Icon Options

The `icon` object accepts the following properties:

```javascript
icon: {
    src: string,           // URL of the icon image
    width: number,         // Width in pixels (optional)
    height: number,        // Height in pixels (optional)
    crossOrigin: string    // CORS setting (optional)
}
```

Note: Icon size should not exceed 30% of the QR code size for reliable scanning.

## Trimmed down to be low weight

The goal of the library is to generate QR codes only. For that reason we have removed all additional code such as GIF image generation, background image support, rendering a label on top, removed some dead code, and freed it from depending on jQuery. Also, the resulting library does not use any global variables, is all strict mode, and relies on modern browser standards instead.

| The result    | Original |            New |
| :------------ | -------: | -------------: |
| Lines of code |     2332 |    1556 (-33%) |
| Size          |     64kB |    50kB (-22%) |
| Minified      |   20.6kB | 11.95kB (-40%) |
| Gzipped       |    7.3kB |  4.77kB (-35%) |

## Building

To install the dependencies run:

```bash
npm install
```

and then to build the project:

```bash
npm run build
```
