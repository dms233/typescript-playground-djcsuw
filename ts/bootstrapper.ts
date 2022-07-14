/// <reference path="vendingMachine.ts" />
//tsc automatically find the definitely typed files in the project

var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
