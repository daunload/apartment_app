export const communityListDummy = [
  {
    id: 1,
    title: "피트니스 센터",
    thumbnail:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "독서실",
    thumbnail:
      "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5JTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "게스트룸",
    thumbnail:
      "https://images.unsplash.com/photo-1632181933699-d45280e5c7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdCUyMGFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
];

export const communityDetailDummy = [
  {
    id: 1,
    title: "피트니스 센터",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ],
    description: "입주민을 위한 피트니스 센터입니다",
    notification: "10월 휴무일 안내입니다.",
    location: "서울시 송파구 잠실본동 000 하이테크시티 1동 101호-130호",
    startTime: "06:00",
    endTime: "24:00",
    breakStartTime: "13",
    breakEndTime: "14",
    holiday: "주말, 명절, 법정공휴일 휴무",
    phone: "02-1111-1111",
    amenities: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2460/2460781.png",
        name: "샤워실",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/6343/6343464.png",
        name: "운동복",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3290/3290793.png",
        name: "락카",
      },
    ],
    precautions: "주의사항입니다.",
    operationalPrograms: [
      {
        name: "헬스장 월 이용료",
        payment: "월 10,000원",
        isUse: true,
      },
      {
        name: "헬스장 1일권",
        description: "무료이용 횟수 초과 시 이용권 구매",
        payment: "1회 1,000원",
        isUse: false,
      },
      {
        name: "사물함(남)",
        description: "헬스장 월 이용료 결제 시 이용가능",
        payment: "월 5,000원",
        isUse: false,
      },
      {
        name: "개인 PT",
        payment: "월 200,000원",
        isUse: true,
      },
      {
        name: "G.X.",
        payment: "월 100,000원",
        isUse: false,
      },
    ],
  },
  {
    id: 2,
    title: "독서실",
    images: [
      "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5JTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5JTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5JTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
    description: "입주민을 위한 독서실입니다.",
    notification: "10월 휴무일 안내입니다.",
    location: "서울시 송파구 잠실본동 000 하이테크시티 1동 101호-130호",
    startTime: "06",
    endTime: "22",
    breakStartTime: "12",
    breakEndTime: "13",
    holiday: "주말, 명절, 법정공휴일 휴무",
    phone: "02-1111-1111",
    amenities: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2344/2344269.png",
        name: "PC",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/748/748151.png",
        name: "WIFI",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1042/1042036.png",
        name: "프린터",
      },
    ],
    operationalPrograms: [
      {
        name: "독서실 1일권",
        payment: "일 10,000원",
        isUse: false,
      },
      {
        name: "독서실 월 정기권(남)",
        payment: "월 30,000원",
        isUse: true,
      },
    ],
  },
  {
    id: 3,
    title: "게스트룸",
    images: [
      "https://images.unsplash.com/photo-1632181933699-d45280e5c7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdCUyMGFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1632181933699-d45280e5c7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdCUyMGFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1632181933699-d45280e5c7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdCUyMGFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1632181933699-d45280e5c7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdCUyMGFyZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    ],
    description: "입주민을 위한 게스트룸입니다",
    notification: "10월 휴무일 안내입니다.",
    location: "서울시 송파구 잠실본동 000 하이테크시티 1동 101호-130호",
    startTime: "06",
    endTime: "22",
    breakStartTime: "12",
    breakEndTime: "13",
    holiday: "주말, 명절, 법정공휴일 휴무",
    phone: "02-1111-1111",
    amenities: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/7175/7175171.png",
        name: "정수기",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2975/2975567.png",
        name: "조리시설",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2652/2652642.png",
        name: "조식",
      },
    ],
    precautions:
      "최대 3일까지 예약 가능합니다. 이용 후 다음 사람을 위해 깨끗히 정리 부탁드립니다",
    operationalPrograms: [
      {
        name: "A룸",
        payment: "일 10,000원",
        isUse: false,
      },
      {
        name: "B룸",
        payment: "일 10,000원",
        isUse: false,
      },
    ],
  },
];
