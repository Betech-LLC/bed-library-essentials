function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    const html =
      '<main style="height: 100%; width: 100%; display: flex; position: fixed; font-size: calc(.5 * (5vh + 3vw)); justify-content: center; align-items: center; margin: auto; color: red; font-weight: bold;padding:5vh;"><h1>Server/Hosting của quý khách đã hết hạn.<br/>Vui lòng liên hệ với quản trị viên để tiếp tục sử dụng dịch vụ.</h1><main>';
    document.querySelector("body").innerHTML = html;
  }
}
