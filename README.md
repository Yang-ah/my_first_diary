# My First Diary
일기/스케줄을 간단히 기록할 수 있는 온라인 다이어리/스케줄러 입니다.  <br>

> - 4가지 다이어리 색상 테마[🍑,🌳,🍏,🪶]를 제공합니다.   <br>
> - category(work/plan)와 중요도에 따라 [스케줄 불렛]의 별 아이콘 색상을 다르게 반영합니다.  <br>
> - 한 줄 일기를 기록할 수 있습니다.  <br>
> - 오늘의 감정&운동 여부를 기록할 수 있으며, tracker 페이지에서 1년의 기록을 볼 수 있습니다.  <br>
> - 오늘 하루를 사진으로 기록할 수 있습니다.   <br>(현재, 서버/DB가 존재하지 않아 미리보기만 가능합니다. 추후 서버 개발자와 협업하여 기능 활성화 예정입니다.)

<br>

**`프로젝트 기간` :** 2023.01.06 - 2023.05.03 <br>
**`배포링크` :** [My First Diary 방문하기✨](https://web-my-first-diary-1maxx2algssnb7w.sel3.cloudtype.app/)  <br>



</br>

## 핵심 기능

### Home 

https://github.com/Yang-ah/my_first_diary/assets/97151214/3513ff07-9bf8-4adb-aed1-b9cfb30b4da5

✨ 사이트 접속 시, 가장 먼저 보이는 홈페이지 입니다.

✨ 로그인 / 회원가입 /'테스트 계정으로 둘러볼게요' 클릭 시 
      테스트 계정으로 로그인 됩니다.

✨ 로그인 후 서비스 이용 가능합니다.     

✨ 화면 상단 오른편의, [유저 아이콘] 클릭 시, [로그아웃 / 정보수정] 
     드롭다운이 활성화되며 로그아웃 가능합니다.

✨ 추후 서버 연동 시, [validation / 로그인 / 회원가입 / 정보수정] 기능 
      추가 예정입니다.




</br>
</br>



### RNB, Theme

https://github.com/Yang-ah/my_first_diary/assets/97151214/d4b7c9f5-a4dd-4f9e-821e-3d276c0f3160


✨ 화면의 오른편에 위치한 메뉴바(RNB)의 핀셋(thumbTack) 클릭을 통해, RNB를 열고 닫을 수 있습니다.


✨ RNB의 아이콘에 마우스를 올려, 테마 변경 가능합니다.


✨ Peach, Tree, Apple(default), Dark 4가지 테마를 제공합니다.

<br>
<br>
<br>


### Photo Page

https://github.com/Yang-ah/my_first_diary/assets/97151214/ccf97e1d-c7d3-4a2f-b92a-d2faa70b08e1


✨ 달력 양쪽에 위치한 화살표(chevron)를 통해 월별 달력 조회 가능합니다.

✨ 테스트 데이터(default) / 데이터 초기화 버튼을 통해 작성 예시/초기 상태를 
      확인할 수 있습니다. 

✨ 각 날짜 칸 클릭 시, 사진을 등록/수정할 수 있도록 file 입력 창이 나타납니다. 

✨ 현재 사진 미리보기만 가능하며, 추후 서버 연동 시 기능 활성화 예정입니다.



<br>
<br>
<br>

### Scheduler Page

https://github.com/Yang-ah/my_first_diary/assets/97151214/3bfd6ba6-686f-490e-8967-6829679bb454


✨ [plan / work] 두 가지 카테고리를 제공합니다. 
      표 상단의 체크박스를 통해 카테고리별 스케줄 조회 가능합니다.
      
✨ 날짜 별 [line] 끝에 위치한 [자물쇠] 클릭 시, 잠금이 해제되며
     해당 날짜의 side tracker 수정 & 스케줄 삭제 가능합니다.

✨ category, date, content, importance 항목은 필수 입력해야 합니다. 

✨ category:work, date:오늘, importance:4로 초기값 설정 되어있습니다.

✨ time, with, place는 +버튼을 클릭하여 추가할 수 있는 옵션입니다. 

✨ 옵션값이 있는 경우, 해당 스케줄 박스(cell) 위에 마우스를 올리면, 
     확인 가능합니다.

✨ 중요도/카테고리에 따라 각 스케줄 박스(cell)에 위치한 별(⭐️) 아이콘의 
     색깔과 숫자가 다르게 나타납니다.


<br>
<br>
<br>

### Diary Page

https://github.com/Yang-ah/my_first_diary/assets/97151214/df6788a2-12ca-4b99-9f5f-c323cba15124


✨ 날짜 별 [line] 끝에 위치한 [자물쇠] 클릭 시, 잠금이 해제되며
      해당 날짜의 side tracker 수정 & 다이어리 수정 가능합니다.

✨ 다이어리 수정 후 [저장]버튼 클릭 / 또는 [enter] 키를 누르면, 
      저장 후 [잠김] 설정됩니다.
  

<br>
<br>
<br>

### 사이드 트래커(스케줄러 & 다이어리 페이지)

https://github.com/Yang-ah/my_first_diary/assets/97151214/3bd181f8-6c10-4591-98a7-6c374a487467


✨ 운동 여부 / 감정 상태를 체크할 수 있습니다.

✨ 다이어리 / 스케줄러 페이지에서 접근 가능합니다.

✨ [자물쇠]를 클릭 하여 잠김 해제 시 sideTracker 이용 가능합니다. 

✨ 체크 시 상태 업데이트 후 잠김 상태가 됩니다. 



<br>
<br>
<br>


### Tracker Page

https://github.com/Yang-ah/my_first_diary/assets/97151214/741ed5a5-d2ed-47b0-8d1d-d984ba4ca9ae


✨ 1년 동안 체크한 운동 여부 / 감정 상태를 모아서 볼 수 있는 페이지 입니다.

✨ 표 상단에 위치한 [emotion / exercise] 체크 박스 클릭을 통해 
     각각 확인 가능합니다. 








</br>

## STACK
- React, TypeScript, Recoil, SCSS, Styled-Component


