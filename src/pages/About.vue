<template>
  <div class="container about-div">
    <p></p>
      <h1 class="center our-info">About Us:</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="@/assets/shiri.png" alt="Shiri Itach" style="width:100%">
            <div class="container2">
              <h3>Shiri Itach</h3>
              <p class="title">3rd-year B.Sc Information Systems Engineering student</p>
              <p>Ben-Gurion University of the Negev</p>
              <a href="mailto:shiriit@post.bgu.ac.il">Contact</a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="@/assets/noam.png" alt="Noam Cohen Maguri" style="width:100%">
            <div class="container2">
              <h3>Noam Cohen Maguri</h3>
              <p class="title">3rd-year B.Sc Information Systems Engineering student</p>
              <p>Ben-Gurion University of the Negev</p>
              <a href="mailto:noamac@post.bgu.ac.il">Contact</a>
            </div>
          </div>
        </div>
      </div>
    
    <div class="extra">
      <h1 class="center more-info">Links to previous exercises</h1>
      <li>Exercise 2:<a href="https://github.com/Web-Development-Environments-2022/assignment2-207777525_318267895">Click here</a></li>
      <li>Exercise 3.1:<a href="https://github.com/Noamcm/Recipe_Website">Click here</a></li>
      <li>Exercise 3.2:<a href="https://github.com/Web-Development-Environments-2022/assignment3_2-207777525_318267895">Click here</a></li>
      <li>Exercise 3.3:<a href="https://github.com/Web-Development-Environments-2022/assignment3-3-318267895_207777525">Click here</a></li>
    </div>   
    <p></p> 
    <div class="extra more-info">
      <h1 class="center">Templates that we Used:</h1>
      <li>About us cards:<a href="https://www.w3schools.com/howto/howto_css_about_page.asp">Link</a></li>
      <li>Icons:<a href="https://www.flaticon.com/">flaticon</a> and<a href="https://www.canva.com/">canva</a></li>
    </div>
  </div>
</template>

    
<script>
    export default {
    }
</script>
    

<style lang="scss">
.center{
  text-align: center;
}
.extra {
  padding: 50px;
  background-color: #594545;
  color: white;
  font-size: 20px;
}

body {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

a {
  margin-left: 7px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  width: 50%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  width: 70%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 70px;
}

.container2 {
  padding: 0 16px;
}

.container2::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}


@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.about-div{
    background-color: #f2dce0;
	  // text-align: center;  
    margin-top:5%;
	  border-radius: 50px;
}

h1{
  font-size: 40px;
  font-family: cursive;
  text-align: center;
}

.our-info{
  color: #594545;
}

.more-info{
  color: #f2dce0;
  margin-bottom: 10px;
}

a{
  color: #c4a8a8;
}
a:hover{
  color: #eeeeee;
}

</style>