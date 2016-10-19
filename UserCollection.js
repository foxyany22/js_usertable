// UserCollection controller

var UserCollection = function() {
    this.prototype = Array.prototype;
    this.sortDirection = 0;
    this.userCollection = [];
    
    with(this.prototype)
    {
        forEach = function(callback) {
            for(var i in this)
            {
                callback(this[i], i, this);
            }
        }
        map = function(callback, arg) {

            var arr = [];
            arg = (arg) ? arg : this;
            
            arg.forEach(function(element) {
                arr[arr.length] = callback.call(arg, element);
            });

            return arr;
        }
        
        sort = function(arg) {
            arg = (arg) ? arg : this;
            var n = arg.length;
            for (var i = 0; i < n-1; i++)
            { 
                for (var j = 0; j < n-1-i; j++)
                { 
                    if (arg[j+1] < arg[j])
                    { 
                       var t = arg[j+1]; arg[j+1] = arg[j]; arg[j] = t; 
                    }
                }
            }                     
            return arg;
        }
    }
    
    this.add = function(user) {
        this.userCollection.push(user);
    }
    
    this.testSort = function(arg) {
        if (arg == undefined) arg = 'login';
        var results = [];
        this.userCollection.forEach(function(elem, i, arr) {
            console.log(elem.login);
            results.push(elem[arg]);
        });
        results.sort();
    }
    
    this.testMap = function() {
        var names = ['HTML', 'CSS', 'JavaScript'];
        var l = names.map(function(name) {
            return name.length;
        });
    }
    
    this.tableResult = function(arr) {
        if(arr == undefined) arr = this.userCollection;
        
        var result = '';
        var rolesCollections = ['Administrator', 'Technician', 'Manager', 'Supervisor'];
        
        arr.forEach(function(item, i, arr) {
            result += '<tr>';

            var active = item.active ? 'yes' : 'no';
            result += '<td>' + rolesCollections[item.role-1] + '</td>' 
                    + '<td>' + item.login + '</td>' 
                    + '<td>' + item.lastName + " " + item.firstName + '</td>'
                    + '<td>' + item.age + '</td>'
                    + '<td>' + item.register_on + '</td>'
                    + '<td>' + active + '</td>';
        }); 
        
        result += '</tr>';
        return result;
    }
    
    this.deleteUser = function(user) {
        console.log(user);
        this.userCollection.forEach(function(elem, i, arr) {
            console.log(user, elem);
            if(elem.firstName == user.firstName && elem.lastName == user.lastName && elem.register_on == user.register_on) {
                arr.splice(i, 1);
                return;
            }
        });
    }
};