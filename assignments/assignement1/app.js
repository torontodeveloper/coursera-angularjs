angular.module("LunchCheck",[])
.controller('LunchCheckController',function($scope){
	$scope.message = "";
	$scope.checkIfTooMuch = function(){
		console.log("checkIfTooMuch function invoked");
		$scope.errorMsg ="Please enter data first!";
			if(this.myForm.$dirty){
				var arrayOfItems = $scope.foodList.toString().split(",");
				if (arrayOfItems.length <= 3){
					$scope.message = "Enjoy";
				}
				if(arrayOfItems.length > 3){
					$scope.message = "Too much!";
				}
			}//end if-myForm
			else {
				$scope.message = "Please enter data first!";
			}
		} // end function
}); //