import type { gitHubUser } from "../App";
import { StyledSearch } from "../styled-components/styled";
interface Props {
  setUserInput:React.Dispatch<React.SetStateAction<string>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  submit:boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  theme:boolean;
  user: gitHubUser | null | boolean ;
}
const Search: React.FC<Props> =  ({ setUserInput, setSubmit, submit, setTheme, theme, user }) => {
 
  

    return (
     <div>

        <div className="w-[350px] sm:w-[720px]  flex justify-between items-center mt-[144px]">
            <h1  className={theme ? "text-[#f1f1f2] text-[26px] font-[700]"  : "text-[#222731] text-[26px] font-[700]"}>devfinder</h1>

            <section className="w-full flex justify-end items-center gap-2">

                <span className={`${theme ? 'text-white' :'text-[#697C9A]'} font-[700] text-[13px] tracking-[2.5px] mr-[10px] hover:cursor-pointer`}
                 onClick={() => setTheme(!theme)}>{theme? 'LIGHT' : 'DARK'}</span>
                <img src={theme ? '/assets/icon-sun.svg':`/assets/icon-moon.svg`} alt="" onClick={() => setTheme(!theme)}/>

            </section>

        </div>

        <div className="w-[730px] relative  mb-[35px] mt-[24px]"> 
      <StyledSearch onChange={(e) =>  setUserInput(e.target.value)} isDark={theme}>
      </StyledSearch>
      {user ? null : <span className="text-[#F74646] absolute right-[140px] top-[35%]">No results</span>}
      <button className="bg-[#0079FF] w-[106px] h-[50px] absolute 
      top-[50%] transform translate-x-[-2%] translate-y-[-50%] right-[5px]  text-white rounded-[10px] hover:cursor-pointer "
       onClick={() => setSubmit(!submit)} >Search</button>
        </div>

        </div>
    );
};
export default Search;
