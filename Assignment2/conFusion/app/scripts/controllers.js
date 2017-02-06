
'use strict';

  angular.module('confusionApp').controller('MenuController', ['$scope','menuFactory',function($scope, menuFactory) {
            $scope.tab = 1;
        
             $scope.filtText = '';

            $scope.showDetails = false;
            
           $scope.dishes= menuFactory.getDishes();
      
            $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
};
            
               $scope.select = function(setTab) {
               $scope.tab = setTab;
                if (setTab === 2){
                   $scope.filtText = "appetizer";}
                else if (setTab === 3){
                    $scope.filtText = "mains";}
                else if (setTab === 4){
                  $scope.filtText = "dessert";}
                else{
                   $scope.filtText = "";}
            };
            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
     
        }])
        
        .controller('DishDetailController',['$scope','$stateParams','menuFactory', function($scope, $stateParams, menuFactory) {
            
            var dish =menuFactory.getDish(parseInt($stateParams.id,10));
            
            $scope.dish= dish;
            
        }])
        
        
        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.comment = {name:"", rating:5, comments:""};   
       
      
            $scope.submitComment = function () {
                 if(!$scope.commentForm.$pristine && $scope.commentForm.name.$error.required &&  $scope.commentForm.comments.$error.required){
       console.log('incorrect form');
                 }else{
                //Step 2: This is how you record the date
              $scope.date = new Date().toISOString();
                
                // Step 3: Push your comment into the dish's comment array
                 $scope.dish.comments.push({                rating:$scope.comment.rating,
                    comment:$scope.comment.comments, author:$scope.comment.name,
                    date:$scope.date });
                
                //Step 4: reset your form to pristine
               
                $scope.commentForm.$setPristine();
                
                //Step 5: reset your JavaScript object that holds your comment
                
                  $scope.comment = {};   
       
           
       }
            }; 
       
        }])

        
        //ContactController and FeedbackController
           .controller('ContactController', ['$scope', function($scope) {

                $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                agree:false, email:"" };
               
               var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                 $scope.channels = channels;
                 $scope.invalidChannelSelection = false;
        }])

      .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
          console.log($scope.feedback);
                if($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) { $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else{
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }]);
