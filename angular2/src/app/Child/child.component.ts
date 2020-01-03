﻿import { Component } from '@angular/core'

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
})

export class Child {

        arrayOfStudents: any[] = [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
            { name: 'indramauryadddddd', age: 27, sex: 'M', dob: '12/20/1992' },
        ];

    getAll(): number {
        return this.arrayOfStudents.length;
    }


    getMale(): number {
        return this.arrayOfStudents.filter(x => x.sex == 'M').length;
    }


    getFemale(): number {
        return this.arrayOfStudents.filter(x => x.sex == 'F').length;
    }

    onChange: string = "all";


    selectedButton(btn: string) {
        this.onChange = btn;
    }
 }
