# 升级Mojave后

升级之后Visual Studio Code字体发虚

issue：https://github.com/Microsoft/vscode/issues/51132

### 解决方法

- 关闭字体平滑

```sh
defaults write -g CGFontRenderingFontSmoothingDisabled -bool NO
```

- 字体粗细控制

```sh
defaults -currentHost write -globalDomain AppleFontSmoothing -int 2
```

将数字替换为0可以关闭，可以使用 0-3 之间的数字，建议使用中等粗细2

- See: http://www.howtoip.com/how-to-fix-blurry-fonts-on-macos-mojave-with-subpixel-antialiasing/