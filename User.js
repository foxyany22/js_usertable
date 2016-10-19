// User Model

var User = {
    constructor: function() {
        this.firstName = 'First_Name';
        this.lastName = 'Last_Name';
        this.active = true;
        this.age = 22;
        this.login = 'login123';
        this.password = '1234567890qwe';
        this.role = 1;
        this.register_on = Math.round(new Date().getTime() / 1000);
        return this;
    },
    validate: function(config) {
        
        var errorMessage = '';
        if(config.firstName.length < 3 || config.firstName.length > 15)
        {
             errorMessage += '<p class="bg-danger">The First name field must be between 3 and 15 characters</p>';
        }
        if(config.lastName.length < 3 || config.lastName.length > 25)
        {
             errorMessage += '<p class="bg-danger">The Last name field must be between 3 and 25 characters</p>';
        }
        if(config.age < 18 || config.age > 55)
        {
             errorMessage += '<p class="bg-danger">The age field must contain a value from 18 to 55</p>';
        }
        if(/\W+/.test(config.login)) 
        {
             errorMessage += '<p class="bg-danger">The Login field should contain only letters and numbers</p>';
        }
        if(config.password.length < 8)
        {
             errorMessage += '<p class="bg-danger">The password field must contain at least 8 characters</p>';
        }
        if(config.role > 4)
        {
             errorMessage += '<p class="bg-danger">The role field must contain a value that is not more than 4</p>';
        }
        if(config.register_on == undefined)
        {
             return false;
        }
        
        if(errorMessage != '')
        {
            jQuery('#tab-edit').prepend(errorMessage);
            return false;
        }
        else {
            return true;
        }
        
    },
    create: function(config) {
        this.firstName = config.firstName;
        this.lastName = config.lastName;
        this.active = config.active;
        this.age = config.age;
        this.login = config.login;
        this.password = config.password;
        this.role = config.role;
        this.register_on = config.register_on;
        return this;
    }
};