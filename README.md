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
yarn add --dev @nhatkha1407/jam-library-essentials@latest
```

-------

## Release version mới

1. Đảm bảo code mới đã có trong nhánh `main`

2. Chạy câu lệnh `yarn release`
