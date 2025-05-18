

const Interface = ({ user }: { user: string }) => {
      const cardsData = [
    { title: 'Repos',  value: '8' },
    { title: 'Followers', value: '3938', },
    { title: 'Following',  value: '9',},
  ];
   const firstContactData = [
    {image: "/assets/icon-location.svg", value: 'San Francisco'},
    {image: "/assets/icon-website.svg", value: 'https://github.blog'},
   
   ]
   const secondContactData = [
     {image: "/assets/icon-twitter.svg", value: 'Not Available'},
    {image: "/assets/icon-company.svg", value: '@github'},
   ]
  
   
 return(
    <div className="w-[730px] h-[500px] bg-[#FEFEFE] flex flex-row justify-between align-middle mb-[100px]">
    <img src="/assets/Bitmap.png" alt="icon" className="mt-[48px] ml-[48px] mr-[37px] rounded-[50%] h-[127px]" />
    <section className="flex flex-col justify-start align-middle w-[500px] h-full pr-[20px]">
        <div className="flex  justify-between align-middle mt-[55px] ">
        <h2 className="text-[26px] font-[700] text-[#2B3442]">{user} </h2>
        <p className="mt-[7px] text-[#697C9A] text-[15px]">Joined 25 Jan 2011</p>
        </div>
        <span className="text-[#0079FF] text-[16px] mt-1">@octocat</span>
        <p className="text-[#4B6A9B] w-full mt-[25px] text-[15px] leading-[25px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

        <section className="flex gap-[90px]  justify-center align-middle mt-[32px] bg-[#F6F8FF] rounded-[10px] ">

         {cardsData.map((item, index) => (
            <div key={index} className="flex flex-col h-[85px] mt-[15px]" >
              <span className="text-[#4B6A9B] text-[13px]">{item.title}</span>
              <span className="text-[#2B3442] text-[22px] font-[700]">{item.value}</span>
            </div>
          ))}

        </section>

        <section className="flex justify-between align-middle w-full mt-[37px] mb-[48px]">

        <div className="flex flex-col gap-[19px]">
      {firstContactData.map((item, index) => ( 
        <div key={index} className="flex gap-[16px] ">
    <img src={item.image} alt="icon" className="w-[20px] h-[20px]" /> 
     <span className="text-[#4B6A9B] text-[15px] font-[400] ">{item.value}</span>
      </div> ))}
      </div>

      <div className="flex flex-col gap-[16px]">
     {secondContactData.map((item,  index) => (
        <div key={index} className="flex gap-[16px]  ">
        <img src={item.image} alt="icon" className="w-[20px] h-[20px]"/> 
        <span className="text-[#4B6A9B] text-[15px] font-[400] ">{item.value}</span>
        </div>
     ))}
     </div>
     </section>

        </section>
    </div>
 )
}

export default Interface

