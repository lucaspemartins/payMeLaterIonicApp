angular.module('payMeLaterApp')
    .controller('reportsController', ['$scope', '$window', '$ionicPopup', 'reportsService',
        function ($scope, $window, $ionicPopup, reportsService) {
            $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
            Chart.defaults.global.responsive = true;

            reportsService.getSoldProducts($scope.vendor_cpf)
                .then(function (success) {
                    $scope.reports = success.data;
                    $scope.labels = [];
                    $scope.data = [];

                    var reportLength = $scope.reports.length;
                    for (var i = 0; i < reportLength; i++) {
                        $scope.labels.push($scope.reports[i].product_name);
                        $scope.data.push($scope.reports[i].total_sold);
                    }
                }, function (error) {
                    $scope.showAlert(error + "\nCould not retrieve the report data!");
                });

            $scope.showAlert = function (message) {
                $ionicPopup.alert({
                    title: 'Reports',
                    content: message
                }).then(function (res) {
                    console.log(message);
                    $window.location.reload();
                });
            };
        }])