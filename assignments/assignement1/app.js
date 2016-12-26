(function(){
angular.module("LunchCheck",[])
.controller('LunchCheckController',function($scope){
	$scope.message = "";
	$scope.foodList="";
	$scope.msgColor = "green";
	$scope.checkIfTooMuch = function(){
		console.log("checkIfTooMuch function invoked");
		$scope.errorMsg ="Please enter data first!";
		if($scope.foodList!=""){
				var arrayOfItems = $scope.foodList.toString().split(",");
				if (arrayOfItems.length <= 3){
					$scope.message = "Enjoy";
				}
				if(arrayOfItems.length > 3){
					$scope.message = "Too much!";
				}
				$scope.msgColor = "green";
			}//end if-myForm
			else {
				$scope.message = "Please enter data first!";
				$scope.msgColor = "red";
			}
		} // end function
}); //
})();
