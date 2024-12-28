document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button"); // 상위 탭 버튼
    const tabContents = document.querySelectorAll(".tab-content"); // 상위 탭 콘텐츠

    const subtabButtons = document.querySelectorAll(".subtab-button"); // 하위 탭 버튼
    const subtabContents = document.querySelectorAll(".subtab-content"); // 하위 탭 콘텐츠

    // 상위 탭 전환
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 모든 상위 탭 버튼과 콘텐츠 비활성화
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // 클릭된 상위 탭 버튼과 콘텐츠 활성화
            button.classList.add("active");
            const targetTab = button.getAttribute("data-tab");
            document.getElementById(targetTab).classList.add("active");

            // 하위 탭 콘텐츠 초기화 (모든 하위 콘텐츠 숨기기)
            subtabContents.forEach(subContent => subContent.classList.remove("active"));
        });
    });

    // 하위 탭 전환
    subtabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 모든 하위 탭 버튼과 콘텐츠 비활성화
            subtabButtons.forEach(btn => btn.classList.remove("active"));
            subtabContents.forEach(content => content.classList.remove("active"));

            // 클릭된 하위 탭 버튼과 콘텐츠 활성화
            button.classList.add("active");
            const targetSubtab = button.getAttribute("data-subtab");
            document.getElementById(targetSubtab).classList.add("active");
        });
    });
});
