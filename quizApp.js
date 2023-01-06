import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // storing answers

    correctAnswers = 0 // to show the number of correnct answers
    isSubmitted = false // use to  show the result
    myQuestions=[
        {
            id:"Question1",
            question:"Which of the file is not a  template loop?",
            answers:{
                a:"for each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },

        {
            id:"Question2",
            question:"Which of the following is not  a component of lwc?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },

        {
            id:"Question3",
            question:"Which of the following is not a directives?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }

    ]
// used for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
// for applytin gdynamnic styling to our reslut 
    get isScoreFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers? `slds-text-color_success`:`slds-text-color_error` }`
    }
// change handler get's called on every click on the options
    changeHandler(event){
        console.log("name" , event.target.name)
        console.log("value" , event.target.value)
        
        // const name = event.target.name;
        // const value = event.target.value;

        // instead of this we can write the below code:: 
        const {name, value} = event.target // object destructuring 

       // ["question1"]:"a", and if you change the value it will override the value which is allready there
        this.selected = {...this.selected , [name]:value}
    } 
// forrm submit handler
    submitHandler(event){
        event.preventDefault() 

        let correct = this.myQuestions.filter(item=>this.selected[item.id]  === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("this.CorrectAnsers", this.correctAnswers)
    }
// forrm reset handler
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted= false;
    }
}