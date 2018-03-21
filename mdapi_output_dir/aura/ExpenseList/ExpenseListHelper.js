({
    loadexpenses : function(cmp) {
        // Load all expense data
        var action = cmp.get("c.getExpenses");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.expenses", response.getReturnValue());
                cmp.set("v.expenseList", response.getReturnValue());
                this.updateTotal(cmp);
            }

            // Display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if (state === 'SUCCESS'){
                toastEvent.setParams({
                    "title": "Success!",
                    "message": " Your expenses have been loaded successfully."
                });
            }
            else {
                toastEvent.setParams({
                        "title": "Error!",
                        "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
         $A.enqueueAction(action);
    },
     
    updateTotal: function(cmp) {
      var expenses = cmp.get("v.expenses");
      cmp.set("v.totalExpenses", expenses.length);
    }
      

 })
