async function HTMLCards(){
    let res = await fetch("http://localhost:5267/HTMLQuestions/GetAllHTMLQuestions");
    let data = await res.json();
    // console.log(data);
    return data;
}

async function CsharpCards(){
    let res = await fetch("http://localhost:5267/CSharpQuestions/GetAllCSharpQuestions");
    let data = await res.json();
    return data;
}

export { HTMLCards, CsharpCards }