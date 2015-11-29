'use strict';

angular.module('moduleApp').service('PaginationSrv', function ($http) {
	var getPerson = function (curPage, numberOfPersonPerPage) {



            var personList = {
                "totaldata": person.details.length,
                "details": []
            };


            for(var i=(curPage*numberOfPersonPerPage)-numberOfPersonPerPage;i<(curPage*numberOfPersonPerPage);i++) {
            	if(i > (person.details.length-1)) {
            		break;
            	}	
            	personList.details.push({
                   	name: person.details[i].name, age: person.details[i].age
               	});	
            }

            return personList;
        };
	return {
        getPerson : getPerson
	};
});

//Dummy data for test purpose

var person = {
    "details": [
        {
            "name": "John",
            "age": 20
        },{
            "name": "ram",
            "age": 21
        },{
            "name": "dev",
            "age": 22
        },{
            "name": "kumar",
            "age": 22
        },{
            "name": "raju",
            "age": 23
        },{
            "name": "remo",
            "age": 24
        },{
            "name": "danu",
            "age": 20
        },{
            "name": "pal",
            "age": 20
        },{
            "name": "maari",
            "age": 20
        },{
            "name": "lal",
            "age": 20
        },{
            "name": "peter",
            "age": 20
        },{
            "name": "marcus",
            "age": 20
        },{
            "name": "jane",
            "age": 20
        },{
            "name": "mary",
            "age": 20
        },{
            "name": "tara",
            "age": 20
        },{
            "name": "renu",
            "age": 21
        },{
            "name": "geetha",
            "age": 22
        },{
            "name": "shilpa",
            "age": 22
        },{
            "name": "teru",
            "age": 20
        },{
            "name": "tarun",
            "age": 20
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "jeat",
            "age": 26
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },{
            "name": "gopal",
            "age": 20
        },{
            "name": "kesu",
            "age": 20
        },{
            "name": "jean",
            "age": 20
        },{
            "name": "jo",
            "age": 25
        },
    ]
};