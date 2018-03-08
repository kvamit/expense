public with sharing class ExpenseController {
    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        List<Expense__c> Expenses = [Select id, Name, Amount__c, Client__c, Date__c, Reimbursed__c, Type__c from Expense__c];
        return Expenses;
    }
    
}
