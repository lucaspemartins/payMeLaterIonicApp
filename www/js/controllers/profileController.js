angular.module('payMeLaterApp')
    .controller('profileController', ['$scope', '$window', '$ionicModal', '$state', 'profileGetService', 'profileEditService', function ($scope, $window, $ionicModal, $state, profileGetService, profileEditService) {
        $scope.vendor_cpf = JSON.parse($window.localStorage.getItem('vendor_cpf'));
        $scope.spinner = true;
        $scope.user = {
            cpf: '',
            nickname: '',
            user_name: '',
            email: '',
            password: '',
            cellphone: '',
            telephone: ''
        };

        profileGetService.getProfile($scope.vendor_cpf)
            .then(function (success) {
                $scope.user = success.data[0];
                $scope.spinner = false;
            }, function (error) {
                $scope.spinner = false;
                console.log("Error to invoke get service");
            });

        $scope.editProfile = function () {
            profileEditService.editProfile($scope.vendor_cpf, $scope.user)
                .then(function (success) {
                    $window.location.reload();
                }, function (error) {
                    console.log("Error to invoke get service");
                });
        };

        $ionicModal.fromTemplateUrl('profileedit.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show($scope.user);
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
    }]);