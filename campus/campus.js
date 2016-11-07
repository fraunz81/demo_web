"use strict";


function Person(fname, lname)
{
	//Konstruktoraufruf erzwingen
	if (!(this instanceof(Person)))
	 return new Person(fname, lname);

	var firstName = fname;
	var lastName = lname;

	this.setFirstName = function(fn) { firstName = fn; };
	this.getFirstName = function() { return firstName; };

	this.setLastName = function(ln) { lastName = ln; };
	this.getLastName = function() { return lastName; };

	this.toString = function() { return this.getFirstName() + " " + this.getLastName(); };
}

/*
Person.prototype.toString = function()
{
	return this.getFirstName() + " " + this.getLastName();
};
*/


function Faculty(fname, lname)
{
  if (!(this instanceof(Faculty)))
    return new Faculty(fname, lname);
  
  this.setFirstName(fname);
  this.setLastName(lname);
}

// Basisklasse für Faculty setzen
Faculty.prototype = new Person();


var nam = Person("Franz", "Habison");
var nam2 = Faculty("Hugo", "Porto");

//console.log(nam);
alert(nam);
alert(nam2);
//console.log(nam2);
