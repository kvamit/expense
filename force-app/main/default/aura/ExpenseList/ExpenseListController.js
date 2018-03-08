({
    doInit : function(component, event, helper) {
        // Retrieve expenses during component initialization
        helper.loadexpenses(component);
    },
    mysearch : function(component, event, helper) {
        alert('Hello1:- ' +  component.find("myinput").get("v.value"));
        var oreq = new XMLHttpRequest();
        oreq.addEventListener("load",function(){
            console.log(this.responseText);
        });
        alert('Hello2:- ' +  component.find("myinput").get("v.value"));
    },

    handleSelect : function(component, event, helper) {
        var expenses = component.get("v.expenses");
        var expenseList = component.get("v.expenseList");

        //Get the selected option: "Referral", "Social Media", or "All"
        var selected = event.getSource().get("v.value");
    
        var filter = [];
        var k = 0;
        for (var i=0; i<expenseList.length; i++){
            var c = expenseList[i];
            if (selected != "All"){
                if(c.source == selected) {
                    filter[k] = c;
                    k++; 
                }
            }
            else {
                   filter = expenseList;
            }       
        }
        //Set the filtered list of contacts based on the selected option
        component.set("v.expenses", filter);
        helper.updateTotal(component);
    }
})
