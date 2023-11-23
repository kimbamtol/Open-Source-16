# 오픈소프트웨어개발 16조 레포지토리입니다.


<img src="./alarm/imageCanForReadme/logo.jpeg"  width="200" alt="logo">

<img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=&logoColor=white">
<img src="https://img.shields.io/badge/Android Studio-3DDC84?style=for-the-badge&logo=&logoColor=white">
<img src="https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=&logoColor=white">

오픈소프트웨어 개발  16조의 레포지터리 입니다.


## Introduction

Wifi Reminder는 사용자의 다양한 조건에 맞춰 유연한 일정관리, 알람설정으로 할 수 있게 하는 오픈소스 프로젝트 입니다.

## background

저희는 기존 어플들이 오직 시간, 위치 등의 제한적인 조건만 설정할 수 있다는 점에서 불만을 느꼈고, 사용자 개개인에 맞춰 유연한 조건에 맞춰 일정을 짤 수 있는 어플을 구상 하였습니다.

계정 연동을 통해 설정한 알람들을 통해 사용자는 자신에게 맞는 설정들을 저장하고, 사용자는 언제 어디서든 어느 디바이스에서든 이 알람들을 즉시 불러와 사용할 수 있게 하려고 노력했습니다.

더 나아가, 우리의 앱은 단순한 알람 시스템을 뛰어넘어 스마트한 기능을 제공합니다. 시간과 상황을 고려하여 발동되는 알람 기능을 통해, 사용자는 자신의 일상에 맞게 최적화된 알람을 설정하고 필요에 따라 신속하게 삭제하는 기능을 제공하고자 하였습니다. 이를통해 사용자가 자유롭게 일상을 계획하고 조절할 수 있으리라 예상했습니다.

또한, 날씨 정보를 자동으로 조회하여 사용자가 조금 더 준비 된 하루를 시작할 수 있도록 지원합니다.

## how to develop

### for Anround

```
    git clone https://github.com/kimbamtol/Open-Source-16.git
    cd Open-Source-16
    cd alarm
    npm install
    npx react-native start 
```

안드로이드 스튜디오가 다운로드 되어 있어야 합니다.  
[Android Studio](https://developer.android.com/studio?gclid=CjwKCAiAx_GqBhBQEiwAlDNAZrEuY5uKb6-zGLpf4XJco0gLqfaAQxA61ZUer-XsdQ34_ErE9PGV0RoCjX8QAvD_BwE&gclsrc=aw.ds&hl=ko "Android")
    
    그 후 에러가 난다면, 아래의 명령어들을 차례로 입력합니다.

```
    npm install @react-native-firebase/app
    npm install @react-native-firebase/firestore
    npm install @react-native-community/netinfo
    npm install @react-native-clipboard/clipboard
    npm install @react-native-firebase/messaging
    npm install react-native-push-notification

	npx react-native start 

```

error 가 발생한다면, gradle 과 java sdk의 버전을 맞춰주는 것이 필요합니다.  
[Gradle version config](https://docs.gradle.org/current/userguide/compatibility.html#:~:text=A%20Java%20version%20between%208,versions%20are%20not%20yet%20supported. "gradle")


### for IOS

준비중...


## how to install 

앱 다운로드 후 회원가입 후 로그인   
알람 기능 활용    
   
- Main 버튼: WIFI를 기반으로 한 알람 설정   
- Enter new todo에 할일은 추가합니다.   
- 화면의 하단에 있는 CHECK WIFI-IP 버튼을 누를경우, 현재 연결된 WIFI의 IP값이 클립보드에 복사됩니다.(WIFI에 연결이 되었을 경우에만 클립보드에 복사됩니다.)    
- 추가한 ‘할일’의 오른쪽에 있는 WIFI 모양의 아이콘을 클릭하여 같이 저장하고 싶은 WIFI의 IP값을 저장할 수 있습니다. (조금전에 복사한 값을 이용)   
- WIFI의 변경이 감지되면, 변경된 WIFI의 IP와 ‘할일’들에 저장된 WIFI IP값을 비교하고, 일치하는 ‘할일’을 notification으로 사용자에게 알립니다.    
- notification은 백그라운드 상태에서 작동합니다.     
- Weather 버튼: 날씨 확인     

#### -앱 다운로드 링크	https://drive.google.com/file/d/1U811auUeVYsyz-s6K5ZjfIBPzLX989ms/view?usp=sharing


## Feature

### **log in**

<img src="./alarm/imageCanForReadme/logIn.png" width="150px" >      
<img src="./alarm/imageCanForReadme/mainPage.png" width="150px">

로그인 기능입니다. 서버와 연결을 통해 어떤 디바이스에서도 사용가능하게 준비하고 있습니다.

### weather Check

<img src="./alarm/imageCanForReadme/weather.png" width="150px">
   
오늘과 내일의 날씨를 확인할 수 있습니다.

### ToDo

<img src="./alarm/imageCanForReadme/Screenshot 2023-11-23 at 7.26.24 PM.png" width="150px">
<img src="./alarm/imageCanForReadme/Screenshot 2023-11-23 at 7.26.28 PM.png" width="150px">

와이파이 이름을 감지하여 발동하는 알람을 설정할 수 있습니다.  
추후에 더 많은 설정 요소들이 추가 될 예정입니다.

## how to contribute

앞서 소개한 feature별로 브랜치를 파 개발을 진행할 수 있습니다.  
[logIn,weather, toDo, etc, newFeature] 등의 브랜치로 분리해 개발 진행할 수 있습니다.

issue 를 설정할때는,

#### 현재상황 개선상황 개선방법 등을 필수로 포함하고 있어야 합니다

### Best Practice

#### 제안
사용,개발중 발견한 버그나 개선사항을 자세하게 작성하고, 기능을 제안 해 주세요.       
ex) wifi뿐만 아니라 날씨정보를 인식하여 알람을 설정하고 싶습니다.

#### 개선상황 
개선후 어떤 효과를 기대하는지, 어떻게 바뀌였으면 좋겠는지 설명해주세요.      
ex)매일 알람이나 날씨를 확인할 필요없이, 특정 조건(기온,기후)가 성립되면 알람이 울립니다.

#### 개선방법
사용 할 툴, 종속파일들을 설명하고, 어떻게 활용할 것인지 작성해주세요.       
ex)알람을 설정한 시간이 되면, 백그라운드에서 날씨 api에 정보를 요청해 특정조건이 성립하는지 확인합니다. 
날씨 정보확인 api가 설정이 되어 있으니 사용하면 될 거 같습니다.

#### 추가 
위의 항목들 이외에 덧붙이고 싶은 코멘트를 작성하시면 됩니다. 

## Licensing

Wifi Reminder은 [Mit Licnese](https://github.com/PowerShell/PowerShell/blob/master/LICENSE.txt "MIt")로 관리됩니다.
