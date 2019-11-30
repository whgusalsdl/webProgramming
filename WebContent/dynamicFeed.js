function newsfeedPrint(isEmpty, userId_array, comment_array, picture_array){
	//출력해야하는 피드의 양은 백엔드에서?
	//사용하는 변수 : writerName, locationOfPhoto, theNumberOfGood, contentVariable, replyVariable
	//아래의 변수 초기화값은 나중에 삭제할 예정
	fillTemplate = function(writerId, locationOfPhoto, theNumberOfGood, contentVariable, replyVariable){
		var feedTemplate =`
		<div class="frame_box">
	    	<div class="user_name_box">
	    		<img id="newsFeed_profile_photo" src="./sample/ootd/rename2.jpg">
	    		<div id="username">${writerId}</div>
			</div>
		<div class="photo_box">
	    	<img src="${locationOfPhoto}">  
		</div>
		<!-- 사진 바로 밑에 하트, 말풍선, 공유, 북마크 아이콘 -->
		<div class="button_box">
	    	<i class="far fa-heart"></i> 
	    	<i class="far fa-comment-dots"></i>
	    	<i class="far fa-share-square"></i>
	    	<i class="far fa-bookmark"></i>
	    	<br>좋아요 ${theNumberOfGood}개
		</div>
		<div class="bottom_box" style="padding:13px;">
	     
		<div class="content_box">
			${contentVariable}
	    </div>

	    <div class="reply_box">
			${replyVariable}
		</div>
	</div>
	</div>`;

    	return feedTemplate;
	}

	var theNumberOfFeed = userId_array.length;
	var writerId = 'dongjun', locationOfPhoto='./sample/4.JPG';
	var theNumberOfGood = 10;
	var contentVariable = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, minima. 
	Nulla voluptatem vel deleniti tempore. Praesentium, inventore? Aspernatur, eum? 
	Quasi distinctio impedit natus, odit eligendi itaque quos tenetur culpa velit!`;
	var replyVariable = `it is good!`;

	if (isEmpty == False)
		return;

	for(var i =0; i < theNumberOfFeed; i++){
		//변수수정 코드 이부분에 삽입
		writerId = userId_array[i];
		locationOfPhoto = picture_array[i];
		contentVariable = comment_array[i];
		document.write(fillTemplate(writerId, locationOfPhoto, theNumberOfGood, contentVariable, replyVariable));
	}
	
	/* 
		나중에 db해결되면 writerName, locationOfPhoto, theNumberOfGood, contentVariable, replyVariable 모두
		리스트로 받아 for문의 변수 i로 한번에 관리가능하면 괜찮을 듯 하다.
	*/
}

function myProfilePrint(sessionUserID){
	//아래의 변수 초기화값은 나중에 삭제할 예정
	var userID = sessionUserID, locationOfProfile='profile.JPG', theNumberOfPost = 10, theNumberOfFollow = 15, theNumberOfFollower = 8;
	var userName ="임동준";
	var selfIntroductionVariable = "한국산업기술대학교 재학";
	var profileTemplate =`
    <div class="profile">
        <div class="profile_photo" >           <!-- 프로필 사진 -->
            <img id="pro" src="${locationOfProfile}">
            
        </div>
        <div class="profile_text">
            <div class="user_name">               <!-- 유저이름 표시하는 div -->
                ${userID}
            </div>
            
            <div class="modify">                  <!-- 프로필 편집창으로 넘어가는 버튼 -->
                <input type="button" onclick="location.replace('./EditProfile.jsp')"  value="프로필 편집">
                
            </div>  
            <div class="count">게시물 ${theNumberOfPost}   팔로우 ${theNumberOfFollow}   팔로워 ${theNumberOfFollower}</div>     <!-- 게시물, 팔로우, 팔로워 숫자표시 화면, -->
            
            <div class="content" style="margin-top:15px;">
                <div style="font-weight: 650; margin-bottom: 4px;">${userName}</div>     <!-- 사용자가 설정한 이름 -->
                <div>${selfIntroductionVariable}</div>                                    <!-- 사용자가 설정한 자기소개글 -->
            </div>
        </div>
    </div>`;

	document.write(profileTemplate);
}

function myfeedPrint(){
	//쿼리로 자기가 작성한 글의 사진만 뽑아와야 할것. 뽑아와서 경로를 리스트로 작성해 for문으로 print
	//아래의 변수 초기화값은 나중에 삭제할 예정
	var theNumberOfFeed = 10;
	var locationList = new Array();
	
	for(var i = 0; i < theNumberOfFeed; i++){
		//변수수정 코드 이부분에 삽입
		document.write(`<figure><img src="./sample/${i + 1}.JPG"/></figure>`);
	}
	
	/* 나중에 db해결되면 이곳 함수를 사용
	for(var i = 0; i < theNumberOfFeed; i++){
		//변수수정 코드 이부분에 삽입
		document.write(`<figure><img src="${locationList[i]}"/></figure>`);
	}
	*/
}
