// TableSort function : UserCollection class

UserCollection.prototype.resultTableSort = function(arg) {
    
    var sortResult = [];
    var res = [];
    
    this.userCollection.forEach(function(elem, i, arr) {
            sortResult.push(elem[arg]);
    });
    sortResult.sort();
    
    if(this.sortDirection == 1) {
        sortResult.reverse();
        this.sortDirection = 0;
    }
    else {
        this.sortDirection++;
    }
    
    this.userCollection.forEach(function(elem, i, arr) {
        sortResult.forEach(function(sortElem, sortI, sortArr){
            if(elem[arg] == sortElem)
            {
                res[sortI] = elem;
            }
        });
    });
    
    var result = this.tableResult(res);
    return result;
}