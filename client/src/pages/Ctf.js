import React, {useState, useEffect} from "react";
import DBQuestion from "../components/Dbquestion";
import RecipieQuestion from "../components/RecipieQuestion";
import WebExploitation from "../components/WebExploitation";

const CTF = () => {

    const [questionNumber, setQuestionNumber] = useState(-1);

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl text-green-500 font-bold">CTF</h1>
            <p className="text-green-500">Solve these questions to get the prizes!</p>
            {/* option to choose between 2 different components */}
            <div className="flex items-center justify-center gap-4 mt-4">
                <button onClick={() => setQuestionNumber(0)} className="bg-green-500 text-white p-2 rounded-lg">DB Question</button>
                <button onClick={() => setQuestionNumber(1)} className="bg-green-500 text-white p-2 rounded-lg">Recipie Question</button>
                <button onClick={() => setQuestionNumber(2)} className="bg-green-500 text-white p-2 rounded-lg">Web Exploitation Question</button>
            </div>
            <div>
                {questionNumber === 0 && <DBQuestion />}
                {/* if the question number is 1, then display the RecipieQuestion component */}
                {questionNumber === 1 && <RecipieQuestion />}
                {questionNumber === 2 && <WebExploitation />}
            </div>
        </div>
    )
}

export default CTF;