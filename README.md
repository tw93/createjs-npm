# createjs-npm

> createjs 的 cmd 标准版本，可以像 npm 包一样引入使用，同时也支持单个模块使用

## 安装

```bash
tnpm install createjs-npm -S
```

## 使用

```js
// 引入后和官方 createjs 使用无任何区别
// 引入全部模块
import createjs from 'createjs-npm';

// 只引入 easeljs
import createjs from 'createjs-npm/lib/easel';

// 只引入 preload
import createjs from 'createjs-npm/lib/preload';

// 只引入 tween
import createjs from 'createjs-npm/lib/tween';

// 只引入 sound
import createjs from 'createjs-npm/lib/sound';
```

## 包含

  ```json
    {
      "easeljs": "^1.0.2",   // 用于 Sprites 、动画、向量和位图的绘制
      "preloadjs": "^1.0.1", // 网站资源预加载
      "soundjs": "^1.0.1",   // 音频播放引擎
      "tweenjs": "^1.0.2"    // 用于做动画效果
    }
  ```

## 为什么要弄一个 npm 版本的 createjs ？

- 目前官方版本的 [createjs](https://createjs.com/) **不支持通过 npm 方式的使用**，导致在 ES6 开发中，需要在 html 中手动引入一个 `<script>` 标签才可以正常使用
- 在目前 H5 开发中，一般通过 npm 方式引入模块，同时**也更好的便于用 createjs 封装的上层组件可以当成模块一样引入使用**
- 找了一大圈，内外部没有看到好的解决方案，所以自己弄了一个放到 **createjs-npm** 下面

## 原理
- 利用 imports-loader 进行导入到当前
- 利用 exports-loader 将弄好 createjs 的模块导出到全局

