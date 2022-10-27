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
        programId: 1,
        name: "헬스장 월 이용료",
        payment: "월 10,000원",
        isUse: true,
        isRegularPayment: true,
      },
      {
        programId: 2,
        name: "헬스장 1일권",
        description: "무료이용 횟수 초과 시 이용권 구매",
        payment: "1회 1,000원",
        isUse: false,
      },
      {
        programId: 3,
        name: "사물함(남)",
        description: "헬스장 월 이용료 결제 시 이용가능",
        payment: "월 5,000원",
        isUse: false,
        isRegularPayment: true,
      },
      {
        programId: 4,
        name: "개인 PT",
        payment: "월 200,000원",
        isUse: true,
        isRegularPayment: true,
      },
      {
        programId: 5,
        name: "G.X.",
        payment: "월 100,000원",
        isUse: false,
        isRegularPayment: true,
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
        programId: 6,
        name: "독서실 1일권",
        payment: "일 10,000원",
        isUse: false,
      },
      {
        programId: 7,
        name: "독서실 월 정기권(남)",
        payment: "월 30,000원",
        isUse: true,
        isRegularPayment: true,
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
        programId: 8,
        name: "A룸",
        payment: "일 10,000원",
        isUse: true,
      },
      {
        programId: 9,
        name: "B룸",
        payment: "일 10,000원",
        isUse: false,
        isRegularPayment: true,
      },
    ],
  },
];

export const communityProgramDummy = [
  {
    programId: 1,
    programs: [
      {
        name: "헬스장 월 이용료",
        payment: "월 10,000원",
        isUse: true,
        isRegularPayment: true,
      },
    ],
  },
  {
    programId: 2,
    programs: [
      {
        name: "헬스장 1일권",
        description: "무료이용 횟수 초과 시 이용권 구매",
        payment: "1회 1,000원",
        isUse: false,
      },
    ],
  },
  {
    programId: 3,
    name: "사물함(남)",
    description: "헬스장 월 이용료 결제 시 이용가능",
    payment: "월 5,000원",
    isUse: false,
    isRegularPayment: true,
  },
  {
    programId: 4,
    name: "개인 PT",
    description: "1대1 맞춤형 트레이닝",
    programs: [
      {
        name: "개인 PT(20회)",
        payment: "월 200,000원",
        isRegularPayment: true,
      },
      {
        name: "개인 PT(40회)",
        payment: "월 350,000원",
        isRegularPayment: true,
      },
    ],
  },
  {
    programId: 5,
    name: "G.X.",
    description: "다양한 G.X. 프로그램",
    programs: [
      {
        name: "줌바",
        payment: "월 45,000원",
        description: "화, 목 09:00",
        isRegularPayment: true,
      },
      {
        name: "요가",
        payment: "월 40,000원",
        description: "월, 금 09:00",
        isRegularPayment: true,
      },
      {
        name: "다이어트 댄스",
        payment: "월 45,000원",
        description: "수, 금 09:00",
        isRegularPayment: true,
      },
    ],
  },
  {
    programId: 6,
    name: "독서실 1일권",
    payment: "일 10,000원",
    isUse: false,
  },
  {
    programId: 7,
    name: "독서실 월 정기권(남)",
    payment: "월 30,000원",
    isUse: true,
    isRegularPayment: true,
  },
  {
    programId: 8,
    name: "A룸",
    payment: "일 10,000원",
    isUse: true,
  },
  {
    programId: 9,
    name: "B룸",
    payment: "일 10,000원",
    isUse: false,
    isRegularPayment: true,
  },
];

export const timeDummy = [
  "09:00~10:00",
  "10:00~11:00",
  "11:00~12:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
  "00:00~0:00",
];

export const calendarInfo = [
  { active: true, date: new Date(2022, 10, 1) },
  { active: true, date: new Date(2022, 10, 2) },
  { active: true, date: new Date(2022, 10, 3) },
  { active: false, date: new Date(2022, 10, 4) },
  { active: true, date: new Date(2022, 10, 5) },
  { active: true, date: new Date(2022, 10, 6) },
  { active: true, date: new Date(2022, 10, 7) },
  { active: true, date: new Date(2022, 10, 8) },
  { active: true, date: new Date(2022, 10, 9) },
  { active: true, date: new Date(2022, 10, 10) },
  { active: false, date: new Date(2022, 10, 11) },
  { active: true, date: new Date(2022, 10, 12) },
  { active: true, date: new Date(2022, 10, 13) },
  { active: true, date: new Date(2022, 10, 14) },
  { active: true, date: new Date(2022, 10, 15) },
  { active: true, date: new Date(2022, 10, 16) },
  { active: false, date: new Date(2022, 10, 17) },
  { active: false, date: new Date(2022, 10, 18) },
  { active: false, date: new Date(2022, 10, 19) },
  { active: false, date: new Date(2022, 10, 20) },
  { active: false, date: new Date(2022, 10, 21) },
  { active: true, date: new Date(2022, 10, 22) },
  { active: true, date: new Date(2022, 10, 23) },
  { active: true, date: new Date(2022, 10, 24) },
  { active: true, date: new Date(2022, 10, 25) },
  { active: true, date: new Date(2022, 10, 26) },
  { active: false, date: new Date(2022, 10, 27) },
  { active: false, date: new Date(2022, 10, 28) },
  { active: true, date: new Date(2022, 10, 29) },
  { active: true, date: new Date(2022, 10, 30) },
];
