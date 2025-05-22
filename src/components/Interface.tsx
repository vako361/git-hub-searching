import type { gitHubUser } from "../App";

const Interface = ({ user, theme }: { user: gitHubUser | null , theme: boolean }) => {

      const cardsData = [
    { title: 'Repos',  value: user?.public_repos },
    { title: 'Followers', value: user?.followers, },
    { title: 'Following',  value: user?.following,},
  ];

   const firstContactData = [
    {image: "/assets/icon-location.svg", value: user?.location},
     {image: "/assets/icon-website.svg", value: user?.html_url},
   
   ]
   const secondContactData = [
     {image: "/assets/icon-twitter.svg", value: user?.twitter_username},
    {image: "/assets/icon-company.svg", value: user?.company},
   ]
   
  
   
 return(
    <div 
    className={theme ?'w-[350px] sm:w-[730px] rounded-2xl h-[550px] sm:h-[500px] bg-[#1E2A47] flex flex-col sm:flex-row justify-between align-middle mb-[100px] ': 'rounded-2xl w-[350px] sm:w-[730px]  h-[500px] bg-[#FEFEFE] flex flex-row justify-between align-middle mb-[100px] '}>
        <section className="flex flex-col justify-center sm:justify-start align-middle w-[500px] h-full pr-[20px]">
          <div className="flex flex-row">
    <img src={user?.avatar_url} alt="icon" className="mt-[48px] ml-[48px] mr-[37px] rounded-[50%] w-[70px] h-[70px] sm:w-[117px] sm:h-[117px]" />
  
        <div className="flex flex-col sm:w-full sm:flex-row sm:gap-[250px] justify-between align-middle mt-[55px] ">

          <div> 
        <h2 className={`text-[16px] sm:text-[26px] font-[700] ${theme ? 'text-[#fff]' : 'text-[#2B3442]'}`}>{user?.login}</h2>
        <span className="text-[#0079FF] text-[12px] sm:text-[16px] mt-1">@{user?.login}</span>
        </div>
        <p className="mt-[7px] text-[#697C9A] text-[10px] sm:text-[15px]">{user?.created_at}</p>
      
       
        </div>
        </div>
           <div className="sm:ml-[150px]">
        <p className="text-[#4B6A9B] w-full mt-[25px] text-[12px] ml-[10%] sm:text-[15px] sm:ml-[20%] leading-[25px]">{user?.bio ? user.bio : 'This profile does not have bio'}</p>
   
        <section className={`flex gap-[30px] ml-[10%] sm:gap-[90px] w-[280px] h-[85px] sm:w-[499px] justify-center align-middle mt-[32px] bg-${theme ? '[#ffffff20F]' : '[#F6F8FF]'} rounded-[10px]`}>

         {cardsData.map((item, index) => (
            <div key={index} className="flex flex-col h-[85px] mt-[15px]" >
              <span className={` text-[#4B6A9B] text-[11px] sm:text-[16px] font-[400]`}>{item.title}</span>
              <span className={`${theme ? 'text-white' : 'text-[#2B3442]'} text-[11px] sm:text-[16px]  font-[700]`}>{item.value}</span>
            </div>
          ))}

        </section>

        <section className="flex flex-col sm:flex-row justify-between align-middle w-full mt-[37px] mb-[48px]">

        <div className="flex flex-col gap-[19px] ml-[10%]">
      {firstContactData.map((item, index) => ( 
        <div key={index} className="flex gap-[16px] ">
    <img src={item.image} alt="icon" className="w-[20px] h-[20px]" /> 
          {item.value ? <span className="text-[#4B6A9B] text-[15px] font-[400] ">{item.value}</span> : <span className="text-[#4B6A9B] text-[15px] font-[400] ">No information</span>}
      </div> ))}
      </div>

      <div className="flex flex-col gap-[16px] ml-[10%] mt-[15px] sm:mt-0 w-full">
     {secondContactData.map((item,  index) => (
        <div key={index} className="flex gap-[16px]  ">
        <img src={item.image} alt="icon" className="w-[20px] h-[20px]"/> 
       {item.value ? <span className="text-[#4B6A9B] text-[15px] font-[400] sm:min-w-[100px]">{item.value}</span> : <span className="text-[#4B6A9B] text-[15px] font-[400] ">No information</span>}
        </div>
     ))}
     </div>
     </section>
</div>
        </section>
    </div>
 )
}

export default Interface

