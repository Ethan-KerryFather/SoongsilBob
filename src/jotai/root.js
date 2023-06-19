import { atom, useAtom } from "jotai";
import { getDatabase, ref, child, get } from "firebase/database";
import { useMemo, useState } from "react";

/*
root
  Firebase realtime Database 에서 JSON으로 데이터 구성
  temp 배열에 한번에 모두 업로드 후 
  Jotai atom에 페깅
  
  1. 파이어베이스 실시간 데이터베이스 안의 쿠폰북 데이터와 연동시킬 것. 여길 거쳐서 가져올 것이다. 한번만 읽을 수 있게
    ㄴ useMemo, useCallback 등 메모이징 적극 사용해야
      ㄴ 요금 폭탄 맞기 싫으면.. 
  2. 
*/

async function initData() {
  const dbRef = ref(getDatabase());
  // 초기값 설정
  let storeData = [
    {
      name: "숭실밥집",
      main: "쿠폰이 없습니다.",
      detail: "발행된 쿠폰이 없습니다.",
      period: "조금만 기다려주세요:)",
    },
  ];

  await get(child(dbRef, `coupons/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const temp = [];
        Object.keys(snapshot.val()).map((key) => {
          temp.push(snapshot.val()[key]);
          console.log("pushed");
        });
        console.log(`temp is ${JSON.stringify(temp)}`);
        storeData = [...temp];
        return storeData;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(`*** storeData ***\n${JSON.stringify(storeData)}`);
  return storeData;
}
export default initData;
// 초기값 설정

export const couponAtom = atom(initData());

const accountInfo = atom({
  id: "Not Logined",
  name: "낮선 숭숭이",
});
