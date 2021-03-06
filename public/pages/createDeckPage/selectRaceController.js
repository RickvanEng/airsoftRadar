(function () {

    'use strict';

    angular
        .module('app')
        .controller('selectRaceController', selectRaceController);

    selectRaceController.$inject = ['DBConnectionService', '$scope', 'newDeckPageService', 'loginService', '$location'];

    function selectRaceController(DB, $scope, newDeckService, logService, $location) {

        var vm = this;

        vm.races;

        var selectedRace;

        vm.nameError = '';
        vm.raceError = '';

        vm.lores;
        vm.loreContent;
        vm.loreTitle;

        vm.raceAbility1;
        vm.raceAbility2;
        vm.raceAbility3;

        // init();
        // var init = function() {
        //     newDeckService.resetDeck();
        // }



        newDeckService.requestRaces().then(function (data) {
            vm.races = data;
        });

        newDeckService.requestLores().then(function (data) {
            vm.lores = data[0].lores;
        });

        vm.setName = function () {
            console.log('yes')
            newDeckService.newDeck.deckName = vm.deckName;
        }

        vm.checkAndNavigate = function () {
            if (newDeckService.newDeck.deckName !== '') {
                if (newDeckService.newDeck.race !== '') {
                    $location.path('/createDeck/selectElement');
                }
            } else {
                vm.nameError = 'please select a name for your deck and select a race';
            }



        }




        vm.selectRace = function (race) {

            newDeckService.newDeck.race = race._id;
            newDeckService.newDeck.deckOwner = logService.loggedPlayer;

            newDeckService.deckBuilder = true;



            for (var i = 0; i < vm.lores.length; i++) {
                if (vm.lores[i].race === race.race) {
                    vm.loreContent = vm.lores[i].lore;
                    vm.loreTitle = vm.lores[i].race;
                }
            }

            for (var i = 0; i < vm.races.length; i++) {
                if (vm.races[i].race === race.race) {
                    vm.raceAbility1 = vm.races[i].abilities.ability1;
                    vm.raceAbility2 = vm.races[i].abilities.ability2;
                    vm.raceAbility3 = vm.races[i].abilities.ability3;

                }
            }
        };

        // $scope.races;

        // $scope.lores;
        // $scope.loreContent;
        // $scope.loreTitle;

        // $scope.raceAbility1;
        // $scope.raceAbility2;
        // $scope.raceAbility3;

        // DB.requestRaces().then(function (data) {
        //     $scope.races = data;
        // });

        // DB.requestLores().then(function (data) {
        //     $scope.lores = data[0].lores;
        //     console.log($scope.lores);
        // });

        // $scope.selectRace = function(race) {
        //     //console.log('selected race = ' + race);
        //     for (var i = 0; i <  $scope.lores.length; i++) {
        //         if ($scope.lores[i].race === race.race) {
        //             $scope.loreContent = $scope.lores[i].lore;
        //             $scope.loreTitle = $scope.lores[i].race;
        //             selectedRace = race;
        //         }
        //     }

        //     for (var i = 0; i <  $scope.races.length; i++) {
        //         if ($scope.races[i].race === race.race) {
        //             $scope.raceAbility1 = $scope.races[i].abilities.ability1;
        //             $scope.raceAbility2 = $scope.races[i].abilities.ability2;
        //             $scope.raceAbility3 = $scope.races[i].abilities.ability3;

        //         }
        //     }
        // };

        // //Dit moet naar de service. Daar word het deck gebouwd en dan uiteindelijk verstuurd naar de server. Ook makkelijker om te laden in de deckList aan het eind.
        // $scope.startDeckBuild = function() {
        //     //console.log('deck build started');
        //     //socket.emit('DeckBuilder-step1', selectedRace);
        //     DB.setNewDeck ({'atri': 'race', 'value': selectedRace.race});
        // };

        // $scope.hoverIn = function(){
        //     this.hoverEdit = true;
        // };

        // $scope.hoverOut = function(){
        //     this.hoverEdit = false;
        // };
    }
}());