import { LightningElement, api,wire,track } from 'lwc';

import getAccountList from '@salesforce/apex/AccountController.getAccounts';

export default class DraggableList extends LightningElement {

	dragIndex = -1;

	@api title;	
	@track _items = [
		{ name: "Item 1" },
		{ name: "Item 2" },
		{ name: "Item 3" },
		{ name: "Item 4" },
		{ name: "Item 5" }
	];

	@api set items(value) {
		this._items = [];
		value.forEach(element => {
			this._items.push(element);
		});
	}

	get items() {
		return this._items;
	}

	allowDrop(ev) {
		// on dragover I swap the elements
		this.swapElement(ev.target);

		ev.preventDefault();
		ev.stopPropagation();
		ev.dataTransfer.dropEffect = "move";
		ev.target.parentElement.classList.add('dragover');
	}

	dropItem(ev) {
		ev.preventDefault();
		ev.stopPropagation();

		this.swapElement(ev.target);

		ev.dataTransfer.clearData('text/index');
		this.dragIndex = -1;
		ev.target.parentElement.classList.remove('dragover');

	}

	swapElement(el) {		
		var idxSource = this.dragIndex;
		var idxTarget = el.index;

		this.swapArray(idxSource, idxTarget);
		this.toggleDraggableClass();

		this.dragIndex = idxTarget;
		
		this.dispatchEvent(new CustomEvent('listchanged', { /* detail: this.items */ }));
	}
	startDrag(ev) {
		this.dragIndex = ev.target.querySelector('c-draggable-item').index
		ev.dataTransfer.setData('text/index', this.dragIndex);
		ev.dataTransfer.dropEffect = "move";
	}

	swapArray(idx1, idx2) {		
		[this._items[idx1], this._items[idx2]] = [this._items[idx2], this._items[idx1]];
	}

	dragLeave(ev) {
		var el = ev.target.parentElement;
		if (el) {
			el.classList.remove('dragover');
		}
	}

	dragEnd(ev) {
		this.dragIndex = -1;
		this.toggleDraggableClass();
	}

	touchEnd(ev) {
		console.log('Touch ended. Index: ' + ev.target.index);
		this.dragIndex = -1;	
		this.toggleDraggableClass();
		ev.preventDefault();
		ev.stopPropagation();
	}

	touchStart(ev) {	
		console.log('Touch started. Index: ' + ev.target.index);
		this.dragIndex = ev.target.index;
		this.toggleDraggableClass();

		ev.preventDefault();
		ev.stopPropagation();
	}

	touchMove (ev) {		
		var el = this.template.elementFromPoint(ev.touches[0].clientX, ev.touches[0].clientY);
		if (el === ev.target){
			console.log('Touch over the same element' );
			return;
		}
		if (el.nodeName !== 'C-DRAGGABLE-ITEM') {
			console.log('Touch over another element: ' + el.nodeName);
			return;
		}

		console.log('Drag index: ' + this.dragIndex);
		console.log('Touch moving. Index: ' + el.index);		

		this.swapElement(el);

		ev.preventDefault();
		ev.stopPropagation();
	}

	touchCancel(ev) {
		this.dragIndex = -1;
		ev.preventDefault();
		ev.stopPropagation();

		console.log('Touch canceled');
	}

	toggleDraggableClass() {
		var elms = this.template.querySelectorAll('c-draggable-item');
		elms.forEach(el => {
			if (el.index === this.dragIndex) {
				el.parentElement.classList.add('dragover');
			} else {
				el.parentElement.classList.remove('dragover');
			}
		});
	}

    @track accounts;
    @track error;
    selectedItem;

    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            this.Contacts = data;
            this.error = undefined;
            console.log(this.Contacts);
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
    connectedCallback(){
        getAccountList()
		.then(result => {
			this.accounts = result;
			this.error = undefined;
		})
    }
    


        closecard(event)
        {
            console.log('Access key2:'+event.target.accessKey);
            console.log(event.target.id.split('-')[0]);
            var targetval = [];
            
           
            const returnedTarget = Object.assign(targetval, this.Contacts);
            console.log('returnedTarget'+returnedTarget);
            console.log('targetval'+targetval);
            console.log('this.Contacts'+this.Contacts);
            console.log('stringify returnedTarget'+JSON.stringify(returnedTarget));
            console.log('stringify  targetval'+JSON.stringify(targetval));
            console.log('stringify this.Contacts'+JSON.stringify(this.Contacts));
            if(targetval.length>=1){             
                console.log('target.length'+targetval.length);
                targetval.splice(event.target.accessKey,1);
                console.log('after splice'+JSON.stringify(targetval));
                this.Contacts=targetval;
                // this.keyIndex-1;
            }
            

        
        }

}