import React from "react";
import "./styles.css";

function* asGenerator(func) {
    var res;
    while ((res = func())) yield res;
}

/**
 * @param {string} transcriptText The transcript text
 */
function getGradesAndWeights(transcriptText){
    // this regex considers each line with a course weighting (like 0.50) and grade (like 85)
    const gradesRegex = /((\s(0|1)\.\d{2}\s\d{2,3}))/g;

    // this parses through the entire text and specifically returns the grade weightings and percentages
    // formatted like ("d.dd dd"), where d is a digit
    const gradesArr = Array.from(asGenerator(() => gradesRegex.exec(transcriptText)));

    const gradeWeightsArr = [];
    const gradePercentsArr= [];

    // split up the strings from gradesArr into grade weightings and percentages
    gradesArr.forEach(function(value){
        let gradeStr = value[0].trim(); // gets rid of the whitespace character in front
        gradeWeightsArr.push(parseInt(gradeStr.slice(0, 4)))
        gradePercentsArr.push(parseInt(gradeStr.slice(4,)))
    });

    return [gradeWeightsArr, gradePercentsArr];
}

function convertGradePercentsToGpa(gradePercentsArr){
    const gpaValuesArr = [];
    gradePercentsArr.forEach(function(percent){
        //console.log(percent)
        if (percent >= 90) gpaValuesArr.push(4.0);
        else if (percent >= 85) gpaValuesArr.push(3.9);
        else if (percent >= 80) gpaValuesArr.push(3.7);
        else if (percent >= 77) gpaValuesArr.push(3.3);
        else if (percent >= 73) gpaValuesArr.push(3.0);
        else if (percent >= 70) gpaValuesArr.push(2.7);
        else if (percent >= 67) gpaValuesArr.push(2.3);
        else if (percent >= 63) gpaValuesArr.push(2.0);
        else if (percent >= 60) gpaValuesArr.push(1.7);
        else if (percent >= 57) gpaValuesArr.push(1.3);
        else if (percent >= 53) gpaValuesArr.push(1.0);
        else if (percent >= 50) gpaValuesArr.push(0.7);
        else return gpaValuesArr.push(0.0);
    })
    return gpaValuesArr;
}

function calculateWeights(gradeWeightsArr, gpaValuesArr){
    const weightedGpaValsArr = [];
    let currGpaIndex = 0; // keeps track of the current index of gpaValuesArr 
    gradeWeightsArr.forEach(function(weight){
        let times = 0;
        switch(weight){
            case (0.5):
                times = 2;
                break;
            case (0.75):
                times = 3;
                break;
            case (1.0):
                times = 4;
                break;
            default: // should only occur when weight = 0.25
                times = 1;
        }

        let addCounter = 1;
        while (addCounter <= times){
            weightedGpaValsArr.push(gpaValuesArr[currGpaIndex])
            addCounter++;
        }
        currGpaIndex++;
    })
    return weightedGpaValsArr;
}

function calculateAvg(arr){
    var total = 0;
    var count = 0;

    arr.forEach(function(item, index){
        total += item;
        count++;
    });

    return total/count;
}

function getAverageGPA(textAreaValue){
    if (textAreaValue == ""){
        return "Enter your transcript first!";
    }
    
    const gradeArrs = getGradesAndWeights(textAreaValue);
    const gradeWeightsArr = gradeArrs[0];
    const gradePercentsArr = gradeArrs[1];
    if (gradeWeightsArr.length == 0 || gradePercentsArr.length == 0){
        return "Invalid input";
    }

    const gpaValuesArr = convertGradePercentsToGpa(gradePercentsArr);
    const weightedGpaValuesArr = calculateWeights(gradeWeightsArr, gpaValuesArr);

    const averageGPA = calculateAvg(weightedGpaValuesArr).toFixed(3);
    return averageGPA;
}

class Parser extends React.Component{
    constructor(){
        super();
        this.state ={
            transcriptTextArea: "",
            output: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(event){
        this.setState({transcriptTextArea: event.target.value})
    }

    handleClick(){
        this.setState({output: getAverageGPA(this.state.transcriptTextArea)})
    }
    
    render(){
        return(
            <div>
                <textarea
                    className="text-area-transcript"
                    rows = "10" 
                    placeholder = "Paste your transcript here"
                    onChange={this.handleChange}
                ></textarea>
                <button className="btn-calculate" onClick={this.handleClick}>Calculate</button>
                <hr></hr>
                <p className="text-output">Your cumulative GPA: <strong>{this.state.output}</strong></p>
            </div>
        )
    }
}

export default Parser;