angular.module('wp-angular-starter').run(['$templateCache', function($templateCache) {$templateCache.put('app/home.html','<!--HEADER -->\r\n<ng-include src="\'views/sections/header.html\'"></ng-include>\r\n<!-- SHOWCASE -->\r\n<ng-include src="\'views/sections/showcase.html\'"></ng-include>\r\n<!-- PRICING TABLES -->\r\n<ng-include src="\'views/sections/pricing-tables.html\'"></ng-include>\r\n<!-- FEATURES -->\r\n<ng-include src="\'views/sections/icons-fetures.html\'"></ng-include>\r\n<!-- FOOTER -->\r\n<ng-include src="\'views/sections/footer.html\'"></ng-include>\r\n');
$templateCache.put('app/login.html','\r\n<!-- LOGIN FORM -->\r\n<ng-include src="\'views/sections/login-form.html\'"></ng-include>\r\n\r\n\r\n\r\n<div style=\'text-align:center;\'>\r\n<a ui-sref="front_page" class="btn-primary btn-sm ">Go Home</a>\r\n<a ui-sref="register_page" class="btn-primary btn-sm ">Sign Up</a>\r\n</div>\r\n<!-- FOOTER -->\r\n<ng-include src="\'views/sections/footer.html\'"></ng-include>\r\n');
$templateCache.put('app/register.html','\r\n<!-- REGISTER FORM -->\r\n<ng-include src="\'views/sections/register-form.html\'"></ng-include>\r\n\r\n\r\n<div style=\'text-align:center;\'>\r\n<a ui-sref="front_page" class="btn-primary btn-sm ">Go Home</a>\r\n<a ui-sref="login_page" class="btn-primary btn-sm ">Login</a>\r\n</div>\r\n<!-- FOOTER -->\r\n<ng-include src="\'views/sections/footer.html\'"></ng-include>\r\n');
$templateCache.put('app/sections/footer.html','<div id="contact" class="footer">\r\n    <div class="container">\r\n\r\n      <div class="row">\r\n        <div class="col-sm-12 col-md-2 col-md-offset-3 sp-footer-name">\r\n          <h4>ATOM</h4>\r\n        </div>\r\n        <div class="col-sm-6 col-md-2 sp-footer-menu">\r\n          <ul>\r\n            <li><a href="#">Blog</a></li>\r\n            <li><a href="#">FAQ</a></li>\r\n            <li><a href="#">Terms of use</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class="col-sm-6 col-md-2 sp-footer-menu">\r\n          <ul>\r\n            <li><a href="#">Facebook</a></li>\r\n            <li><a href="#">Twitter</a></li>\r\n            <li><a href="#">Instagram</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n');
$templateCache.put('app/sections/header.html','<header  id="header" >\r\n  <div  class="header_back" backstretch backstretch-images="\'images/bg.jpg\'"></div>\r\n  <div class="sp-overlay sp-overlay-color " ></div>\r\n    <div class="container">\r\n          <div class="row">\r\n            <div class="col-xs-4 sp-logo ">\r\n              <a  href="#/home" title="">\r\n                <img src="images/svg/logo.svg" alt="" />\r\n              </a>\r\n            </div>\r\n            <div class="col-xs-8 sp-menu">\r\n              <ul>\r\n                <li><a ng-click="scrollTo(\'showcase\')" href="">Showcase</a></li>\r\n                <li><a ng-click="scrollTo(\'features\')" href="">Features</a></li>\r\n                <li><a ng-click="scrollTo(\'pricing_table\')" href="">Pricing</a></li>\r\n                <li><a  ng-click="scrollTo(\'contact\')" href="">Contact</a></li>\r\n                <li class="separator"></li>\r\n                <li ><a ui-sref="login_page"><i class="fa fa-sign-in"></i> Login </a></li>\r\n                <li ><a ui-sref="register_page"><i class="fa fa-user-plus"></i> Sign up </a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class="row">\r\n            <div class="col-md-5 col-sm-7 sp-header-texts">\r\n              <h2>Introducing <span>Atom</span>.</h2>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lacus tempus, commodo risus et, dictum lectus.</p>\r\n              <p>\r\n                Test auto deploy\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class="row">\r\n            <div class="col-sm-6 sp-buttons">\r\n              <a href="#">Buy now</a><a href="#">Preview</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        <ng-include src="\'views/sections/subscribe-form.html\'"></ng-include>\r\n\r\n\r\n    </div>\r\n\r\n</header>\r\n');
$templateCache.put('app/sections/icons-fetures.html','<div id="features" class="icon-features">\r\n      <div class="container">\r\n        <div class="row">\r\n          <div class="col-md-8 col-md-offset-2 sp-icon-features-title">\r\n            <h3>What makes Atom so great?</h3>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="col-md-4 sp-icon-features-box">\r\n            <span class="fa fa-upload fa-2x"></span>\r\n            <h4>Lorem ipsum dolor!</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat tincidunt semper.</p>\r\n            <a href="#">Learn more <i class="icon ion-ios-arrow-thin-right"></i></a>\r\n          </div>\r\n          <div class="col-md-4 sp-icon-features-box">\r\n            <span class="fa fa-lock fa-2x"></span>\r\n            <h4>It\'s 100% safe</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus eleifend vel tellus id viverra.</p>\r\n            <a href="#">Learn more <i class="icon ion-ios-arrow-thin-right"></i></a>\r\n          </div>\r\n          <div class="col-md-4 sp-icon-features-box">\r\n            <span class="fa fa-pie-chart fa-2x"></span>\r\n            <h4>It\'s flexible</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus eleifend vel tellus id viverra.</p>\r\n            <a href="#">Learn more </a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n');
$templateCache.put('app/sections/login-form.html','<div class="col-md-6 col-md-offset-3">\r\n    <h2>Login</h2>\r\n    <form name="form" ng-submit="vm.login()" role="form">\r\n        <div class="form-group" ng-class="{ \'has-error\': form.username.$dirty && form.username.$error.required }">\r\n            <label for="username">Username</label>\r\n            <input type="text" name="username" id="username" class="form-control" ng-model="vm.username" required />\r\n            <span ng-show="form.username.$dirty && form.username.$error.required" class="help-block">Username is required</span>\r\n        </div>\r\n        <div class="form-group" ng-class="{ \'has-error\': form.password.$dirty && form.password.$error.required }">\r\n            <label for="password">Password</label>\r\n            <input type="password" name="password" id="password" class="form-control" ng-model="vm.password" required />\r\n            <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is required</span>\r\n        </div>\r\n        <div class="form-actions">\r\n            <button type="submit" ng-disabled="form.$invalid || vm.dataLoading" class="btn btn-primary">Login</button>\r\n            <a href="#/register" class="btn btn-link">Register</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n');
$templateCache.put('app/sections/pricing-tables.html','<div id="pricing_table" class="pricing-table">\r\n  <div class="container">\r\n\r\n    <div class="row">\r\n      <div class="col-md-4 sp-pricing-table-text">\r\n        <h3>Start a free trial today, pick your plan later</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus eleifend vel tellus id viverra.</p>\r\n        <a href="#">Download trial</a>\r\n      </div>\r\n      <div class="col-md-4 sp-pricing-table sp-pricing-table-first">\r\n        <div>\r\n          <span class="sp-pricing-icon icon ion-person"></span>\r\n          <span class="sp-pricing-user">Single User</span>\r\n          <span class="sp-pricing-price">$25</span>\r\n          <span class="sp-pricing-time">per year</span>\r\n          <ul>\r\n            <li>Up to 22 </li>\r\n            <li>Up to 33 </li>\r\n            <li>all time</li>\r\n          </ul>\r\n          <a href="#" class="sp-pricing-button">Choose</a>\r\n        </div>\r\n      </div>\r\n      <div class="col-md-4 sp-pricing-table sp-pricing-table-second">\r\n        <div>\r\n          <span class="sp-pricing-icon "></span>\r\n          <span class="sp-pricing-user">Multipile users</span>\r\n          <span class="sp-pricing-price">$129</span>\r\n          <span class="sp-pricing-time">per month</span>\r\n          <ul>\r\n            <li>All the awesomeness</li>\r\n            <li>All the awesomeness</li>\r\n            <li>All the awesomeness</li>\r\n            <li>All the awesomeness</li>\r\n            <li>All the awesomeness</li>\r\n\r\n          </ul>\r\n          <a href="#" class="sp-pricing-button">Choose</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n');
$templateCache.put('app/sections/register-form.html','<div class="col-md-6 col-md-offset-3">\r\n    <h2>Register</h2>\r\n    <form name="form" ng-submit="submit()" role="form">\r\n        <div class="form-group" ng-class="{ \'has-error\': form.firstName.$dirty && form.firstName.$error.required }">\r\n            <label for="username">First name</label>\r\n            <input type="text" name="firstName" id="firstName" class="form-control" ng-model="vm.user.firstName" required />\r\n            <span ng-show="form.firstName.$dirty && form.firstName.$error.required" class="help-block">First name is required</span>\r\n        </div>\r\n        <div class="form-group" ng-class="{ \'has-error\': form.lastName.$dirty && form.lastName.$error.required }">\r\n            <label for="username">Last name</label>\r\n            <input type="text" name="lastName" id="Text1" class="form-control" ng-model="vm.user.lastName" required />\r\n            <span ng-show="form.lastName.$dirty && form.lastName.$error.required" class="help-block">Last name is required</span>\r\n        </div>\r\n        <div class="form-group" ng-class="{ \'has-error\': form.username.$dirty && form.username.$error.required }">\r\n            <label for="username">Username</label>\r\n            <input type="text" name="username" id="username" class="form-control" ng-model="vm.user.username" required />\r\n            <span ng-show="form.username.$dirty && form.username.$error.required" class="help-block">Username is required</span>\r\n        </div>\r\n        <div class="form-group" ng-class="{ \'has-error\': form.password.$dirty && form.password.$error.required }">\r\n            <label for="password">Password</label>\r\n            <input type="password" name="password" id="password" class="form-control" ng-model="vm.user.password" required />\r\n            <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is required</span>\r\n        </div>\r\n        <div class="form-actions">\r\n            <button type="submit" ng-disabled="form.$invalid || vm.dataLoading" class="btn btn-primary">Register</button>\r\n            <img ng-if="vm.dataLoading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\r\n            <a href="#/login" class="btn btn-link">Cancel</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n');
$templateCache.put('app/sections/showcase.html','<div id="showcase" class="product-showcase">\r\n\r\n  <div class="container">\r\n\r\n      <div class="row">\r\n        <div class="col-md-4 sp-product-showcase-r">\r\n          <h3>Lorem ipsum dolor sit amet</h3>\r\n          <p>Quisque tempus vitae tortor ut luctus. Nullam in lacinia eros. Quisque tempus vitae tortor ut luctus. Nullam in lacinia eros. </p>\r\n\r\n          <a  href="#">Learn More</a>\r\n        </div>\r\n        <div class="col-md-7 col-md-offset-1 sp-product-showcase-r-image">\r\n          <img src="images/bg.jpg" alt="">\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-7 sp-product-showcase-l-image">\r\n          <img src="images/bg.jpg" alt="">\r\n        </div>\r\n        <div class="col-md-4 col-md-offset-1 sp-product-showcase-l">\r\n          <h3>Lorem ipsum dolor sit amet</h3>\r\n          <p>Quisque tempus vitae tortor ut luctus. Nullam in lacinia eros. Quisque tempus vitae tortor ut luctus. Nullam in lacinia eros. </p>\r\n          <a href="#">Join Us</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n');
$templateCache.put('app/sections/subscribe-form.html','<div class="sp-trialform">\r\n  <div class="row">\r\n    <div class="col-sm-12">\r\n      <h3>Subscribe and Stay Tuned.</h3>\r\n      <form id="subForm">\r\n      <div class="row">\r\n        <div class="col-sm-4">\r\n          <input type="text" value="" name="subForm-Fname" id="trial-name" placeholder="First Name">\r\n        </div>\r\n        <div class="col-sm-4">\r\n          <input type="text" value="" name="subForm-Lname" id="trial-name" placeholder="Last Name">\r\n        </div>\r\n        <div class="col-sm-4">\r\n          <div class="gender_goupe">\r\n            <label class="radio-inline">\r\n               <input type="radio" name="gender" value="M" id=male />Male\r\n            </label>\r\n            <label class="radio-inline">\r\n               <input type="radio" name="gender" value="F" id=female />Female\r\n            </label>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class="row">\r\n\r\n        <div class="col-sm-8">\r\n          <input type="text" value="" name="trial-email" id="trial-email" placeholder="E-mail" class="sp-trial-text-two">\r\n\r\n        </div>\r\n        <div class="col-sm-4">\r\n            <input type="submit" value="Subscribe Now!" name="sub-submit">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n');}]);