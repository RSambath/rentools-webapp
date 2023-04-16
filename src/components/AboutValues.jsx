import React from "react"; 
{/*Our Values */}
const values = [
    {
        name: "EARN MONEY", 
        src: "/Images/CoinIcon.png", 
        description: "This means that you can rent out your various gears to someone who wants to borrow it. By doing so, you can earn money and recoup some of the cost that you spent on it. This is a win-win situation for everyone involved!"
    }, 
    {
        name: "BUSINESSES", 
        src: "/Images/BusinessIcon.png", 
        description: "We can help you reach new audiences who may not have been aware of your products before by increasing your online visibility. Our main objective is to refer customers to you so that you can answer any complex rental questions and guide them through the process of finding the perfect item(s) that meet their needs!", 
    }, 
    {
        name: "REDUCE CONSUMPTION", 
        src: "/Images/EnvironmentIcon.png", 
        description: "It's important for everyone to take action to combat climate change and reduce consumption. Sharing items is not only good for the environment, but it also creates strong bonds and connections between you and anyone else who uses the same item(s)!", 
    }, 
    {
        name: "CONSIDER BEFORE YOU BUY", 
        src: "/Images/BicycleIcon.png", 
        description: "To address climate change and limit consumption, it's critical that everyone takes action. Sharing resources benefits the environment and forges close relationships between you and anybody else who uses the same resource!", 
    }, 
]; 

export default function AboutValues(){
return(
<main>
<div className="mx-auto max-w-7xl py-0 px-10 sm:px-6 sm:py-10 lg:px-8 ">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-center pb-10">
         Our<span className="font-bold text-red-600"> Values</span>
</h2>
<div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
    {values.map((value) => (
    <div key={value.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
        <div className="md:flex-shrink-0">
            <img className="my-1 mx-auto h-24 w-auto" src={value.src} alt=""/>
            </div>
            <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-base font-bold text-red-700 ">{value.name}</h3>
                <p className="mt-5 text-sm text-black ">{value.description}</p>
                </div>
                </div>
        ))}
    </div>
</div>
<div className="flex flex-col items-center mx-auto max-w-2xl lg:max-w-none lg:py-10">
    <h2 className = " mx-auto mt-5 text-4xl max-w-xl items-center ">
                Want to<span className="font-bold text-red-600"> join our teams?</span>
    </h2>
    <p className = " mx-auto mt-5 text-lg max-w-lg items-center ">
                Send in your email to RenTools@gmail.com
    </p>
</div>
</main>
  );
}
    