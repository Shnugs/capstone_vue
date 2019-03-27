<template>
  <div id="app">
    <header id="fh5co-header" role="banner">
      <div class="container">
        <div class="header-inner">
          <h1 class="nav-header"><i class="sl-icon-energy"></i><router-link to="/">MVG: Arena</router-link></h1>
          <nav role="navigation">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/new">New Character</router-link></li>

              <li class="nav-item dropdown">
                <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
                </a>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/login">Login</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item" to="/signup">Sign up</router-link>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/logout">Logout</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <router-view/>

    <!-- TODO - Bruh, fix this here footer up -->
    <footer id="fh5co-footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>About This App</h3>
            <p>This has been a passion project in the works for about 3 years now. I dedicate it to my D&D friends, Geg, Kyle, and Dan.</p>
          </div>
          <div class="col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>My Personal Stuff:</h3>
            <ul class="float">
              <li><a href="https://github.com/centerpush">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/dylan-cross100/">LinkedIn</a></li>
            </ul>
          </div>
        </div> 
        
        
        <div class="col-md-12 fh5co-copyright text-center">
          <p>&copy; 2016 Free HTML5 template. All Rights Reserved. <span>Designed with <i class="icon-heart"></i> by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images by <a href="http://unsplash.com/" target="_blank">Unsplash</a></span></p>  
        </div>
        
      </div>
    </footer>
  </div>
</template>

<style>
body {
  background-image: url("/images/light_sketch.png");
}
#fh5co-header {
  padding-top: 20px;
  padding-bottom: 20px;
}
#fh5co-footer {
  padding-bottom: 0px;
  padding-top: 60px;
}
.nav-header {
  margin-top: 10px;
}
img {
  height:100%;
  max-height:233px;
  margin:auto;
}
hr {
  margin-right: 30px;
  margin-left: 30px;
}
</style>
