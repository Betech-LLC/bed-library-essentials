# JAMstack Vietnam

----

### 1. Tạo Personal Access Token (classic)
- https://github.com/settings/tokens/new
- Tick chọn: `write:packages`
- Click <kbd> <br> Generate token <br> </kbd>

### 2. Đăng nhập vào npm
```
npm login --scope=@nhatkha1407 --registry=https://npm.pkg.github.com

> Username: [Nhập Username Github]
> Password: [Nhập Personal Access Token]
> Email: [Nhập Email Github]
```

### 3. Cài Package vào dự án

```
yarn add @nhatkha1407/jam-library-essentials
```
