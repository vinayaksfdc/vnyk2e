import { LightningElement, track } from 'lwc';

export default class LwcMultipleinputs extends LightningElement {
     @track name;
    handleClick(event)
    {
        console.log(event.target.label);
        var inp=this.template.querySelector("lightning-input");
        this.name=inp.value;
        console.log(inp.value);
    }
}