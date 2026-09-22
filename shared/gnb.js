// 공통 GNB(상단 네비게이션) - domain-rag-lab, investment-analysis 양쪽 index.html에서 공통으로 사용
// 사용법: <script src="/shared/gnb.js"></script> 를 <body> 시작 부분에 추가하면
// 자동으로 상단에 메뉴바가 삽입됩니다.

(function () {
  const gnbHTML = `
    <nav class="integrated-gnb">
      <div class="integrated-gnb__brand">금융 AI 통합 플랫폼</div>
      <ul class="integrated-gnb__menu">
        <li><a href="/rag/" class="gnb-link" data-path="/rag/">RAG 학습</a></li>
        <li><a href="/invest/" class="gnb-link" data-path="/invest/">투자 분석</a></li>
      </ul>
    </nav>
  `;

  const style = document.createElement("style");
  style.textContent = `
    .integrated-gnb {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
      background: #1e1e2f;
      color: #fff;
      font-family: sans-serif;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .integrated-gnb__brand {
      font-weight: 700;
      font-size: 16px;
    }
    .integrated-gnb__menu {
      display: flex;
      gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .integrated-gnb__menu a {
      color: #cfd3ff;
      text-decoration: none;
      font-size: 14px;
      padding: 6px 10px;
      border-radius: 6px;
      transition: background 0.15s;
    }
    .integrated-gnb__menu a:hover {
      background: rgba(255,255,255,0.1);
    }
    .integrated-gnb__menu a.active {
      background: #4b4bff;
      color: #fff;
    }
  `;
  document.head.appendChild(style);

  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = gnbHTML;
    document.body.prepend(wrapper.firstElementChild);

    // 현재 경로에 맞는 메뉴 활성화 표시
    const currentPath = window.location.pathname;
    document.querySelectorAll(".gnb-link").forEach((link) => {
      if (currentPath.startsWith(link.dataset.path)) {
        link.classList.add("active");
      }
    });
  });
})();
