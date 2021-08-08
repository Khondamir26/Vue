"use strict";
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(a, b) {
  for (var c, d = 0; d < b.length; d++)
    (c = b[d]),
      (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      "value" in c && (c.writable = !0),
      Object.defineProperty(a, c.key, c);
}
function _createClass(a, b, c) {
  return (
    b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a
  );
}
var SCROLL = (function () {
    function a(b) {
      var c,
        d = this;
      _classCallCheck(this, a),
        "string" == typeof b.el
          ? (this.el = document.querySelector(b.el))
          : b.el instanceof HTMLElement && (this.el = b.el),
        (this.top =
          null !== (c = b.top) && void 0 !== c ? c : this.el.offsetTop - 4),
        (this.el.style.position = "fixed"),
        (this.unit = b.unit),
        (this.el.style.top = this.scrollNumber() + "px"),
        window.addEventListener("scroll", function () {
          return d.scroll();
        }),
        window.addEventListener("resize", function () {
          return d.scroll();
        });
    }
    return (
      _createClass(a, [
        {
          key: "scroll",
          value: function scroll() {
            (this.window = this.scrollNumber()),
              (this.el.style.top =
                0 < this.window - pageYOffset
                  ? this.window - pageYOffset + "px"
                  : 0);
          },
        },
        {
          key: "scrollNumber",
          value: function scrollNumber() {
            return "px" == this.unit
              ? 0 <= this.top
                ? this.top
                : 0
              : "%" == this.unit || null == this.unit
              ? this.calc(window.innerHeight, this.top) - this.el.clientHeight
              : void 0;
          },
        },
        {
          key: "calc",
          value: function calc(a, b) {
            return (a * b) / 100;
          },
        },
      ]),
      a
    );
  })(),
  myScroll = new SCROLL({ el: ".header__nav", unit: "px" }),
  burger = document.querySelector(".header__burger"),
  list = document.querySelector(".header__nav-list");
burger.addEventListener("click", function () {
  list.classList.toggle("active"), burger.classList.toggle("active");
});
