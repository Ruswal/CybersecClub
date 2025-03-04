import React from "react";

const DBQuestion = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl text-green-500 font-bold">DB Question</h1>
            <p className="text-green-500">Solve this question to get the prize!</p>
            <div className="flex items-center justify-center gap-4 mt-4">
                <button className="bg-green-500 text-white p-2 rounded-lg">Question</button>
                <button className="bg-green-500 text-white p-2 rounded-lg">Submit</button>
            </div>
        </div>
    )
}

export default DBQuestion;