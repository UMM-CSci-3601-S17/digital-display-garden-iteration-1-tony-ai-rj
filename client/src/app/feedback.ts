/**
 * Created by holma198 on 3/6/17.
 */

// if having issues running this push, click on terminal and type in these commands
// $ npm install @angular/forms --save
// and the dependencies required
// more at https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol


export interface Feedback {
    cultivar: string;
    comment: String[];
    like: number;
    dislike: number;
}