document.getElementById("time").innerHTML=new Date().toLocaleString()

function pink(){
    document.body.style.backgroundColor = 'pink'
}

function lightblue(){
    document.body.style.backgroundColor = 'lightblue'
}

function yellow(){
    document.body.style.backgroundColor = 'yellow'
}

function reset(){
    document.body.style.backgroundColor = 'rgb(240, 248, 255)'
}

function showhtml(){
    document.getElementById("fig").src='image/html.png'
    document.getElementById("desc").innerHTML='HTML은 구조적 웹문서를 작성하는데 사용되는 마크업 언어이다.'
}

function showcss(){
    document.getElementById("fig").src='image/css.png'
    document.getElementById("desc").innerHTML='CSS3은 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}

function showjs(){
    document.getElementById("fig").src='image/javascript.png'
    document.getElementById("desc").innerHTML='Javascritp는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다.'
}

function showhey(){
    document.getElementById("fig").src='image/hey.png'
}

function hide(){
    document.getElementById("fig").src=''
    document.getElementById("desc").innerHTML=''
}