app.controller("CricCtrl",function($scope,CricFactory){
    $scope.searchByPid=function(){
        var playerId = $scope.playerId;
        var promise = CricFactory.serverCall(playerId);
        promise.then(function(data){
            $scope.result = data;
        },function(error){
            $scope.error = error;
        })
    }
})