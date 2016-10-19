// tableController

function renumber_table(tableID) {
    jQuery(tableID + " tr").each(function($) {
        count = jQuery(this).parent().children().index(jQuery(this)) + 1;
        jQuery(this).find('.priority').html(count);
    });
}

var uc = new UserCollection();

jQuery(document).ready(function($) {
    
    // Delete click function
    $('#number_two').on('click','.btn-delete', function() {
        
        var object = {};
        $(this).closest('tr').each(function() {
            $('td', this).each(function() {
                
                if($(this).attr('name') != undefined)
                {
                    object[$(this).attr('name')] = $(this).text(); 
                }
                
            });
        });

        uc.deleteUser(object);
        $('#number_one tbody').html(uc.tableResult());
        
        tableID = '#' + $(this).closest('table').attr('id');
        $(this).closest('tr').remove();
        renumber_table(tableID);
        
    });
    
    // Add click function
    $('#number_two').on('click', '.btn-add', function() {
        
        var addNewRow = '<tr><td class="priority">1</td>';
        var test = {};
        
        $('#number_two thead .add_block').each(function() {
            $('th', this).each(function() {
                
                if($('input', this).val() != undefined)
                    if($('input', this).attr('name') === 'active')
                    {
                        var check = $('input', this).prop("checked") ? true : false;
                        test.active = check;
                        addNewRow += '<td name="active">' + check + '</td>';
                    }
                    else 
                    {
                        addNewRow += '<td name="' + $('input', this).attr('name') + '">' + $('input', this).val() + '</td>';
                        test[$('input', this).attr('name')] = $('input', this).val();
                    }
            });
        });
        
        test.register_on = Math.round(new Date().getTime() / 1000);
        addNewRow += '<td name="register_on">' + test.register_on + '</td>';
        addNewRow += '<td><a class="btn btn-edit btn-default">Edit</a></td>';
        addNewRow += '<td><a class="btn btn-delete btn-default">Delete</a></td></tr>';

        var newUser = Object.create(User);
        if(newUser.validate(test))
        {
            uc.add(newUser.create(test));
            $('#number_two tbody').prepend(addNewRow);
            $('#number_one tbody').html(uc.tableResult());
            $('.bg-danger').remove();
        }
        
        renumber_table('#number_two');
        
    });
    
    $('#number_one').on('click', 'thead th', function() {
        var columnName = $(this).attr('name');
        console.log(columnName);
        $('#number_one tbody').html(uc.resultTableSort(columnName));
    });
});
