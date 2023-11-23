trigger dupEmailPhone on Contact (before insert,before update) {
    Map<String, Contact> emailMap = new Map<String, Contact>();
    Map<String, Contact> phoneMap = new Map<String, Contact>();
    for(Contact contact : trigger.new) {
    if(trigger.isInsert) {
    emailMap.put(contact.Email, contact);
    phoneMap.put(contact.Phone, contact);
    }
    if(trigger.isUpdate) {
    if (trigger.oldMap.get(contact.Id).Email != contact.Email){
    emailMap.put(contact.Email,contact);
    }
    if(trigger.oldMap.get(contact.Id).Phone != contact.Phone){
    phoneMap.put(contact.Phone,contact);
    }
    }
    }
    String errorMessage ='';
    //geting the Contacts whose Email or Phone already exists
    List<Contact> existingContactList = [Select Id, Email, Phone FROM Contact Where Email IN:emailMap.keySet() OR Phone IN:phoneMap.keySet()];
    if(existingContactList.size()> 0){
    for(Contact contactRec : existingContactList){
    if(contactRec.Email!=null){
    if(emailMap.get(contactRec.Email) != null){
    errorMessage='Email ';
    }
    }
    if(contactRec.Phone!=null){
    if(phoneMap.get(contactRec.Phone) != null) {
    errorMessage = errorMessage + (errorMessage != '' ? 'and Phone ' : 'Phone ');
    }
    }
    if(errorMessage!=''){
    trigger.new[0].addError('Your Contact '+errorMessage +' already exists in system.');
    }
    }
    }
}