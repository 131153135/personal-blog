// 个人技术博客 公共脚本
document.addEventListener('DOMContentLoaded', function () {
  // 自动填充页脚年份
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 当前导航高亮：根据文件名匹配
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // 下拉菜单：同时只展开一个
  var nav = document.querySelector('.main-nav');
  if (!nav) return;
  var menuItems = Array.prototype.filter.call(
    nav.querySelectorAll('li'),
    function (li) { return li.querySelector('.dropdown-menu'); }
  );
  var closeTimer = null;

  function closeAll() {
    menuItems.forEach(function (li) { li.classList.remove('open'); });
  }

  menuItems.forEach(function (li) {
    li.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      closeAll();
      li.classList.add('open');
    });
    // 移动端点击切换
    li.querySelector('a').addEventListener('click', function (e) {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        var wasOpen = li.classList.contains('open');
        closeAll();
        if (!wasOpen) li.classList.add('open');
      }
    });
  });

  nav.addEventListener('mouseleave', function () {
    closeTimer = setTimeout(closeAll, 200);
  });
  nav.addEventListener('mouseenter', function () {
    clearTimeout(closeTimer);
  });
});
