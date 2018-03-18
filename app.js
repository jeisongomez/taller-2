
var app = angular.module("MyfirstApp",[]);

app.controller("FirstController", function($scope, $http){

		$scope.newFila = {};
		$http.get("http://www.titandesarrollo.com/_api/movimientos/").then(function(response){
				console.log(response);
				$scope.datos = response.data;
			});

		$scope.eliminarfila = function(row){
			if (confirm("¿Seguro que desea eliminar este movimiento?")) {
				$scope.datos.splice(row, 1);
			}};

		$scope.addFila = function(){ alert("primero")
			$http.post("http://www.titandesarrollo.com/_api/movimientos/",{ 
				desc_mov: $scope.newFila.Nombre,
				tipo_mov: $scope.newFila.Tipo,
				valor_mov: $scope.newFila.Valor				
			}).then(function(data){
				console.log(data);
				$scope.datos.push($scope.newFila);
				$scope.newFila = {};
			})
		}
	});


