document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button"); // 상위 탭 버튼
    const tabContents = document.querySelectorAll(".tab-content"); // 상위 탭 콘텐츠

    const subtabButtons = document.querySelectorAll(".subtab-button"); // 하위 탭 버튼
    const subtabContents = document.querySelectorAll(".subtab-content"); // 하위 탭 콘텐츠

    // 기본값 설정 객체
    const defaultSubtabs = {
        hawaiian: "english", // Hawaiian 탭 기본 하위 탭
        "tourist-attraction": "hawaiian-islands-map" // Tourist Attraction 탭 기본 하위 탭
    };

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

            // 하위 탭 초기화 및 기본값 설정
            const defaultSubtabId = defaultSubtabs[targetTab]; // 기본값 가져오기
            if (defaultSubtabId) {
                subtabButtons.forEach(subButton => subButton.classList.remove("active"));
                subtabContents.forEach(subContent => subContent.classList.remove("active"));

                // 기본 하위 탭 활성화
                document.querySelector(`[data-subtab="${defaultSubtabId}"]`).classList.add("active");
                document.getElementById(defaultSubtabId).classList.add("active");
            }
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

    // 페이지 로드 시 기본값 설정 (첫 번째 상위 탭)
    const initialTab = document.querySelector(".tab-button.active").getAttribute("data-tab");
    const initialSubtab = defaultSubtabs[initialTab];
    if (initialSubtab) {
        document.querySelector(`[data-subtab="${initialSubtab}"]`).classList.add("active");
        document.getElementById(initialSubtab).classList.add("active");
    }
});

