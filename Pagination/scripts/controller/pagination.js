'use strict';

angular.module('moduleApp').controller('Pagination', function ($scope,PaginationSrv) {
    $scope.curPage = 1;
    var numberOfPersonPerPage = 10;
        $scope.person = PaginationSrv.getPerson($scope.curPage, numberOfPersonPerPage);
        $scope.numberOfPages = Math.ceil($scope.person.totaldata / numberOfPersonPerPage);
        $scope.pages=[];

        if($scope.numberOfPages > 5){
               for( var i = 1; i <= 5; i++ ) {
                        $scope.pages.push({no:i});
               }
            }   

         else{
                for( var i = 1; i <= $scope.numberOfPages; i++ ) {
                        $scope.pages.push({no:i});
               }
            }   


        //Will run when next page is clicked
        
        $scope.nextPage = function () {
            console.log('Moving to next page ');
            var next= ++$scope.curPage;
            $scope.person = PaginationSrv.getPerson($scope.curPage, numberOfPersonPerPage);
            $scope.numberOfPages = Math.ceil($scope.person.totaldata / numberOfPersonPerPage);
            $scope.pages=[];
            var maxNo=" ";
            if( $scope.numberOfPages > 5 ) {
                for( var i = next; i <= next+4; i++ ) {
                    if( i == $scope.numberOfPages ) {
                           maxNo=i;
                     } 
                                        
                    if( i < $scope.numberOfPages && maxNo == " " ) { 
                           $scope.pages.push({no:i});
                     }

                    if( maxNo != " " ) {
                           $scope.pages=[];
                           $scope.temp=[];
                           
                           for(var j=i;j>i-5;j--){
                                 $scope.temp.push(j);
                           }

                           for(var k=$scope.temp.length-1;k>=0;k--){
                                 $scope.pages.push({no:$scope.temp[k]});
                           }

                           break;
                     }
                } 
 
            } 

            else {

                for( var i = 1; i <= $scope.numberOfPages; i++ ) {
                           $scope.pages.push({no:i});
                }
            }   

        }
         
        $scope.curPageNo = function (page) {
 
            $scope.curPage = page;
           if($scope.curPage  != $scope.numberOfPages){ 
             $scope.person = PaginationSrv.getPerson($scope.curPage, numberOfPersonPerPage);
            }
            else {
                $scope.pages=[];
                $scope.temp=[];

                if($scope.numberOfPages > 5) {
                  for(var i = $scope.curPage; i >= $scope.curPage-4; i--){
                                     $scope.temp.push(i);
                               }

                                for( var k = $scope.temp.length-1; k >= 0; k--){
                                    $scope.pages.push({no:$scope.temp[k]});
                                }
                      $scope.person = PaginationSrv.getPerson($scope.curPage, numberOfPersonPerPage);
                }     
                else {
                   for( var i = 1; i <= $scope.numberOfPages; i++ ) {
                        $scope.pages.push({no:i});
                   } 
                   $scope.person = PaginationSrv.getPerson($scope.curPage, numberOfPersonPerPage);
                }
              
            }
        }
         
        //Will run when prev page is clicked
        $scope.prevPage = function () {
            console.log('Moving to prev page ');
            var prev= --$scope.curPage;
            $scope.person = PaginationSrv.getPerson($scope.curPage, numberOfPersonPerPage);
            $scope.numberOfPages = Math.ceil($scope.person.totaldata / numberOfPersonPerPage);
            var maxNo=" ";
            $scope.pages=[];
            if( $scope.numberOfPages > 5 ) {
                for( var i = prev; i <= prev+4; i++ ) {
                    if( i == $scope.numberOfPages ) {
                             maxNo=i;
                      }
                                        
                     if( i < $scope.numberOfPages && maxNo == " " ) { 
                             $scope.pages.push({no:i});
                      }

                     if( maxNo != " " ) {
                             $scope.pages=[];
                             $scope.temp=[];
                             
                             for( var j = i; j > i-5; j-- ) {
                                 $scope.temp.push(j);
                             }

                             for( var k = $scope.temp.length-1; k >= 0; k--){
                                 $scope.pages.push({no:$scope.temp[k]});
                             }

                             break;
                      }
                            

                } 
 
            }
               

             

            else{

                for( var i = 1; i <= $scope.numberOfPages; i++ ) {
                        $scope.pages.push({no:i});
                }
            }   

        }
});