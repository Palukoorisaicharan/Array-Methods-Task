//a)Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);
}

//b)Get all the countries with population of less than 2 lacs using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);
}

//c)Print the following details name, capital, flag using forEach function.
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

//d)Print the total population of countries using reduce function 
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}

//e)Print the country which use US Dollars as currency.
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
     /* console.log(data) */
    let answer = data.filter((dummy) => (dummy.currencies !== undefined))
    let realanswer = answer.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    console.log(realanswer.length, realanswer[0].currencies)

}
    