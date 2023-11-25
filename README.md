# JAMstack Vietnam

----

### 1. Tạo Personal Access Token (classic)
- https://github.com/settings/tokens/new
- Chọn `No Expiration`
- Chọn `write:packages`
- Click <kbd> <br> Generate token <br> </kbd>

### 2. Đăng nhập vào npm
```
npm login --scope=@toannguyen112 --registry=https://npm.pkg.github.com
```
```
> Username: [Nhập Username Github]
> Password: [Nhập Personal Access Token]
> Email: [Nhập Email Github]
```

### 3. Cài Package vào dự án

Cặt version cuối cùng
```
yarn add --dev @toannguyen112/betech-library-essentials@latest
```

Cặt version theo nhánh để test
```
yarn add --dev "toannguyen112/betech-library-essentials#structure"
```


-------

## Release version mới

1. Đảm bảo code mới đã có trong nhánh `main`

2. Chạy câu lệnh `yarn release`
# betech-library-essentials
