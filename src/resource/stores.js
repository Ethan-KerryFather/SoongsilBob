/*

  {
      name: ,
      area: ,
      price: ,
      location: { },
    },

*/

const stores = {
  korean: [
    {
      name: "신의주찹쌀순대",
      area: "중문",
      workingTime: "24시간",
      price: "10000원-20000원",
      location: { X: 126.957021, Y: 37.4949201 },
      description: "평범한 순대국집, 반찬은 무제한",
    },
    {
      name: "상도명태명가",
      area: "정문",
      price: "10000원-20000원",
      workingTime: "11:30-22:00, 오후4:00-5:00 break",
      location: { X: 126.951205, Y: 37.4994589 },
      description: "평범한 순대국집, 반찬은 무제한",
    },
    {
      name: "사리원",
      area: "정문",
      price: "10000원-20000원",
      workingTime: "11:00-21:00, 오후3:30-4:30 break",
      location: { X: 126.950618, Y: 37.4991433 },
      description: "평범한 순대국집, 반찬은 무제한",
    },
    {
      name: "손칼국수",
      area: "중문",
      price: "7000원-10000원",
      workingTime: "미상",
      location: { X: 126.957835, Y: 37.4949655 },
      description: "메뉴가 다양하고, 떡볶이 맛집이다 (?)",
    },
    {
      name: "상도국수",
      area: "정문",
      price: "10000원~20000원",
      workingTime: "11:30-19:30, 오후2:30-4:30 break, 오후7시 lastOrder",
      location: { X: 126.95331, Y: 37.4973514 },
      description: "평범한 순대국집, 반찬은 무제한",
    },
    {
      name: "명태촌",
      area: "정문",
      price: "10000원~20000원",
      workingTime: "1,3,5번째 주 일요일 휴무",
      location: { X: 126.952983, Y: 37.496207 },
      description: "평범한 순대국집, 반찬은 무제한",
    },
    {
      name: "더진국",
      area: "중문",
      price: "10000원~20000원",
      workingTime: "24시간",
      location: { X: 126.95693, Y: 37.4947489 },
      description: "순대국 체인점, 음식이 빠르게 나오고 깔끔하다",
    },
    {
      name: "밀알식당",
      area: "중문",
      price: "5500원-7000원",
      workingTime: "미상",
      location: { X: 126.956421, Y: 37.4951722 },
      description: "중문 횡단보도 바로 앞에 있는 가성비 맛집",
    },
    {
      name: "명품고향삼계탕",
      area: "중문",
      price: "10000원~20000원",
      workingTime: "10:00-20:00",
      location: { X: 126.956783, Y: 37.4947669 },
      description: "국밥 좋아하면 꼭 가봐야하는 맛집, 반찬이 정갈하다",
    },
    {
      name: "내가찜한닭",
      area: "중문",
      price: "20000원~50000원",
      workingTime: "10am - 9pm",
      location: { X: 126.956421, Y: 37.4951722 },
      description: "혼자는 힘듦 ",
    },
    {
      name: "논두렁갈비",
      area: "중문",
      price: "8000원~19000원",
      workingTime: "9:30-21:00",
      location: { X: 126.957066, Y: 37.4946769 },
      description:
        "갈비집으로서 고기와 점심 저녁 메뉴로 묵은지 김치찜과 김치찌개가 일품",
    },
    {
      name: "아리랑컵밥",
      area: "중문",
      price: "10000원~20000원",
      workingTime: "10:00-21:00, 매주 일요일 휴무",
      location: { X: 126.95632, Y: 37.4944423 },
      description: "간단하게 빨리 먹을 수 있는 컵밥집",
    },
  ],
  western: [
    {
      name: "스톤504 스테이크하우스",
      area: "중문",
      workingTime: "11:00-22:30, 22:00 lastOrder",
      price: "40000원-",
      location: { X: 126.957756, Y: 37.4946141 },
      description: "스테이크, 파스타 맛집, 식객남녀 잘먹었습니다 시즌3 출연",
    },
    {
      name: "샤로스톤",
      area: "중문",
      workingTime: "11:30-21:30, 21:00 lastOrder",
      price: "15000원-",
      location: { X: 126.955313, Y: 37.4951267 },
      description: "사장님이 혼자 운영하시는 고기 질 좋은 가성비 스테이크 맛집",
    },
    {
      name: "휘게",
      area: "정문",
      workingTime: "10:00-22:00, 오후3:30-5:00 break, 매주 월요일 휴무",
      price: "15000원-30000원",
      location: { X: 126.951105, Y: 37.4973775 },
      description: "화덕 루꼴라피자, 하이볼, 파스타 맛집",
    },
    {
      name: "프라이밋 스테이크 하우스",
      area: "정문",
      workingTime: "12:00-21:00, 오후3:00-5:30 break",
      price: "15000원-30000원",
      location: { X: 126.95099, Y: 37.5000444 },
      description: "스테이크, 파스타, 버거, 프라이 모두 커버가능한 맛집",
    },
  ],
  asian: [],
};

export default stores;
